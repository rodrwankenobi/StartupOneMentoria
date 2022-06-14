import React from "react";
import { useContext, useState } from 'react';
import Form from "./components/Form";
import About from "./components/About"
import Cadastro from "./components/Cadastro"
import Login from "./components/Login"
import Contato from "./components/Contato"
import Mentores from "./components/Mentores"
import RecuperarSenha from "./components/RecuperarSenha"
import ParaEmpresas from "./components/ParaEmpresas"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./providers/auth"
import { MyContext } from "./providers/auth"

export const PrivateRoute = function({ component: Component, ...rest }, props) {
  const isAuthenticated = rest.myToken == 'true' ? true : false;
  return (
    <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
        }
      />
    );
}

const Routes = function(){
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={() => <Login /> } />
          <Route path="/cadastro" component={() => <Cadastro /> } />
          <Route path="/recuperarsenha" component={() => <RecuperarSenha /> } />
          <PrivateRoute path="/about" myToken={isAuthenticated} component={() => <About /> }/>
          <PrivateRoute exact path="/" myToken={isAuthenticated} component={() => <Form />} />
          <PrivateRoute exact path="/contato" myToken={isAuthenticated} component={() => <Contato />} />
          <PrivateRoute exact path="/mentores" myToken={isAuthenticated} component={() => <Mentores />} />
          <PrivateRoute exact path="/paraempresas" myToken={isAuthenticated} component={() => <ParaEmpresas />} />
        </Switch>
      </BrowserRouter>
  );
}


export default Routes;