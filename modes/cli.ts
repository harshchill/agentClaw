import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";
import { isAwaitKeyword } from "typescript";
import { runAgentMode } from "./agents/orchestrator";

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose the sub-cli mode",
      options: [
        { value: "Agent", label: "Agent mode" },
        { value: "Ask", label: "Ask mode" },
        { value: "Plan", label: "Plan mode" },
        { value: "Back", label: "<- Back to main menu" },
      ],
    });
    if (isCancel(mode) || mode === "Back") return;

    if (mode === "Agent") {
        await runAgentMode()
    }
    if (mode === "Plan") {
        console.log("Plan mode activated")
    }
    if (mode === "Ask") {
        console.log("Ask mode activated")
    }

    if (mode !== "Agent" && mode !== "Ask" && mode !== "Plan") {
      console.log(chalk.yellow("\n The mode is not selected \n"));
    }
  }
}
