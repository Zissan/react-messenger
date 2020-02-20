import { createStore, applyMiddleware } from "redux";
import { fromJS } from "immutable";
import { createLogger } from "redux-logger";

import { users } from "../../server/db";
import { getDefaultState } from "../../server/getDefaultState";
import { initializeDB } from "../../server/db/initializeDB";
import { reducer } from "./reducers";

initializeDB();

const defaultState = getDefaultState(users[0]);

const store = createStore(reducer, defaultState);

console.log(store.getState());

export default store;
