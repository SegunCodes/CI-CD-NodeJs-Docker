const express = require('express');
const app = express();
const dotenv = require("dotenv")
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
