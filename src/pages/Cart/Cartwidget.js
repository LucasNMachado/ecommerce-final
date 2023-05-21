import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PosterContext } from '../../components/Context/PosterContext';
import './CartContent.css';

const CartWidget = () => {
  const { cart, removeFromCart } = useContext(PosterContext);

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((acc, product) => acc + parseInt(product.price), 0);
    return totalPrice;
  };

  return (
    <div className="total-cards">
      <div className="cart-icon">
        <ShoppingCartIcon sx={{ color: 'white' }} />
        <span className="cart-count">{cart.length}</span>
      </div>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img className="product-image" src={product.img} alt={product.title} />
            </div>
            <div className="card-details">
              <p className="card-title">{product.title}</p>
              <p className="card-info">Artist: {product.artist}</p>
              <p className="card-info">Price: {product.price}</p>
              <p className="card-info">Size: {product.size}</p>
           
            </div>
            <button className="remove-button" onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total-price">Total Price: {calculateTotalPrice()}</div>
    </div>
  );
};

export default CartWidget;
