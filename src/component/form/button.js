import React from "react";

function MyButton(props){
    const {handleSubmit}= props
    return(
        <button onClick={handleSubmit}>
            Submit
        </button>
    );
}

export default MyButton;
