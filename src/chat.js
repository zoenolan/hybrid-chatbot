// SPDX-License-Identifier: GPL-3.0

"use strict";

require("dotenv").config();

const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getInput() {
  const inputString = await new Promise((resolve, reject) => {
    rl.question(`> `, (inputString) => {
      resolve(inputString);
    });
  });
  
  return inputString;
}

const isExitString = function (input) {
  const inputLowerCase = input.toLowerCase();

  if (inputLowerCase === "quit") {
    return true;
  } else if (inputLowerCase === "exit") {
    return true;
  }

  return false;
};

async function main() {
  console.log("\n Use 'quit' or 'exit' to leave the bot\n");

  let done = false;

  while (!done) {
    const inputString = await getInput();

    done = isExitString(inputString);

    if (!done) {
      const response = inputString;

      console.log(response);
    }
  }

  rl.close();
}

main();
