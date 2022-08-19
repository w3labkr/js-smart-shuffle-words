import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import copy from 'copy-to-clipboard';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { randomArrayShuffle } from "@modules/randomText";
import {
  prependTextState,
  prependTextSwitchState,
  appendTextState,
  appendTextSwitchState,
} from "@atoms/main";

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
      onCopy: null
    });
  };

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
          inputRef={ref1}
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
          inputRef={ref2}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" size="large" onClick={handleSubmit}>
          {t("shuffle & copy")}
        </Button>
      </Grid>
    </Grid>
  );
}
