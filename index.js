const express = require('express');
const app = express();
const port = 3000;

const db = require('./Postgre')
const todoRouter = require('./routers/TodoRouter');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});
app.use('/api',todoRouter);

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
