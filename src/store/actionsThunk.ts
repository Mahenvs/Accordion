import { Dispatch } from "redux";

export const fetchUser = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      dispatch({ type: "SUCCESS_DATA", payload: data });
    } catch (error) {
      dispatch({
        type: "ERROR_DATA",
        payload: "Error while loading/fetching data",
      });
    }
  };
};
