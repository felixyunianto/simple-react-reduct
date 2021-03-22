import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> 
        Secret
        {/* {currentUser.token.substr(0, 20)} ...{" "} {currentUser.token.substr(currentUser.token.length - 20)} */}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.data.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.data.email}
      </p>
    </div>
  );
};


export default Profile;