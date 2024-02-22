import { Grid, Slider } from "@mui/material";
import React, { useState } from "react";
import * as Tone from "tone";
import "./panelfilter.css";

const PanelFilter: React.FC<{ filter: Tone.Filter; name: string }> = ({
  filter,
  name,
}) => {
  const [frequency, setfrequency] = useState(
    filter.frequency.value.valueOf() as number
  );
  return (
    <Grid container spacing={2} className="panel-filter-grid-container">
      <Grid item xs={12}>
        {name}
      </Grid>
      <Grid item xs={3}>
        <Slider
          aria-label="Attack"
          orientation="vertical"
          defaultValue={filter.frequency.value.valueOf() as number}
          valueLabelDisplay="auto"
          className="panel-filter-slider"
          max={1500}
          min={0}
          step={10}
          onChange={(event, value) => {
            const frequency = value as number;
            filter.set({ frequency });
            setfrequency(frequency);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PanelFilter;
