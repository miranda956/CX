
/* eslint-disable prettier/prettier */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {contactUpdateReducer,contactCreateReducer,contactListReducer,contactDetailsReducer} from "../src/reducers/contactReducer";

const userInfo = Cookie.getJSON('userInfo') || null;


const initialState={
    userSignin:{userInfo}
}
const reducer = combineReducers({

    contactList:contactListReducer,
    contactCreate:contactCreateReducer,
    contactEdit:contactUpdateReducer,
    contactDetails:contactDetailsReducer,

})

const store = createStore(
    reducer,
    initialState
    composeEnhancer(applyMiddleware(thunk))
  );

  export default store;