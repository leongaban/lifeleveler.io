import React from 'react'
const displayHandler = (on) => {
    return on ? 'validation-error show' : 'validation-error';
};

const InputError = (props) => {
    return (
        <div className="rel">
            <div className={ displayHandler(props.on) }>
                { props.msg }
                <div className="down-arrow"></div>
            </div>
        </div>
    );
}

export default InputError;