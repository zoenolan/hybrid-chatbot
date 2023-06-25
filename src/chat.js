// SPDX-License-Identifier: GPL-3.0

"use strict";

require("dotenv").config();

const readline = require("readline");
const chatbot = require("./chatbot.js");

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

  const bot = new chatbot.Chatbot();

  let done = false;
  while (!done) {
    const input = await getInput();

    done = isExitString(input);

    if (!done) {
      const response = bot.process(input);

      console.log(response);
    }
  }

  rl.close();
}

main();
