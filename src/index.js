import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import CreateArticle from "./components/CreateArticle"
import Login from "./components/Login"
import Register from "./components/Register"
import SingleArticle from "./components/SingleArticle"

const Main = withRouter(({location}) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Navbar/>}
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/articles/create" component={CreateArticle} />
      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer/>}
    </div>
  )
})

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
