require('dotenv').config({ path: '../../.env' });
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');

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

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async (req, res) => {
  try {
    await Tour.create(tours);
    console.log('Data successfully imported');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async (req, res) => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

console.log(process.argv);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
