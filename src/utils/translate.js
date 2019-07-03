import en from '../translations/en.json';

export default (key) => en[key] ? en[key] : key;
