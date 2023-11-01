import React, { useEffect, useState } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../../utils/constants";
import ArrowImg from "../../assets/arrow.png";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import "./Header.css"; // Import a CSS file for styling
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [auth]);

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black absolute z-10  w-[100%] px-1 sm:px-3">
      <img
        className="w-32 px-2 sm:w-36 md:w-[250px] md:h-[100px] md:px-8 md:py-2"
        src={NETFLIX_LOGO}
        alt="Netflix-logo"
      />
      {user && (
        <div className="relative dop">
          <div></div>
          <div className="flex items-center  pr-4 md:pr-20 cursor-pointer">
            <img
              className=" w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-sm"
              src={USER_ICON}
              alt="default-user-icon"
            />
            <img
              className={`w-2 h-2 sm:w-3 sm:h-3 hidden md:flex ml-1 arrow-icon rotate-180`}
              src={ArrowImg}
              alt="arrow-icon"
            />
          </div>
          <div className="hide">
            <ProfileDropdown />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
