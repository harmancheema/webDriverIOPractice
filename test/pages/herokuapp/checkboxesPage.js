class checkboxesPage {
    get header() {
        return $('//h3[contains(text(),"Checkboxes")]')
    }
    
    get checkbox1() {
        return $('//*[@id="checkboxes"]/input[1]')
    }

    get checkbox2() {
        return $('//*[@id="checkboxes"]/input[2]')
    }
}

module.exports = new checkboxesPage()