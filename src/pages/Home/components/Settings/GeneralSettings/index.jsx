import Grid from '@mui/material/Grid';
import RemoveIndexColumn from './RemoveIndexColumn';
import LimitTextLength from './LimitTextLength';
import RemoveSpecialCharacters from './RemoveSpecialCharacters';
import RemoveStopWords from './RemoveStopWords';
import HighlightStopWords from './HighlightStopWords';

export default function GeneralSettings() {
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
        <RemoveStopWords />
      </Grid>
      <Grid item xs={12}>
        <HighlightStopWords />
      </Grid>
    </Grid>
  );
}
