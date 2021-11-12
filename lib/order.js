const order = (options) => {
  Object.keys(options).forEach((key, index) =>
    console.log(`${index}:${key} => ${options[key]}`)
  );
};

module.exports = order;
