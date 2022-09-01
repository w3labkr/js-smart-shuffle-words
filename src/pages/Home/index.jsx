import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Layout from '~/templates/Layout';
import Actions from './components/Actions';
import Settings from './components/Settings';

export default function Page() {
  return (
    <Layout>
      <Box component="form" noValidate autoComplete="off">
        <Stack spacing={2}>
          <Actions />
          <Settings />
        </Stack>
      </Box>
    </Layout>
  );
}
