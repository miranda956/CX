import React,{ useEffect, useReducer}  from "react";
import {useSelector, useDispatch} from "react-redux";
import {listContacts,updateContact,} from "../actions/contactAction";
import {link} from "react-router-dom";


function contactScreen(props){
    const contactList= useSelector((state)=>state.contactList);
    const {loading, contacts, error}= contactList;

    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(listContacts());
        return ()=>{

        }
    },[])

return (
<div></div>
)

}

export default contactScreen;
