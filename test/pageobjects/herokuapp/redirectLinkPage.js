class redirectLinkPage {
    get header() {
        return $('//h3[contains(text(),"Redirection")]')
    }

    get subheader() {
        return $('//p[contains(text(),"This is separate")]')
    }

    get redirectLink() {
        return $('//a[@id="redirect"]')
    }

    get statusCodeHeading() {
        return $('//h3[contains(text(),"Status Codes")]')
    }

    get statusCodeSubHeading() {
        return $('//p[contains(text(),"HTTP status codes")]')
    }

    get statusCode200() {
        return $('//a[@href="status_codes/200"]')
    }

    get statusCode200SubHeading() {
        return $('//p[contains(text(),"This page returned a 200 status code.")]')
    }

    get statusCode301() {
        return $('//a[@href="status_codes/301"]')
    }

    get statusCode301SubHeading() {
        return $('//p[contains(text(),"This page returned a 301 status code.")]')
    }

    get statusCode404() {
        return $('//a[@href="status_codes/404"]')
    }

    get statusCode404SubHeading() {
        return $('//p[contains(text(),"This page returned a 404 status code.")]')
    }

    get statusCode500() {
        return $('//a[@href="status_codes/500"]')
    }

    get statusCode500SubHeading() {
        return $('//p[contains(text(),"This page returned a 500 status code.")]')
    }

    get goBack() {
        return $('//a[@href="/status_codes"]')
    }
}

module.exports = new redirectLinkPage()