module.exports = function test(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
