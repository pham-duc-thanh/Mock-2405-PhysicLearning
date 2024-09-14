// // UserContext.js
// import React, { createContext, useState, useContext } from 'react';

// const UserContext = createContext();

// export const useUserContext = () => useContext(UserContext);

// const StoreContext = ({ children }) => {
//   const [user, setUser] = useState({ isLoggedIn: false, fullName: '' });

//   const setIsLoggedIn = ({ isLoggedIn, fullName }) => {
//     setUser({ isLoggedIn, fullName });
//   };

//   return (
//     <UserContext.Provider value={{ user, setIsLoggedIn }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default StoreContext;






import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const StoreContext = ({ children }) => {

  const url = "http://localhost:3000"

  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : { isLoggedIn: false, fullName: '' };
  });

  const setIsLoggedIn = ({ isLoggedIn, fullName }) => {
    setUser({ isLoggedIn, fullName });
  };

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setIsLoggedIn, url }}>
      {children}
    </UserContext.Provider>
  );
};

export default StoreContext;





// import React, { createContext, useState, useContext, useEffect } from 'react';

// const UserContext = createContext();

// export const useUserContext = () => useContext(UserContext);

// const url = "http://localhost:3000"

// const SESSION_TIMEOUT = 10 * 1000; // 10 seconds in milliseconds

// const StoreContext = ({ children }) => {

//   const [user, setUser] = useState(() => {
//     const storedUser = sessionStorage.getItem('user');
//     return storedUser ? JSON.parse(storedUser) : { isLoggedIn: false, fullName: '' };
//   });

//   const setIsLoggedIn = ({ isLoggedIn, fullName }) => {
//     setUser({ isLoggedIn, fullName });
//     // Reset session timeout when user logs in
//     resetSessionTimeout();
//   };

//   const resetSessionTimeout = () => {
//     clearTimeout(window.sessionTimer);
//     window.sessionTimer = setTimeout(() => {
//       // Clear user data after session timeout
//       sessionStorage.removeItem('user');
//       setUser({ isLoggedIn: false, fullName: '' });
//     }, SESSION_TIMEOUT);
//   };

//   useEffect(() => {
//     resetSessionTimeout();

//     return () => {
//       // Clear timeout when component unmounts
//       clearTimeout(window.sessionTimer);
//     };
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setIsLoggedIn, url }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default StoreContext;