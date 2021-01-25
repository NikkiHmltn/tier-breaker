import { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './css/EnterCode.css';
function EnterCode() {

  const [pollKey, setPollKey] = useState('');
  const [bracket, setBracket] = useState('');
  const [error, setError] = useState('');


  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${pollKey}`).then((response) => {
      if (response.data.msg === 'no bracket found') {
        setError({error: true})
      } else {
        setBracket(response.data._brackets);

        history.push({
          pathname: `/bracket/`,
          state: { key: pollKey,  }
        })
      }
      
    })
  }

  return (
    <>
    {error ? <div style={{color: "red"}}>AND ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div> : null}
    <div className="EnterCode">
      <h1>Enter Code</h1>
      <div className="six-box">
        <input className="input" onChange={ e => setPollKey(e.target.value) } name="code" type="text" placeholder="8 DIGIT CODE" maxLength="8"></input>
      </div>
      <div>
        <a onClick={handleSubmit} href="." className="waves-effect waves-light btn pink">Vote!</a>
      </div>
    </div>
    </>
  );
}

export default EnterCode;
