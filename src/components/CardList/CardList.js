import React from 'react'
import { useState, useEffect } from 'react'
import "./CardList.css"
//Firebase//
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
//Components
import CardCollections from "../../components/CardCollections/CardCollections";
//RRD
import { Link } from "react-router-dom";

const CardList = () => {
    const [ posterscollection, setPosterscollection] = useState ([]);
    
  
    useEffect (() => {
      const getPosterscollection = async () => {
        const q = query(collection(db, "posterscollection"));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
         docs.push({...doc.data(), id: doc.id})
                          
  });
      setPosterscollection(docs)
      };
      
      getPosterscollection()
  
    }, []);
  return (
    <div className="CARDCSS">
         {posterscollection.map((postcollection, index) => (
          <Link to={`/Detail/${postcollection.id}`} key={index}>
            <CardCollections dataPOSTERCARD={postcollection} />
          </Link>
))}
    </div>
  );
};



export default CardList