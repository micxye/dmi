/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');

const db = require('../database');
const bodyParser = require('body-parser');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/strings', (req, res) => {
  console.log('get');
  db.getStrings((err, strings) => {
    if (err) {
      console.log('DB error', err);
    } else {
      res.send(JSON.stringify(strings));
      res.status(200);
    }
  });
});

app.post('/strings', (req, res) => {
  db.saveString(req.body.string, (err, strings) => {
    console.log(req.body.string)
    if (err) {
      res.send('error saving string', err);
    } else {
      res.send('string saved');
      console.log(strings);
    }
  });
});

// db.saveString('hellohello', (err, strings) => {
//   if (err) {
//     console.log('error saving string', err);
//   } else {
//     console.log('string saved', strings);
//   }
// });
// db.getStrings(strings => console.log(strings));

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';


// Start your app.
app.listen(port, host, async (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});

