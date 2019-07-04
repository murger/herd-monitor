import statusTypes from '../translations/statusTypes.json';

export default (key) => statusTypes[key] ? statusTypes[key] : key;
