import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Bracket from './components/Bracket';
import About from './components/About';
import EnterCode from './components/EnterCode';
import CreatePoll from './components/CreatePoll';
import FinishedCreate from './components/FinishedCreate';
import EditBracket from './components/EditBracket';
import VoteSubmitted from './components/VoteSubmitted';
import Welcome from './components/Welcome';
import FourOFour from './components/FourOFour';
import Public from './components/Public';
import io from 'socket.io-client';

function App() {
    const [socket, setSocket] = useState(false);

    if (!socket) setSocket(io(process.env.REACT_APP_SERVER_URL));

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
                        return <Bracket history={history} location={location} socket={socket} />;
                    }}
                />
                <Route exact path="/editbracket/:key" component={EditBracket} />
                <Route exact path="/votesubmitted" component={VoteSubmitted} />
                <Route exact path="/about" component={About} />
                <Route exact path="/public" component={Public} />
                <Route path="*" component={FourOFour} />
                <Route exact path="/404" component={FourOFour} />
            </Switch>
        </div>
    );
}

export default App;
