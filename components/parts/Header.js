import React from 'react';

function Header({title, name, status}) {
    return (
        <header className="row">
            <div className="col-xs-10">
                <h1>{title}</h1>
                <p>{name}</p>
            </div>
            <div className="col-xs-2">
                <span id="status" className={status}></span>
            </div>
        </header>
    );
}


export default Header;
