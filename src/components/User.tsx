import { useSelector } from "react-redux";
import { USER } from "../types/types";

const User = () => {
  const data = useSelector(
    (state: { userId: number; userDetails: USER }) => state.userDetails
  );

  return (
    <div>
      <h2>User Details:</h2>
      {data ? (
        <div>
          <p>
            <strong>ID:</strong> {data.id}
          </p>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Username:</strong> {data.username}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Website:</strong> {data.website}
          </p>
          <h3>Address:</h3>
          <p>
            <strong>Street:</strong> {data.address.street}
          </p>
          <p>
            <strong>Suite:</strong> {data.address.suite}
          </p>
          <p>
            <strong>City:</strong> {data.address.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {data.address.zipcode}
          </p>
          <h3>Company:</h3>
          <p>
            <strong>Name:</strong> {data.company.name}
          </p>
          <p>
            <strong>CatchPhrase:</strong> {data.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {data.company.bs}
          </p>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
    </div>
  );
};

export default User;
