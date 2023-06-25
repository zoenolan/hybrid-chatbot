// SPDX-License-Identifier: MIT

"use strict";

const rulesBased = require("./rules.js");
const llmBased = require("./llm.js");

class Chatbot {
    constructor(rulesFile, openAiOrg, openAIKey) {
        this.rulesBased = new rulesBased.RulesBased(rulesFile);
        this.llmBased = new llmBased.LLMBased(openAiOrg, openAIKey);        
    }

    emptyReply(reply)   {   
        const empotyReply = ((reply === "") || (reply === undefined));
        return empotyReply;
    }

    async process(input) {  
        const reply = await this.rulesBased.process(input);

        if (this.emptyReply(reply)) {
            const llmReply = await this.llmBased.process(input);

            return llmReply;
        } 

        return reply;
    }  
};

exports.Chatbot = Chatbot;