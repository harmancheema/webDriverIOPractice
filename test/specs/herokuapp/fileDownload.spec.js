var homePage = require('../../pages/herokuapp/homePage')
var fileDownloadPage = require('../../pages/herokuapp/fileDownloadPage')
var path = require('path')
var fs = require('fs')
var waitForFileExists = require('../../utils/waitForFileExists')
var assert = require('assert')
var herokuapp = require('../../../wdio.conf').config.herokuappURL

describe('File Download', () => {
    it('Open browser', () => {
        browser.url(herokuapp)
        homePage.fileDownload.click()
    })

    it('Header', () => {    
        expect(fileDownloadPage.header).to.exist
    })

    it('File 1', () => {
        expect(fileDownloadPage.steamApi).to.exist
    })

    it('File 2', () => {
        expect(fileDownloadPage.simpleTxt).to.exist
    })

    it('File 3', () => {
        expect(fileDownloadPage.someFileTxt).to.exist
    })

    it('File 4', () => {
        expect(fileDownloadPage.steamApi64).to.exist
    })

    it('File 5', () => {
        expect(fileDownloadPage.cSharpFrameworkTxt).to.exist
    })

    it('File Download', () => {
        fileDownloadPage.someFileTxt.click()
        browser.pause(2000)

        // get the value of the 'href' attibute on the download link
        // e.g. 'http://the-internet.herokuapp.com/download/some-file.txt'
        const downloadHref = fileDownloadPage.someFileTxt.getAttribute('href');
        console.log("Download HREF: " + downloadHref)

        // pass through Node's `URL` class
        // @see https://nodejs.org/dist/latest-v8.x/docs/api/url.html
        const downloadUrl = new URL(downloadHref);
        console.log("Download URL: " + downloadUrl)

        // get the 'pathname' off the url
        // e.g. 'download/some-file.txt'
        const fullPath = downloadUrl.pathname;
        console.log("Full path: " + fullPath)

        // split in to an array, so we can get just the filename
        // e.g. ['download', 'some-file.txt']
        const splitPath = fullPath.split('/')
        console.log("Split path: " + splitPath)

        // get just the filename at the end of the array
        // e.g.  'some-file.txt'
        const fileName = splitPath.splice(-1)[0]
        console.log("File Name: " + fileName)

        // join the filename to the path where we're storing the downloads
        // '/path/to/wdio/tests/tempDownload/some-file.txt'
        const filePath = path.join(global.downloadDir, fileName)
        console.log("File Path: " + filePath)

        // we need to wait for the file to fully download
        // so we use the 'browser.call' function since this is an async operation
        // @see http://webdriver.io/api/utility/call.html
        browser.call(function (){
        // call our custom function that checks for the file to exist
        return waitForFileExists(filePath, 60000)
        });

        // now that we have our file downloaded, we can do whatever we want with it
        // in this example, we'll read the file contents and
        // assert it contains the expected text
        const fileContents = fs.readFileSync(filePath, 'utf-8')
        assert.ok(fileContents.includes('asdf'))
    })

    it('Footer', () => {
        expect(homePage.footer).to.exist
    })
})