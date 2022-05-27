const express = require('express');
const path = require('path');
const ctlr = require('./controller');

const app = express();
const PORT = process.env.USER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Listeners:
app.get('/track/', ctlr.getData);
app.post('/track/', ctlr.postData);
app.put('/track/', ctlr.updateData);
app.delete('/track/', ctlr.deleteData);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Listening to port ${PORT} -> http://localhost:3000`));