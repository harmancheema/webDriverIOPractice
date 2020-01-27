class inputsPage {
    get header() {
        return $('//h3[contains(text(),"Inputs")]')
    }

    get subheader() {
        return $('//p[contains(text(),"Number")]')
    }

    get textbox() {
        return $('//input[@type="number"]')
    }
}

module.exports = new inputsPage()