class contextMenuPage {
    get header() {
        return $('//h3[contains(text(),"Context Menu")]')
    }

    get text1() {
        return $('//p[contains(text(),"Context menu items")]')
    }

    get text2() {
        return $('//p[contains(text(),"Right-click")]')
    }
    
    get hotspot() {
        return $('//div[@id="hot-spot"]')
    }
}

module.exports = new contextMenuPage()