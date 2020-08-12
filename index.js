const RobotController = require("./RobotController");

console.log(`
Welcome to OSRS Woodcutting Automation...
Please note pre-requirements for using this application:
1. Windows 10 with Cortana search bar active
2. Resolution set to 1920 x 1080 
3. Display scale set to 100%
4. A runescape account which has passed tutorial island
5. An empty inventory with a hatchet
`);

const worker = new RobotController();
worker.login();
