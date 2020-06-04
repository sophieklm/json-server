const faker = require("faker");
const _ = require("lodash");

module.exports = () => {
  return {
    stock: {
      stock: _.times(50, (n) => {
        return {
          id: n + 1,
          name: faker.commerce.product(),
          type: faker.commerce.department(),
          units_available: faker.random.number({ min: 0, max: 100 }),
        };
      }),
    },
  };
};
