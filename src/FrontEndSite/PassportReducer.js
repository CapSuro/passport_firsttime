import { ActionTypes } from "./Types";

export const PassportReducer = (store, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...store,
                [action.payload.dataType.toLowerCase()]: action.payload.data
            }    
        default:
            return store || {}
    }
}