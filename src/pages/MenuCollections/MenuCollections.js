 import React, { useState, useEffect } from 'react';
 import { useParams } from 'react-router-dom';
 import { collection, query, where, getDocs } from 'firebase/firestore';
 import { db } from '../../firebase/firebaseConfig';
 import CardCollections from '../../components/CardCollections/CardCollections';

const MenuCollections = () => {
  const [ poster, setPoster] = useState([]);
  let { collections } = useParams();

  useEffect(() => {
    const getPoster = async () => {
      const q = query(collection(db, 'posterscollection'), where('collections', '==', collections));
      const docs = [];
      const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
    
      setPoster(docs);
    };

    getPoster();
  }, [collections]);

  return (
    <div>
      
      {poster.map((data) => {
        return <CardCollections dataPOSTERCARD={data} key={data.id} />;
      })}
    </div>
  );
};

export default MenuCollections;