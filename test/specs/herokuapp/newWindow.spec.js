var homePage = require('../../pageobjects/herokuapp/homePage')
var newWindowPage = require('../../pageobjects/herokuapp/newWindowPage')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('New Window', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.multipleWindows.click()
    })

    it('Header', () => {    
        expect(newWindowPage.header).to.exist
    })

    it('Link to open a new window', () => {
        expect(newWindowPage.openNewWindow).to.exist
    })

    it('Open a new window', () => {
        var mainWindow = browser.getWindowHandle()
        console.log("Page title before switching to new window : "+ browser.getTitle());
        newWindowPage.openNewWindow.click()

        var newWindow = browser.getWindowHandles()

        for (var i=0; i<newWindow.length; i++) {
            if(newWindow[i] != mainWindow){
				// switch to the guid
				browser.switchToWindow(newWindow[i]);
				// break the loop
				break;
			}
        }
        console.log("Page title after switching to new window : "+ browser.getTitle());
        browser.closeWindow();
		// switch back to the parent window
		browser.switchToWindow(mainWindow);
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})