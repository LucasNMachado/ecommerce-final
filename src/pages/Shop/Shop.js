import React, { useState, useContext } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import { PosterContext } from '../../components/Context/PosterContext';
import MessageSuccess from '../../components/MessageSucces/MessageSucces';

const styles = {
  containerShop: {
    textAlign: 'center',
    paddingTop: '20',
  },
};

const initialState = {
  name: '',
  phone: '',
  email: '',
  confirmEmail: '',
};

const Shop = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseId, setPurchaseId] = useState('');
  const { cart } = useContext(PosterContext);

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, confirmEmail } = values;

    if (email === confirmEmail) {
      try {
        const docRef = await addDoc(collection(db, 'purchase'), {
          values,
          cart,
        });
        setPurchaseId(docRef.id);
        setValues(initialState);
      } catch (error) {
        console.error('Error creating purchase:', error);
      }
    } else {
      alert('El correo electrónico y la confirmación de correo electrónico no coinciden.');
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((acc, product) => acc + parseInt(product.price), 0);
    return totalPrice;
  };

  return (
    <div style={styles.containerShop}>
      <h1>Completar compra</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          placeholder="Phone"
          style={{ margin: 10, width: 400 }}
          name="phone"
          value={values.phone}
          onChange={onChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <TextField
          placeholder="Confirm Email"
          style={{ margin: 10, width: 400 }}
          name="confirmEmail"
          value={values.confirmEmail}
          onChange={onChange}
        />
        <button className="btnSendAction" type="submit">
          Send
        </button>
      </form>
      {purchaseId.length ? <MessageSuccess purchaseId={purchaseId} /> : null}

      <h2>Resument de Compra</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
          <p>Total Price: {calculateTotalPrice()}</p>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Shop;
