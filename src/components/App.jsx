import { Profile } from './Profile/Profile';
import { user } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { data } from './Statistics/Statistics';
import { FriendList } from './Friendlist/FriendList';
import { friendsArr } from './Friendlist/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friendsArr} />
    </div>
  );
};