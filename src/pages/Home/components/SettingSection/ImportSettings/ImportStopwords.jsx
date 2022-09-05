import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {
  googleSpreadsheetsDataTypeState,
  googleSpreadsheetsPublishURLState,
  googleSpreadsheetsIDState,
} from '~/store/atoms/main';

export default function ImportStopwords() {
  const { t } = useTranslation();
  const [spreadsheetsDataType, setSpreadsheetsDataType] = useRecoilState(googleSpreadsheetsDataTypeState);
  const [spreadsheetsPublishURL, setSpreadsheetsPublishURL] = useRecoilState(googleSpreadsheetsPublishURLState);
  const [spreadsheetsId, setSpreadsheetsId] = useRecoilState(googleSpreadsheetsIDState);

  return (
    <Stack spacing={1}>
      <FormControl>
        <Typography>{t('Google Spreadsheets data types:')}</Typography>
        <RadioGroup
          row
          name="spreadsheetsDataType"
          value={spreadsheetsDataType}
          onChange={(e) => setSpreadsheetsDataType(e.target.value)}
        >
          <FormControlLabel value="html" control={<Radio />} label="HTML" />
          <FormControlLabel value="json" control={<Radio />} label="JSON" />
        </RadioGroup>
      </FormControl>
      {spreadsheetsDataType === 'html' && (
        <>
          <Typography>{t('Google spreadsheets publish URL:')}</Typography>
          <TextField
            fullWidth
            value={spreadsheetsPublishURL}
            variant="outlined"
            placeholder={t('Please enter text')}
            helperText={t('Enter the address of a google spreadsheets published on the web.')}
            onChange={(e) => setSpreadsheetsPublishURL(e.target.value)}
          />
        </>
      )}
      {spreadsheetsDataType === 'json' && (
        <>
          <Typography>{t('Google spreadsheets key:')}</Typography>
          <TextField
            fullWidth
            value={spreadsheetsId}
            variant="outlined"
            placeholder={t('Please enter text')}
            helperText={t('Enter the shared google spreadsheets key.')}
            onChange={(e) => setSpreadsheetsId(e.target.value)}
          />
        </>
      )}
    </Stack>
  );
}
