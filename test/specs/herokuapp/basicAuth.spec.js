var homePage = require('../../pageobjects/herokuapp/homePage')
var basicAuthPage = require('../../pageobjects/herokuapp/basicAuthPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Basic Auth Tests', () => {
    it('Open home page', () => {
        browser.url(herokuapp)
        homePage.basicAuth.click()
        browser.pause(2000)
    })

    xit('Not Authorized', () => {
        browser.keys("\ue00C")
        browser.pause(2000)
        expect(basicAuthPage.notAuthorized).to.exist
    })

    xit('Valid Authentication', () => {
        // browser.url('https://basic:basic@the-internet.herokuapp.com/basic_auth')
        // Enter username
        browser.keys("admin")

        // Press tab
        browser.keys("\ue004")

        // Enter password
        browser.keys("admin")

        // Press Enter
        browser.keys("\uE007"); 

        browser.pause(2000)
        
    })
})