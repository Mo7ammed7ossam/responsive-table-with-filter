function defSlider(id, lower, upper,  startValue, endValue){
    let slider = document.getElementById(id);
    let valuesSlider = [
        document.getElementById(lower),
        document.getElementById(upper),
    ];
    noUiSlider.create(slider, {
        start: [startValue, endValue],
        connect: true,
        behaviour: "drag",
        step: 1,
        range: {
            min: startValue,
            max: endValue
        },
        format: {
            from: function (value) {
                return parseInt(value);
            },
            to: function (value) {
                return parseInt(value);
            }
        }
    });
    slider.noUiSlider.on("update", function (values, handle) {
        valuesSlider[handle].innerHTML = values[handle];
    });
}

defSlider('slider1', 'sliderOneLower', 'sliderOneUpper',0, 100);
defSlider('slider2', 'sliderTwoLower', 'sliderTwoUpper',0, 100);
defSlider('slider3', 'sliderThreeLower', 'sliderThreeUpper',0, 100);
defSlider('slider4', 'sliderFourLower', 'sliderFourUpper',0, 100);
defSlider('slider5', 'sliderFiveLower', 'sliderFiveUpper',0, 100);


