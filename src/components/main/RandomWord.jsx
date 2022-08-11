import * as React from "react";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import CharactersUsed from "@components/main/CharactersUsed";
import CharactersLength from "@components/main/CharactersLength";
import StopWords from "@components/main/StopWords";

export default function RandomWord() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Divider sx={{ fontWeight: "700" }}>
        {t("random word")} <Switch />
      </Divider>
      <CharactersUsed />
      <CharactersLength />
      <StopWords />
    </React.Fragment>
  );
}
