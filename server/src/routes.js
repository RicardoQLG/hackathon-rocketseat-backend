import { Router } from 'express';

import MentorController from './app/controllers/MentorController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/mentor', MentorController.store);

export default routes;
