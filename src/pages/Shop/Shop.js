import React, { useState } from 'react'
//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
//MUI
import TextField from '@mui/material/TextField';
//Components
import MessageSucces from '../../components/MessageSucces/MessageSucces';

const styles = {
    containerShop: {
        textAlign:"center",
        paddinTop:"20",
    },
};

const initialState = {
    name :"",
    phone:"",
    email:"",

};

const Shop = () => {
    const [ values, setValues ] = useState(initialState);
    const [ purchaseId, setPurchaseId] = useState("");

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value});
    };
    const onSubmit = async (e) => {
       
        e.preventDefault();
        const docRef = await addDoc(collection(db,"purchase"), {
            values,
        });
        setPurchaseId(docRef.id);
        setValues(initialState);
    };

  return (
    <div style={styles.conteinerShop}>
    <h1>Shop</h1>
    <form className="FormContainer" onSubmit={onSubmit}>
    <TextField
    placeholder='Name'
    style={{ margin: 10, width: 400 }}
    name="name"
    value= {values.name}
    onChange= {onChange}
    />
     <TextField
    placeholder='Phone'
    style={{ margin: 10, width: 400 }}
    name="phone"
    value= {values.lastName}
    onChange= {onChange}
    />
     <TextField
    placeholder='Email'
    style={{ margin: 10, width: 400 }}
    name="email"
    value= {values.city}
    onChange= {onChange}
    />
    <button className="btnSendAction" type="submit">
    Send
    </button> 
    </form>
    {purchaseId.length ? <MessageSucces purchaseId={purchaseId} /> : null }

    </div>
  );
};

export default Shop