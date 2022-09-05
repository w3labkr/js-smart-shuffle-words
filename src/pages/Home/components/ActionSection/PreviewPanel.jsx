import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { previewTextState, blankListState } from '~/store/atoms/main';

export default function PreviewPanel() {
  const { t } = useTranslation();
  const previewText = useRecoilValue(previewTextState);
  const blankList = useRecoilValue(blankListState);

  return (
    <>
      <Typography variant="h6" component="h3">
        {t('Preview')}
      </Typography>
      <TextField
        multiline
        fullWidth
        rows={5}
        value={previewText}
        variant="outlined"
        error={!!blankList.length}
        helperText={
          !!blankList.length && (
            <>
              {t('There is {{length}} blank line.', { length: blankList.length })}{' '}
              {t('Blank line counting is done before characters are added.')}
            </>
          )
        }
        inputProps={{ readOnly: true }}
      />
    </>
  );
}
