import { useState } from "react";
import { Grid, Paper } from "@mui/material";
import PanelOscillator from "./PanelOscillator";
import { createSynth } from "../createSynth";

const Synthesizer = () => {
  const [synth, setSynth] = useState(createSynth());
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper>
          <PanelOscillator oscillator={synth.oscillator} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
    </Grid>
  );
};

export default Synthesizer;
