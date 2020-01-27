class dynamicControlsPage {
    get header() {
        return $('//h4[contains(text(),"Dynamic Controls")]')
    }

    get text() {
        return $('//p[contains(text(),"This example")]')
    }

    get checkbox() {
        return $('//input[@type="checkbox"]')
    }

    get removeButton() {
        return $('//button[contains(text(),"Remove")]')
    }

    get addButton() {
        return $('//button[contains(text(),"Add")]')
    }

    get enableDisable() {
        return $('//h4[contains(text(),"Enable/disable")]')
    }

    get enableButton() {
        return $('//button[contains(text(),"Enable")]')
    }

    get disableButton() {
        return $('//button[contains(text(),"Disable")]')
    }
}

module.exports = new dynamicControlsPage()