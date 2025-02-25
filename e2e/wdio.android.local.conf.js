export const config = {
    // Base config
    specs: ["tests/specs/**/app*.spec.js"],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 3 * 60 * 1000, // 3 min
    },

    // Local config overrides
    services: [
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    log: './logs/appium.log',
                },
            },
        ],
    ],

    before: async () => {
        if (driver.isAndroid) {
            await driver.updateSettings({
                waitForSelectorTimeout: 3 * 1000,
            });
        }
    },

    // Final config overrides
    capabilities: [
        {
            platformName: "Android",
            "wdio:maxInstances": 1,
            "appium:deviceName": "Pixel_XL_API_33",
            "appium:appPackage": "com.example.circleciappiumdemo",
            "appium:platformVersion": "13.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": "../android/app/build/outputs/apk/debug/app-debug.apk",
            "appium:appWaitActivity": "com.example.circleciappiumdemo.MainActivity",
            "appium:newCommandTimeout": 240,
        }
    ],
};
