import { useState } from "react";
import {useEffect} from 'react'
import ContactRow from "./ContactRow";


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const[contact, setContact] = useState({});


useEffect(() => {
    async function fetchContact(){
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json()
            console.log(result);
            setContact(result);
        } catch (error) {
            SpeechSynthesisErrorEvent(error)      
        }
    }
    fetchContact();
},  [selectedContactId]);
return(
    <>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>

    </>
)
}