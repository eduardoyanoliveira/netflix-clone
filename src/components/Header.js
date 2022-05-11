import React from 'react';
import './Header.css'

export default ({black}) => {
    return(
        <header className={black && 'black'}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png" alt="" />
                </a>
            </div>
        </header>
    )
}