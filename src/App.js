import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import userData from './data/user.json';
import statistics from './data/data.json';
import friends from './data/friends.json';

function App() {
  return (
    <div className="App">
      <Profile {...userData} />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
