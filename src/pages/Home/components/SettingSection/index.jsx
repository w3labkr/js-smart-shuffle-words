import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/system';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import GeneralSettingsDetails from './GeneralSettingsDetails';
import AdvancedSettingsDetails from './AdvancedSettingsDetails';
import { settingsExpandedPanelState } from '~/store/atoms/main';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SettingSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useRecoilState(settingsExpandedPanelState);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography>{t('General Settings')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GeneralSettingsDetails />
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography>{t('Advanced Settings')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AdvancedSettingsDetails />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
