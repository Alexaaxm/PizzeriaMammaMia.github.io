import React, { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";

const Profile = () => {
  const { profile, getProfile, logout } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <h5 className="headerImg textProfile">
        {`Bienvenido ${profile?.email}`}{" "}
        <button onClick={logout} className="btnfos-5 buttonCard">
          Logout
        </button>
      </h5>
    </>
  );
};

export default Profile;
