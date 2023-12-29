import { useAuth } from '../hooks';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import UserMenu from 'components/UserMenu';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div style={{ display: 'flex', flex: 'auto' }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/" end>
            Home
          </NavLink>
        </Menu.Item>
        {isLoggedIn && (
          <Menu.Item key="phonebook" icon={<PhoneOutlined />}>
            <NavLink to="/contacts">Phonebook</NavLink>
          </Menu.Item>
        )}
      </div>
      {!isLoggedIn && (
        <>
          <Menu.Item key="registration">
            <NavLink to="/registration">Registration</NavLink>
          </Menu.Item>
          <Menu.Item key="login">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
        </>
      )}
      {isLoggedIn && (
        <Menu.Item>
          <UserMenu />
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navigation;
