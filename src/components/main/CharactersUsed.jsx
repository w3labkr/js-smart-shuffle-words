import * as React from "react";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CharactersUsed() {
  return (
    <React.Fragment>
      <Typography>
        Characters Used:
      </Typography>
      <FormGroup sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
        <FormControlLabel
          label="가나다"
          control={<Checkbox defaultChecked size="small" />}
        />
        <FormControlLabel label="ABC" control={<Checkbox defaultChecked size="small" />} />
        <FormControlLabel label="abc" control={<Checkbox defaultChecked size="small" />} />
        <FormControlLabel label="123" control={<Checkbox size="small" />} />
      </FormGroup>
    </React.Fragment>
  );
}
