const express = require('express');
const app = express();
const mc = require('./controllers/messages_controller')
app.use(express.json());

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.use(express.static(__dirname + '/../public/build'))

app.listen(3000, ()=> {
  console.log('App is running on port 3000');
})