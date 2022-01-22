import React, {useEffect, useState} from "react";

import {updateContact} from "../actions/contactAction";
import {useDispatch, useSelector} from "react-redux";

function updateContact(props){
const contactUpdate= useSelector((state)=>state.contactUpdate)
const {
    loading,
    succeess,
    error
}= contactUpdate;

useEffect(()=>{
  set
})


}
export default updateContact;