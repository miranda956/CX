/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import axios from 'axios';

import {CONTACT_CREATE_FAIL,CONTACT_CREATE_REQUEST,CONTACT_CREATE_SUCCESS,CONTACT_DETAILS_FAIL,CONTACT_DETAILS_REQUEST,CONTACT_DETAILS_SUCCESS,CONTACT_LIST_FAIL,CONTACT_LIST_REQUEST,CONTACT_LIST_SUCCESS,CONTACT_UPDATE_FAIL,CONTACT_UPDATE_REQUEST,CONTACT_UPDATE_SUCCESS, CONTACT_SAVE_FAIL,CONTACT_SAVE_REQUEST,CONTACT_SAVE_SUCCESS} from"../constants/contactConstants";


const createContact=(contact)=>async(dispatch,getState)=>{
    try{
        dispatch({type:CONTACT_CREATE_REQUEST,payload:contact});
        const {userSignin:{userInfo}}= getState();
        const {data:{data:newContact}} = await axios.post('/api/contact',contact,{
            headers:{
                Authorization: 'Bearer'+ userInfo.token
            }
        });
        dispatch({type:CONTACT_CREATE_SUCCESS,payload:newContact});

    }catch(error){
        dispatch({type:CONTACT_CREATE_FAIL, payload:error.message})
    }
}


const saveContact=(contact)=> async (dispatch,getState)=>{
    try{
        dispatch({type:CONTACT_SAVE_REQUEST, payload:contact});
        const {userSignin:{userInfo}}= getState();
        if(!contact._id){
            const {data} = await axios.post('/api/contact',contact,{
                headers:{
                    Authorization: 'Bearer' + userInfo.token,
                },
            });
            dispatch({type:CONTACT_SAVE_SUCCESS, payload:data})
        } else{
            const {data} =await axios.put(
                '/api/contacts/'+contact._id,
                contact,{
                    headers:{
                        Authorization: 'Bearer' + userInfo.token,
                    }
                }
            );
            dispatch({type:CONTACT_SAVE_SUCCESS, payload:data})
        }

    }catch(error){
        dispatch({type:CONTACT_SAVE_FAIL, payload:error.message})


    }
}

const updateContact =({contactId,fullName,jobTitle, email , company, phone, address, location})=> async(dispatch,getState)=>{
    const {userSignin:{userInfo}} =getState();
    dispatch({type:CONTACT_UPDATE_REQUEST, payload:{
        fullName,jobTitle, email , company, phone, address, location
    }});
    try{
const {data} = await axios.put("/api/contacts/"+ contactId,
{fullName,jobTitle, email , company, phone, address, location},{
    headers:{
        Authorization:'Bearer' + userInfo.token
    }
}
);
dispatch({type:CONTACT_UPDATE_SUCCESS, payload:data});

    }catch(error){
        dispatch({type:CONTACT_UPDATE_FAIL, payload: error.message});

    }

  }

const listContacts =(
    category='',
    searchKeyword ='',
    sortOrder=''
)=> async(dispatch)=>{
    try{
        dispatch({type:CONTACT_LIST_REQUEST});
    const {data} =await axios.get('/api/contacts?category='+
    category + '&searchKeyword='+
    searchKeyword+
    '&sortOrder='+
    sortOrder
    );
    dispatch({type:CONTACT_LIST_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:CONTACT_LIST_FAIL, payload:error.message})
    }
}



const detailsContact=(contactId)=> async(dispatch)=>{
    try{
        dispatch({type:CONTACT_DETAILS_REQUEST,payload:contactId});
        const {data}= await axios.get('/api/contacts/'+contactId);
        dispatch({type:CONTACT_DETAILS_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:CONTACT_DETAILS_FAIL,payload:error.message})
    }

}

export {detailsContact,listContacts,createContact,updateContact}
