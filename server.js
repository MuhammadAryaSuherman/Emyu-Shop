const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/product.json');
const middlewares = jsonServer.defaults();

// Middleware untuk menghindari error terkait folder public
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
