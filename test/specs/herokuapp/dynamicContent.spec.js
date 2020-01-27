var homePage = require('../../pages/herokuapp/homePage')
var dynamicContentPage = require('../../pages/herokuapp/dynamicContentPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Dynamic Content', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.dynamicContent.click()
    })

    it('Header', () => {
        dynamicContentPage.header.waitForDisplayed(5000, false, "Element not displayed even after 5 seconds")
        expect(dynamicContentPage.header).to.exist
    })

    it('Image 1', () => {
        expect(dynamicContentPage.image1).to.exist
    })

    it('Text 1', () => {
        expect(dynamicContentPage.text1).to.exist
    })

    it('Image 2', () => {
        expect(dynamicContentPage.image2).to.exist
    })

    it('Text 2', () => {
        expect(dynamicContentPage.text2).to.exist
    })

    it('All Images', () => {
        var totalImagesBefore = dynamicContentPage.images.length
        console.log("Total Images Before: " + totalImagesBefore)
        expect(totalImagesBefore).to.eq(3)

        dynamicContentPage.changeContent.click()
        
        var totalImagesAfter = dynamicContentPage.images.length
        console.log("Total Images Before: " + totalImagesAfter)
        expect(totalImagesAfter).to.eq(3)
    })

    it('All Texts', () => {
        var totalTextLinesBefore = dynamicContentPage.contents.length
        console.log("Total Text Lines Before: " + totalTextLinesBefore)
        expect(totalTextLinesBefore).to.eq(3)

        dynamicContentPage.changeContent.click()
        
        var totalTextLinesAfter = dynamicContentPage.images.length
        console.log("Total Text Lines After: " + totalTextLinesAfter)
        expect(totalTextLinesAfter).to.eq(3)
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})