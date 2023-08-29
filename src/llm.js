// SPDX-License-Identifier: MIT

"use strict";

const OpenAI = require("openai");

const model = "gpt-3.5-turbo";

class LLMBased {
    constructor(openAIKey) {
        this.llm = new OpenAI({apiKey: openAIKey});
    }

    async process(input) {  
        const result = await this.llm.chat.completions.create({
          messages: [{ role: "user", content: input }],
          model: model,
        });

        const response = result.choices[0].message.content;
        return response;
    }  
};

exports.LLMBased = LLMBased;