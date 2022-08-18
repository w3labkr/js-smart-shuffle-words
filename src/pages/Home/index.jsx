import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "@templates/Header";
import Main from "@templates/Main";
import Footer from "@templates/Footer";
import ShuffleWords from "./components/ShuffleWords";
import Settings from "./components/Settings";

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <ShuffleWords />
            </Grid>
            <Grid item xs={12}>
              <Settings />
            </Grid>
          </Grid>
        </Box>
      </Main>
      <Footer />
    </Fragment>
  );
}
