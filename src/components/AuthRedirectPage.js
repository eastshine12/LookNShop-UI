import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function AuthRedirectPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);

  useEffect(() => {
    // URL에서 토큰 추출 (예: query string에서 추출)
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('access-token');
    const refreshToken = params.get('refresh-token');

    if (accessToken) {
      setCookie('accessToken', accessToken);
      console.log(cookies);
    } else {
      console.error('No access token found in the URL.');
    }

    if (refreshToken) {
      setCookie('refreshToken', refreshToken);
      console.log(cookies);
    } else {
      console.error('No refresh token found in the URL.');
    }

    navigate('/');
  }, [location.search, navigate, setCookie, cookies]);

  return <div>Redirecting...</div>;
}

export default AuthRedirectPage;
