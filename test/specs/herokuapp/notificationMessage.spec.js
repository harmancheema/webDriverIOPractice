var homePage = require('../../pages/herokuapp/homePage')
var notificationMessagePage = require('../../pages/herokuapp/notificationMessagePage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Notification Message', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.notificationMessage.click()
    })

    it('Header', () => {    
        expect(notificationMessagePage.header).to.exist
    })

    it('Sub Heading', () => {
        expect(notificationMessagePage.subheader).to.exist
    })

    it('Notification Message', () => {
        notificationMessagePage.loadNewMessage.click()
        try {
            expect(notificationMessagePage.messageSuccess).to.exist
        } catch {
            expect(notificationMessagePage.messageFailure).to.exist
        }
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})