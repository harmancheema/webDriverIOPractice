var abtestPage = require('../../pages/herokuapp/abtestPage')
var homePage = require('../../pages/herokuapp/homePage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('AB Tests', () => {
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