var homePage = require('../../pageobjects/herokuapp/homePage')
var dropdownPage = require('../../pageobjects/herokuapp/dropdownPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Dropdown', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.dropdown.click()
    })

    it('Header', () => {
        expect(dropdownPage.header).to.exist
    })

    it('Select Menu', () => {
        expect(dropdownPage.menu).to.exist
    })

    it('Option A', () => {
        dropdownPage.menu.click()
        dropdownPage.option1.click()
        expect(dropdownPage.option1.isDisplayed()).to.be.true
    })

    it('Option B', () => {
        dropdownPage.option1.click()
        dropdownPage.option2.click()
        expect(dropdownPage.option2.isDisplayed()).to.be.true
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})