import { Link } from "react-router-dom";

function EnterCode() {
  return (
    <div className="EnterCode">
      <h1>Enter Code</h1>
      <div>
        <input className="six-box" name="code" type="text" placeholder="8 DIGIT CODE" maxLength="8"></input>
      </div>
      <Link to="/vote">
        <a href="." className="waves-effect waves-light btn pink">Vote!</a>
      </Link>
    </div>
  );
}

export default EnterCode;
