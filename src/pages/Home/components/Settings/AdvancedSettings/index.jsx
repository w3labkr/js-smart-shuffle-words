import Grid from '@mui/material/Grid';
import StartText from './StartText';
import EndText from './EndText';

export default function AdvancedSettings() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <StartText />
      </Grid>
      <Grid item xs={12} sm={6}>
        <EndText />
      </Grid>
    </Grid>
  );
}
