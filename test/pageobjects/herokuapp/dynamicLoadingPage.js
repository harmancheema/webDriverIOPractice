class dynamicLoadingPage {
    get header() {
        return $('//h3[contains(text(),"Dynamically Loaded Page Elements")]')
    }

    get text1() {
        return $('//p[contains(text(),"It\'s common to see")]')
    }

    get text2() {
        return $('//p[contains(text(),"There are two examples")]')
    }

    get example1() {
        return $('//a[contains(text(),"Example 1")]')
    }

    get example2() {
        return $('//a[contains(text(),"Example 2")]')
    }

    get textExample1() {
        return $('//h4[contains(text(),"Example 1")]')
    }

    get startButton() {
        return $('//button[contains(text(),"Start")]')
    }

    get helloWorld() {
        return $('//h4[contains(text(),"Hello World!")]')
    }

    get textExample2() {
        return $('//h4[contains(text(),"Example 2")]')
    }

}

module.exports = new dynamicLoadingPage()