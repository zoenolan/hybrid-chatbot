// SPDX-License-Identifier: MIT

"use strict";

const { Configuration, OpenAIApi } = require("openai");

const model = "gpt-3.5-turbo";

class LLMBased {
    constructor(openAiOrg, openAIKey) {
        const configuration = new Configuration({
            organization: openAiOrg,
            apiKey: openAIKey,
          });
        this.llm = new OpenAIApi(configuration);
    }

    async process(input) {  
        const result = await this.llm.createChatCompletion({
            model,
            messages: [
              { role: "user", content: input },
            ],
          });
        
        const response = result.data.choices[0].message.content;
        return response;
    }  
};

exports.LLMBased = LLMBased;