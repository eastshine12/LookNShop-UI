// /* eslint-disable import/prefer-default-export */
// import { useState } from 'react';
// // import { useCookies } from 'react-cookie';

// export default function useAuth() {
//   // const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // useEffect(() => {
//   //   const token = cookies.accessToken;
//   //   setIsLoggedIn(!!token);
//   // }, [cookies.accessToken]);

//   const userLogin = (/* accessToken, refreshToken */) => {
//     // setCookie('accessToken', accessToken, { path: '/' });
//     // setCookie('refreshToken', refreshToken, { path: '/' });
//     setIsLoggedIn(true);
//   };

//   const userLogout = () => {
//     // removeCookie('accessToken', { path: '/' });
//     // removeCookie('refreshToken', { path: '/' });
//     setIsLoggedIn(false);
//   };

//   return {
//     isLoggedIn,
//     userLogin,
//     userLogout,
//   };
// }
