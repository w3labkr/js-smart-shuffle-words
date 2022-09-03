import Grid from '@mui/material/Grid';
import LimitTextLength from './LimitTextLength';
import RemoveSpecialCharacters from './RemoveSpecialCharacters';
import Stopwords from './Stopwords';
import ImportStopwords from './ImportStopwords';
import HighlightStopwords from './HighlightStopwords';

export default function GeneralSettingsDetails() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LimitTextLength />
      </Grid>
      <Grid item xs={12}>
        <RemoveSpecialCharacters />
      </Grid>
      <Grid item xs={12}>
        <Stopwords />
      </Grid>
      <Grid item xs={12}>
        <ImportStopwords />
      </Grid>
      <Grid item xs={12}>
        <HighlightStopwords />
      </Grid>
    </Grid>
  );
}
