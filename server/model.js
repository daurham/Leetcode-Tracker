const db = require('./db');

const getData = (req, res) => {
  db.find({}, (err, doc) => {
    if (err) res.status(500).send(err);
    res.status(200).send(doc);
  });
};

const postData = (data, res) => {
  if (data.examples.length === 0) delete data.examples;
  let post = new db(data);
  post.save()
    .then(() => res.sendStatus(201))
    .catch(err => res.status(201).send(doc));
};

const updateData = () => {
  db.query();
};

const deleteData = () => {
  db.query();
};

module.exports = { getData, postData, updateData, deleteData };