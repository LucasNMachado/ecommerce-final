import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { PosterContext } from '../../components/Context/PosterContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuComponent from '../MenuComponent/MenuComponent';

const styles = {
  linkButton: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  purchaseButton: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  cartItemCount: {
    marginLeft: '5px',
  },
};

const ResponsiveNavigation = () => {
  const { cart } = useContext(PosterContext);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);

  return (
    <>
      <AppBar position="static" className="ResponsiveNavigation">
        <Container maxWidth="1">
          <Toolbar disableGutters>
            <div style={styles.linksContainer}>
              <Link to="/" style={styles.linkButton}>
                Home
              </Link>
              <Link to="/store" style={styles.linkButton}>
                Store
              </Link>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/categories/:collections" style={styles.linkButton}>
                  <MenuComponent />
                </Link>
              </div>
              <Link to="/shop" style={styles.linkButton}>
                Shop
              </Link>
              <div style={styles.cartContainer}>
                <Link to="/cartcontent" style={styles.linkButton}>
                  <ShoppingCartIcon />
                  <span style={styles.cartItemCount}>{cartItemCount}</span>
                </Link>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div></div>
    </>
  );
};

export default ResponsiveNavigation;
