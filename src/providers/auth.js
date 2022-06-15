import { createContext, useState, useContext, useEffect } from 'react';


const MyContext = createContext();

function AuthProvider({ children }){
  localStorage.setItem('isAuthenticated',false);

  async function handleLogin(value){
    console.log('passou por aqui');
    localStorage.setItem('isAuthenticated',value);
  }
  return (
    <MyContext.Provider value={{ isAuthenticated, handleLogin}}>
      { children }
    </MyContext.Provider>
  )
}

export { MyContext, AuthProvider };

