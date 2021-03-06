// index.js

/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');
const router = require('./routes/admin');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '8000';

app.use(router);
/**
 *  App Configuration
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/**
 * Routes Definitions
 */

// app.get('/', (req, res) => {
//   res.status(200).send('WHATABYTE: Food For Devs');
// });

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
