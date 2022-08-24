const allure = require('allure-commandline')

exports.config = {

    specs: [
        './test/**/*.test.js'
    ],
 
    exclude: [],
  
    maxInstances: 3,

    capabilities: [{

        maxInstances: 2,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true

    }],
 
    logLevel: 'info',
  
    bail: 0,
 
    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
 
    services: ['chromedriver'],

    framework: 'mocha',
  
    reporters: [
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

     onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }

}
