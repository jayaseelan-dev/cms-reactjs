// https://reactrouter.com/docs/en/v6/examples/auth

import React, { useState } from 'react';
import { login } from '../services';

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (credentials, callback) => {
    return login().then(response => {
      return response.json();
    }).then(users => {
      // Filter logged in user
      const loginUser = users.find(
        user => user.email === credentials.emailId && user.password === credentials.password
      );

      if (loginUser) {
        setUser(loginUser.name);
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  let signout = () => {
    setUser(null);
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth }
