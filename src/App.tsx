import Greeting from "./components/Greeting.tsx";
import Metadata from "./components/Metadata.tsx";
import Wallpaper from './components/Wallpaper.tsx';
import Terminal from "./components/Terminal.tsx";
import Dock from "./components/Dock.tsx";

function App() {
  return (
    <>
      <Greeting />
      <Metadata />
      <Wallpaper />
      <Terminal />
      <Dock />
    </>
  )
}

export default App
