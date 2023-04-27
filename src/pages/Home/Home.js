import React from 'react';
import HomeCollections from './HomeCollections';
import "./home.css";


const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Best Sellers</h1>
      <HomeCollections className="BESTSELLERS" />
    </div>
  );
};

export default Home;

