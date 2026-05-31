#!/usr/bin/env bun

import { Command } from "commander";

const program = new Command();

program.name("sentinel").description("this is a test agent").version("0.0.2")


program.command("rise").description("this is init the agent").action(
    async()=>{
        console.log("sentinel is rising")
    }
)

await program.parseAsync(process.argv)