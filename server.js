require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE_CONNECTION_STRING.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection successfull');
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
