import Grid from '@mui/material/Grid';
import RemoveIndexColumn from './RemoveIndexColumn';
import LimitTextLength from './LimitTextLength';
import RemoveSpecialCharacters from './RemoveSpecialCharacters';
import RemoveStopwords from './RemoveStopwords';
import ImportStopwords from './ImportStopwords';
import HighlightStopwords from './HighlightStopwords';

export default function GeneralSettingsDetails() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RemoveIndexColumn />
      </Grid>
      <Grid item xs={12}>
        <LimitTextLength />
      </Grid>
      <Grid item xs={12}>
        <RemoveSpecialCharacters />
      </Grid>
      <Grid item xs={12}>
        <RemoveStopwords />
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
