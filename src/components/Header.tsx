import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, Drawer, Menu } from 'antd';
import { ContactsOutlined, HomeOutlined, MenuOutlined, ShoppingOutlined, SketchOutlined, SkinOutlined, UserOutlined } from '@ant-design/icons';

import logo from '../assets/images/Logo-2.png';

import { CartItem } from '../redux/shopping-cart/cartItemSlide';

interface State {
  cartItems: {
    value: CartItem[]
  }
}

interface IMode {
  mode: string,
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
  path: string
}

const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);
  const [valueItems, setValueItems] = useState(0);

  const totalItems: number = useSelector((state: State) => {
    let totalItems = 0;
    state.cartItems.value.map((item) => totalItems = totalItems + item.quantity);
    return totalItems;
  });

  useEffect(() => {
    setValueItems(totalItems);
  }, [totalItems])

  const path = useLocation();

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
          <MenuLeft
            mode='horizontal'
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            path={path.pathname}
          />
        </span>

        <Drawer
          open={openMenu}
          placement='left'
          onClose={() => setOpenMenu(false)}
        >
          <MenuLeft
            mode='vertical'
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            path={path.pathname}
          />
        </Drawer>

        <div className="header__menu__right">
          <Link to='/cart'>
            <Badge count={valueItems} showZero>
              <ShoppingOutlined />
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

function MenuLeft(props: IMode) {
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
      icon: <SkinOutlined />,
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

  const onMenuChange = (key: string) => {
    navigate(key);
  }

  return (
    <Menu
      items={itemPages}
      mode={props.mode === 'horizontal' ? 'horizontal' : 'vertical'}
      defaultSelectedKeys={[props.path]}
      onClick={(e) => {
        onMenuChange(e.key);
        props.setOpenMenu(false);
      }}
    ></Menu>
  )
}

export default Header