class javascriptAlertsPage {
    get header() {
        return $('//h3[contains(text(),"JavaScript Alerts")]')
    }

    get subheader() {
        return $('//p[contains(text(),"Here are some examples")]')
    }

    get jsAlertButton() {
        return $('//button[@onclick="jsAlert()"]')
    }

    get jsAlertSuccess() {
        return $('//p[contains(text(),"You successfuly clicked an alert")]')
    }

    get jsConfirmButton() {
        return $('//button[@onclick="jsConfirm()"]')
    }

    get jsConfirmSuccess() {
        return $('//p[contains(text(),"You clicked: Ok")]')
    }

    get jsConfirmCancel() {
        return $('//p[contains(text(),"You clicked: Cancel")]')
    }

    get jsPromptButton() {
        return $('//button[@onclick="jsPrompt()"]')
    }

    get jsPromptText() {
        return ("test")
    }

    get jsPromptSuccess() {
        return $('//p[contains(text(),"You entered: test")]')
    }

    get jsPromptCancel() {
        return $('//p[contains(text(),"You entered: null")]')
    }

    get result() {
        return $('')
    }
}

module.exports = new javascriptAlertsPage()