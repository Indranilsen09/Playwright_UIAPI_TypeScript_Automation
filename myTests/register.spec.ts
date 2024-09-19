import {test,expect,Browser,Page,Locator} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test('Registration Test', async function()
    {
        const AUT_URL:string = "https://naveenautomationlabs.com/opencart/index.php?route=account/login";
        const Chrome:Browser = await chromium.launch({headless:false});
        const pages:Page = await Chrome.newPage();
        await pages.goto(AUT_URL);
        const registerbtn = await pages.locator('//a[text()="Continue"]');
        await registerbtn.click();
        const HeaderText:string = await pages.title();
        expect(HeaderText).toBe('Register Account');
        await pages.screenshot({path:'./Screenshots/RegistrationStart.png'});
        await pages.getByPlaceholder('First Name').fill("Indranil");
        await pages.getByPlaceholder('Last Name').fill("Sen");
        
        await pages.fill("#input-email",'indranilsen97@gmail.com');
        await pages.getByPlaceholder('Telephone').fill('6290256743');
        await pages.fill('#input-password','indra@123');
        await pages.getByPlaceholder('Password Confirm').fill('indra@123');
        const newsletterYESbtn:Locator = await pages.locator('//input[@name="newsletter" and @value=1]');
        newsletterYESbtn.click();
        await pages.screenshot({path:'./Screenshots/Registrationfilled.png'});
        await pages.click('//input[@name="agree" and @value=1]');
        await pages.getByRole('button', { name: 'Continue' }).click();
        await pages.waitForTimeout(5000);
        const titletext:string = await pages.title();
        console.info(titletext);
        Chrome.close();
    
    });