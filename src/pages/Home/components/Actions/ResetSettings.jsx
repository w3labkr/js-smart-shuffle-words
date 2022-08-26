import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useResetRecoilState } from "recoil";
import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import * as mainState from "@atoms/main";

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function MyComponent() {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const resetMarketSettings = useResetRecoilState(
    mainState["marketSettingsState"]
  );
  const resetSettingsExpandedPanelState = useResetRecoilState(
    mainState["settingsExpandedPanelState"]
  );
  const resetStopWords = useResetRecoilState(mainState["stopWordsState"]);
  const resetLimitTextBytes = useResetRecoilState(
    mainState["limitTextBytesState"]
  );
  const resetStartEnabled = useResetRecoilState(mainState["startEnabledState"]);
  const resetStartText = useResetRecoilState(mainState["startTextState"]);
  const resetStartChoiceRandomCharacter = useResetRecoilState(
    mainState["startChoiceRandomCharacterState"]
  );
  const resetStartLimitRandomTextLength = useResetRecoilState(
    mainState["startLimitRandomTextLengthState"]
  );
  const resetEndEnabled = useResetRecoilState(mainState["endEnabledState"]);
  const resetEndText = useResetRecoilState(mainState["endTextState"]);
  const resetEndChoiceRandomCharacter = useResetRecoilState(
    mainState["endChoiceRandomCharacterState"]
  );
  const resetEndLimitRandomTextLength = useResetRecoilState(
    mainState["endLimitRandomTextLengthState"]
  );

  const handleAgree = () => {
    resetMarketSettings();
    resetSettingsExpandedPanelState();
    resetStopWords();
    resetLimitTextBytes();
    resetStartEnabled();
    resetStartText();
    resetStartChoiceRandomCharacter();
    resetStartLimitRandomTextLength();
    resetEndEnabled();
    resetEndText();
    resetEndChoiceRandomCharacter();
    resetEndLimitRandomTextLength();
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        color="error"
        onClick={() => setDialogOpen(true)}
      >
        {t("Reset")}
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t("Are you sure you want to reset all settings?")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t(
              "All settings in General Settings and Advanced Settings will be reset."
            )}
            <br />
            {t("Resetting cannot restore existing settings.")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{t("Disagree")}</Button>
          <Button onClick={handleAgree} autoFocus>
            {t("Agree")}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t("Reseted!")}</Alert>
      </Snackbar>
    </>
  );
}
