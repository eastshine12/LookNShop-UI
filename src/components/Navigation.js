import React, { useState } from 'react';
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSubMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
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
          {/* <Typography variant="h6" color="inherit" noWrap>
            LookNShop
          </Typography> */}
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
              <Button
                color="inherit"
                onMouseOver={(e) => handleSubMenuOpen(e)}
                onMouseOut={handleSubMenuClose}
              >
                {mainMenu}
              </Button>
              {/* 서브 메뉴 */}
              {menu[mainMenu].length > 0 && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleSubMenuClose}
                  style={{ marginTop: 40 }}
                >
                  {menu[mainMenu].map((subMenu) => (
                    <MenuItem key={subMenu}>{subMenu}</MenuItem>
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
            <IconButton
              color="inherit"
              onMouseOver={(e) => handleMenuOpen(e)}
              onMouseOut={handleMenuClose}
            >
              <AccountCircle />
            </IconButton>

            {/* 계정 메뉴 */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              style={{ marginTop: 40 }}
            >
              <MenuItem>회원가입</MenuItem>
              <MenuItem>로그인</MenuItem>
              <MenuItem>주문내역</MenuItem>
              {/* ... */}
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
