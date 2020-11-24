var homePage = require('../../pageobjects/herokuapp/homePage')
var brokenImagesPage = require('../../pageobjects/herokuapp/brokenImagesPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Broken Images', () => {
    it('Open home page', () => {
        browser.url(herokuapp)
        homePage.brokenImages.click()
    })

    it('Images', () => {
        expect(brokenImagesPage.brokenImage).to.exist
        expect(brokenImagesPage.image).to.exist
    })
})