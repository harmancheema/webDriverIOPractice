var homePage = require('../../pages/herokuapp/homePage')
var formAuthenticationPage = require('../../pages/herokuapp/formAuthenticationPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Form Authentication', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.formAuthentication.click()
    })

    it('Header', () => {    
        expect(formAuthenticationPage.header).to.exist
    })

    it('Username Field', () => {
        expect(formAuthenticationPage.usernameField).to.exist
    })

    it('Password Field', () => {
        expect(formAuthenticationPage.passwordField).to.exist
    })

    it('Login button', () => {
        expect(formAuthenticationPage.loginButton).to.exist
    })

    it('Blank fields', () => {
        formAuthenticationPage.usernameField.setValue("")
        formAuthenticationPage.passwordField.setValue("")
        formAuthenticationPage.loginButton.click()
        expect(formAuthenticationPage.usernameError).to.exist
    })

    it('Invalid username & Invalid password', () => {
        formAuthenticationPage.usernameField.setValue("invalid")
        formAuthenticationPage.passwordField.setValue("invalid")
        formAuthenticationPage.loginButton.click()
        expect(formAuthenticationPage.usernameError).to.exist
    })

    it('Valid username & Invalid password', () => {
        formAuthenticationPage.usernameField.setValue(formAuthenticationPage.validUsername)
        formAuthenticationPage.passwordField.setValue("invalid")
        formAuthenticationPage.loginButton.click()
        expect(formAuthenticationPage.passwordError).to.exist
    })

    it('Invalid username & Valid password', () => {
        formAuthenticationPage.usernameField.setValue("invalid")
        formAuthenticationPage.passwordField.setValue(formAuthenticationPage.validPwd)
        formAuthenticationPage.loginButton.click()
        expect(formAuthenticationPage.usernameError).to.exist
    })

    it('Valid username & Valid password', () => {
        formAuthenticationPage.usernameField.setValue(formAuthenticationPage.validUsername)
        formAuthenticationPage.passwordField.setValue(formAuthenticationPage.validPwd)
        formAuthenticationPage.loginButton.click()
        expect(formAuthenticationPage.successMessage).to.exist
        expect(formAuthenticationPage.secureArea).to.exist
        expect(formAuthenticationPage.text1).to.exist
        expect(formAuthenticationPage.logoutButton).to.exist
    })

    it('Logout', () => {
        formAuthenticationPage.logoutButton.click()
        expect(formAuthenticationPage.logoutSuccess).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})