import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function StopWords() {
  return (
    <React.Fragment>
      <Typography sx={{ mb: 1 }}>
        Stop Words: 
      </Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        variant="outlined"
        placeholder="Please enter text"
        helperText="Seperated by comma"
      />
    </React.Fragment>
  );
}
