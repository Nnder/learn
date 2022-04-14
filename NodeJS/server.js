const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application.js');
const app = new Application();
const jsonParser = require('./framework/parseJson');
const userRouter = require('./src/user-router');
const parseUrl = require('./framework/parseUrl');

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));



//const server = http.createServer();

//server.listen()