class fileDownloadPage {
    get header() {
        return $('//h3[contains(text(),"File Downloader")]')
    }

    get steamApi() {
        return $('//a[@href="download/steam_api.dll"]')
    }

    get simpleTxt() {
        return $('//a[@href="download/simple.txt"]')
    }

    get someFileTxt() {
        return $('//a[@href="download/some-file.txt"]')
    }

    get steamApi64() {
        return $('//a[@href="download/steam_api64.dll"]')
    }

    get cSharpFrameworkTxt() {
        return $('//a[@href="download/ObjectivityTestAutomationCSHarpFramework.txt"]')
    }
}

module.exports = new fileDownloadPage()