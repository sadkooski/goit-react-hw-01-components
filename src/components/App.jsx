import { Profile } from './Profile/Profile';
import { user } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { data } from './Statistics/Statistics';
import { FriendList } from './Friendlist/FriendList';
import { friendsArr } from './Friendlist/FriendList';
import { TransactionHistory } from './Transactions/Transactions';
import { transactionsArr } from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        padding: `80px`,
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: `lightgray`,
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
      <FriendList friends={friendsArr} />
      <TransactionHistory items={transactionsArr} />
    </div>
  );
};
