import React from "react";
import { Container } from "react-bootstrap";
import Navbar from '../Navbar'
import "./styles.css";
import Accommodation from "../Accommodation";

const Home =(props) =>{
console.log('props',props)
    return (
      <Container >
         <Navbar/>
          <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <Accommodation/>
      </Container>
    );

}
export default Home