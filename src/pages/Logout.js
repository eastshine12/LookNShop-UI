import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useAuthStore from '../util/useAuthStore';

function Logout() {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(['accessToken', 'refreshToken']);

  useEffect(() => {
    removeCookie('accessToken');
    removeCookie('refreshToken');

    useAuthStore.getState().logout();

    navigate('/');
  }, [navigate, removeCookie]);

  return <div>logout..</div>;
}

export default Logout;
