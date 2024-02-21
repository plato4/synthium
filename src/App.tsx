import { useState } from "react";

import "./App.css";
import * as Tone from "tone";

const createSynth = () => {
  //OSC
  const note = 440;
  const wave = "sine";

  //LFO
  const lfoRate = 10;

  //ENV
  const attack = 0.0;
  const decay = 0.2;
  const sustain = 1.0;
  const release = 0.8;

  const osc = new Tone.Oscillator(note, wave);
  const lfo = new Tone.LFO(lfoRate, -10, 10).start();

  const amp = new Tone.AmplitudeEnvelope({
    attack,
    decay,
    sustain,
    release,
  }).toDestination();

  lfo.connect(osc.volume);
  osc.connect(amp).start();
  return amp;
};

function App() {
  const amp = createSynth();
  Tone.start();
  return (
    <>
      <button
        onClick={() => {
          amp.triggerAttackRelease("8t");
        }}
      ></button>
    </>
  );
}

export default App;
