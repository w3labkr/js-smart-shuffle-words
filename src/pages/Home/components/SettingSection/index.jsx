import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GeneralSettings from './GeneralSettings';
import StopwordSettings from './StopwordSettings';
import CharacterSettings from './CharacterSettings';
import ImportSettings from './ImportSettings';
import { settingsTabPanelState } from '~/store/atoms/main';

const Tab = styled(MuiTab)(() => ({
  fontSize: '1rem',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `settings-tab-${index}`,
    'aria-controls': `settings-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { t } = useTranslation();
  const [value, setValue] = useRecoilState(settingsTabPanelState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t('General Settings')} {...a11yProps(0)} />
          <Tab label={t('Character Settings')} {...a11yProps(1)} />
          <Tab label={t('Stopword Settings')} {...a11yProps(2)} />
          <Tab label={t('Import Settings')} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <GeneralSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CharacterSettings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StopwordSettings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ImportSettings />
      </TabPanel>
    </Box>
  );
}
