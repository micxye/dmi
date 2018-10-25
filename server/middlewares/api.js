const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/dmi';
mongoose.connect(mongoDB);

const dataSchema = new mongoose.Schema({
  string: String,
});

const StringModel = mongoose.model('StringModel', dataSchema);

router.get('/', (req, res) => {
  StringModel.find((err, strings) => {
    if (err) {
      res.status(500).send('error getting strings from database', err);
    } else {
      res.json(strings);
    }
  });
});

router.post('/', (req, res) => {
  const newString = new StringModel({ string: req.body.string });
  newString.save((err) => {
    if (err) {
      res.status(500).send('error saving string', err);
    } else {
      res.status(200).send('string saved to database');
    }
  });
});

module.exports = router;

