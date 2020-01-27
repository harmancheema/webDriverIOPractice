class abtest {
    get noabTest() {
        return $('//h3[contains(text(),"No A/B Test")]')
    }

    get detail() {
        return $('//p[contains(text(),"Also known as split testing")]')
    }
}

module.exports = new abtest()