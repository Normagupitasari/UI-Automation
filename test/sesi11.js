import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';
import chrome from 'selenium-webdriver/chrome.js';

import fs from 'fs';
import { PNG }from "pngjs";
import pixelmatch from "pixelmatch";
import page_login from '../pages/page_login.js';


describe('Google Search Test', function () {
    let driver;

    it('Headless Chrome - Login SauceDemo', async function () {
        let options = new chrome.Options();
        driver = await new Builder().forBrowser("chrome").build();
        
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        assert.strictEqual(title, 'Swag Labs', 'Title does not match');
        
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'));
        let inputUsernamePOM = await driver.findElement(page_login.inputUsername);
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));  

        await inputUsernamePOM.sendKeys('standard_user');
        await inputPassword.sendKeys('secret_sauce');
        await buttonLogin.click();

        let buttonCart = await driver.wait(
            until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')), 
            10000
        );
        await driver.wait(until.elementIsVisible(buttonCart), 5000, 'Shopping cart harus tampil');
        await buttonCart.isDisplayed();

        let textAppLogo = await driver.findElement(By.className('app_logo'));
        let logotext = await textAppLogo.getText();
        assert.strictEqual(logotext, 'Swag Labs', 'Text logo tidak sesuai');    

        await driver.sleep(1700);
        await driver.quit();    
        });

    it('Visit SauceDemo dan cek page title', async function () {
        let options = new chrome.Options();
        options.addArguments("--headless");

        driver = await new Builder().forBrowser('firefox').setChromeOptions(options).build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        let ss_full = await driver.takeScreenshot();
        fs.writeFileSync("full_screenshot.png", Buffer.from(ss_full, "base64"));

        let inputUsernamePOM = await driver.findElement(page_login.inputUsername)
        let ss_inputusername = await inputUsernamePOM.takeScreenshot();
        fs.writeFileSync("inputusername.png", Buffer.from(ss_inputusername, "base64"));

        driver.quit();
    })
    
});