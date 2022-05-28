const model = require('./model');

const getData = (req, res) => {
  model.getData(req, res);
};
const postData = (req, res) => {
  let data = req.body;
  for (let key in data) {
    if (data[key] === undefined) data[key] = 'null'
  }
  model.postData(data, res);
};
const updateData = (req, res) => {
  model.updateData(req, res);
};
const deleteData = (req, res) => {
  model.deleteData(req, res);
};

module.exports = { getData, postData, updateData, deleteData };