import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function WidgetArea() {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Menu1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Menu2" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Menu3" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </>
  );
}
