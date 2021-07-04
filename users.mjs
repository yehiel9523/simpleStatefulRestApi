import express from 'express';
import loadJson from 'load-json-file';

export const usersRoute = express.Router();

let users = loadJson.sync('./users.json');



usersRoute.get('/users', (req, res) => {

    res.send(users)
});

usersRoute.get('/users/:id', (req, res) => {
    const [user] = users.filter((user) => parseInt(req.params.id) === user.id);
    res.send(user);
});

usersRoute.post('/users', (req, res) => {
    users.push(req.body);
    res.send('adding ok');
});

usersRoute.put('/users/:id', (req, res) => {
    users[users.findIndex((user) => parseInt(req.params.id) === user.id)] = req.body;
    res.send('update ok');
});

usersRoute.delete('/users/:id', (req, res) => {
    users = users.filter((user) => parseInt(req.params.id) !== user.id);
    res.send('deleat ok');
})