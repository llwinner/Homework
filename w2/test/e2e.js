var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:3000/index/index');
//连续点击大拇指10次
for (let i = 0; i < 10; i++) {
    driver.findElement(By.className('hand')).click();
    driver.sleep(1000);
}
//验证结果是否为10
driver.wait(until.elementTextIs(driver.findElement(By.className('hide')), '10'), 5000);
driver.quit();