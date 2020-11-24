class keypressesPage {

    get header() {
        return $('//h3[contains(text(),"Key Presses")]')
    }
    
    get subheader() {
        return $('//p[contains(text(),"Key presses are often used")]')
    }

    get responseUp() {
        return $('//p[contains(text(),"You entered: UP")]')
    }

    get responseDown() {
        return $('//p[contains(text(),"You entered: DOWN")]')
    }

    get responseLeft() {
        return $('//p[contains(text(),"You entered: LEFT")]')
    }

    get responseRight() {
        return $('//p[contains(text(),"You entered: RIGHT")]')
    }

    get responseEnter() {
        return $('//p[contains(text(),"You entered: ENTER")]')
    }

    get responseTab() {
        return $('//p[contains(text(),"You entered: TAB")]')
    }

    get responseSpace() {
        return $('//p[contains(text(),"You entered: SPACE")]')
    }

}

module.exports = new keypressesPage()