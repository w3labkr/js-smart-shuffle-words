import * as React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Content() {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h3">
          {t("input")}
        </Typography>
        <TextField
          required
          multiline
          fullWidth
          rows={4}
          defaultValue="Microsoft Jira Trello Google Apple Amazon"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h3">
          {t("output")}
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={4}
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" size="large">
          {t("shuffle & copy")}
        </Button>
      </Grid>
    </Grid>
  );
}
