import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Header from "@templates/Header";
import Main from "@templates/Main";
import Footer from "@templates/Footer";
import Actions from "./components/Actions";
import Settings from "./components/Settings";

export default function Page() {
  return (
    <>
      <Header />
      <Main>
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={2}>
            <Actions />
            <Settings />
          </Stack>
        </Box>
      </Main>
      <Footer />
    </>
  );
}
