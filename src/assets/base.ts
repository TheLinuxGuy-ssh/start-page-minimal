import { User } from "./config";

export const commands = {
    whoami: User.username,
    cd: (directory:any) => `changed path to ${directory}`
  }