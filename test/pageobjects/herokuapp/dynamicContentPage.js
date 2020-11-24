class dynamicContentPage {
    get header() {
        return $('//h3[contains(text(),"Dynamic Content")]')
    }

    get text1() {
        return $('//p[contains(text(),"This example")]')
    }

    get text2() {
        return $('//p[contains(text(),"To make")]')
    }

    get changeContent() {
        return $('//a[contains(text(),"click here")]')
    }

    get image1() {
        return $('//img[contains(@src,"Avatar-2")]')
    }

    get content1() {
        return $('//div[contains(text(),"Accusantium")]')
    }

    get image2() {
        return $('//img[contains(@src,"Avatar-3")]')
    }

    get content2() {
        return $('//div[contains(text(),"Omnis")]')
    }

    get images() {
        return $$('//div[@class="large-2 columns"]')
    }

    get contents() {
        return $$('//div[@class="large-10 columns"]')
    }
}

module.exports = new dynamicContentPage()