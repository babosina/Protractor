/**
 * Created by babos on 05.05.17.
 */

// spec.js
describe('Protractor Demo App', function() {

    // assigning elements to variables
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    //runs before each it block
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    //check the title
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    //addition
    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    //another addition
    it('should add four and six', function() {
        // Fill this in.
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');
    });
});