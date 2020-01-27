var homePage = require('../../pages/herokuapp/homePage')
var horizontalSliderPage = require('../../pages/herokuapp/horizontalSliderPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Horizontal Slider', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.horizontalSlider.click()
    })

    it('Header', () => {    
        expect(horizontalSliderPage.header).to.exist
    })

    it('Subheader', () => {
        expect(horizontalSliderPage.subheader).to.exist
    })

    it('Slider', () => {
        expect(horizontalSliderPage.slider).to.exist
    })

    it('Slider Value', () => {
        expect(horizontalSliderPage.sliderValue).to.exist
    })

    it('Change slider value', () => {
        horizontalSliderPage.slider.click()
        for (var i=0; i<=10; i++) {
            horizontalSliderPage.slider.keys(['\uE014'])
            browser.pause(200)
            console.log("Value is: " + horizontalSliderPage.sliderValue.getText())
        }
        expect(horizontalSliderPage.sliderValue.getText()).to.eq("5")

        for (var i=0; i<=10; i++) {
            horizontalSliderPage.slider.keys(['\uE012'])
            browser.pause(200)
            console.log("Value is: " + horizontalSliderPage.sliderValue.getText())
        }
        expect(horizontalSliderPage.sliderValue.getText()).to.eq("0")
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})