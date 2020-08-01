import React from 'react';

const Modal = (props) => {
    return (
        <div className="ui active tiny modal">
            <div className="content">
                <label>User created successfully</label>
            </div>
            <div className="actions" style={{textAlign: "center"}}>
                <div className="ui positive button" onClick={() => props.handleSubmit()}>Yes</div>
            </div>
        </div>
    )
}

export default Modal;