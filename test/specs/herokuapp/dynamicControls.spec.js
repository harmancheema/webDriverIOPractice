var homePage = require('../../pages/herokuapp/homePage')
var dynamicControlsPage = require('../../pages/herokuapp/dynamicControlsPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Dynamic Controls', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.dynamicControls.click()
    })

    it('Header', () => {
        dynamicControlsPage.header.waitForDisplayed(5000, false, "Element not displayed even after 5 seconds")
        expect(dynamicControlsPage.header).to.exist
    })

    it('Text', () => {
        expect(dynamicControlsPage.text).to.exist
    })

    it('Checbox', () => {
        expect(dynamicControlsPage.checkbox).to.exist
    })

    it('Remove Checkbox', () => {
        expect(dynamicControlsPage.removeButton).to.exist
        
        dynamicControlsPage.removeButton.click()
        dynamicControlsPage.addButton.waitForDisplayed(30000, false, "Checkbox still displayed")
    })

    it('Add Checbox', () => {
        expect(dynamicControlsPage.addButton).to.exist

        dynamicControlsPage.addButton.click()
        dynamicControlsPage.removeButton.waitForDisplayed(30000, false, "Checkbox still not displayed")
    })

    it('Enable', () => {
        expect(dynamicControlsPage.enableDisable).to.exist
        expect(dynamicControlsPage.enableButton).to.exist
        
        dynamicControlsPage.enableButton.click()
        dynamicControlsPage.disableButton.waitForDisplayed(30000, false, "Disable Button still not displayed")
    })

    it('Disable', () => {
        expect(dynamicControlsPage.enableDisable).to.exist
        expect(dynamicControlsPage.disableButton).to.exist
        
        dynamicControlsPage.disableButton.click()
        dynamicControlsPage.enableButton.waitForDisplayed(30000, false, "Enable Button still not displayed")
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})