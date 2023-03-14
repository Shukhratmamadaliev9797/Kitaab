import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../elements/Loader";
import UpdateProfile from "../modals/UpdateProfile";

export default function Profile() {
  const [updateModal, setUpdateModal] = useState(false);

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;

  const updateProfile = useSelector((state) => state.updateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = updateProfile;

  useEffect(() => {
    if (successUpdate) {
      setUpdateModal(false);
    }
  }, [successUpdate]);

  return (
    <div className="profile">
      {updateModal ? <UpdateProfile /> : ""}
      {loadingUpdate && <Loader />}
      <div className="profile__container">
        <h1>Your Account</h1>
        <div className="profile__box">
          <h3>Personal Details</h3>
          {loading ? (
            "Loading..."
          ) : error ? (
            error
          ) : (
            <>
              <ul>
                <li>
                  <b>Name:</b>{" "}
                  <span>
                    {userInfo.firstName} {userInfo.lastName}
                  </span>
                </li>
                <li>
                  <b>Email:</b> <span>{userInfo.email}</span>
                </li>
                <li>
                  <b>Date of Birth:</b>
                  <span>20/02/2000</span>
                </li>
                <li>
                  <b>Phone:</b> <span>{userInfo.phone}</span>
                </li>
                <li>
                  <b>Password:</b> <span>**********</span>
                </li>
                <li>
                  <b>Address:</b> <span>{userInfo.address}</span>
                </li>
              </ul>
              <div className="profile__edit">
                <button onClick={() => setUpdateModal(true)}>Edit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
