import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import signup from '../api/user/signup';

const redirectToGoogle = () => {
  window.location.href = `http://${process.env.REACT_APP_BASE_URL}/oauth2/authorize/google?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

const redirectToNaver = () => {
  window.location.href = `http://${process.env.REACT_APP_BASE_URL}/oauth2/authorize/naver?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

const redirectToKakao = () => {
  window.location.href = `http://${process.env.REACT_APP_BASE_URL}/oauth2/authorize/kakao?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      loginId: data.get('loginId'),
      password: data.get('password'),
      name: data.get('name'),
      email: data.get('email'),
    });

    try {
      const response = await signup(data);
      if (response) {
        console.log('회원가입 성공: ', response);
        navigate('/');
      }
    } catch (error) {
      console.error('회원가입 실패:', error.message);
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
          회원가입
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="loginId"
                label="아이디"
                name="loginId"
                autoComplete="id"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password2"
                label="비밀번호 확인"
                type="password"
                id="password2"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="이름"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="이용약관 개인정보 수집 및 정보이용에 동의합니다."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            가입하기
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              이미 계정이 있습니까?
              <Link to="/login" variant="body2">
                로그인
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            간편 회원가입
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
