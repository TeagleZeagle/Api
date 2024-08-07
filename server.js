const express = require('express');
const userRoutes = require('./routes/routes');

const app = express();
const port  = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/crud/api', userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));