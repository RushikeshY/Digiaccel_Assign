import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{justifyContent:"space-around",display:"flex",height:"60px",paddingTop:"10px"}} >
      <h2 style={{fontSize:"20px",fontWeight:"800"}}> <Link to="/addquestion" style={{backgroundColor:"teal",padding:"10px",color:"white"}}> Teacher Login</Link></h2>
      <h2 style={{fontSize:"20px",fontWeight:"800",}}><Link style={{backgroundColor:"teal",padding:"10px" ,color:"white",}}> Student Login</Link></h2>
    </div>
  );
};

export default Home;
