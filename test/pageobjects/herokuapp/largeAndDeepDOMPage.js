class largeAndDeepDOMPage {
    get header() {
        return $('//h3[contains(text(),"Large & Deep DOM")]')
    }

    get subheader() {
        return $('//p[contains(text(),"Some pages have very large")]')
    }

    get noSiblings() {
        return $('//h4[contains(text(),"No Siblings")]')
    }

    get siblings() {
        return $('//h4[2][contains(text(),"Siblings")]')
    }

    get sibling463() {
        return $('//div[@id="sibling-46.3"]')
    }


    get sibling463inTable() {
        return $('//td[contains(text(),"46.30")]')
    }
}

module.exports = new largeAndDeepDOMPage()