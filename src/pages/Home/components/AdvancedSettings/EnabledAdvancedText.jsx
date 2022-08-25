import * as React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import * as mainState from "@atoms/main";

export default function MyComponent({ children, textState, enabledState }) {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useRecoilState(mainState[enabledState]);
  const [text, setText] = useRecoilState(mainState[textState]);

  return (
    <>
      <Typography variant="h6" component="h3">
        {children}
        <Switch
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
      </Typography>
      <TextField
        value={text}
        placeholder={t("Please enter text")}
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => setText(e.target.value)}
        disabled={!enabled}
      />
    </>
  );
}
