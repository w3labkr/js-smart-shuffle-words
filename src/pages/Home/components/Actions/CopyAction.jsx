import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import copy from "copy-to-clipboard";
import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const previewText = useRecoilValue(mainState["previewTextState"]);

  const handleClick = debounce(() => {
    copy(previewText, {
      debug: false,
      format: "text/plain", // (default) "text/html"
      onCopy: setSnackbarOpen(true),
    });
  }, 100);

  return (
    <>
      <Button variant="outlined" size="large" onClick={handleClick}>
        {t("Copy")}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t("Copied!")}</Alert>
      </Snackbar>
    </>
  );
}
