import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Layout from "@templates/Layout";
import Header from "@templates/Header";
import Main from "@templates/Main";
import Content from "@components/main/Content";
import Settings from "@components/main/Settings";

export default function Page() {
  return (
    <Layout>
      <Header />
      <Main>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Content />
            </Grid>
            <Grid item xs={12}>
              <Settings />
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Layout>
  );
}
