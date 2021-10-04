import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Navbar from '../../components/navbar/index'
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

const Home =(props) =>{
console.log('props',props)
    return (
      <Container >
         <Navbar/>
          <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList />
      </Container>
    );

}
export default Home