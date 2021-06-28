import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
 import thunk from  "redux-thunk"
//
// const initialState = {
//     peoples:[],
//     planets:[],
//     channel:{}
// }

const rootReducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_PEOPLES":
            return {...state, peoples: action.payload}
        case "GET_PLANETS":
            return {...state, planets: action.payload}
        case "GET_CHANNEL":
            return {...state, channel: action.payload}
        case "GET_VIDEO":
            return {...state, video: action.payload}
        default :
            return  state
    }

}
 export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

