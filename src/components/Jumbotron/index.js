import React from 'react';

let score = 0;
let highScore = 0;

function Jumbotron() {
    return (
        <div className="jumbotron text-center bg-primary text-white pb-4">
            <h1 className="display-2">Clicky Game</h1>

            <hr className="my-4 mx-4" />

            <p>
                Click on one of the images below to increase your score. Be careful though, don't click an image twice.
            </p>

            <span className="h3">
                Score: {score} | High Score: {highScore}
            </span>
        </div>
    );
}

export default Jumbotron;