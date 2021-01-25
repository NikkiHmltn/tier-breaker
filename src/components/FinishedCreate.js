import React from 'react'
import './css/FinishedCreate.css';

function FinishedCreate(props) {
  console.log(props.history.location.state.bracket);

    const data = props.history.location.state.bracket

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
        <h3><a href={`${process.env.REACT_APP_SERVER_URL}/bracket/${data.key}`}>Edit</a></h3>
        <button onClick={() =>  navigator.clipboard.writeText(`${process.env.REACT_APP_SERVER_URL}/editbracket/${data.key}`)}>
          <i className="material-icons"><span class="material-icons">content_paste</span></i>
          </button>
        </div>

        <hr></hr>
        <div>
        <h5>View Bracket Link:</h5>
        <h3><a href={`${process.env.REACT_APP_SERVER_URL}/bracket/${data.key}`}>View</a></h3>
        <button onClick={() =>  navigator.clipboard.writeText(`${process.env.REACT_APP_SERVER_URL}/bracket/${data.key}`)}>
          <i className="material-icons"><span class="material-icons">content_paste</span></i>
          </button>
        </div>
      </div>
    );
  }
export default FinishedCreate;