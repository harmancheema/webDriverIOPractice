class jqueryuiMenuPage {
    
    get header() {
        return $('//h3[contains(text(),"Menu")]')
    }

    get subheader() {
        return $('//div[@class="description"]')
    }

    get menu() {
        return $('//ul[@id="menu"]')
    }

    get disabledMenu() {
        return $('//a[contains(text(),"Disabled")]')
    }

    get enabledMenu() {
        return $('//a[contains(text(),"Enabled")]')
    }

    get downloads() {
        return $('//a[contains(text(),"Downloads")]')
    }

    get pdf() {
        return $('//a[contains(text(),"PDF")]')
    }

    get csv() {
        return $('//a[contains(text(),"CSV")]')
    }

    get excel() {
        return $('//a[contains(text(),"Excel")]')
    }

    get back() {
        return $('//a[contains(text(),"Back to JQuery UI")]')
    }

    get jqueryUIHeader() {
        return $('//h3[contains(text(), "JQuery UI")]')
    }

    get jqueryUISubHeading() {
        return $('//div[@class="description"]')
    }

    get jqueryUIMenu() {
        return $('//a[@href="/jqueryui/menu"]')
    }

}

module.exports = new jqueryuiMenuPage()