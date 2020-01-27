var homePage = require('../../pages/herokuapp/homePage')
var disappearingElementsPage = require('../../pages/herokuapp/disappearingElementsPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Disappearing Elements', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.disappearingElements.click()
    })

    it('Header', () => {
        expect(disappearingElementsPage.header).to.exist
    })

    it('Text', () => {
        expect(disappearingElementsPage.text).to.exist
        console.log("***FULL TEXT*** " + "\n" + disappearingElementsPage.text.getText())
    })

    it('Home', () => {
        expect(disappearingElementsPage.home).to.exist
        disappearingElementsPage.home.click()
        expect(homePage.abTest).to.exist
        browser.back()
        expect(disappearingElementsPage.home).to.exist
    })

    it('About', () => {
        expect(disappearingElementsPage.about).to.exist
        disappearingElementsPage.about.click()
        expect(disappearingElementsPage.notFound).to.exist
        browser.back()
        expect(disappearingElementsPage.about).to.exist
    })

    it('Contact Us', () =>{
        expect(disappearingElementsPage.contactUs).to.exist
        disappearingElementsPage.contactUs.click()
        expect(disappearingElementsPage.notFound).to.exist
        browser.back()
        expect(disappearingElementsPage.contactUs).to.exist
    })

    it('Portfolio', () =>{
        expect(disappearingElementsPage.portfolio).to.exist
        disappearingElementsPage.portfolio.click()
        expect(disappearingElementsPage.notFound).to.exist
        browser.back()
        expect(disappearingElementsPage.portfolio).to.exist
    })

    it('Gallery', () =>{
        expect(disappearingElementsPage.gallery).to.exist
        disappearingElementsPage.gallery.click()
        expect(disappearingElementsPage.notFound).to.exist
        browser.back()
        expect(disappearingElementsPage.gallery).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})