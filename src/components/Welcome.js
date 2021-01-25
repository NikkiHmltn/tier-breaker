import { Link } from 'react-router-dom';
import './css/Welcome.css';

function Welcome() {
    return (
        <div className="App">
            <div>
                <h1>Tier Breaker</h1>
            </div>
            <div className="instruction-box">
                <h3>Instructions</h3>
                <div className="words-box">
                    <p>
                        Create tournament brackets with your group or some friends. Easy and timed to determine the
                        winners by your votes!
                    </p>
                    <p>
                        <div className="step-one">
                            <img src="https://img.icons8.com/carbon-copy/100/000000/1-circle.png" />
                            <span>
                                Create a tournament bracket with a title, your options that go in each cell of the
                                bracket, how long you want it to be open to votes for, and how you want your winner
                                displayed.{' '}
                            </span>
                            <br></br>
                        </div>
                        <div className="step-two">
                            <img src="https://img.icons8.com/carbon-copy/100/000000/2-circle.png" />
                            <span>
                                Share the bracket with your friends or group! Once its created, it will take however
                                many days you chose, to close. For example, a bracket with 4 options and to close in a
                                day will have 2 rounds. If you chose to have it close in 1 day, each round will be open
                                to votes for 12 hours, respectively.
                            </span>
                            <br></br>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/carbon-copy/100/000000/3-circle-c.png" />
                            <span>That's it!</span>
                        </div>
                    </p>
                    <p>Hassle-free tournament creation. No signups required, no passwords to keep track of.</p>
                </div>
                <div className="image-box">Image</div>
            </div>
            <div>
                <Link to="/createpoll">
                    <button type="button">Create a Poll</button>
                </Link>
                <Link to="/entercode">
                    <button type="button">Enter Code</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Welcome;
