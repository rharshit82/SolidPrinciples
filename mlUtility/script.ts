import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
import {
  supportedLanguages,
  principleNames,
  PrincipleNamesType,
} from "../data/constants/GlobalConstants";
import fs from "fs";

dotenv.config();
export type MessageContent =
  | string
  | (
      | {
          type: "text";
          text: string;
        }
      | {
          type: "image_url";
          image_url:
            | string
            | {
                url: string;
                detail?: "auto" | "low" | "high";
              };
        }
    )[];

type ResponseType = {
  [principleKey: string]: {
    [language: string]: MessageContent;
  };
};

const runScript = async (): Promise<void> => {
  const OPENAI_API_KEY: string | undefined = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    console.error("OpenAI API key is not set in the environment variables.");
    return;
  }

  const chatModel = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
  });

  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer."],
    ["user", "{input}"],
  ]);

  const chain = promptTemplate.pipe(chatModel);

  const responses: ResponseType = {};

  for (const principleKey in principleNames) {
    if (principleKey in principleNames) {
      console.log(`Processing principle: ${principleKey}`);

      const principle =
        principleNames[principleKey as keyof PrincipleNamesType];
      const principleWithoutSlash = principle.replace(/-/g, " ");

      responses[principleKey] = {};

      for (const language of supportedLanguages) {
        console.log(`\tProcessing language: ${language} for ${principleKey}`);

        const prompt = `Summarize the key points of implementing ${principleWithoutSlash} in ${language}.`;
        const res = await chain.invoke({ input: prompt });

        responses[principleKey][language] = res.content;

        fs.writeFileSync("summary.json", JSON.stringify(responses, null, 2));
      }
    }
  }

  console.log("Script completed. Data saved in 'summary.json'.");
};

runScript();
