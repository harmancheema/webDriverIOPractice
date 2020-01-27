class notificationMessagePage {
    get header() {
        return $('//h3[contains(text(),"Notification Message")]')
    }

    get subheader() {
        return $('//p[contains(text(),"The message displayed above")]')
    }

    get loadNewMessage() {
        return $('//a[@href="/notification_message"]')
    }

    get messageSuccess() {
        return $('//div[contains(text(),"Action successful")]')
    }

    get messageFailure() {
        return $('//div[contains(text(),"Action unsuccesful, please try again")]')
    }
}

module.exports = new notificationMessagePage()