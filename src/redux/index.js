import { createStore } from "redux";
import { fromJS } from "immutable";

import { users } from "../../server/db";
import { getDefaultState } from "../../server/getDefaultState";
import { initializeDB } from "../../server/db/initializeDB";

initializeDB();

const defaultState = getDefaultState(users[0]);

const reducer = state => state;

const store = createStore(reducer, defaultState);

export default store;
