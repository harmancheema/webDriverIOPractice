# webDriverIOPractice

This repo has automation for the website https://the-internet.herokuapp.com/ 

The automation is written in `JavaScript` using `WebDriverIO` and `mocha` framework using `chai` assertions

The reporters in this automation are:
- `spec`
- `allure`

All locators can be found inside the `test > pages > herokuapp` folder

All tests can be found inside the `test > specs > herokuapp` folder

After cloning the repo, run `npm install` once to install all dependencies

- To run the tests: `npm test`
- To clean up previous results and then run the tests: `npm run automation`
- To generate an allure-report: `npm run report`
