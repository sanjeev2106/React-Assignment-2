import React from 'react';

const validate = (props) =>{

    let validationMessage = 'Text too short';
    if(props.inputLen > 5){
        validationMessage = 'Text long enough';
    }
    return(
        <div>
            {/* {
                props.inputLen > 5 ?
                <p>Text long enough</p> :
                <p>Text is too short!</p>
            } */}
            <p>{validationMessage}</p>
        </div>
    )
}

export default validate;