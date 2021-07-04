import express from 'express';
import { usersRoute } from './users.mjs';

const app = express();

app.use(express.json());
app.use(usersRoute);

app.listen(8000);