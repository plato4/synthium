import { Grid, Slider } from "@mui/material";
import React, { useState } from "react";
import "./panelenvelope.css";
import * as Tone from "tone";

const PanelEnvelope: React.FC<{ envelope: Tone.Envelope }> = ({ envelope }) => {
  const [attack, setAttack] = useState(envelope.attack.valueOf() as number);
  const [sustain, setSustain] = useState(envelope.sustain.valueOf() as number);
  const [decay, setDecay] = useState(envelope.decay.valueOf() as number);
  const [release, setRelease] = useState(envelope.release.valueOf() as number);
  return (
    <Grid container spacing={2} className="panel-envelope-grid-container">
      <Grid item xs={12}>
        Envelope
      </Grid>
      <Grid item xs={3}>
        <div>Attack</div>
        <Slider
          aria-label="Attack"
          orientation="vertical"
          defaultValue={envelope.attack.valueOf() as number}
          valueLabelDisplay="auto"
          max={1}
          min={0}
          step={0.01}
          onChange={(event, value) => {
            const attack = value as number;
            envelope.set({ attack });
            setAttack(attack);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <div>Sustain</div>{" "}
        <Slider
          aria-label="Sustain"
          orientation="vertical"
          defaultValue={envelope.sustain.valueOf() as number}
          valueLabelDisplay="auto"
          max={1}
          min={0}
          step={0.01}
          onChange={(event, value) => {
            const sustain = value as number;
            envelope.set({ sustain });
            setSustain(sustain);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <div>Decay</div>{" "}
        <Slider
          aria-label="Decay"
          orientation="vertical"
          defaultValue={envelope.decay.valueOf() as number}
          valueLabelDisplay="auto"
          max={1}
          min={0}
          step={0.01}
          onChange={(event, value) => {
            const decay = value as number;
            envelope.set({ decay });
            setDecay(decay);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <div>Release</div>{" "}
        <Slider
          aria-label="Release"
          orientation="vertical"
          defaultValue={envelope.release.valueOf() as number}
          valueLabelDisplay="auto"
          max={1}
          min={0}
          step={0.01}
          onChange={(event, value) => {
            const release = value as number;
            envelope.set({ release });
            setRelease(release);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PanelEnvelope;
