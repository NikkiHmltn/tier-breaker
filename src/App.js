import logo from './logo.svg';
import './App.css';
import EnterCode from './components/EnterCode'
import CreatePoll from './components/CreatePoll'
import FinishedCreate from './components/FinishedCreate'
import EditBracket from './components/EditBracket'
import Vote from './components/Vote'

function App() {
  return (
    <div className="App">
      <EnterCode />
      <CreatePoll />
      <FinishedCreate />
      <Bracket />
      <EditBracket />
      <Vote />
    </div>
  );
}

export default App;
