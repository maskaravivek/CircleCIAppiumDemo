import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    specs: ["../tests/specs/**/app*.spec.ts"],

    capabilities: [
        {
            'appium:app': process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',
            'appium:deviceName': 'Samsung Galaxy S22 Ultra',
            'appium:platformVersion': '12.0',
            'platformName': 'Android',
            'bstack:options': {
                debug: true,
                projectName: 'wdio-test-project',
                buildName: 'android',
                sessionName: 'wdio-test'
            }
        }
    ] as WebdriverIO.Capabilities[],

    user: process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    services: ['browserstack'],

    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 3 * 60 * 1000, // 3min
    },
};
