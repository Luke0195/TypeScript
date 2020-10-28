import { Router } from 'express';

const routes = Router();

routes.get('/teste', (request, response) => response.json({ message: 'Vamos para o próximo nivel ' }));

export default routes;
