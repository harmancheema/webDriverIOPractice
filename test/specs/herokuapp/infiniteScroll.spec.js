var homePage = require('../../pageobjects/herokuapp/homePage')
var infiniteScrollPage = require('../../pageobjects/herokuapp/infiniteScrollPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('Infinite Scroll', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.infiniteScroll.click()
    })

    it('Header', () => {    
        expect(infiniteScrollPage.header).to.exist
    })

    it('Test Infinite Scroll', () => {
        var par1 = infiniteScrollPage.paragraphs.length
        console.log("Paragraphs before scrolling: " + par1)

        for (var i=0; i<=10; i++) {
            browser.keys(['\uE015'])
            browser.pause(200)
        }
        
        var par2 = infiniteScrollPage.paragraphs.length
        console.log("Paragraphs after scrolling: " + par2)

        expect(par2).to.not.equal(par1)
    })
})