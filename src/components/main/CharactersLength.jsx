import * as React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function CharactersLength() {
  return (
    <React.Fragment>
      <Typography>
        Characters Length: 0 - 9
      </Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        // value={value}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        disableSwap
      />
    </React.Fragment>
  );
}
