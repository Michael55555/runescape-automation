const readlineSync = require("readline-sync");

function requestCredentials() {
  let email = readlineSync.questionEMail("Input email: ", {
    defaultInput: process.env.EMAIL,
  });
  let password = readlineSync.question("Input password: ", {
    hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
    defaultInput: process.env.PASSWORD,
  });
  let credentials = { email, password };
  return credentials;
}

module.exports = requestCredentials;
