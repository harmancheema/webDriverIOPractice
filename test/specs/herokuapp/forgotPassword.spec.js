var homePage = require('../../pages/herokuapp/homePage')
var forgotPasswordPage = require('../../pages/herokuapp/forgotPasswordPage')
var testEmail = "testEmailFP@mailinator.com"
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Forgot Password', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.forgotPassword.click()
    })

    it('Header', () => {    
        expect(forgotPasswordPage.header).to.exist
    })

    it('Input Email', () => {
        expect(forgotPasswordPage.inputEmail).to.exist
    })

    it('Submit Button', () => {
        expect(forgotPasswordPage.submitButton).to.exist
    })

    it('Forgot Password', () => {
        forgotPasswordPage.inputEmail.setValue(testEmail)
        forgotPasswordPage.submitButton.click()
        expect(forgotPasswordPage.confirmation).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})