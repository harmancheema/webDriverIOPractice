class basicAuth {
    get notAuthorized() {
        return $('//body[contains(text(),"Not authorized")]')
    }

    get headerBasicAuth() {
        return $('//h3[contains(text(),"Basic Auth")]')
    }

    get successAuth() {
        return $('//p[contains(text(),"Congratulations")]')
    }

}

module.exports = new basicAuth() 