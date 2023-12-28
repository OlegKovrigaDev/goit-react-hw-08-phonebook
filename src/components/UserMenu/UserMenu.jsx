import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { useAuth } from '../hooks';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="avatar" />
      <span>Welcome {user.name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Add
      </button>
    </div>
  );
}
