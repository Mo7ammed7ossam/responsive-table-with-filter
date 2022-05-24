// expand filter button

const moreFiltersContainer = document.querySelector(".moreFiltersContainer");
const toggleFiltersButton = document.querySelector(
  ".toggle-moreFiltersContainer"
);
const toggleFiltersIconPaths = document.querySelector(
  ".toggle-moreFiltersContainer"
);

toggleFiltersButton.addEventListener("click", () => {
  toggleFiltersButton.classList.toggle("moreFiltersOpendButton");
  moreFiltersContainer.classList.toggle("expanded");
});

///-----------------------------------------------------///

// handle header buttons [ next and previous ]

const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
prevButton.disabled = true;
prevButton.classList.add("endOfButtons");

const filterButtons = document.getElementsByClassName("btns-filters");

function activeBtn(btn) {
  btn.disabled = false;
  btn.classList.remove("endOfButtons");
}

function disapleBtn(btn) {
  btn.disabled = true;
  btn.classList.add("endOfButtons");
}

function handeleBtnArrows(value) {
  if (value == 3) {
    disapleBtn(nextButton);
    activeBtn(prevButton);
  } else if (value == 0) {
    disapleBtn(prevButton);
    activeBtn(nextButton);
  } else {
    activeBtn(prevButton);
    activeBtn(nextButton);
  }
}

// handle move buttons
function nextFilter() {
  for (i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i].classList.contains("active")) {
      filterButtons[i].classList.remove("active");

      next = ++i;
      handeleBtnArrows(next);
      filterButtons[next].classList.add("active");

    }
  }
}

function prevFilter() {
  for (i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i].classList.contains("active")) {
      filterButtons[i].classList.remove("active");

      prev = --i;
      handeleBtnArrows([prev]);
      filterButtons[[prev]].classList.add("active");
    }
  }
}

// handle button clicked
for (let i = 0; i < filterButtons.length; i++) {
  let clickBtn = filterButtons[i];

  clickBtn.addEventListener("click", () => {
    handeleBtnArrows(i);

    for (let i = 0; i < filterButtons.length; i++) {
      if (filterButtons[i].classList.contains("active")) {
        filterButtons[i].classList.remove("active");
      }
    }

    clickBtn.classList.add("active");
  });
}
