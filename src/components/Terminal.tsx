import { commands } from "../assets/base";
import { TerminalData } from "../assets/config";
import { ReactTerminal } from "react-terminal";



function Terminal() {
  return (
    <div className="terminal">
    <ReactTerminal
      commands={commands}
      showControlBar={false}
      errorMessage="Command not found."
      prompt={TerminalData.prompt}
      theme="material-dark"
    />
    </div>
  );
}

export default Terminal;