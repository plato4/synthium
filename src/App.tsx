import { useState } from "react";

import "./App.css";
import * as Tone from "tone";

function App() {
  const [synth, setSynth] = useState(new Tone.Synth().toDestination());

  synth.triggerAttackRelease("C4", "8n");
  synth;

  return <></>;
}

export default App;
