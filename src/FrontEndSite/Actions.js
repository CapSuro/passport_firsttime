import { ActionTypes } from './Types';

export const LoadData = (datatype) => ({
    type: ActionTypes.LOAD,
    payload: {
        datatype: datatype
    }
});