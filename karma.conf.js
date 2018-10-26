var es6transformer = require("karma-typescript-es6-transform");

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'chai', 'sinon', 'karma-typescript'],
    files: [
      'src/**/*.ts'
    ],
    exclude: [
      'node_modules/**/*.ts', 'coverage/**/*.ts'
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },
    reporters: ["progress", "karma-typescript"],
    coverageIstanbulReporter: {
      reports: [ 'text-summary' ],
      fixWebpackSourcePaths: false
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.karma.json',
			bundlerOptions: {
				transforms: [
					es6transformer()
				]
			}
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    concurrency: Infinity
  })
}
