import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 2, fontWeight: "700" }}
        >
          {t("set additional text")}
        </Typography>
        {/* <Box>
          <Button variant="contained" size="large">
            {t("type A")}
          </Button>
          <Button variant="outlined" size="large" sx={{ ml: 1 }}>
            {t("type B")}
          </Button>
        </Box> */}
    </Fragment>
  );
}
