import './App.css';
import Profile from './components/Profile/Profile';
import userData from './data/user.json';

function App() {
  return (
    <div className="App">
      <Profile {...userData} />
    </div>
  );
}

export default App;
