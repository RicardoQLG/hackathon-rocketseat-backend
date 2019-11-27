import { Router } from 'express';

import MentorController from './app/controllers/MentorController';
import SchoolController from './app/controllers/SchoolController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/mentor', MentorController.store);
routes.post('/school', SchoolController.store);

routes.get('/school', SchoolController.index);

export default routes;
