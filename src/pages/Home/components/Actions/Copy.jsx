import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import copy from "copy-to-clipboard";
import { styled } from '@mui/system';
import MuiButton from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1)
}));

export default function MyComponent({ copyRef }) {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClick = () => {
    copy(copyRef.current.value, {
      debug: false,
      format: "text/plain", // (default) "text/html"
      onCopy: setSnackbarOpen(true),
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        onClick={handleClick}
      >
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
