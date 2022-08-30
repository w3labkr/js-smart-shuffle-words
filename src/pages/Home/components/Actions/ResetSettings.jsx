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
import { debounce } from "lodash";

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function MyComponent() {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const resetShuffleTextState = useResetRecoilState(
    mainState["shuffleTextState"]
  );
  const resetPreviewTextState = useResetRecoilState(
    mainState["previewTextState"]
  );
  const resetConsoleTextState = useResetRecoilState(
    mainState["consoleTextState"]
  );
  const resetMarketSettingsState = useResetRecoilState(
    mainState["marketSettingsState"]
  );
  const resetSettingsExpandedPanelState = useResetRecoilState(
    mainState["settingsExpandedPanelState"]
  );

  // General Settings
  const resetIndexColumnState = useResetRecoilState(
    mainState["indexColumnState"]
  );
  const resetLimitTextLengthState = useResetRecoilState(
    mainState["lineTextLengthState"]
  );
  const resetSpecialCharactersState = useResetRecoilState(
    mainState["specialCharactersState"]
  );
  const resetStopWordsState = useResetRecoilState(mainState["stopWordsState"]);

  // Advanced Settings
  const resetStartEnabledState = useResetRecoilState(
    mainState["startEnabledState"]
  );
  const resetStartTextState = useResetRecoilState(mainState["startTextState"]);
  const resetStartChoiceRandomCharacterState = useResetRecoilState(
    mainState["startChoiceRandomCharacterState"]
  );
  const resetStartLimitRandomTextLengthState = useResetRecoilState(
    mainState["startLimitRandomTextLengthState"]
  );
  const resetEndEnabledState = useResetRecoilState(
    mainState["endEnabledState"]
  );
  const resetEndTextState = useResetRecoilState(mainState["endTextState"]);
  const resetEndChoiceRandomCharacterState = useResetRecoilState(
    mainState["endChoiceRandomCharacterState"]
  );
  const resetEndLimitRandomTextLengthState = useResetRecoilState(
    mainState["endLimitRandomTextLengthState"]
  );

  const handleAgree = debounce(() => {
    resetShuffleTextState();
    resetPreviewTextState();
    resetConsoleTextState();
    resetMarketSettingsState();
    resetSettingsExpandedPanelState();

    // General Settings
    resetIndexColumnState();
    resetLimitTextLengthState();
    resetSpecialCharactersState();
    resetStopWordsState();

    // Advanced Settings
    resetStartEnabledState();
    resetStartTextState();
    resetStartChoiceRandomCharacterState();
    resetStartLimitRandomTextLengthState();
    resetEndEnabledState();
    resetEndTextState();
    resetEndChoiceRandomCharacterState();
    resetEndLimitRandomTextLengthState();

    setDialogOpen(false);
    setSnackbarOpen(true);
  }, 100);

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
