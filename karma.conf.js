// karma.conf.js
module.exports = function(config) {
  config.set({
    client: {
      mocha: {
        ui: 'tdd'
      }
    }
  });
};