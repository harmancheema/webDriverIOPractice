var homePage = require('../../pages/herokuapp/homePage')
var entryAdPage = require('../../pages/herokuapp/entryAdPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Entry Ad', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.entryAd.click()
        
        entryAdPage.modalTitle.waitForDisplayed(5000, false, "Modal not opened even after 5 seconds")
        entryAdPage.closeModal.click()
        entryAdPage.header.waitForDisplayed(5000, false, "Element not displayed even after 5 seconds")
    })

    it('Header', () => {    
        expect(entryAdPage.header).to.exist
    })

    it('Text 1', () => {
        expect(entryAdPage.text1).to.exist
    })

    it('Text 2', () => {
        expect(entryAdPage.text2).to.exist
    })

    it('Open Modal', () => {
        browser.refresh()
        entryAdPage.openModal.click()
        browser.pause(2000)
        entryAdPage.modalTitle.waitForDisplayed(10000, false, "Modal not opened even after 10 seconds")
        expect(entryAdPage.modalTitle).to.exist
        expect(entryAdPage.modalBody).to.exist
        expect(entryAdPage.closeModal).to.exist
    })

    it('Close Modal', () => {
        entryAdPage.closeModal.click()
        browser.pause(2000)
        entryAdPage.openModal.waitForDisplayed(10000, false, "Modal not closed even after 10 seconds")
        expect(entryAdPage.openModal).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})