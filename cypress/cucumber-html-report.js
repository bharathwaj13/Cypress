const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: '../cypress/cucumber-json',
	reportPath: './reports/cucumber-html/report.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '108'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2022, 02:56 PM EST'}
        ]
    }
});