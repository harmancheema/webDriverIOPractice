class brokenImages {
    get image() {
        return $('//img[@src="img/avatar-blank.jpg"]')
    }

    get brokenImage() {
        return $('//img[@src="asdf.jpg"]')
    }
}

module.exports = new brokenImages()