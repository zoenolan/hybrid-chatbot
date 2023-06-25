// SPDX-License-Identifier: MIT

"use strict";

require("dotenv").config();

const readline = require("readline");
const chatbot = require("./chatbot.js");

const rulesFile = "./rules/rules.aiml";

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

  const openAiOrg = process.env.OPENAI_ORG;
  const openAIKey = process.env.OPENAI_API_KEY;
  const bot = new chatbot.Chatbot(rulesFile, openAiOrg, openAIKey);

  let done = false;
  while (!done) {
    const input = await getInput();

    done = isExitString(input);

    if (!done) {
      const response = await bot.process(input);

      console.log(response);
    }
  }

  rl.close();
}

main();
