var homePage = require('../../pages/herokuapp/homePage')
var redirectLinkPage = require('../../pages/herokuapp/redirectLinkPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Redirect Link', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.redirectLink.click()
    })

    it('Header', () => {    
        expect(redirectLinkPage.header).to.exist
    })

    it('Sub Heading', () => {
        expect(redirectLinkPage.subheader).to.exist
    })

    it('Redirection', () => {
        redirectLinkPage.redirectLink.click()
        redirectLinkPage.statusCodeHeading.waitForDisplayed(5000, false, "Header is wrong")
        redirectLinkPage.statusCodeSubHeading.waitForDisplayed(5000, false, "Sub-Header is wrong")

        // Webdriver IO assertions
        redirectLinkPage.statusCode200.waitForDisplayed(5000, false, "Status Code 200 is not displayed")
        redirectLinkPage.statusCode301.waitForDisplayed(5000, false, "Status Code 301 is not displayed")
        redirectLinkPage.statusCode404.waitForDisplayed(5000, false, "Status Code 404 is not displayed")
        redirectLinkPage.statusCode500.waitForDisplayed(5000, false, "Status Code 500 is not displayed")

        // Chai assertions
        expect(redirectLinkPage.statusCode200).to.exist
        expect(redirectLinkPage.statusCode301).to.exist
        expect(redirectLinkPage.statusCode404).to.exist
        expect(redirectLinkPage.statusCode500).to.exist
    })

    it('Status Code 200', () => {
        redirectLinkPage.statusCode200.click()
        
        // Webdriver IO assertion
        redirectLinkPage.statusCode200SubHeading.waitForDisplayed(5000, false, "Status Code 200 page is not displayed")

        // Chai assertion
        expect(redirectLinkPage.statusCode200SubHeading).to.exist

        // Go back to previous page
        redirectLinkPage.goBack.click()

        // Webdriver IO assertions
        redirectLinkPage.statusCodeSubHeading.waitForDisplayed(5000, false, "Not back to the original page")

        // Chai assertion
        expect(redirectLinkPage.statusCodeSubHeading).to.exist
    })

    it('Status Code 301', () => {
        redirectLinkPage.statusCode301.click()
        
        // Webdriver IO assertion
        redirectLinkPage.statusCode301SubHeading.waitForDisplayed(5000, false, "Status Code 301 page is not displayed")
        
        // Go back to previous page
        redirectLinkPage.goBack.click()

        // Webdriver IO assertions
        redirectLinkPage.statusCodeSubHeading.waitForDisplayed(5000, false, "Not back to the original page")

        // Chai assertion
        expect(redirectLinkPage.statusCodeSubHeading).to.exist
    })

    it('Status Code 404', () => {
        redirectLinkPage.statusCode404.click()

        // Webdriver IO assertion
        redirectLinkPage.statusCode404SubHeading.waitForDisplayed(5000, false, "Status Code 404 page is not displayed")
        
        // Go back to previous page
        redirectLinkPage.goBack.click()

        // Webdriver IO assertions
        redirectLinkPage.statusCodeSubHeading.waitForDisplayed(5000, false, "Not back to the original page")

        // Chai assertion
        expect(redirectLinkPage.statusCodeSubHeading).to.exist
    })

    it('Status Code 500', () => {
        redirectLinkPage.statusCode500.click()

        // Webdriver IO assertion
        redirectLinkPage.statusCode500SubHeading.waitForDisplayed(5000, false, "Status Code 500 page is not displayed")

        // Go back to previous page
        redirectLinkPage.goBack.click()

        // Webdriver IO assertions
        redirectLinkPage.statusCodeSubHeading.waitForDisplayed(5000, false, "Not back to the original page")

        // Chai assertion
        expect(redirectLinkPage.statusCodeSubHeading).to.exist
    })

    it('Footer', () => {
        // Chai assertion
        expect(homePage.footer).to.exist
    })
})