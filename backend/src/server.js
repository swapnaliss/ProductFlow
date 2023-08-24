const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://swapnalisbhargude123:TEPjYUYTdUTLHmZh@cluster0.zvjimc2.mongodb.net/?retryWrites=true&w=majority', {
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
