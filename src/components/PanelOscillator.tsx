import React from "react";
import { Slider } from "@mui/material";
import * as Tone from "tone";
import "./paneloscillator.css";

const PanelOscillator: React.FC<{ oscillator: Tone.Oscillator }> = ({
  oscillator,
}) => {
  oscillator.frequency;
  return (
    <div className="panel-oscillator">
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        defaultValue={0}
        max={50}
        min={0}
        step={1}
        aria-label="Frequency"
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default PanelOscillator;
