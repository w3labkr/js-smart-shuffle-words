import Grid from '@mui/material/Grid';
import ImportStopwords from './ImportStopwords';

export default function ImportSettings() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ImportStopwords />
      </Grid>
    </Grid>
  );
}
