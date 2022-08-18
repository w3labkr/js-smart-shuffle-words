import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

export default function MoreActions() {
  return (
    <IconButton aria-label="display more actions" edge="end" color="inherit">
      <MoreIcon />
    </IconButton>
  );
}
