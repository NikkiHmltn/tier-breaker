import { Link } from 'react-router-dom';
import './css/FourOFour.css';

function FourOFour() {
    return (
        <div className="FourOFour">
            <h1>Oops! Looks like something went wrong.</h1>
            <h3 className="message">
                Our Devs are looking into this error. In the meantime, please go back to our homepage.
            </h3>
            <div>
                <Link to="/">
                    <img
                        alt="404 Error: click to return home"
                        src="https://i.imgur.com/V89AznE.png"
                        title="Click to return to home page"
                    />
                </Link>
            </div>
        </div>
    );
}

export default FourOFour;
