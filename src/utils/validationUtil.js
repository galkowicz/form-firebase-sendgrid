import {MINIMUM, EMPTY_STRING, ALPHABET, EMAIL, NUMERIC, EXACTLY_TEN} from '../constants';

export const isEmptyString = (str) => {
    return (!str || 0 === str.length);
};

export const isValidEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
};

export const isExactlyTenChars = (input) => {
    return input.length === 10;
};

export const isMoreThanTwo = (input) => {
    return input.length > 2;
};

export const isOnlyNumbers = (input) => {
    const re = /^\d+$/;
    return re.test(String(input).toLowerCase());
};

export const isOnlyLetters = (input) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(input).toLowerCase());
};

export const isValidName = (name) => {
    const result = {isValid: false, errorMsg: ''};

    if (!isMoreThanTwo(name)) {
        result.errorMsg = MINIMUM;
    }
    if (!isOnlyLetters(name)) {
        result.errorMsg = ALPHABET;
    }
    if (isEmptyString(name)) {
        result.errorMsg = EMPTY_STRING;
    }
    if (result.errorMsg === '') {
        result.isValid = true;
    }

    return result;
};

export const isValidEmailAddress = (email) => {
    const result = {isValid: false, errorMsg: ''};

    if (!isValidEmail(email)) {
        result.errorMsg = EMAIL;
    }

    if (isEmptyString(email)) {
        result.errorMsg = EMPTY_STRING;
    }

    if (result.errorMsg === '') {
        result.isValid = true;
    }

    return result;
};

export const isValidPhone = (phone) => {
    const result = {isValid: false, errorMsg: ''};

    if (!isExactlyTenChars(phone)) {
        result.errorMsg = EXACTLY_TEN;
    }

    if (!isOnlyNumbers(phone)) {
        result.errorMsg = NUMERIC;
    }

    if (isEmptyString(phone)) {
        result.errorMsg = EMPTY_STRING;
    }

    if (result.errorMsg === '') {
        result.isValid = true;
    }

    return result;
};