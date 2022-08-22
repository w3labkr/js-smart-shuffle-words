import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import copy from "copy-to-clipboard";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  prependTextState,
  prependTextSwitchState,
  appendTextState,
  appendTextSwitchState,
} from "@atoms/main";
import { randomArrayShuffle } from "@modules/randomText";

export default function MyComponent() {
  const { t } = useTranslation();
  const prependText = useRecoilValue(prependTextState);
  const prependTextSwitch = useRecoilValue(prependTextSwitchState);
  const appendText = useRecoilValue(appendTextState);
  const appendTextSwitch = useRecoilValue(appendTextSwitchState);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleSubmit = () => {
    let lines = ref1.current.value.replace(/\r\n/g, "\n").split("\n");
    let newLine = [];

    lines.forEach(function (line) {
      let words = randomArrayShuffle(line.split(" "));

      if (prependTextSwitch) {
        words.unshift(prependText);
      }

      if (appendTextSwitch) {
        words.push(appendText);
      }

      newLine.push(words.join(" "));
    });

    let result = newLine.join("\n");

    ref2.current.value = result;

    copy(result, {
      debug: false,
      format: "text/plain", // (default) "text/html"
      onCopy: null,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h3">
          {t("Input")}
        </Typography>
        <TextField
          required
          multiline
          fullWidth
          rows={5}
          defaultValue="Microsoft Jira Trello Google Apple Amazon"
          variant="outlined"
          inputRef={ref1}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h3">
          {t("Output")}
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={5}
          defaultValue=""
          disabled
          variant="outlined"
          inputRef={ref2}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h3">
          {t("Console")}
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={3}
          defaultValue=""
          disabled
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{ mb: 1, mr: 1 }}
        >
          {t("Shuffle & Copy")}
        </Button>
        <Button variant="outlined" size="large" sx={{ mb: 1, mr: 1 }}>
          {t("Shuffle")}
        </Button>
        <Button variant="outlined" size="large" sx={{ mb: 1, mr: 1 }}>
          {t("Copy")}
        </Button>
        <Button variant="outlined" size="large" sx={{ mb: 1, mr: 1 }}>
          {t("General Market")}
        </Button>
        <Button variant="outlined" size="large" sx={{ mb: 1, mr: 1 }}>
          {`${t("Auction")}/${t("G-Market")}`}
        </Button>
      </Grid>
    </Grid>
  );
}
