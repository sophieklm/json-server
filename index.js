const jsonServer = require("json-server");
const dotenv = require("dotenv");
const pause = require("connect-pause");
const generate = require("./generate");
const server = jsonServer.create();
const router = jsonServer.router(generate());
const middlewares = jsonServer.defaults();

dotenv.config();

isAuthorized = (req) => {
  return req.headers.authorization === "Bearer " + process.env.API_KEY;
};

randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

delay = () => {
  return Math.floor(Math.random() * 4000);
};

server.use(middlewares);
server.use(pause(delay()));

server.use((req, res, next) => {
  if (randomNumber() === 5) {
    res.sendStatus(500);
  } else if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(process.env.PORT, () => {
  console.log("JSON Server is running");
});
