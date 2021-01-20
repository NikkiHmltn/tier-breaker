import { Link } from "react-router-dom";


function Welcome() {
    return (
      <div className="App">
        
        <div>
          <h1>Tier Breaker</h1>
        </div>
        <div className="instruction-box">
          <h3>Instructions</h3>
          <div className="words-box">Words</div>
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
    );
  }
  
  export default Welcome;