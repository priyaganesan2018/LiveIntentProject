describe('verify liveintent webpage', function()
{
    it('launch Liveintent webpage and click Get started button', function()
    {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get('https://www.liveintent.com/');
        let pageele = new LiveIntentPageElements();
        expect(element(by.xpath('//a[contains(text(), "Get Started")]')).isPresent()).toBe(true);
        element(by.xpath('//a[contains(text(), "Get Started")]')).click();
    });

    it('verify current page url and contact us button', function()
    {
        console.log(browser.driver.getCurrentUrl());
        expect(browser.driver.getCurrentUrl()).toEqual('https://www.liveintent.com/get-in-touch/');
        browser.driver.sleep(5000);
        var btnText = element(by.xpath('//button[@type = "submit"]'));
        expect(btnText.getText()).toEqual('Contact Us');

    });
});