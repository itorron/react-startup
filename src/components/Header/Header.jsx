import React from 'react';

import './Header.css';
import { Menu } from 'antd';

function Header() {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
  );
}
export default Header;
