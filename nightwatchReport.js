const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const moment = require("moment");

module.exports = {
  write: (results, options, done) => {
    const reportFilename = `${moment().format("YYYYMMDD_Hmmss")}.html`;
    const reportFilePath = path.join(
      __dirname,
      options.output_folder,
      reportFilename
    );

    // read the html template
    fs.readFile("./automation/resources/nightwatchReport.hbs", (err, data) => {
      if (err) throw err;

      const template = data.toString();

      // merge the template with the test results data
      const html = handlebars.compile(template)({
        results,
        options,
        timestamp: new Date().toString(),
        browser: options.filename_prefix.split("_").join(" ")
      });

      // write the html to a file
      fs.writeFile(reportFilePath, html, error => {
        if (error) throw error;
        // console.log(`Report generated: ${reportFilePath}`);
        done();
      });
    });
  }
};
