import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom'

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ color:"white", fontWeight: "bold", fontSize: 18, textDecoration: "none", marginLeft: 10, marginRight: 10   }}
      >
        Collections
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <MenuItem component={Link} to="/categories/Art" onClick={handleClose}>Art</MenuItem>
      <MenuItem component={Link} to="/categories/Movies" onClick={handleClose}>Movies</MenuItem>
      <MenuItem component={Link} to="/categories/Music" onClick={handleClose}>Music</MenuItem>
      <MenuItem component={Link} to="/categories/Sports" onClick={handleClose}>Sports</MenuItem>
      <MenuItem component={Link} to="/categories/Misc" onClick={handleClose}>Misc</MenuItem>
      </Menu>
    </div>
  );
}



  


export default MenuComponent