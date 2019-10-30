import React from 'react';

function Game(props) {
    return (
        <div className="card border rounded shadow bg-white w-75 mx-auto my-3">
            <div className="card-body row">
                {props.characters.map((char) => {
                    return (
                    <div className="col" key={char.id}>
                        <div className="card shadow my-3" style={{width: 124, height: 114}}>
                            <img src={char.image} className="card-img-top" onClick={() => props.charClicked(char.id)} alt="" />
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Game;