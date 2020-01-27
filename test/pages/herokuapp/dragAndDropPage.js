class dragAndDropPage {
    get header() {
        return $('//h3[contains(text(),"Drag and Drop")]')
    }

    get boxA() {
        return $('//div[@id="column-a"]')
    }

    get boxB() {
        return $('//div[@id="column-b"]')
    }
}

module.exports = new dragAndDropPage()