import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const friendsArr = [
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
    name: 'Mango',
    isOnline: true,
    id: 1812,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
    name: 'Kiwi',
    isOnline: false,
    id: 1137,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/1623/1623681.png',
    name: 'Ajax',
    isOnline: true,
    id: 1213,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/2977/2977285.png',
    name: 'Jay',
    isOnline: true,
    id: 1714,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998749.png',
    name: 'Poly',
    isOnline: false,
    id: 1284,
  },
];

const getBgColor = isOnline => {
  switch (isOnline) {
    case false:
      return 'red';
    case true:
      return 'green';
    default:
      throw new Error(`Unsupported variant prop value - ${isOnline}`);
  }
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        style={{ backgroundColor: getBgColor(isOnline) }}
        className={css.status}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="150" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
