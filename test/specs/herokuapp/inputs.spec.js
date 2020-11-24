var homePage = require('../../pageobjects/herokuapp/homePage')
var inputsPage = require('../../pageobjects/herokuapp/inputsPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Inputs', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.inputs.click()
    })

    it('Header', () => {    
        expect(inputsPage.header).to.exist
    })

    it('Subheading', () => {
        expect(inputsPage.subheader).to.exist
    })

    it('Textbox', () => {
        expect(inputsPage.textbox).to.exist
        inputsPage.textbox.setValue("10")
    })
})