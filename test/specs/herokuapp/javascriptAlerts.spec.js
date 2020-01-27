var homePage = require('../../pages/herokuapp/homePage')
var javascriptAlertsPage = require('../../pages/herokuapp/javascriptAlertsPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Javascript Alerts', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.javascriptAlerts.click()
    })

    it('Header', () => {    
        expect(javascriptAlertsPage.header).to.exist
    })

    it('Subheading', () => {
        expect(javascriptAlertsPage.subheader).to.exist
    })

    it('JS Alert', () => {
        expect(javascriptAlertsPage.jsAlertButton).to.exist
        javascriptAlertsPage.jsAlertButton.click()
        browser.acceptAlert()
        javascriptAlertsPage.jsAlertSuccess.waitForDisplayed(5000, false, "JS Alert not accepted")
    })

    it('JS Confirm Cancel', () => {
        expect(javascriptAlertsPage.jsConfirmButton).to.exist
        javascriptAlertsPage.jsConfirmButton.click()
        browser.dismissAlert()
        javascriptAlertsPage.jsConfirmCancel.waitForDisplayed(5000, false, "JS Confirm not cancelled")
    })

    it('JS Confirm Accept', () => {
        expect(javascriptAlertsPage.jsConfirmButton).to.exist
        javascriptAlertsPage.jsConfirmButton.click()
        browser.acceptAlert()
        javascriptAlertsPage.jsConfirmSuccess.waitForDisplayed(5000, false, "JS Confirm not accepted")
    })

    it('JS Prompt Cancel', () => {
        expect(javascriptAlertsPage.jsPromptButton).to.exist
        javascriptAlertsPage.jsPromptButton.click()
        browser.dismissAlert()
        javascriptAlertsPage.jsPromptCancel.waitForDisplayed(5000, false, "JS Prompt not cancelled")
    })

    it('JS Prompt Success', () => {
        expect(javascriptAlertsPage.jsPromptButton).to.exist
        javascriptAlertsPage.jsPromptButton.click()
        browser.sendAlertText("test")
        browser.acceptAlert()
        javascriptAlertsPage.jsPromptSuccess.waitForDisplayed(5000, false, "JS Prompt not accepted")
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})