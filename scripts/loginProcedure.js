const requestCredentials = require("../utils/requestCredentials");
const robot = require("robotjs");
const sleep = require("../utils/sleep");

const cortanaLocation = { x: 89, y: 1061 };
const existingUserLocation = { x: 1050, y: 473 };
const userNameLocation = { x: 901, y: 431 };
const passwordLocation = { x: 936, y: 449 };
const loginLocation = { x: 866, y: 505 };
const worldSelectorLocation = { x: 640, y: 655 };
const world301Location = { x: 657, y: 224 };

function loginProcedure() {
  const credentials = requestCredentials(); // sync input using readline-sync
  robot.moveMouse(cortanaLocation.x, cortanaLocation.y);
  robot.mouseClick();
  sleep(1000);
  robot.typeString("runescape");
  sleep(1000);
  robot.keyTap("enter");
  sleep(10000);
  robot.moveMouse(existingUserLocation.x, existingUserLocation.y);
  sleep(3000);
  robot.mouseClick();
  sleep(1000);
  robot.moveMouse(userNameLocation.x, userNameLocation.y);
  robot.typeString(credentials.email);
  sleep(1000);
  robot.moveMouse(passwordLocation.x, passwordLocation.y);
  robot.mouseClick();
  sleep(1000);
  robot.typeString(credentials.password);
  sleep(1000);
  robot.moveMouse(worldSelectorLocation.x, worldSelectorLocation.y);
  robot.mouseClick();
  sleep(3000);
  robot.moveMouse(world301Location.x, world301Location.y);
  robot.mouseClick();
  sleep(2000);
  robot.moveMouse(loginLocation.x, loginLocation.y);
  robot.mouseClick();
  sleep(7000);
  robot.mouseClick();
}

module.exports = loginProcedure;
