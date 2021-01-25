import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bracket from './components/Bracket';
import About from './components/About';
import EnterCode from './components/EnterCode';
import CreatePoll from './components/CreatePoll';
import FinishedCreate from './components/FinishedCreate';
import EditBracket from './components/EditBracket';
import Vote from './components/Vote';
import VoteSubmitted from './components/VoteSubmitted';
import Welcome from './components/Welcome';
import FourOFour from './components/FourOFour';
import Public from './components/Public';

function App() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/entercode" component={EnterCode} />
                <Route exact path="/createpoll" component={CreatePoll} />
                <Route exact path="/finishedcreate" component={FinishedCreate} />
                <Route
                    exact
                    path="/bracket"
                    render={({ location, history }) => {
                        return <Bracket history={history} location={location} />;
                    }}
                />
                <Route exact path="/editbracket" component={EditBracket} />
                <Route exact path="/vote" component={Vote} />
                <Route exact path="/votesubmitted" component={VoteSubmitted} />
                <Route exact path="/about" component={About} />
                <Route exact path="/public" component={Public} />
                <Route path="*" component={FourOFour} />
            </Switch>
        </div>
    );
}

export default App;
