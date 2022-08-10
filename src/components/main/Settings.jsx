import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import RandomWords from "@components/main/RandomWords";

export default function Settings() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: "700" }}>
        Customize Prefix and Suffix
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h3">
            Prefix <Switch defaultChecked />
          </Typography>
          <TextField
            defaultValue=""
            placeholder="Please enter text"
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
          />
          <RandomWords />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h3">
            Suffix <Switch defaultChecked />
          </Typography>
          <TextField
            defaultValue=""
            placeholder="Please enter text"
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
          />
          <RandomWords />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
