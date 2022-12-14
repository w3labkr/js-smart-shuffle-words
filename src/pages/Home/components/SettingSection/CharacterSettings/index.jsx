import Grid from '@mui/material/Grid';
import StartText from './StartText';
import EndText from './EndText';

export default function CharacterSettings() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <StartText />
      </Grid>
      <Grid item xs={12} md={6}>
        <EndText />
      </Grid>
    </Grid>
  );
}
