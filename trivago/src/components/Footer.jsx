import React, { Component } from "react";
import { Container } from "react-bootstrap";

const Footer =()=>{

    return (
      <footer style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Container>{`${new Date().getFullYear()} - © Trivago | book your homework.`}</Container>
      </footer>
    );
  
}
export default Footer
