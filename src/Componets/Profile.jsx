import React from 'react';
import { Link  } from "react-router-dom"


const Profile = (props) => {
    const style={
        padding:"10px 10px 10px 20px ",
        fontSize:"12px",
        letterSpacing:"1px",
        onMouseOver :{backgroundColor:"#3bb3a9",color:"white"},

    }


  return (
    <Link 
    //   p={"10px 10px 10px 20px"} 
    style={style}
    to={props.lin}
    //  fontSize="12px"
    //  bg={"#3bb3a9" }
    // letterSpacing={"1px"}
    
    //  _hover={{backgroundColor:"#3bb3a9",color:"white"}}

     >{props.info}</Link>
  )
}

export default Profile