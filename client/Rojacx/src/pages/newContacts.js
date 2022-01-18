/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import axios from "axios";
import {} from "../actions/contactAction";
import { useSelector, useDispatch } from 'react-redux';


function NewContact(props){
const[fullName,setFullName] = useState("");
const [jobTitle, setJobTitle]= useState("");
const [phone ,setPhone]= useState("");
const [email,setEmail]= useState("");
const [company, setCompany]= useState("");
const [location, setLocation]= useState("");
const [address, setAddress] = useState("");
const [notes, setNotes]= useState("");


const ContactSave = useSelector((state)=>state.contactsave)
}

const {
    loading:loadingSave,
    success:successDelete,
    error:errorDelete,

} = ContactSave;

const dispatch = useDispatch();


const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(
        saveContact({
            _id:id,
            fullName,
            jobTitle,
            phone,
            email,
            company,
            location,
            address,
            notes

        })
    )
}

return (
    <div>

    </div>
)
export default NewContact;