const order = require("../lib/order");

const orderObj = {
  type: "Vanilla",
  size: "Large",
  topping: "Nuts",
};

const result = [
  "\n1:type => Vanilla",
  "\n2:size => Large",
  "\n3:topping => Nuts",
];

test("Maps properties correctly - commander", () => {
  expect(order.commanderOrder(orderObj)).toEqual(result);
});
