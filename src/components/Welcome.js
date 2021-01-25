import { Link } from 'react-router-dom';
import './css/Welcome.css';

function Welcome() {
    return (
      <div className="App">
        
        <div>
          <h1>Tier Breaker</h1>
            <p>Hassle-free tournament creation. No signups required, no passwords to keep track of.</p>
        </div>
        
        <div className="instruction-box">
          <h3>Instructions</h3>
          
            <p>Create tournament brackets with your group or some friends. Easy and timed to determine the winners by your votes!</p>

            <div class="media">
              <div class="image"><img src="https://img.icons8.com/carbon-copy/100/000000/1-circle.png" alt="placeholder"/></div>
              <div class="content"><span>Create a tournament bracket with a title, your options that go in each cell of the bracket, how long you want it to be open to votes for, and how you want your winner displayed. </span></div>
            </div>

            <div class="media">
              <div class="image"><img src="https://img.icons8.com/carbon-copy/100/000000/2-circle.png" alt="placeholder"/></div>
              <div class="content"><span>Share the bracket with your friends or group! Once its created, it will take however many days you chose, to close. For example, a bracket with 4 options and to close in a day will have 2 rounds. If you chose to have it close in 1 day, each round will be open to votes for 12 hours, respectively.</span></div>
            </div>

            <div class="media">
              <div class="image"><img src="https://img.icons8.com/carbon-copy/100/000000/3-circle.png" alt="placeholder"/></div>
              <div class="content"><span>That's it!</span></div>
            </div>

        </div>
        <div>
          <Link to="/createpoll">
            <a href="." className="waves-effect waves-light btn pink">Create a Poll</a>
          </Link>
          <Link to="/entercode">
            <a href="." className="waves-effect waves-light btn pink">Enter Code</a>
          </Link>

        </div>
      </div>
    );
}

export default Welcome;
