import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import AppendTitle from "./AppendTitle";
import AppendText from "./AppendText";
import AppendRandomTitle from "./AppendRandomTitle";
import AppendRandomGenerate from "./AppendRandomGenerate";
import AppendRandomUppercase from "./AppendRandomUppercase";
import AppendRandomLowercase from "./AppendRandomLowercase";
import AppendRandomNumbers from "./AppendRandomNumbers";
import AppendRandomKorean from "./AppendRandomKorean";
import AppendRandomLength from "./AppendRandomLength";
import AppendRandomStopWords from "./AppendRandomStopWords";

export default function MyComponent() {
  return (
    <>
      <AppendTitle />
      <AppendText />
      <AppendRandomTitle />
      <AppendRandomGenerate />
      <FormGroup
        component="legend"
        sx={{ display: "flex", flexDirection: "row", mb: 1 }}
      >
        <AppendRandomUppercase />
        <AppendRandomLowercase />
        <AppendRandomNumbers />
        <AppendRandomKorean />
      </FormGroup>
      <AppendRandomLength />
      <AppendRandomStopWords />
    </>
  );
}
