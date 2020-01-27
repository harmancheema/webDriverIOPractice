var homePage = require('../../pages/herokuapp/homePage')
var dragAndDropPage = require('../../pages/herokuapp/dragAndDropPage')
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
        browser.pause(2000)
    })

    it('Box B', () => {
        expect(dragAndDropPage.boxB).to.exist
        dragAndDropPage.boxB.dragAndDrop(dragAndDropPage.boxA)
        browser.pause(2000)
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})