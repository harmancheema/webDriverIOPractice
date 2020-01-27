class horizontalSliderPage {
    get header() {
        return $('//h3[contains(text(),"Horizontal Slider")]')
    }

    get subheader() {
        return $('//h4[contains(text(),"Set the focus")]')
    }

    get slider() {
        return $('//input[@type="range"]')
    }

    get sliderValue() {
        return $('//span[@id="range"]')
    }
}

module.exports = new horizontalSliderPage()