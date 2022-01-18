/* eslint-disable prettier/prettier */
import {CONTACT_CREATE_FAIL,CONTACT_CREATE_REQUEST,CONTACT_CREATE_SUCCESS,CONTACT_DETAILS_FAIL,CONTACT_DETAILS_REQUEST,CONTACT_DETAILS_SUCCESS,CONTACT_LIST_FAIL,CONTACT_LIST_REQUEST,CONTACT_LIST_SUCCESS,CONTACT_UPDATE_FAIL,CONTACT_UPDATE_REQUEST,CONTACT_UPDATE_SUCCESS} from"../constants/contactConstants";


function contactListReducer(state={},action){
    switch(action.type){
        case CONTACT_LIST_REQUEST:
            return{loading:true,contact:[]};
            case CONTACT_LIST_SUCCESS:
                return {loading:false, contacts:action.payload};
                case CONTACT_LIST_FAIL:
                    return {laoding:false,error:action.payload}
                    default: return state
    }
}



function contactDetailsReducer(state={},action){
    switch(action.type){
        case CONTACT_DETAILS_REQUEST:
            return{loading:true};
            case CONTACT_DETAILS_SUCCESS:
                return {loading:false, contacts:action.payload};
                case CONTACT_DETAILS_FAIL:
                    return {laoding:false,error:action.payload}
                    default: return state
    }
}

function contactCreateReducer(state={}, action){
      switch (action.type){
          case CONTACT_CREATE_REQUEST:
              return{loading:true};
              case CONTACT_CREATE_SUCCESS:
                  return {loading:false, contact:action.payload,success:true};
                  case CONTACT_CREATE_FAIL:
                      return {loading:false, error:action.payload};
                      default:
                          return state;
      }
  }

function contactUpdateReducer(state={},action){
    switch(action.type){
        case CONTACT_UPDATE_REQUEST:
            return{loading:false};
            case CONTACT_UPDATE_SUCCESS:
                return {laoding:false, contactInfo: action.payload};
                case CONTACT_UPDATE_FAIL:
                    return {loading:false, error:action.payload};
                    default: return state;
                    
    }
}

export {contactUpdateReducer,contactCreateReducer,contactListReducer,contactDetailsReducer}