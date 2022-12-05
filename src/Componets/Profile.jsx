
import React from "react";
import { NavLink } from "react-router-dom";
import  styles from "./Login&sign.module.css";

const Profile = (props) => {
  return (
    <NavLink 
     id="link"
    className={({ isActive }) => {
      return isActive ? styles.active : styles.default;
    }}
    
    to={props.link}>
      {props.info}
    </NavLink>
  );
};

export default Profile;
