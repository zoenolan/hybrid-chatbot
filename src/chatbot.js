// SPDX-License-Identifier: MIT

"use strict";

const chatbot = require("./rules.js");

class Chatbot {
    constructor(rulesFile) {
        this.rulesBased  = new chatbot.RulesBased(rulesFile);
    }

    async process(input) {  
        return this.rulesBased.process(input);
    }  
};

exports.Chatbot = Chatbot;