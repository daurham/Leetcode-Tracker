const db = require('./db');

const getData = (req, res) => {
  db.find({}, (err, doc) => {
    if (err) res.status(500).send(err);
    res.status(200).send(doc);
  });
};
const postData = (req, res) => {
  db.update(req.body.data, { upsert: true }, (err, doc) => {
    if (err) res.status(500).send(err);
    res.status(201).send(doc);
  });
};
const updateData = () => {
  db.query();
};
const deleteData = () => {
  db.query();
};

module.exports = { getData, postData, updateData, deleteData };