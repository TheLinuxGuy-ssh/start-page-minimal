import { useState } from 'react';
import Metadata from "./components/Metadata";
import Wallpaper from './components/Wallpaper';
import Dock from './components/Dock';

function App() {
  return (
    <>
      <Metadata />
      <Wallpaper />
      <Dock />
    </>
  )
}

export default App
