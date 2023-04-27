import React, { useState, createContext } from 'react';
export const PosterContext = createContext();

const initialState = () => [
  {
    
  },
];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState ([initialState]);

  return (
    <PosterContext.Provider value={{items, setItems}}>
    {children}
    </PosterContext.Provider>

   
  );
}

export default PosterContext
