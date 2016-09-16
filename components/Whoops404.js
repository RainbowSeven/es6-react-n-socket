import React from 'react';
import {Link} from 'react-router';


const Whoops404 = () => {
    return (
        <div id="not-found">
            <h1>Whoops...</h1>
            <p>We cannot find the page that you have requested.
            Were you looking for one of these:
            </p>
            <ul>
                <li><Link to="/">Join as Audience</Link></li>
                <li><Link to="/speaker">Start the presentation</Link></li>
                <li><Link to="/board">View the board</Link></li>
            </ul>
        </div>
    );
}

export default Whoops404;
