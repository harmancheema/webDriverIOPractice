var homePage = require('../../pages/herokuapp/homePage')
var geolocationPage = require('../../pages/herokuapp/geolocationPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Geolocation', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.geolocation.click()
    })

    it('Header', () => {    
        expect(geolocationPage.header).to.exist
    })

    it('Body', () => {
        expect(geolocationPage.body).to.exist
    })

    it('Button', () => {
        expect(geolocationPage.whereAmIButton).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})