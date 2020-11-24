class herokuapp {
    get heading() {
        return $('//h1[@class="heading"]')
    }

    get abTest() {
        return $('//a[@href="/abtest"]')
    }

    get addRemoveElements() {
        return $('//a[@href="/add_remove_elements/"]')
    }

    get basicAuth() {
        return $('//a[@href="/basic_auth"]')
    }

    get brokenImages() {
        return $('//a[@href="/broken_images"]')
    }

    get challengingDOM () {
        return $('//a[@href="/challenging_dom"]')
    }

    get checkboxes() {
        return $('//a[@href="/checkboxes"]')
    }

    get contextMenu() {
        return $('//a[@href="/context_menu"]')
    }

    get digestAuth() {
        return $('//a[@href="/digest_auth"]')
    }

    get disappearingElements() {
        return $('//a[@href="/disappearing_elements"]')
    }

    get dragAndDrop() {
        return $('//a[@href="/drag_and_drop"]')
    }

    get dropdown() {
        return $('//a[@href="/dropdown"]')
    }

    get dynamicContent() {
        return $('//a[@href="/dynamic_content"]')
    }

    get dynamicControls() {
        return $('//a[@href="/dynamic_controls"]')
    }

    get dynamicLoading() {
        return $('//a[@href="/dynamic_loading"]')
    }

    get entryAd() {
        return $('//a[@href="/entry_ad"]')
    }

    get exitIntent() {
        return $('//a[@href="/exit_intent"]')
    }

    get fileDownload() {
        return $('//a[@href="/download"]')
    }

    get fileUpload() {
        return $('//a[@href="/upload"]')
    }

    get floatingMenu() {
        return $('//a[@href="/floating_menu"]')
    }

    get forgotPassword() {
        return $('//a[@href="/forgot_password"]')
    }

    get formAuthentication() {
        return $('//a[@href="/login"]')
    }

    get frames() {
        return $('//a[@href="/frames"]')
    }

    get geolocation() {
        return $('//a[@href="/geolocation"]')
    }

    get horizontalSlider() {
        return $('//a[@href="/horizontal_slider"]')
    }

    get hovers() {
        return $('//a[@href="/hovers"]')
    }

    get infiniteScroll() {
        return $('//a[@href="/infinite_scroll"]')
    }

    get inputs() {
        return $('//a[@href="/inputs"]')
    }

    get jqueryUIMenu() {
        return $('//a[@href="/jqueryui/menu"]')
    }

    get javascriptAlerts() {
        return $('//a[@href="/javascript_alerts"]')
    }

    get onloadEventError() {
        return $('//a[@href="/javascript_error"]')
    }

    get keyPresses() {
        return $('//a[@href="/key_presses"]')
    }

    get largeDOM() {
        return $('//a[@href="/large"]')
    }

    get multipleWindows() {
        return $('//a[@href="/windows"]')
    }

    get nestedFrames() {
        return $('//a[@href="/nested_frames"]')
    }

    get notificationMessage() {
        return $('//a[@href="/notification_message"]')
    }

    get redirectLink() {
        return $('//a[@href="/redirector"]')
    }

    get secureFileDownload() {
        return $('//a[@href="/download_secure"]')
    }

    get shiftingContent() {
        return $('//a[@href="/shifting_content"]')
    }

    get slowResources() {
        return $('//a[@href="/slow"]')
    }

    get sortableTables() {
        return $('//a[@href="/tables"]')
    }

    get statusCodes() {
        return $('//a[@href="/status_codes"]')
    }

    get typos() {
        return $('//a[@href="/typos"]')
    }

    get editor() {
        return $('//a[@href="/tinymce"]')
    }

    get footer() {
        return $('//div[@id="page-footer"]')
    }
}

module.exports = new herokuapp()