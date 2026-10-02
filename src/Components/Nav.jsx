import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import ThemeButton from './ThemeButton';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function Nav({ setPage }) {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className='ms-0 p-2' sx={{ width: 280 }} value={value} onChange={handleChange} style={{ fontFamily: 'bkoodak' }}>
      <BottomNavigationAction
        label="ورود"
        value=" login"
        icon={<AccountCircleOutlinedIcon />}
        component={Link}
        to="/Login"

      />

      <BottomNavigationAction
        label="آب و هوا"
        value="weather"
        icon={<WbTwilightRoundedIcon />}
        component={Link}
        to="/weather"
      />

      <BottomNavigationAction
        label="تغییر تم "
        value="theme"
        icon={<ThemeButton />}
      />

      <BottomNavigationAction
        label=" خانه "
        component={Link}

        value="home"
        icon={<HomeIcon />}
        to="/"
      />


    </BottomNavigation>
  );
}