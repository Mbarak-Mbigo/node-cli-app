const order = (options) => {
  return Object.keys(options).map(
    (key, index) => `\n${index + 1}:${key} => ${options[key]}`
  );
};

module.exports = order;
