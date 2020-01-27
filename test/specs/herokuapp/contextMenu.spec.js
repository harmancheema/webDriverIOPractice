var homePage = require('../../pages/herokuapp/homePage')
var contextMenuPage = require('../../pages/herokuapp/contextMenuPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Context Menu', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.contextMenu.click()
    })

    it('Header', () => {
        expect(contextMenuPage.header).to.exist
    })

    it('Text', () => {
        expect(contextMenuPage.text1).to.exist
        expect(contextMenuPage.text2).to.exist
        console.log("***FULL TEXT*** " + "\n" + contextMenuPage.text1.getText() + "\n" + contextMenuPage.text2.getText())
    })

    it('Right-click in the hotspot', () => {
        // contextMenuPage.hotspot.moveTo(30,60)
        contextMenuPage.hotspot.click({ button: 'right' })
        
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})