import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actionsThunk";
import { AppDispatch } from "../store/store";

const ReduxTest = () => {
  const UserIdStore = useSelector((state: { userId: number }) => state.userId);
  const dispatch: AppDispatch = useDispatch();

  const incrementUserId = () => {
    if (UserIdStore === 10) {
      return alert("You cannot go beyond 10");
    }
    dispatch({ type: "incrementUserId", payload: 1 });
  };

  const decrementUserId = () => {
    if (UserIdStore === 1) {
      return alert("You cannot go below 1");
    }
    dispatch({ type: "decrementUserId", payload: -1 });
  };

  // Trigger fetchUser whenever UserIdStore changes
  useEffect(() => {
    dispatch(fetchUser(UserIdStore));
  }, [UserIdStore, dispatch]);

  return (
    <div>
      <button onClick={incrementUserId}>Increment User By 1</button>
      <h2>Current userId: {UserIdStore}</h2>
      <button onClick={decrementUserId}>Decrement User By -1</button>
    </div>
  );
};

export default ReduxTest;
