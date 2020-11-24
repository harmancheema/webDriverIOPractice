var homePage = require('../../pageobjects/herokuapp/homePage')
var dynamicLoadingPage = require('../../pageobjects/herokuapp/dynamicLoadingPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Dynamic Loading', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.dynamicLoading.click()
    })

    it('Header', () => {
        dynamicLoadingPage.header.waitForDisplayed(5000, false, "Element not displayed even after 5 seconds")
        expect(dynamicLoadingPage.header).to.exist
    })

    it('Text 1', () => {
        expect(dynamicLoadingPage.text1).to.exist
    })

    it('Text 2', () => {
        expect(dynamicLoadingPage.text2).to.exist
    })

    it('Example 1', () => {
        dynamicLoadingPage.example1.click()
        expect(dynamicLoadingPage.textExample1).to.exist

        dynamicLoadingPage.startButton.click()
        dynamicLoadingPage.helloWorld.waitForDisplayed(30000, false, "Hello World still not displayed")

        browser.back()
        expect(dynamicLoadingPage.text2).to.exist
    })

    it('Example 2', () => {
        dynamicLoadingPage.example2.click()
        expect(dynamicLoadingPage.textExample2).to.exist

        dynamicLoadingPage.startButton.click()
        dynamicLoadingPage.helloWorld.waitForDisplayed(30000, false, "Hello World still not displayed")
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})