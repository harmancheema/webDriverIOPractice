var homePage = require('../../pageobjects/herokuapp/homePage')
var dragAndDropPage = require('../../pageobjects/herokuapp/dragAndDropPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Drag and Drop', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.dragAndDrop.click()
    })

    it('Header', () => {
        expect(dragAndDropPage.header).to.exist
    })

    it('Box A', () => {
        expect(dragAndDropPage.boxA).to.exist
        dragAndDropPage.boxA.dragAndDrop(dragAndDropPage.boxB)
        browser.pause(5000)
    })

    it('Box B', () => {
        expect(dragAndDropPage.boxB).to.exist
        dragAndDropPage.boxB.dragAndDrop(dragAndDropPage.boxA)
        browser.pause(5000)
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})