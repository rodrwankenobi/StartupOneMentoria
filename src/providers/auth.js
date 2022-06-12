import { createContext, useState, useContext, useEffect } from 'react';


const MyContext = createContext();

function AuthProvider({ children }){
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  async function handleLogin(value){
    setIsAuthenticated(value);
  }
  return (
    <MyContext.Provider value={{ isAuthenticated, handleLogin}}>
      { children }
    </MyContext.Provider>
  )
}

export { MyContext, AuthProvider };

