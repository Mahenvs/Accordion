import { applyMiddleware, createStore } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { USER } from "../types/types";

const initialState = {
  userId: 1,
  userDetails: {},
};
type Action =
  | { type: "incrementUserId"; payload: number }
  | { type: "decrementUserId"; payload: number }
  | { type: "SUCCESS_DATA"; payload: USER }
  | { type: "ERROR_DATA"; payload: string };
function updateCounter(state = initialState, action: Action) {
  switch (action.type) {
    case "incrementUserId":
      return { ...state, userId: state.userId + action.payload };

    case "decrementUserId":
      return { ...state, userId: state.userId + action.payload };
    case "SUCCESS_DATA":
      return { ...state, userDetails: action.payload };
    case "ERROR_DATA":
      return { ...state, userDetails: action.payload };

    default:
      return state;
  }
}
export const store = createStore(
  updateCounter,
  applyMiddleware(thunk as ThunkMiddleware<typeof initialState, Action>)
);
// const store = createStore(updateCounter, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
