import express from 'express';
import routes from './routes';

const app = express();

app.listen(3331, () => {
  console.log('O servidor está rodando na porta localhost:3331');
});
