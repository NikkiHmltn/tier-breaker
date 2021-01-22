import { Link } from "react-router-dom";

function Vote() {
    return (
      <div className="Vote">
        <Link to="/votesubmitted">
          <a href="." className="waves-effect waves-light btn pink">Submit Vote</a>
        </Link>
      </div>
    );
  }
  
  export default Vote;