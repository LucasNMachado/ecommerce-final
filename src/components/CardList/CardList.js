import React, { useState, useEffect } from 'react';
import "./CardList.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CardCollections from "../../components/CardCollections/CardCollections";

const CardList = () => {
  const [posterscollection, setPosterscollection] = useState([]);

  useEffect(() => {
    const getPosterscollection = async () => {
      const q = query(collection(db, "posterscollection"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPosterscollection(docs);
    };

    getPosterscollection();
  }, []);

  return (
    <div className="CARDCSS">
      {posterscollection.map((postcollection) => (
        <CardCollections key={postcollection.id} dataPOSTERCARD={postcollection} />
      ))}
    </div>
  );
};

export default CardList;
