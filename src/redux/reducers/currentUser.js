import { createReducer } from "../utility/createReducer";
import { UPDATE_STATUS } from "../actions";

export const currentUser = createReducer(
  {},
  {
    [UPDATE_STATUS](state, action) {
      return state.set(`status`, action.status);
    }
  }
);
