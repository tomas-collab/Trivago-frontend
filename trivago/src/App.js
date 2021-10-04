import React from "react";
import Footer from "./components/Footer";
import Home from './components/home'
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";

const App=()=> {
  return (
    <BrowserRouter>
      <Route path="/Home" exact component={Home} />
      <Route path="/logIn" exact component={LogIn}/>
      <Route path="/" exact component={Registration}/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
