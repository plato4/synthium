import { useState } from "react";

import "./App.css";
import * as Tone from "tone";

const createSynth = () => {
  //LFO
  const lfoRate = 5;
  const lfo = new Tone.LFO(lfoRate, -10, 10).start();

  //OSC
  const note = 440;
  const wave = "sine";
  const osc = new Tone.Oscillator(note, wave).start();

  //HP
  const hpFreq = 1500;
  const hp = new Tone.Filter(hpFreq, "highpass");

  //LP
  const lpDelay = 0;
  const lpRes = 0;
  const lpDamp = 0;
  const lp = new Tone.LowpassCombFilter(lpDelay, lpRes, lpDamp);

  //ENV
  const attack = 0;
  const decay = 0;
  const sustain = 0;
  const release = 5;
  const amp = new Tone.AmplitudeEnvelope({
    attack,
    decay,
    sustain,
    release,
  });

  //CHORUS
  const chorusFreq = 15;
  const chorusDelay = 0.5;
  const chorusDepth = 5;
  const chorus = new Tone.Chorus(chorusFreq, chorusDelay, chorusDepth)
    .toDestination()
    .start();

  lfo.connect(osc.volume);
  osc.connect(hp);
  hp.connect(amp);
  amp.connect(chorus);
  chorus.toDestination();

  return {
    start: () => {
      amp.triggerAttackRelease("8t");
    },
  };
};

function App() {
  const synth = createSynth();
  Tone.start();
  return (
    <>
      <button
        onClick={() => {
          synth.start();
        }}
      ></button>
    </>
  );
}

export default App;
