/* eslint-disable global-require */
if (__DEV__) {
  module.exports = require('./configureStore.dev');
} else {
  module.exports = require('./configureStore.prod');
}
/* eslint-enable global-require */
