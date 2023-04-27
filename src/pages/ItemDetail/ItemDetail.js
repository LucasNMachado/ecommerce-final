import { useState, useEffect } from 'react'
import React from 'react'
//RRD
import { useParams } from "react-router-dom";
//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
//Components

import CardCollectionsDetail from '../../components/CardCollections/CardCollectionsDetail';
//CSS
import "./ItemDetail.css"

const ItemDetail = () => {
    let { id } = useParams();
    const [ poster, setPoster ] = useState([]);

    const q = query(collection(db, "posterscollection"), where(documentId(), "==", id));

    useEffect (() => {
        const getPosterscollection = async () => {
          
          const querySnapshot = await getDocs(q);
          const docs = [];
          querySnapshot.forEach((doc) => {
           docs.push({...doc.data(), id: doc.id})
    });

    setPoster(docs)
     };
        
    getPosterscollection()
    
     }, [q]);
    
     return (
    <div className="DETAILCSS">
        {poster.map((poster) =>{
        return (
        <CardCollectionsDetail key={poster.id} dataPOSTERCARDDETAIL={poster} />
    )
      } )}
    </div>
  )
}

export default ItemDetail