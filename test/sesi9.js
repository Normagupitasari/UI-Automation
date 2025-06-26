const { Builder, By, until, Key } = require('selenium-webdriver');

const assert = require('assert');

describe('Google Search Test', function () {
    let driver;

    it('Visit SauceDemo dan Cek Page Title', async function () {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        
        const title = await driver.getTitle();

        assert.strictEqual(title, 'Swag Labs', 'Page title should be "Swag Labs"');
        
        await driver.quit();

    });

it('Cek Button Login', async function () {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        
        let buttonLogin = await driver.findElement(By.xpath('//*[@id="login-button"]'));
        const isButtonLoginDisplayed = await buttonLogin.isDisplayed()
        await buttonLogin.isDisplayed()
        
        assert.strictEqual(isButtonLoginDisplayed, true, 'Button Login should be displayed');
        
        await driver.quit();

    });


    it('Login SauceDemo', async function () {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');

        let inputUsername = await driver.findElement(By.xpath('//*[@id="user-name"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@id="password"]'));
        let buttonLogin = await driver.findElement(By.xpath('//*[@id="login-button"]'));
        await inputUsername.sendKeys('standard_user');
        await inputPassword.sendKeys('secret_sauce');
        await buttonLogin.click();  

        const title = await driver.getTitle();
        
        await driver.quit();

    });

    it('Urutkan Produk Z-A', async function () {
    let driver = await new Builder().forBrowser('chrome').build();

    // 1. Buka halaman login
    await driver.get('https://www.saucedemo.com');

    // 2. Login terlebih dahulu
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // 3. Tunggu sampai dropdown muncul setelah login
    await driver.wait(until.elementLocated(By.className('product_sort_container')), 5000);

    // 4. Pilih dropdown dan klik opsi "Z to A"
    let dropdown = await driver.findElement(By.className('product_sort_container'));
    await dropdown.sendKeys('Name (Z to A)');

    await driver.quit();

    });


});