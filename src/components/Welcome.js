import { Link } from 'react-router-dom';
import './css/Welcome.css';

function Welcome() {
    return (
        <div className="App">
            <h1 className="logo-title">Tier Breaker</h1>
            <p>Hassle-free tournament creation. No signups required, no passwords to keep track of.</p>
            <div className="instruction-box">
                <div className="words-box">
                    <h5>
                        Create tournament brackets with your group or some friends. Easy and timed to determine the
                        winners by your votes!
                    </h5>
                    <div className="step-instruct">
                        <img src="https://img.icons8.com/carbon-copy/100/000000/1-circle.png" alt="step one" />
                        <p>
                            Create a custom poll, from title to matchup options. Decide how long you want the tournament
                            to be open to votes for, and how you want your winner displayed.
                        </p>
                    </div>
                    <div className="step-instruct">
                        <img src="https://img.icons8.com/carbon-copy/100/000000/2-circle.png" alt="step two" />
                        <p>
                            Share the bracket with your friends or group! Once created, it will take however many days
                            you chose to close. If you are interested in our Discord bot, check out the
                            <Link to="/about"> About Page</Link> for details.
                        </p>
                    </div>
                    <div className="step-instruct">
                        <img src="https://img.icons8.com/carbon-copy/100/000000/3-circle-c.png" alt="step three" />
                        <p>That's it! Come back to see your votes roll in or view your tallied reuslts.</p>
                    </div>
                </div>
                <div className="image-box">Image</div>
            </div>
            <div className="welcome-buttons">
                <Link to="/createpoll">
                    <button className="waves-effect waves-light btn" type="button">
                        Create a Poll
                    </button>
                </Link>
                <Link to="/entercode">
                    <button className="waves-effect waves-light btn" type="button">
                        Enter Code
                    </button>
                </Link>
                <Link to="/public">
                    <button className="waves-effect waves-light btn" type="button">
                        Vote Public
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;
