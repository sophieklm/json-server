const jsonServer = require("json-server");
const dotenv = require("dotenv");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

dotenv.config();

server.use(middlewares);

isAuthorized = (req) => {
  return req.headers.authorization === "Bearer " + process.env.API_KEY;
};

server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(process.env.PORT, () => {
  console.log("JSON Server is running");
});
