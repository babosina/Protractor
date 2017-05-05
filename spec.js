/**
 * Created by Babos on 05.05.2017.
 */

// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //allows browser to open required page

        expect(browser.getTitle()).toEqual('Super Calculator');
        //comparing page title == 'Super Calculator'
    });
});
