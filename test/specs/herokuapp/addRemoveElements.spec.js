var homePage = require('../../pageobjects/herokuapp/homePage')
var addRemoveElementsPage = require('../../pageobjects/herokuapp/addRemoveElementsPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Add/Remove Elements Test', () => {
    it('Open home page', () => {
        browser.url(herokuapp)
        homePage.addRemoveElements.click()
    })

    it('Header', () => {
        expect(addRemoveElementsPage.headerOfPage).to.exist
    })

    it('Add Element', () => {
        expect(addRemoveElementsPage.addElement).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })

    it('Adding an Element', () => {
        addRemoveElementsPage.addElement.click()
        addRemoveElementsPage.deleteElement.waitForExist(3000, false, "Element still not present after 30 seconds")
        expect(addRemoveElementsPage.deleteElement).to.exist
    })

    it('Delete an Element', () => {
        addRemoveElementsPage.deleteElement.click()
        addRemoveElementsPage.deleteElement.waitForExist(3000, true, "Element still present after 30 seconds")
    })
})