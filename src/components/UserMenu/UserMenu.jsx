import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { logOut } from '../../redux/auth/auth-operations';
import { useAuth } from '../hooks';
import defaultAvatar from './default-avatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatar = defaultAvatar;

  const menu = (
    <Menu style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Welcome {user.name}
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<LogoutOutlined />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div style={{ cursor: 'pointer' }}>
        <Avatar src={avatar} alt="avatar" />
      </div>
    </Dropdown>
  );
};

export default UserMenu;
