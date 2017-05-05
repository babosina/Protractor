/**
 * Created by Babos on 05.05.2017.
 */

// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {

        //allows browser to open required page
        browser.get('http://juliemr.github.io/protractor-demo/');

        //comparing page title == 'Super Calculator'
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});
