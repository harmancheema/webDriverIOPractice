var homePage = require('../../pages/herokuapp/homePage')
var hoversPage = require('../../pages/herokuapp/hoversPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Hovers', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.hovers.click()
    })

    it('Header', () => {    
        expect(hoversPage.header).to.exist
    })

    it('Subheader', () => {
        expect(hoversPage.subheader).to.exist
    })

    it('Image 1 Profile', () => {
        hoversPage.image1.moveTo()
        hoversPage.image1Profile.click()
        expect(hoversPage.notFound).to.exist
        browser.back()
        expect(hoversPage.header).to.exist
    })

    it('Image 2 Profile', () => {
        hoversPage.image2.moveTo()
        hoversPage.image2Profile.click()
        expect(hoversPage.notFound).to.exist
        browser.back()
        expect(hoversPage.header).to.exist
    })

    it('Image 3 Profile', () => {
        hoversPage.image3.moveTo()
        hoversPage.image3Profile.click()
        expect(hoversPage.notFound).to.exist
        browser.back()
        expect(hoversPage.header).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})