const {webkit, chromium, firefox} = require('playwright');
import {test, expect, Browser, Page, Locator} from '@playwright/test';

test('Login Test', async ()=>
    {
        const chrome:Browser = await chromium.launch({headless:true});
        const page:Page = await chrome.newPage();
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await page.screenshot({path:'./Screenshots/logintest.png'});
        const emailId:Locator = await  page.locator('//input[@name="email"]');
        const pass = await page.locator('//input[@name="password"]');
        const loginBtn:Locator = await page.locator('//input[@value="Login"]');
        await emailId.fill('indranilsen97@gmail.com');
        await pass.fill('indra@123');
        await loginBtn.click();
        await page.waitForTimeout(5000);
        await page.screenshot({path:'./Screenshots/logintest2.png'});
        const titletext= await page.title();
        expect(titletext).toBe('My Account');

        chrome.close();

        

});
