const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const empRouter = require('./Routes/empRoutes.js');
const adminRouter = require('./Routes/adminRoutes.js');
const deptRouter = require('./Routes/deptRoutes.js');
const ansRouter = require('./Routes/ansRoutes.js');
const initiateRouter = require('./Routes/initiateRoutes.js');
const moveRouter = require('./Routes/moveRoutes.js');
const notificationRouter = require('./Routes/notificationRoutes.js');
const questionRouter = require('./Routes/questionRoutes.js');

const port=8080;
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
console.log('Connected to MongoDB');
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/admin',adminRouter);
app.use('/dept',deptRouter);
app.use('/ans',ansRouter);
app.use('/initiate',initiateRouter);
app.use('/move',moveRouter);
app.use('/notification',notificationRouter);
app.use('/question',questionRouter);
app.use(empRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});