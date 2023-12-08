// src/components/LoginForm.js
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 여기에서 실제 로그인 처리를 수행할 수 있습니다.
    // 예를 들어, 서버 API 호출 등을 수행합니다.

    // 로그인 성공 시
    onLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="userId">
          Username:
          <input
            id="userId"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="pwd">
          Password:
          <input
            id="pwd"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
