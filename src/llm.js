// SPDX-License-Identifier: MIT

"use strict";

const openai = require("openai");

const model = "text-davinci-003";

class LLMBased {
    constructor(openAiOrg, openAIKey) {
        const configuration = new openai.Configuration({
            organization: openAiOrg,
            apiKey: openAIKey,
          });
        this.llm = new openai.OpenAIApi(configuration);
    }

    async process(input) {  
        const result = await this.llm.createCompletion({
            model,
            max_tokens: 1024,
            prompt: input,
          });
        
          const response = result.data.choices[0].text;
          return response;
    }  
};

exports.LLMBased = LLMBased;