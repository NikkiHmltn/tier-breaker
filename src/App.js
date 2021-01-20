import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Bracket from './components/Bracket'
import EnterCode from './components/EnterCode'
import CreatePoll from './components/CreatePoll'
import FinishedCreate from './components/FinishedCreate'
import EditBracket from './components/EditBracket'
import Vote from './components/Vote'
import Welcome from './components/Welcome'
// import FourOFour from './components/FourOFour'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
        <Switch>
      
          <div>
            <Route exact path ="/" component={ Welcome } />
            <Route exact path="/entercode" component={EnterCode} />
            <Route exact path="/createpoll" component={CreatePoll} />
            <Route exact path="/finishedcreate" component={FinishedCreate} />
            <Route exact path="/bracket" component={Bracket} />
            <Route exact path="/editbracket" component={EditBracket} />
            <Route exact path="/vote" component={Vote} />
            {/* <Route path="*" component={FourOFour} /> */}
          </div>

        </Switch>
    </div>
  );
}

export default App;
