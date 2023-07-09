import PropTypes from 'prop-types';

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

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    <span class="status"></span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>
);

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

// Trzeba przemapować po obiketach tablicy friends i na kazdy obiekt friend wyciągnąć propsy
