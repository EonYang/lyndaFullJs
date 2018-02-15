import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.listen(config.port, () => {
  console.info('Express is listening on port ', config.port);
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.render('index', {
    content: 'ejsejsejs'
  });
})
