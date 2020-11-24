var homePage = require('../../pageobjects/herokuapp/homePage')
var checkboxesPage = require('../../pageobjects/herokuapp/checkboxesPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Checkboxes', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.checkboxes.click()
    })

    it('Header', () => {
        expect(checkboxesPage.header).to.exist
    })

    it('Checkbox 1 Checked', () => {
        checkboxesPage.checkbox1.click()
        expect(checkboxesPage.checkbox1.isSelected()).to.be.true
    })

    it('Checkbox 1 Unchecked', () => {
        checkboxesPage.checkbox1.click()
        expect(checkboxesPage.checkbox1.isSelected()).to.be.false
    })

    it('Checkbox 2 Checked', () => {
        expect(checkboxesPage.checkbox2.isSelected()).to.be.true
    })

    it('Checkbox 2 Unchecked', () => {
        checkboxesPage.checkbox2.click()
        expect(checkboxesPage.checkbox2.isSelected()).to.be.false
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})