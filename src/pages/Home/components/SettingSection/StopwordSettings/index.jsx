import Grid from '@mui/material/Grid';
import RemoveSpecialCharacters from './RemoveSpecialCharacters';
import Stopwords from './Stopwords';
import HighlightStopwords from './HighlightStopwords';

export default function StopwordSettings() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RemoveSpecialCharacters />
      </Grid>
      <Grid item xs={12}>
        <Stopwords />
      </Grid>
      <Grid item xs={12}>
        <HighlightStopwords />
      </Grid>
    </Grid>
  );
}
