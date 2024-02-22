import React, { useState } from "react";

import * as Tone from "tone";
import "./paneloscillator.css";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const PanelOscillator: React.FC<{ oscillator: Tone.Oscillator }> = ({
  oscillator,
}) => {
  const [wave, setWave] = useState(oscillator.type);

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
            value={oscillator.type}
            label="Wave"
            onChange={(event) => {
              oscillator.type = event.target.value as Tone.ToneOscillatorType;
              setWave(oscillator.type);
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
