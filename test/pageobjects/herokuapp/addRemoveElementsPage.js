class addRemoveElements {
    get addElement() {
        return $('//button[@onclick="addElement()"]')
    }

    get headerOfPage() {
        return $('//h3[contains(text(),"Add/Remove Elements")]')
    }

    get deleteElement() {
        return $('//button[@onclick="deleteElement()"]')
    }
}

module.exports = new addRemoveElements()