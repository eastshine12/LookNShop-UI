import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
  AppBar,
  Toolbar,
  // Typography,
} from '@mui/material';

import { AccountCircle, Search, ShoppingCart } from '@mui/icons-material';

const menu = {
  BEST: ['NEW', 'OUTER', 'TOP'],
  당일발송: ['NEW', 'OUTER', 'TOP'],
  '1+1': [],
  OUTER: [],
  TOP: [],
  SHIRTS: [],
  KNITS: [],
  PANTS: [],
  ACC: [],
  커뮤니티: ['이벤트', '공지사항', 'FAQ'],
};

function Navigation() {
  const [anchorEl, setAnchorEl] = useState({});
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClick = (mainMenu) => (event) => {
    setAnchorEl((prev) => ({
      ...prev,
      [mainMenu]: event.currentTarget, // 해당 메인 메뉴의 anchorEl만 업데이트
    }));
  };

  const handleClose = (mainMenu) => () => {
    setAnchorEl((prev) => ({
      ...prev,
      [mainMenu]: null, // 해당 메인 메뉴의 anchorEl을 닫음
    }));
  };

  const handleAccountClick = (event) => {
    // 계정 메뉴 클릭 시의 핸들러
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    // 계정 메뉴 닫기 핸들러
    setAccountAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      style={{ backgroundColor: 'white' }}
    >
      <Toolbar>
        {/* 로고 */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="images/logo.png"
            alt="Logo"
            style={{ width: '100%', height: 36, marginRight: 5 }}
          />
        </div>

        {/* 메뉴 */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* 메인 메뉴 */}
          {Object.keys(menu).map((mainMenu) => (
            <div
              key={mainMenu}
              style={{ position: 'relative', margin: '0 16px' }}
            >
              <Button color="inherit" onClick={handleClick(mainMenu)}>
                {mainMenu}
              </Button>
              {/* 서브 메뉴 */}
              {menu[mainMenu].length > 0 && (
                <Menu
                  anchorEl={anchorEl[mainMenu]}
                  open={Boolean(anchorEl[mainMenu])}
                  onClose={handleClose(mainMenu)}
                  style={{ marginTop: 40 }}
                >
                  {menu[mainMenu].map((subMenu) => (
                    <MenuItem key={subMenu} onClick={handleClose(mainMenu)}>
                      {subMenu}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}

          {/* 우측 버튼들 */}
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton color="inherit" onClick={handleSearchToggle}>
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
            <IconButton color="inherit" onClick={handleAccountClick}>
              <AccountCircle />
            </IconButton>

            {/* 계정 메뉴 */}
            <Menu
              anchorEl={accountAnchorEl}
              open={Boolean(accountAnchorEl)}
              onClose={handleAccountClose}
              style={{ marginTop: 40 }}
            >
              <MenuItem onClick={handleAccountClose}>회원가입</MenuItem>
              <MenuItem onClick={handleAccountClose}>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  로그인
                </Link>
              </MenuItem>
              <MenuItem onClick={handleAccountClose}>주문내역</MenuItem>
            </Menu>
          </div>

          {/* 검색 창 */}
          {searchOpen && (
            <div style={{ marginLeft: 16, position: 'relative' }}>
              <InputBase
                placeholder="Search..."
                style={{
                  border: '1px solid #ccc',
                  padding: 8,
                  borderRadius: 4,
                }}
              />
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
