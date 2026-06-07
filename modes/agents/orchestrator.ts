
import { isCancel, text } from "@clack/prompts";
import chalk from "chalk";
import { defaultAgentConfig } from "./types";
import { ActionTracker } from "./action-tracker";

export async function runAgentMode() {
    
    console.log(chalk.green("Agent mode"))

    const goal = await text({
        message:"What would ya like the sentinel to do",
        placeholder:"focus on this codebase"
    })

    if(isCancel(goal)||!goal.trim()) return

    const congif = defaultAgentConfig()
    const tracker = new ActionTracker()

}