import React from 'react'

const displayHandler = (props) => {
	let classString = 'validation-error';
    classString = props.on ? `${classString} show` : classString;
    classString = props.width ? `${classString} w${props.width}` : classString;
    return classString;
};

const InputError = (props) => {
    return (
        <div className="rel">
            <div className={ displayHandler(props) }>
                { props.msg }
                <div className="down-arrow"></div>
            </div>
        </div>
    );
}

export default InputError;