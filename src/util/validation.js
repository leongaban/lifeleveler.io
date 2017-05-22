export const validEmail = (email) => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
};

export const validPassword = (password) => password.match(/^(?=\D*\d)(?=[^a-zA-Z]*[a-zA-Z])\S{7,}$/);

export const getInputText = (type) => {
	const input_type = `input-signup-${type}`;
	return document.getElementById(input_type).value;
};