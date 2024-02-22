import * as Tone from "tone";

export const createSynth = () => {
  //OSC
  const note = 440;
  const wave = "sine";
  const osc = new Tone.Oscillator(note, wave).start();

  const attack = 0.1;
  const decay = 0;
  const sustain = 0;
  const release = 5;
  const amp = new Tone.AmplitudeEnvelope({
    attack,
    decay,
    sustain,
    release,
  });

  osc.connect(amp);
  amp.toDestination();

  return {
    start: () => {
      Tone.start();
      amp.triggerAttackRelease("8t");
    },
    oscillator: osc,
    amp,
  };

  /*//LFO
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
  const lpFreq = 1500;
  const lp = new Tone.Filter(lpFreq, "lowpass");

  //ENV
  const attack = 0.1;
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
  const chorusDelay = 0.1;
  const chorusDepth = 5;
  const chorus = new Tone.Chorus(chorusFreq, chorusDelay, chorusDepth)
    .toDestination()
    .start();

  lfo.connect(osc.volume);
  osc.connect(hp);
  hp.connect(lp);
  lp.connect(amp);
  amp.connect(chorus);
  chorus.toDestination();

  Tone.start();

  return {
    start: () => {
      amp.triggerAttackRelease("8t");
    },
    oscillator: osc,
  };*/
};
