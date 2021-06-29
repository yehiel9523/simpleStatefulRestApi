import express from 'express';
import loadJson from 'load-json-file';
const app = express();
let users = loadJson.sync('./users.json');
app.use(express.json());

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const [user] = users.filter((user) => parseInt(req.params.id) === user.id);
    res.send(user);
});

app.post('/users', (req, res) => {
    users.push(req.body);
    res.send('adding ok');
});

app.put('/users/:id', (req, res) => {
    users[users.findIndex((user) => parseInt(req.params.id) === user.id)] = req.body;
    res.send('update ok');
});

app.delete('/users/:id', (req, res) => {
    users = users.filter((user) => parseInt(req.params.id) !== user.id);
    res.send('deleat ok');
})
app.listen(8000);