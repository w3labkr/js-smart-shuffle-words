import Grid from '@mui/material/Grid';
import ShufflePanel from './ShufflePanel';
import PreviewPanel from './PreviewPanel';
import ShuffleAction from './ShuffleAction';
import CopyAction from './CopyAction';
import UniqueStopwordsAction from './UniqueStopwordsAction';
import ImportStopwordsAction from './ImportStopwordsAction';
import OnlineMarketplaceSettings from './OnlineMarketplaceSettings';
import SelfShoppingMall from './SelfShoppingMall';
import NaverAdsSettings from './NaverAdsSettings';
import ResetSettings from './ResetSettings';

export default function ActionSection() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ShufflePanel />
      </Grid>
      <Grid item xs={12} md={6}>
        <PreviewPanel />
      </Grid>
      <Grid item xs={12}>
        <ShuffleAction />
        <CopyAction />
        <ImportStopwordsAction />
        <UniqueStopwordsAction />
        <OnlineMarketplaceSettings />
        <SelfShoppingMall />
        <NaverAdsSettings />
        <ResetSettings />
      </Grid>
    </Grid>
  );
}
