/**
 * Created by babos on 05.05.17.
 */

// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        //opens webpage
        browser.get('http://juliemr.github.io/protractor-demo/');

        //search elements by ng-model
        element(by.model('first')).sendKeys(1); //input number 1 in the proper input
        element(by.model('second')).sendKeys(2);

        //search element by id and click on it
        element(by.id('gobutton')).click();

        //search by {{latest}}
        // expect(element(by.binding('latest')).getText()).toEqual('5'); // This is wrong! Result is '3'
        expect(element(by.binding('latest')).getText()).toEqual('3');
    });
});