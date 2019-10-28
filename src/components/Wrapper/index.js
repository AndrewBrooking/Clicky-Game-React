import React from 'react';
import characters from '../../images.json';

function Wrapper(props) {
    return (
        <div className="card border rounded shadow bg-white w-75 mx-auto my-3">
            <div className="card-body row">
                {characters.map((char) => {
                    return (
                    <div className="col" key={char.id}>
                        <div className="card shadow my-3" style={{width: 124, height: 114}}>
                            <img src={char.image} className="card-img-top" onClick={() => console.log(char.id)} />
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Wrapper;