import { compose, isEmpty, join, juxt, head, not, tail, toUpper } from 'ramda';

export const validateEmail = (email) => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
};

export const notEmpty = compose(not, isEmpty);

export const capitalize = compose(join(''), juxt([compose(toUpper, head), tail]));

export const getCategory = (path) => head(tail(path.split('/category/')));