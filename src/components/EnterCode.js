import { Link } from "react-router-dom";

function EnterCode() {
  return (
    <div className="EnterCode">
      <h1>Enter Code</h1>
      <div>
        <input className="six-box" name="code" type="text" placeholder="6 DIGIT CODE" maxLength="6"></input>
      </div>
      <Link to="/vote">
            <button type="button">Vote!</button>
      </Link>
    </div>
  );
}

export default EnterCode;
