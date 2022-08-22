import * as React from "react";
import Grid from "@mui/material/Grid";
import PrependSettings from "../PrependSettings";
import AppendSettings from "../AppendSettings";

export default function MyComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <PrependSettings />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AppendSettings />
      </Grid>
    </Grid>
  );
}
