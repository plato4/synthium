import { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import PanelOscillator from "./PanelOscillator";
import { createSynth } from "../createSynth";
import PanelEnvelope from "./PanelEnvelope";

const Synthesizer = () => {
  const [synth, setSynth] = useState(createSynth());
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper>
          <PanelOscillator oscillator={synth.oscillator} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <PanelEnvelope envelope={synth.amp} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
          <Button onClick={synth.start}>Play</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Synthesizer;
