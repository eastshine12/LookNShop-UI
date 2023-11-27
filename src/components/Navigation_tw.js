import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

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
  const [searchVisible, setSearchVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);

  return (
    <nav className="bg-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-black text-lg font-semibold">LookNShop</span>
        </div>

        {/* 메뉴 */}
        <div className="flex space-x-4">
          {Object.keys(menu).map((mainMenu) => (
            <div key={mainMenu} className="relative group">
              <button className="text-black hover:text-gray-300">
                {mainMenu}
              </button>
              {/* 서브메뉴 */}
              {menu[mainMenu].length > 0 && (
                <div className="hidden group-hover:block absolute bg-white p-2 space-y-2">
                  {menu[mainMenu].map((subMenu) => (
                    <p key={subMenu}>{subMenu}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 우측 버튼들 */}
        <div className="flex items-center space-x-4">
          <button
            className="text-black hover:text-gray-300"
            aria-label="search"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FiSearch />
          </button>
          <button className="text-black hover:text-gray-300" aria-label="card">
            <FiShoppingCart />
          </button>
          <button
            className="text-black hover:text-gray-300"
            onMouseEnter={() => setAccountMenuVisible(true)}
            onMouseLeave={() => setAccountMenuVisible(false)}
            aria-label="user"
          >
            <FiUser />
            {/* 계정 메뉴 */}
            {accountMenuVisible && (
              <div className="absolute top-0 right-0 mt-16 p-4 bg-white w-48 shadow-lg">
                <p className="text-gray-800">Account Menu</p>
                <button className="text-gray-800 hover:underline">
                  Sign Up
                </button>
                <button className="text-gray-800 hover:underline">
                  Log In
                </button>
                <button className="text-gray-800 hover:underline">
                  Order History
                </button>
                {/* ... */}
              </div>
            )}
          </button>
        </div>

        {/* 검색 창 */}
        {searchVisible && (
          <div className="absolute top-0 right-0 mt-16 p-4 bg-white w-64 shadow-lg">
            {/* Search component */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full border p-2 rounded"
            />
            {/* ... */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
