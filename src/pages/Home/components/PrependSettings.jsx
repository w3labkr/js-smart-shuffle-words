import React, { Fragment } from "react";
import FormGroup from "@mui/material/FormGroup";
import PrependTitle from "./PrependTitle";
import PrependText from "./PrependText";
import PrependRandomTitle from "./PrependRandomTitle";
import PrependRandomGenerate from "./PrependRandomGenerate";
import PrependRandomUppercase from "./PrependRandomUppercase";
import PrependRandomLowercase from "./PrependRandomLowercase";
import PrependRandomNumbers from "./PrependRandomNumbers";
import PrependRandomKorean from "./PrependRandomKorean";
import PrependRandomLength from "./PrependRandomLength";
import PrependRandomStopWords from "./PrependRandomStopWords";

export default function MyComponent() {
  return (
    <Fragment>
      <PrependTitle />
      <PrependText />
      <PrependRandomTitle />
      <PrependRandomGenerate />
      <FormGroup
        component="legend"
        sx={{ display: "flex", flexDirection: "row", mb: 1 }}
      >
        <PrependRandomUppercase />
        <PrependRandomLowercase />
        <PrependRandomNumbers />
        <PrependRandomKorean />
      </FormGroup>
      <PrependRandomLength />
      <PrependRandomStopWords />
    </Fragment>
  );
}
