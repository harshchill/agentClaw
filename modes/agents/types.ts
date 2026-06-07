export type ActionType =
  | "file_create"
  | "file_modify"
  | "file_delete"
  | "folder_create"
  | "code_analysis"
  | "tool_execute";

export type ActionStatus = "pending" | "executed" | "approved" | "rejected";

export interface ActionLog  {
  id: String;
  timeStamp: Date;
  type:ActionType;
  path:String;
  details: {
    before? : String;
    after? : String;
    toolName? : String;
    toolResult? : String;
    error? : String;
    command? : String;
  }
  status : ActionStatus;
  userApproved? : Boolean;
};

export interface AgentConfig {
    codebasePath : String;
    maxFileSizeToRead: Number;
    excludePatterns : String[];
    tools : {
        allowShellExecution : Boolean;
        allowFileModification : Boolean;
        allowFileCreation : Boolean;
        allowFolderCreation : Boolean;
    }
}

export const defaultAgentConfig =(): AgentConfig => ({
    codebasePath : process.cwd(),
    maxFileSizeToRead : 1024 * 1024 ,
    excludePatterns : [
        "node_module",
        ".git",
        "dist",
        ".next",
        "build",
        ".env*",
        "*.log",
    ],
    tools:{
        allowShellExecution : true,
        allowFileModification : true,
        allowFileCreation : true,
        allowFolderCreation : true,
    }
})

export function isMutationType (t:ActionType):Boolean{
    return (
        t === "file_create" ||
        t === "file_modify" ||
        t === "file_delete" ||
        t === "folder_create" ||
        t === "tool_execute" 
    )
}
