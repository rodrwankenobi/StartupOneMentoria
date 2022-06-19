import React from "react";
import Form from "./components/Form";
import About from "./components/About"
import Cadastro from "./components/Cadastro"
import Login from "./components/Login"
import Contato from "./components/Contato"
import Mentores from "./components/Mentores"
import RecuperarSenha from "./components/RecuperarSenha"
import ParaEmpresas from "./components/ParaEmpresas"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export const PrivateRoute = function({ component: Component, ...rest }, props) {
  const isAuthenticated = rest.myToken;
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
  const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }
  const isAuthenticated = Boolean(getWithExpiry('isAuthenticated'));
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