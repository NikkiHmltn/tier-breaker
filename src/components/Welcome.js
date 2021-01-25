  
import { Link } from 'react-router-dom';
import './css/Welcome.css';

function Welcome() {
    return (
      <div className="App">
        <h1 className="logo-title">Tier Breaker</h1>
        <div className="instruction-box">
          <div className="words-box">
            <h5>Create tournament brackets with your group or some friends. Easy and timed to determine the winners by your votes!</h5>
              <div className="step-instruct">
                <img src="https://img.icons8.com/carbon-copy/100/000000/1-circle.png"/> 
                <p>Create a tournament bracket with a title, your options that go in each cell of the bracket, how long you want it to be open to votes for, and how you want your winner displayed. </p>
              </div>
              <div className="step-instruct">
                <img src="https://img.icons8.com/carbon-copy/100/000000/2-circle.png"/>
                <p>
                  Share the bracket with your friends or group! Once its created, it will take however many days you chose, to close. For example, a bracket with 4 options and to close in a day will have 2 rounds. If you chose to have it close in 1 day, each round will be open to votes for 12 hours, respectively. 
                </p>
              </div>
              <div className="step-instruct">
                <img src="https://img.icons8.com/carbon-copy/100/000000/3-circle-c.png"/>
                <p>
                  That's it! Hassle-free tournament creation. No signups required, no passwords to keep track of.
                </p>
              </div>
          </div>
          <div className="image-box">Image</div>
        </div>
        <div className="welcome-buttons">
          <Link to="/createpoll">
            <button className="waves-effect waves-light btn" type="button">Create a Poll</button>
          </Link>
          <Link to="/entercode">
            <button className="waves-effect waves-light btn" type="button">Enter Code</button>
          </Link>
          <Link to="/public">
            <button className="waves-effect waves-light btn" type="button">Vote Public</button>
          </Link>

        </div>
      </div>
    );
}

export default Welcome;