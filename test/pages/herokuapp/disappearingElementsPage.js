class disappearingElementsPage {
    get header() {
        return $('//h3[contains(text(),"Disappearing Elements")]')
    }

    get text() {
        return $('//p[contains(text(),"This example")]')
    }

    get home() {
        return $('//a[contains(text(),"Home")]')
    }

    get about() {
        return $('//a[contains(text(),"About")]')
    }

    get contactUs() {
        return $('//a[contains(text(),"Contact Us")]')
    }

    get portfolio() {
        return $('//a[contains(text(),"Portfolio")]')
    }

    get gallery() {
        return $('//a[contains(text(),"Gallery")]')
    }

    get notFound() {
        return $('//h1[contains(text(),"Not Found")]')
    }
}

module.exports = new disappearingElementsPage()