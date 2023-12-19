/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
import useAuthStore from '../util/useAuthStore';
import getUser from '../api/user/getUser';

function UserProfile() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [userInfo, setUserInfo] = useState({});
  const { user } = useAuthStore();

  const getUserInfo = async () => {
    try {
      const response = await getUser(user.userId, cookies.accessToken);
      console.log('userInfo: ', response);
      setUserInfo(response);
    } catch (error) {
      console.error('유저 정보를 가져오지 못했습니다:', error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    setCookie('jwt', 'updatedJwtToken');
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      // 업데이트된 사용자 정보들...
    }));
    alert('프로필이 업데이트되었습니다.');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        내 정보
      </Typography>
      <Box sx={{ width: '300px', mt: 2 }}>
        <TextField
          fullWidth
          label="사용자명"
          name="username"
          value={userInfo.name}
          onChange={handleInputChange}
          margin="normal"
        />
      </Box>
      <Box sx={{ width: '300px', mt: 2 }}>
        <TextField
          fullWidth
          label="이메일"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          margin="normal"
        />
      </Box>
      {/* 다른 사용자 정보 입력란들 추가 */}
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProfile}
        >
          프로필 업데이트
        </Button>
      </Box>
    </Container>
  );
}

export default UserProfile;
