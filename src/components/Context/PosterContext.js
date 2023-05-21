import React, { useState, useEffect, createContext } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

export const PosterContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getPosters = async () => {
      const postersCollection = query(collection(db, 'posterscollection'));
      const querySnapshot = await getDocs(postersCollection);
      const docs = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(docs);
    };

    getPosters();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <PosterContext.Provider value={{ items, cart, addToCart, removeFromCart }}>
      {children}
    </PosterContext.Provider>
  );
};

export default ItemsProvider;
