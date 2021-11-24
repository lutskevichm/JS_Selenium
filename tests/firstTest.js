const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8080/ipb-app');

        await driver.wait(until.elementLocated(By.id('loginForm')), 1000);
        await driver.findElement(By.name('loginForm:j_username')).sendKeys('qa');
        await driver.findElement(By.name('loginForm:j_password')).sendKeys('qa');
        await driver.findElement(By.name('loginForm:submitForm')).click();
        await driver.wait(until.elementLocated(By.id('logoutForm:userDetails')), 1000);
        await driver.findElement(By.id('topQuickSearchForm:searchExtendedBtn')).click();
        await driver.wait(until.elementLocated(By.id('searchForm:createAccountBtnAlway')), 1000);
        await driver.findElement(By.id('searchForm:createAccountBtnAlway')).click();
        await driver.findElement(By.xpath(`//input[@value="INDV"]`)).click();
        await driver.findElement(By.id('searchForm:yes')).click();
        await driver.findElement(By.id('crmForm:generalInfo_firstName')).sendKeys('Maria');
        const randomNumber = (Math.floor(10000 + Math.random() * 90000));
        await driver.findElement(By.id('crmForm:generalInfo_lastName')).sendKeys(randomNumber);
        await driver.sleep(1000);
        await driver.findElement(By.id('crmForm:addressInfo_0_stateProvCd')).sendKeys("CA");
        await driver.sleep(1000);
        await driver.findElement(By.id('crmForm:addressInfo_0_city')).sendKeys('New York');
        await driver.findElement(By.id('crmForm:addressInfo_0_postalCode')).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('crmForm:addressInfo_0_postalCode')).sendKeys(randomNumber);
        await driver.findElement(By.id('crmForm:addressInfo_0_addressLine1')).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('crmForm:addressInfo_0_addressLine1')).sendKeys('Address Line 1');
        await driver.sleep(1000);
        await driver.findElement(By.id('topSaveAndExitLink')).click();
        await driver.wait(until.elementLocated(By.id('customerMainTab:customerFirstTabsList:0:linkLabel')), 10000);
    } finally {
        await driver.quit();
    }

}());