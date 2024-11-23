const express = require('express');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv'); 
const db = require("./config/db");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const empRoutes = require('./routes/empRoutes'); // Import empRoutes
const vendorRoutes = require('./routes/vendorRoutes');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();

const app = express();
const port = 3001;

db(); // Initialize database connection
app.use(bodyParser.json());
app.use(cors());

// Route configuration
app.use('/', userRoutes);
app.use('/employees', empRoutes); // Add empRoutes with a base path
app.use('/vendors',vendorRoutes);
app.use('/questions',questionRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
