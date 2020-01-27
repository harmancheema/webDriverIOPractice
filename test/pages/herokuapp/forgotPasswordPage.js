class forgotPasswordPage {
    get header() {
        return $('//h2[contains(text(),"Forgot Password")]')
    }

    get inputEmail() {
        return $('//input[@id="email"]')
    }

    get submitButton() {
        return $('//i[@class="icon-2x icon-signin"]')
    }

    get confirmation() {
        return $('//div[@id="content"]')
    }
}

module.exports = new forgotPasswordPage()