import React from 'react';
import './style.css';

function Jumbotron(props) {
    return (
        <div className="jumbotron text-center bg-primary text-white pb-4">
            <h1 className="display-2">Clicky Game</h1>

            <hr className="my-4 mx-4" />

            <p>
                Click on one of the images below to increase your score. Be careful though, don't click an image twice.
            </p>

            <br />

            <span>
                Score: {props.score} | High Score: {props.highScore}
            </span>
        </div>
    );
}

export default Jumbotron;