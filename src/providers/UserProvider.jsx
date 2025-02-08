import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(true);

  const login = () => {
    setToken(true);
  };

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ user, setUser, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
