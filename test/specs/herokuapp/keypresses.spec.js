var homePage = require('../../pageobjects/herokuapp/homePage')
var keypressesPage = require('../../pageobjects/herokuapp/keypressesPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Key Presses', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.keyPresses.click()
    })

    it('Header', () => {    
        expect(keypressesPage.header).to.exist
    })

    it('Subheading', () => {
        expect(keypressesPage.subheader).to.exist
    })

    it('Up key', () => {
        browser.keys('\uE013')
        keypressesPage.responseUp.waitForDisplayed(5000, false, "Up Key response not pressed")
    })

    it('Down key', () => {
        browser.keys('\uE015')
        keypressesPage.responseDown.waitForDisplayed(5000, false, "Down Key response not pressed")
    })

    it('Left key', () => {
        browser.keys('\uE012')
        keypressesPage.responseLeft.waitForDisplayed(5000, false, "Left Key response not pressed")
    })

    it('Right key', () => {
        browser.keys('\uE014')
        keypressesPage.responseRight.waitForDisplayed(5000, false, "Right Key response not pressed")
    })

    it('Enter key', () => {
        browser.keys('\uE007')
        keypressesPage.responseEnter.waitForDisplayed(5000, false, "Enter Key response not pressed")
    })

    it('Space key', () => {
        browser.keys('\uE00D')
        keypressesPage.responseSpace.waitForDisplayed(5000, false, "Space Key response not pressed")
    })
    
    it('Tab key', () => {
        browser.keys('\uE004')
        keypressesPage.responseTab.waitForDisplayed(5000, false, "Tab Key response not pressed")
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})