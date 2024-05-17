const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Ensure form data is parsed correctly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/products', productsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
