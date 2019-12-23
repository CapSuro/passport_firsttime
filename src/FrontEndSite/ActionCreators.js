import { ActionTypes } from "./Types";
import { StoreTemplate } from './StoreTemplate';

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: StoreTemplate[dataType]
    }
});