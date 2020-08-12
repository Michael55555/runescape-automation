const robot = require("robotjs");
const readlineSync = require("readline-sync");
const loginProcedure = require("./scripts/loginProcedure");

let resolution;

class RobotController {
  // Unused
  constructor() {
    // TODO: implement a pixel converter for the instance variables based on resolution
    const resolutions = ["1920x1080"],
      index = readlineSync.keyInSelect(
        resolutions,
        "Which resolution are you using?"
      );
    console.log("Ok, " + resolutions[index] + " established.");
    resolution = resolutions[index];
  }

  login() {
    loginProcedure();
  }
}

module.exports = RobotController;
