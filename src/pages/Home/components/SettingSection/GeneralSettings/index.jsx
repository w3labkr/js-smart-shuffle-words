import Grid from '@mui/material/Grid';
import LimitTextLength from './LimitTextLength';

export default function GeneralSettings() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LimitTextLength />
      </Grid>
    </Grid>
  );
}
