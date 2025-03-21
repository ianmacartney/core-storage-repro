import { TABLE_EVALS } from "@mastra/core/storage";

import * as sdk from "@ai-sdk/openai";
export * as ai from "ai";
export { sdk };

export const o = sdk.openai("gpt-3.5-turbo");

export { TABLE_EVALS };
