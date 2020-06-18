const express = require('express');
const path = require('path');

const app = express();

const homeRoutes = require('./routes/home');
const usersRoute = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(usersRoute);

app.listen(3000);
