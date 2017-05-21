import { compose, join, juxt, head, not, tail, toUpper } from 'ramda';

export const capitalize1st = compose(join(''), juxt([compose(toUpper, head), tail]));