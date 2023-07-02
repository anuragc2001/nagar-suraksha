const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const useRoutes = require('./app/routes/webpage.routes');

// const config = require('./DB.js');
// const userRoute = require('./routes/user.route');
// const complaintRoute = require('./routes/complaint.route');
// const adminRoute = require('./routes/admin.route');
// const policeRoute = require('./routes/police.route');
// const passport = require('passport');
// const passportConfig = require('./passport');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(fileUpload())

app.set('view engine', 'ejs')

app.use('/', useRoutes);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
})