import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { styled } from '@mui/system';
import MuiButton from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { randomArrayShuffle } from "@modules/randomText";
import * as mainState from "@atoms/main";

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1)
}));

export default function MyComponent({ shuffleRef, previewRef }) {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const stopWords = useRecoilValue(mainState["stopWordsState"]);
  const startText = useRecoilValue(mainState["startTextState"]);
  const startEnabled = useRecoilValue(mainState["startEnabledState"]);
  const endText = useRecoilValue(mainState["endTextState"]);
  const endEnabled = useRecoilValue(mainState["endEnabledState"]);

  const handleClick = () => {
    let lines = shuffleRef.current.value.replace(/\r\n/g, "\n").split("\n");
    let newLines = [];

    console.log(stopWords);

    lines.forEach(function (line) {
      let words = line.split(" ").map((str) => str.trim());
      words = randomArrayShuffle(words);

      if (startEnabled) {
        words.unshift(startText);
      }

      if (endEnabled) {
        words.push(endText);
      }

      newLines.push(words.join(" "));
    });

    previewRef.current.value = newLines.join("\r\n");

    setSnackbarOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={handleClick}
      >
        {t("Shuffle")}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t("Shuffled!")}</Alert>
      </Snackbar>
    </>
  );
}
