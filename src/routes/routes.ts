import express from 'express';

import { create, searchAll, search } from '../controllers/ServicesController';

export const router = express.Router();

//create route
router.post('/newservice', create);
//find routes
router.get('/', searchAll);
router.get('/service/:_id', search);