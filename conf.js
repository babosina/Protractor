/**
 * Created by babos on 05.05.17.
 */

// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
    // 'spec.js',
    // 'adition.js',
    'multiscenario.js'],

    //whitch browser to be tested on
    capabilities: {
        browserName: 'chrome'
    }

    // multiCapabilities: [{
    //     browserName: 'chrome'
    // }, {
    //     browserName: 'firefox'
    // }]

}
