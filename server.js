const express = require('express');
const app = express();
const port = 3111;

app.get('/', (req, res, next) => (
  (Math.random() > 0.8) ?
    res.send('Hello World!') :
    next(new Error('Server errored!'))
));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});