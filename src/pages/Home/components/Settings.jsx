import * as React from "react";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GeneralSettings from "./GeneralSettings";
import AdvancedSettings from "./AdvancedSettings";

export default function ControlledAccordions() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        defaultExpanded
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {t("General Settings")}
        </AccordionSummary>
        <AccordionDetails>
          <GeneralSettings />
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {t("Advanced Settings")}
        </AccordionSummary>
        <AccordionDetails>
          <AdvancedSettings />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
