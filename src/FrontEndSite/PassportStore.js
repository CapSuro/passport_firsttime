import { createStore } from "redux";
import { PassportReducer } from "./PassportReducer";

export const PassportStore = createStore(PassportReducer);