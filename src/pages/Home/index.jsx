import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Layout from '~/templates/Layout';
import ActionSection from './components/ActionSection';
import SettingSection from './components/SettingSection';
import WidgetArea from './components/WidgetArea';

export default function Home() {
  return (
    <Layout widgetArea={<WidgetArea />}>
      <Box component="form" noValidate autoComplete="off">
        <Stack spacing={2}>
          <ActionSection />
          <SettingSection />
        </Stack>
      </Box>
    </Layout>
  );
}
