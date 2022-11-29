import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, Drawer, Menu } from 'antd';
import { ContactsOutlined, CrownOutlined, GiftOutlined, HomeOutlined, MenuOutlined, SketchOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

import logo from '../assets/images/Logo-2.png';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [valueItems, setValueItems] = useState(0);
  
  const totalItems = useSelector((state) => {
    let totalItems = 0;
    state.cartItems.value.map((item) => totalItems = totalItems + item.quantity);
    return totalItems;
  });
  
  useEffect(() => {
    setValueItems(totalItems);
  }, [totalItems])

  return (
    <div className='header'>
      <div className="header__logo">
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>

      <div className="header__menu">
        <div className="header__menu__icon">
          <MenuOutlined
            onClick={() => setOpenMenu(true)} />
        </div>

        <span className="header__menu__left">
          <MenuLeft mode='horizontal' />
        </span>

        <Drawer
          open={openMenu}
          placement='left'
          onClose={() => setOpenMenu(false)}
        >
          <MenuLeft mode='vertical' />
        </Drawer>

        <div className="header__menu__right">
          <Link to='/cart'>
            <Badge count={valueItems} showZero>
              <GiftOutlined />
            </Badge>
          </Link>

          <Link to='/profile'>
            <UserOutlined />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MenuLeft(props) {
  const navigate = useNavigate();

  const itemPages = [
    {
      key: '/',
      label: 'Trang chủ',
      icon: <HomeOutlined />,
    },
    {
      key: '/catalog',
      label: 'Sản phẩm',
      icon: <CrownOutlined />,
    },
    {
      key: '/accessories',
      label: 'Phụ kiện',
      icon: <SketchOutlined />,
    },
    {
      key: '/contact',
      label: "Liên hệ",
      icon: <ContactsOutlined />,
    }
  ]

  const onMenuChange = (key) => {
    navigate(key);
  }

  return (
    <Menu
      items={itemPages}
      mode={props.mode}
      defaultActiveFirst='/'
      onClick={(e) => onMenuChange(e.key)}
    ></Menu>
  )
}

export default Header