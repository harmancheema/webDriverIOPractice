class dropdownPage {
    get header() {
        return $('//h3[contains(text(),"Dropdown List")]')
    }

    get menu() {
        return $('//select[@id="dropdown"]')
    }

    get option1() {
        return $('//option[@value="1"]')
    }

    get option2() {
        return $('//option[@value="2"]')
    }
}

module.exports = new dropdownPage()