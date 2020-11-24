var abtestPage = require('../../pageobjects/herokuapp/abtestPage')
var homePage = require('../../pageobjects/herokuapp/homePage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('AB Test', () => {
    it('Open home page', () => {
        browser.url(herokuapp)
        homePage.abTest.click()
    })

    // Make sure there is no AB Test
    it('No AB Test', () => {
        expect(abtestPage.noabTest).to.exist
    })

    it('Detail', () => {
        expect(abtestPage.detail).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})