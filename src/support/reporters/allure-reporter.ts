function Reporter() {
  return {
    resultsDir: './reports/allure-results',
    labels: [
      {
        pattern: [/@feature:(.*)/],
        name: 'epic',
      },
      {
        pattern: [/@severity:(.*)/],
        name: 'severity',
      },
    ],
    links: [
      {
        pattern: [/@issue=(.*)/],
        type: 'issue',
        urlTemplate: 'http://localhost:8080/issue/%s',
      },
      {
        pattern: [/@tms=(.*)/],
        type: 'tms',
        urlTemplate: 'http://localhost:8080/tms/%s',
      },
    ],
  };
}
Reporter.prototype.constructor = Reporter;

exports.default = Reporter;
