import * as React from "react";
import Grid from "@mui/material/Grid";
import ShufflePanel from "./ShufflePanel";
import PreviewPanel from "./PreviewPanel";
// import ConsolePanel from "./ConsolePanel";
import ShuffleAction from "./ShuffleAction";
import CopyAction from "./CopyAction";
import GeneralMarketSettings from "./GeneralMarketSettings";
import AuctionGMarketSettings from "./AuctionGMarketSettings";
import NaverAdsSettings from "./NaverAdsSettings";
import ResetSettings from "./ResetSettings";

export default function MyComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <ShufflePanel />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PreviewPanel />
      </Grid>
      {/* 
      <Grid item xs={12}>
        <ConsolePanel />
      </Grid> 
      */}
      <Grid item xs={12}>
        <ShuffleAction />
        <CopyAction />
        <GeneralMarketSettings />
        <AuctionGMarketSettings />
        <NaverAdsSettings />
        <ResetSettings />
      </Grid>
    </Grid>
  );
}
