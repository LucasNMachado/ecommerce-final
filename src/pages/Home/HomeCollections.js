import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import CardCollections from '../../components/CardCollections/CardCollections';

const HomeCollections = () => {
  let { mv } = useParams();
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    const getPostersCollection = async () => {
      const q = query(collection(db, 'posterscollection'), where('mv', '==', 'Best Seller'));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPoster(docs);
    };

    getPostersCollection();
  }, [mv]);

  return (
    <div className="DETAILCSS">
      {poster.map((poster) => {
        return <CardCollections key={poster.id} dataPOSTERCARD={poster} />;
      })}
    </div>
  );
};

export default HomeCollections;