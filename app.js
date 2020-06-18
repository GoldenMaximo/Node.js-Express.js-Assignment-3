const express = require('express');

const app = express();

const homeRoutes = require('./routes/home');
const usersRoute = require('./routes/users');

app.use(homeRoutes);
app.use(usersRoute);

app.listen(3000);
