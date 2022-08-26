import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import * as mainState from "@atoms/main";

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function MyComponent() {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [marketSettings, setMarketSettings] = useRecoilState(mainState["marketSettingsState"]);
  const setStartEnabled = useSetRecoilState(mainState["startEnabledState"]);
  const setEndEnabled = useSetRecoilState(mainState["endEnabledState"]);

  const handleClick = () => {
    setMarketSettings('Auction/G-Market');
    setStartEnabled(true);
    setEndEnabled(true);
    setSnackbarOpen(true);
  };

  return (
    <>
      <Button
        variant={marketSettings === 'Auction/G-Market' ? "contained" : "outlined"}
        size="large"
        color="secondary"
        onClick={handleClick}
      >
        {`${t("Auction")}/${t("G-Market")}`}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t("Updated!")}</Alert>
      </Snackbar>
    </>
  );
}
