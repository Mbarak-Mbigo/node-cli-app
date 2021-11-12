const cakes = [
  "Strawberry",
  "Vanilla",
  "Mint",
  "White Chocolate",
  "Black Forest",
  "Red Velvet",
  "Fruit Cake",
];

const renderCakes = () => {
  cakes.forEach((cake, index) => console.log(`${index + 1} => ${cake}`));
};

module.exports = renderCakes;
