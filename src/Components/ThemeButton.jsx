import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PaletteIcon from "@mui/icons-material/Palette";
import BrushIcon from '@mui/icons-material/Brush';
const ThemeButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
      <BrushIcon/>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setTheme("light")}>
          ⬜ 
        </MenuItem>

        <MenuItem onClick={() => setTheme("dark")}>
          ⬛
        </MenuItem>

        <MenuItem onClick={() => setTheme("blue")}>
          🟦
        </MenuItem>

        <MenuItem onClick={() => setTheme("green")}>
          🟩 
        </MenuItem>

        <MenuItem onClick={() => setTheme("purple")}>
          🟪
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeButton;