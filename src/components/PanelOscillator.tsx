import React, { useState } from "react";

import * as Tone from "tone";
import "./paneloscillator.css";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const PanelOscillator: React.FC<{ osc: Tone.Oscillator }> = ({ osc }) => {
  const [wave, setWave] = useState(osc.type);

  return (
    <Grid container spacing={2} className="panel-oscillator-grid-container">
      <Grid item xs={12}>
        Oscillator
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <FormControl fullWidth>
          <InputLabel id="wave-label">Wave</InputLabel>
          <Select
            labelId="wave-select-label"
            className="wave-select"
            value={osc.type}
            label="Wave"
            onChange={(event) => {
              osc.type = event.target.value as Tone.ToneOscillatorType;
              setWave(osc.type);
            }}
          >
            <MenuItem value="sine">Sine</MenuItem>
            <MenuItem value="square">Square</MenuItem>
            <MenuItem value="triangle">Triangle</MenuItem>
            <MenuItem value="sawtooth">Sawtooth</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default PanelOscillator;
