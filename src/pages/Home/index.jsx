import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Header from "@templates/Header";
import Main from "@templates/Main";
import Footer from "@templates/Footer";
import ShuffleWords from "./components/ShuffleWords";
import Settings from "./components/Settings";

export default function Page() {
  return (
    <>
      <Header />
      <Main>
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={2}>
            <ShuffleWords />
            <Settings />
          </Stack>
        </Box>
      </Main>
      <Footer />
    </>
  );
}
