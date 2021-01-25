import React from 'react'
import './css/FinishedCreate.css';
import { useHistory } from 'react-router-dom';

function FinishedCreate(props) {

    const data = props.history.location.state.bracket
    console.log(data)
    const history = useHistory();

    const viewLink = (e) => {
      e.preventDefault();
      history.push({
          pathname: `bracket/`,
          state: { key: data.key }
      });
    }
    
    const editLink = (e) => {
      e.preventDefault();
      history.push({
          pathname: `editbracket/`,
          state: { key: data.key }
      });
    }

    return (
      <div className="FinishedCreate">
        <h4>Your Poll</h4>
        <h2>{data.title}</h2>
        <h4>has been created.</h4>
        
        <div>
        <h5 className="pollkey">Poll Key:</h5>
        <h3>{data.key}</h3>
          <button onClick={() =>  navigator.clipboard.writeText(`${data.key}`)}>
          <i className="material-icons"><span class="material-icons">content_paste</span></i>
          </button>
        </div>

        <hr></hr>
        <div>
        <h5>Edit Link:</h5>
        <h3><a onClick={editLink}>Edit</a></h3>
        <button onClick={() =>  navigator.clipboard.writeText(`/editbracket/${data.key}`)}>
          <i className="material-icons"><span class="material-icons">content_paste</span></i>
          </button>
        </div>

        <hr></hr>
        <div>
        <h5>View Bracket Link:</h5>
        <h3><a onClick={viewLink}>View</a></h3>
        <button onClick={() =>  navigator.clipboard.writeText(`/bracket/${data.key}`)}>
          <i className="material-icons"><span class="material-icons">content_paste</span></i>
          </button>
        </div>
      </div>
    );
  }
export default FinishedCreate;