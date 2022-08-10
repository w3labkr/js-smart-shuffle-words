import * as React from "react";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import CharactersUsed from "@components/main/CharactersUsed";
import CharactersLength from "@components/main/CharactersLength";
import StopWords from "@components/main/StopWords";

export default function RandomWords() {
  return (
    <React.Fragment>
      <Divider sx={{ fontWeight: "700" }}>
        Random Words <Switch />
      </Divider>
      <CharactersUsed />
      <CharactersLength />
      <StopWords />
    </React.Fragment>
  );
}
