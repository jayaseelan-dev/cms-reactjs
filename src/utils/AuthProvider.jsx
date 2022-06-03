// https://reactrouter.com/docs/en/v6/examples/auth

import React, { useState } from 'react';

import { fakeAuthProvider } from './FakeAuthProvider';

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (credentials, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(credentials.emailId);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth }
