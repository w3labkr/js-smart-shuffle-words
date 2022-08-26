import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Shuffle from "./Shuffle";
import Copy from "./Copy";
import GeneralMarketSettings from "./GeneralMarketSettings";
import AuctionGMarketSettings from "./AuctionGMarketSettings";
import ResetSettings from "./ResetSettings";

export default function MyComponent() {
  const { t } = useTranslation();
  const shuffleRef = useRef(null);
  const previewRef = useRef(null);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h3">
          {t("Text")}
        </Typography>
        <TextField
          required
          multiline
          fullWidth
          rows={5}
          defaultValue="Microsoft Jira Trello Google Apple Amazon"
          variant="outlined"
          inputRef={shuffleRef}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h3">
          {t("Preview")}
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={5}
          defaultValue=""
          disabled
          variant="outlined"
          inputRef={previewRef}
        />
      </Grid>
      <Grid item xs={12}>
        <Shuffle shuffleRef={shuffleRef} previewRef={previewRef} />
        <Copy copyRef={previewRef} />
        <GeneralMarketSettings />
        <AuctionGMarketSettings />
        <ResetSettings />
      </Grid>
    </Grid>
  );
}
