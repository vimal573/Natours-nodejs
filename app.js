const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Hello from server side',
//     app: 'Natours',
//   });
// });

// app.post('/', (req, res) => {
//   res.end(`You can send the request to this endpoint.........`);
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...........`);
});
