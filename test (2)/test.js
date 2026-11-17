const { Builder, By } = require('selenium-webdriver');

async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:8081');

        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('1234');

        await driver.findElement(By.css('button')).click();

        let result = await driver.findElement(By.id('message')).getText();

        console.log("Test Result: " + result);
    }
    finally {
        await driver.quit();
    }
}

testLogin();