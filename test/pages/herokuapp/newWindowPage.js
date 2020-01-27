class newWindowPage {
    get header() {
        return $('//h3[contains(text(),"Opening a new window")]')
    }

    get openNewWindow() {
        return $('//a[@href="/windows/new"]')
    }

    get newWindowText() {
        return $('//h3[contains(text(),"New Window")]')
    }

    get newWindowHandle() {
        return ("New Window")
    }
}

module.exports = new newWindowPage()