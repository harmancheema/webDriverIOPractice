class hoversPage {

    get header() {
        return $('//h3[contains(text(),"Hovers")]')
    }

    get subheader() {
        return $('//p[contains(text(),"Hover over the image")]')
    }

    get image1() {
        return $('//*[contains(text(),"name: user1")]//..//parent::div[@class="figure"]')
    }

    get image1Name() {
        return $('//h5[contains(text(),"name: user1")]')
    }

    get image1Profile() {
        return $('//a[@href="/users/1"]')
    }

    get image2() {
        return $('//*[contains(text(),"name: user2")]//..//parent::div[@class="figure"]')
    }

    get image2Name() {
        return $('//h5[contains(text(),"name: user2")]')
    }

    get image2Profile() {
        return $('//a[@href="/users/2"]')
    }

    get image3() {
        return $('//*[contains(text(),"name: user3")]//..//parent::div[@class="figure"]')
    }

    get image3Name() {
        return $('//h5[contains(text(),"name: user3")]')
    }

    get image3Profile() {
        return $('//a[@href="/users/3"]')
    }

    get notFound() {
        return $('//h1[contains(text(),"Not Found")]')
    }
}

module.exports = new hoversPage()