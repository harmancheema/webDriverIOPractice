var homePage = require('../../pages/herokuapp/homePage')
var largeAndDeepDOMPage = require('../../pages/herokuapp/largeAndDeepDOMPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Large and Deep DOM', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.largeDOM.click()
    })

    it('Header', () => {    
        expect(largeAndDeepDOMPage.header).to.exist
    })

    it('Subheading', () => {
        expect(largeAndDeepDOMPage.subheader).to.exist
    })

    it('Sibling', () => {
        expect(largeAndDeepDOMPage.sibling463).to.exist
    })

    it('Sibling in Table', () => {
        expect(largeAndDeepDOMPage.sibling463inTable).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})