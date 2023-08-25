const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect('mongodb+srv://swapnalisbhargude123:TEPjYUYTdUTLHmZh@cluster0.zvjimc2.mongodb.net/ProductFlow', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// API routes
const apiRoutes = require('./routes/api');
app.use('/', apiRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
