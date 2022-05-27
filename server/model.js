const db = require('./db');

const getData = (req, res) => {
  db.find({}, (err, doc) => {
    if (err) res.status(500).send(err);
    res.status(200).send(doc);
  });
};
const postData = (req, res) => {
  console.log(req.body);
  let post = new db(req.body);
  post.save()
    .then(() => res.sendStatus(201))
    .catch(err => res.status(201).send(doc));
  // db.update(req.body.data, { upsert: true }, (err, doc) => {
    // if (err) res.status(500).send(err);
    // res.status(201).send(doc);
  // });
};
const updateData = () => {
  db.query();
};
const deleteData = () => {
  db.query();
};

module.exports = { getData, postData, updateData, deleteData };