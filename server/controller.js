const model = require('./model');

const getData = (req, res) => {
  model.getData(req, res);
};
const postData = (req, res) => {
  model.postData(req, res);
};
const updateData = (req, res) => {
  model.updateData(req, res);
};
const deleteData = (req, res) => {
  model.deleteData(req, res);
};

module.exports = { getData, postData, updateData, deleteData };