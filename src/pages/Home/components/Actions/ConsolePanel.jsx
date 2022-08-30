import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import * as mainState from '@atoms/main';

const List = styled(MuiList)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid',
  borderColor: theme.palette.borderColor,
  borderRadius: theme.shape.borderRadius,
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  padding: 0,
}));

export default function MyComponent() {
  const { t } = useTranslation();
  const consoleText = useRecoilValue(mainState['consoleTextState']);

  useMemo(() => {
    console.log(consoleText);
  }, [consoleText]);

  return (
    <>
      <Typography variant="h6" component="h3">
        {t('Console')}
      </Typography>
      <List>
        {consoleText.map((item, index) => {
          return (
            <ListItem key={item.key}>
              <Typography>{item.value}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export const sleep = (ms) => {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
};
