import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.img} src={avatar} alt="User avatar" width="80" />
      <p>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
