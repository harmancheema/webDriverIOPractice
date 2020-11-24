class entryAdPage {
    get header() {
        return $('//h3[contains(text(),"Entry Ad")]')
    }

    get text1() {
        return $('//p[contains(text(),"Displays an ad")]')
    }

    get text2 (){
        return $('//p[contains(text(),"If closed")]')
    }

    get openModal() {
        return $('//a[@id="restart-ad"]')
    }

    get modalTitle() {
        return $('//h3[contains(text(),"This is a modal window")]')
    }

    get modalBody() {
        return $('//p[contains(text(),"commonly used")]')
    }

    get closeModal() {
        return $('//div[@id="modal"]/div[2]/div[3]//p[contains(text(),"Close")]')
    }

    get modal(){
        return $('//div[@id="modal"]')
    }
}

module.exports = new entryAdPage()