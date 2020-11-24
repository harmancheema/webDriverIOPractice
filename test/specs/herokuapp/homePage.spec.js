var homePage = require('../../pageobjects/herokuapp/homePage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('homePage tests', () => {
    it('Open home page', () => {
        browser.url('https://the-internet.homePage.com/')
    })

    it('Header', () => {
        expect(homePage.heading)
    })

    it('A/B Testing', () => {
        expect(homePage.abTest).to.exist
    })

    it('Add/Remove Elements', () => {
        expect(homePage.addRemoveElements).to.exist
    })

    it('Basic Auth', () => {
        expect(homePage.basicAuth).to.exist
    })

    it('Broken Images', () => {
        expect(homePage.brokenImages).to.exist
    })

    it('Challenging DOM', () => {
        expect(homePage.challengingDOM).to.exist
    })

    it('Checkboxes', () => {
        expect(homePage.checkboxes).to.exist
    })

    it('Context Menu', () => {
        expect(homePage.contextMenu).to.exist
    })

    it('Digest Authentication', () => {
        expect(homePage.digestAuth).to.exist
    })

    it('Disappearing Elements', () => {
        expect(homePage.disappearingElements).to.exist
    })

    it('Drag and Drop', () => {
        expect(homePage.dragAndDrop).to.exist
    })

    it('Dropdown', () => {
        expect(homePage.dropdown).to.exist
    })

    it('Dynamic Content', () => {
        expect(homePage.dynamicContent).to.exist
    })

    it('Dynamic Controls', () => {
        expect(homePage.dynamicControls).to.exist
    })

    it('Dynamic Loading', () => {
        expect(homePage.dynamicLoading).to.exist
    })

    it('Entry Ad', () => {
        expect(homePage.entryAd).to.exist
    })

    it('Exit Intent', () => {
        expect(homePage.exitIntent).to.exist
    })

    it('File Download', () => {
        expect(homePage.fileDownload).to.exist
    })

    it('File Upload', () => {
        expect(homePage.fileUpload).to.exist
    })

    it('Floating Menu', () => {
        expect(homePage.floatingMenu).to.exist
    })

    it('Forgot Password', () => {
        expect(homePage.forgotPassword).to.exist
    })

    it('Form Authentication', () => {
        expect(homePage.formAuthentication).to.exist
    })

    it('Frames', () => {
        expect(homePage.frames).to.exist
    })

    it('Geolocation', () => {
        expect(homePage.geolocation).to.exist
    })

    it('Horizontal Slider', () => {
        expect(homePage.horizontalSlider).to.exist
    })

    it('Hovers', () => {
        expect(homePage.hovers).to.exist
    })

    it('Infinite Scroll', () => {
        expect(homePage.infiniteScroll).to.exist
    })

    it('Inputs', () => {
        expect(homePage.inputs).to.exist
    })

    it('JQuery UI Menus', () => {
        expect(homePage.jqueryUIMenu).to.exist
    })

    it('JavaScript Alerts', () => {
        expect(homePage.javascriptAlerts).to.exist
    })

    it('JavaScript onload event errors', () => {
        expect(homePage.onloadEventError).to.exist
    })

    it('Key Presses', () => {
        expect(homePage.keyPresses).to.exist
    })

    it('Large & Deep DOM', () => {
        expect(homePage.largeDOM).to.exist
    })

    it('Multiple Windows', () => {
        expect(homePage.multipleWindows).to.exist
    })

    it('Nested Frames', () => {
        expect(homePage.nestedFrames).to.exist
    })

    it('Notification Messages', () => {
        expect(homePage.notificationMessage).to.exist
    })

    it('Redirect Link', () => {
        expect(homePage.redirectLink).to.exist
    })

    it('Secure File Download', () => {
        expect(homePage.secureFileDownload).to.exist
    })

    it('Shifting Content', () => {
        expect(homePage.shiftingContent).to.exist
    })

    it('Slow Resources', () => {
        expect(homePage.slowResources).to.exist
    })

    it('Shifting Data Tables', () => {
        expect(homePage.shiftingContent).to.exist
    })

    it('Status Codes', () => {
        expect(homePage.statusCodes).to.exist
    })

    it('Typos', () => {
        expect(homePage.typos).to.exist
    })

    it('WYSIWYG Editor', () => {
        expect(homePage.editor).to.exist
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})