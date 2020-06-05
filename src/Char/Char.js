import React from 'react';

const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    textAlign: 'ceenter',
    border: '2px solid black'
}

const char = (props) =>{
    return(
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    )
}

export default char;