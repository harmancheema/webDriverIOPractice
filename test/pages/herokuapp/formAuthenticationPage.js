class formAuthenticationPage {
    get header() {
        return $('//h2[contains(text(),"Login Page")]')
    }

    get subheader() {
        return $('//h4[@class="subheader"]')
    }

    get usernameField() {
        return $('//input[@id="username"]')
    }

    get validUsername() {
        return ("tomsmith")
    }

    get validPwd() {
        return ("SuperSecretPassword!")
    }

    get passwordField() {
        return $('//input[@id="password"]')
    }

    get loginButton() {
        return $('//i[@class="fa fa-2x fa-sign-in"]')
    }

    get usernameError() {
        return $('//div[contains(text(),"Your username is invalid")]')
    }

    get passwordError() {
        return $('//div[contains(text(),"Your password is invalid")]')
    }

    get secureArea() {
        return $('//h2[contains(text(),"Secure Area")]')
    }

    get successMessage() {
        return $('//div[contains(text(),"secure area")]')
    }

    get text1() {
        return $('//h4[contains(text(),"Secure Area")]')
    }
    
    get logoutButton() {
        return $('//i[contains(text(),"Logout")]')
    }

    get logoutSuccess() {
        return $('//div[contains(text(),"You logged out")]')
    }
}

module.exports = new formAuthenticationPage()