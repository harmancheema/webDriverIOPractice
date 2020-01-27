class infiniteScrollPage {
    
    get header() {
        return $('//h3[contains(text(),"Infinite Scroll")]')
    }

    get paragraphs() {
        return $$('//div[@class="jscroll-added"]')
    }
}

module.exports = new infiniteScrollPage()