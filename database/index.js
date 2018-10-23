const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/dmi';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to mongo!!!');
});

const dataSchema = new mongoose.Schema({
  string: String,
});

const StringModel = mongoose.model('StringModel', dataSchema);

const getStrings = (callback) => {
  StringModel.find((err, strings) => {
    if (err) return console.error(err);
    callback(err, strings);
  });
};

const saveString = (string, callback) => {
  const newString = new StringModel({ string });
  newString.save((err, strings) => callback(err, strings));
};

module.exports = {
  db,
  getStrings,
  saveString,
};

