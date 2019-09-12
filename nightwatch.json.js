const os = require("os");
const config = require("./automation/config/config.json");

module.exports = {
  src_folders: ["./automation/tests"],
  output_folder: "./automation/reports",
  custom_commands_path: "./automation/commands",
  custom_assertions_path: "",
  page_objects_path: "./automation/pages/",
  globals_path: "./automation/globals/global.js",

  selenium: {
    start_process: true,
    server_path:
      "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar",
    log_path: "",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": `./node_modules/.bin/chromedriver${os.platform() ===
      "win32"
        ? ".cmd"
        : ""}`,
      "webdriver.gecko.driver": `./node_modules/.bin/geckodriver${os.platform() ===
      "win32"
        ? ".cmd"
        : ""}`,
      "webdriver.edge.driver": ""
    }
  },

  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: true,
        path: "./reports/screenshots"
      },
      desiredCapabilities: {
        browserName: config.browser.browserName,
        marionette: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge"
      }
    }
  }
};
