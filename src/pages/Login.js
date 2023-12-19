/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useCookies } from 'react-cookie';
import login from '../api/user/login';
import useAuthStore from '../util/useAuthStore';

const redirectToGoogle = () => {
  window.location.href = `http://${process.env.REACT_APP_BASE_URL}/oauth2/authorize/google?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

const redirectToNaver = () => {
  window.location.href = `http://${process.env.REACT_APP_BASE_URL}/oauth2/authorize/naver?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

const redirectToKakao = () => {
  window.location.href = `http://${process.env.REACT_APP_BASE_URL}/oauth2/authorize/kakao?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    loginId: '',
    password: '',
  });
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const { setUser } = useAuthStore();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(loginData);
    try {
      const response = await login(loginData);
      if (response) {
        console.log('로그인 성공: ', response);
        setUser(response.data);
        // eslint-disable-next-line dot-notation
        setCookie('accessToken', response.headers['authorization']);
        setCookie('refreshToken', response.headers['authorization-refresh']);
        navigate('/');
      }
    } catch (error) {
      console.error('로그인 실패:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            autoFocus
            value={loginData.loginId}
            onChange={(e) =>
              setLoginData({ ...loginData, loginId: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="아이디 저장하기"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2">
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                회원가입
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 5 }}
      >
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            간편 로그인
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{
              width: '5em',
              height: '5em',
              padding: 0,
            }}
            onClick={redirectToGoogle}
          >
            <img
              src="images/google-logo.png"
              alt="Google"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{
              width: '5em',
              height: '5em',
              padding: 0,
            }}
            onClick={redirectToNaver}
          >
            <img
              src="images/naver-logo.png"
              alt="Naver"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{
              width: '5em',
              height: '5em',
              padding: 0,
            }}
            onClick={redirectToKakao}
          >
            <img
              src="images/kakao-logo.png"
              alt="Kakao"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
