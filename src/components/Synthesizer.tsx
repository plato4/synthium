import { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import PanelOscillator from "./PanelOscillator";
import { createSynth } from "../createSynth";
import PanelEnvelope from "./PanelEnvelope";
import PanelFilter from "./PanelFilter";

const Synthesizer = () => {
  const [synth, setSynth] = useState(createSynth());
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper>
          <PanelOscillator osc={synth.osc} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <PanelEnvelope env={synth.amp} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <PanelFilter filter={synth.hp} name={"HP"} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <PanelFilter filter={synth.lp} name={"LP"} />
        </Paper>
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
