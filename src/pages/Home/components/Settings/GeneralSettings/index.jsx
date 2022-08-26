import * as React from "react";
import Grid from "@mui/material/Grid";
import LimitTextBytes from "./LimitTextBytes";
import StopWordsTextarea from "./StopWordsTextarea";
import HighlightingStopWords from "./HighlightingStopWords";

export default function MyComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LimitTextBytes />
      </Grid>
      <Grid item xs={12}>
        <StopWordsTextarea />
      </Grid>
      <Grid item xs={12}>
        <HighlightingStopWords />
      </Grid>
    </Grid>
  );
}
