const db = require('./db');

// query = `SELECT reviews.*, json_agg(
//   json_build_object(
//     'id', reviews_photos.id,
//     'url', reviews_photos.url
//   )
// ) AS photos FROM reviews JOIN reviews_photos
// ON reviews.id=reviews_photos.review_id WHERE reviews.product_id=$1 GROUP BY reviews.id`;

const getData = (req, res) => {
  let q = 'SELECT * FROM '
  db.query(q, (err, doc) => {
    if (err) res.status(500).send(err);
    res.status(200).send(doc);
  });
};

const postData = (data, res) => {
  if (data.examples.length === 0) delete data.examples;
  let q = 'INSERT'
  db.query(q)
};

const updateData = () => {
  db.query();
};

const deleteData = (data, res) => {
  db.query(q, data, (err, result) => {
    if (err) { console.log(err); res.status(500).send(err); }
    res.sendStatus(204);
  })
  // db.query();
};


/* MongoDB:
const getData = (req, res) => {
  db.find({}, (err, doc) => {
    if (err) res.status(500).send(err);
    res.status(200).send(doc);
  });
};

const postData = (data, res) => {
  if (data.examples.length === 0) delete data.examples;
  let post = new db(data);
  console.log(data);
  post.save()
    .catch(err => {console.log(err); res.status(500).send(err)})
    .then(() => res.sendStatus(201));
};

const updateData = () => {
  db.query();
};

const deleteData = (data, res) => {
  db.deleteOne({ _id: data }, (err, result) => {
    if (err) { console.log(err); res.status(500).send(err); }
    res.sendStatus(204);
  })
  // db.query();
}; */

module.exports = { getData, postData, updateData, deleteData };