import { createStore , applyMiddleware ,compose } from "redux";
import thunk from "redux-thunk";
import { currentreducer } from "../reducer/current";

export const store=createStore(currentreducer,applyMiddleware(thunk))