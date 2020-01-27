var homePage = require('../../pages/herokuapp/homePage')
var jqueryuiMenuPage = require('../../pages/herokuapp/jqueryuiMenuPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('JQuery UI Menu', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.jqueryUIMenu.click()
    })

    it('Header', () => {    
        expect(jqueryuiMenuPage.header).to.exist
    })

    it('Subheading', () => {
        expect(jqueryuiMenuPage.subheader).to.exist
    })

    it('Disabled menu', () => {
        expect(jqueryuiMenuPage.disabledMenu).to.exist
    })

    it('Enabled menu', () => {
        expect(jqueryuiMenuPage.enabledMenu).to.exist
    })

    it('Downloads option', () => {
        jqueryuiMenuPage.enabledMenu.moveTo()
        jqueryuiMenuPage.downloads.waitForDisplayed(5000, false, "Enabled Menu still not opened")
    })

    it('PDF option', () => {
        jqueryuiMenuPage.enabledMenu.moveTo()
        jqueryuiMenuPage.downloads.waitForDisplayed(5000, false, "Enabled Menu still not opened")
        jqueryuiMenuPage.downloads.moveTo()
        jqueryuiMenuPage.pdf.waitForDisplayed(5000, false, "PDF Option still not displayed")
    })

    it('CSV option', () => {
        jqueryuiMenuPage.csv.waitForDisplayed(5000, false, "CSV Option still not displayed")
    })

    it('Excel option', () => {
        jqueryuiMenuPage.excel.waitForDisplayed(5000, false, "Excel Option still not displayed")
    })

    it('Go back to JQuery UI Home page', () => {
        jqueryuiMenuPage.back.click()
        jqueryuiMenuPage.jqueryUIHeader.waitForDisplayed(5000, false, "JQuery UI Header still not displayed")
        jqueryuiMenuPage.jqueryUISubHeading.waitForDisplayed(5000, false, "JQuery UI Subheader still not displayed")
        jqueryuiMenuPage.jqueryUIMenu.waitForDisplayed(5000, false, "JQuery UI Menu link still not displayed")
    })

    it('Go to JQuery UI Menu', () => {
        jqueryuiMenuPage.jqueryUIMenu.click()
        expect(jqueryuiMenuPage.header).to.exist
    })
})