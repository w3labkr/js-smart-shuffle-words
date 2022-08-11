import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import RandomWord from "@components/main/RandomWord";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: "700" }}>
        {t("set additional string")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h3">
          {t("prepend to string")} <Switch defaultChecked />
          </Typography>
          <TextField
            defaultValue=""
            placeholder={t("please enter text")}
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
          />
          <RandomWord />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h3">
          {t("append after string")} <Switch defaultChecked />
          </Typography>
          <TextField
            defaultValue=""
            placeholder={t("please enter text")}
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
          />
          <RandomWord />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
