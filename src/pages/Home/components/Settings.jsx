import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import SettingsTitle from "./SettingsTitle";
import PrependSettings from "./PrependSettings";
import AppendSettings from "./AppendSettings";

export default function MyComponent() {
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <SettingsTitle />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <PrependSettings />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppendSettings />
        </Grid>
      </Grid>
    </Fragment>
  );
}
