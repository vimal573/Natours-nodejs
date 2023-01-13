const dotenv = require('dotenv').config();
const app = require('./app.js');

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
