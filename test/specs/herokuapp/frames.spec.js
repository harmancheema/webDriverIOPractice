var homePage = require('../../pages/herokuapp/homePage')
var framesPage = require('../../pages/herokuapp/framesPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Frames', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.frames.click()
    })

    it('Header', () => {    
        expect(framesPage.header).to.exist
    })

    it('Nested Frames', () => {
        expect(framesPage.nestedFrames).to.exist
    })

    it('iFrame', () => {
        expect(framesPage.iFrame).to.exist
    })

    it('Nested Frames Page',() => {
        framesPage.nestedFrames.click()
        expect(framesPage.leftFrame).to.exist
        expect(framesPage.middleFrame).to.exist
        expect(framesPage.rightFrame).to.exist
        expect(framesPage.bottomFrame).to.exist
        browser.back()
        expect(framesPage.iFrame).to.exist
    })

    it('iFrames Page', () => {
        framesPage.iFrame.click()
        expect(framesPage.iFrameHeader).to.exist
        expect(framesPage.iFrameBody).to.exist
    })

    it('iFrame Options', () => {
        expect(framesPage.iFrameFileMenu).to.exist
        expect(framesPage.iFrameEditMenu).to.exist
        expect(framesPage.iFrameViewMenu).to.exist
        expect(framesPage.iFrameFormatMenu).to.exist
    })

    it('File Menu', () => {
        framesPage.iFrameFileMenu.click()
        expect(framesPage.iFrameNewDocument).to.exist
        framesPage.iFrameFileMenu.click()
    })

    it('Edit Menu', () => {
        framesPage.iFrameEditMenu.click()
        expect(framesPage.iFrameUndoOption).to.exist
        expect(framesPage.iFrameRedoOption).to.exist
        expect(framesPage.iFrameCutOption).to.exist
        expect(framesPage.iFrameCopyOption).to.exist
        expect(framesPage.iFramePasteOption).to.exist
        expect(framesPage.iFrameSelectAllOption).to.exist
        framesPage.iFrameEditMenu.click()
    })

    it('View Menu', () => {
        framesPage.iFrameViewMenu.click()
        expect(framesPage.iFrameVisualAidsOption).to.exist
        framesPage.iFrameViewMenu.click()
    })

    it('Format Menu', () => {
        framesPage.iFrameFormatMenu.click()
        expect(framesPage.iFrameBoldOption).to.exist
        expect(framesPage.iFrameItalicOption).to.exist
        expect(framesPage.iFrameUnderlineOption).to.exist
        expect(framesPage.iFrameStrikethroughOption).to.exist
        expect(framesPage.iFrameSuperscriptOption).to.exist
        expect(framesPage.iFrameSubscriptOption).to.exist
        expect(framesPage.iFrameFormatsOption).to.exist
        expect(framesPage.iFrameClearFormattingOption).to.exist
        framesPage.iFrameFormatMenu.click()
    })

    it('Type in the iFrame body', () => {
        browser.refresh()
        browser.switchToFrame(framesPage.iFrameBox)
        framesPage.iFrameContent.setValue("TEST")
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})