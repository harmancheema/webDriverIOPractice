class geolocationPage {
    get header() {
        return $('//h3[contains(text(),"Geolocation")]')
    }

    get body() {
        return $('//p[contains(text(),"Click the button")]')
    }

    get whereAmIButton() {
        return $('//button[@onclick="getLocation()"]')
    }
}

module.exports = new geolocationPage()