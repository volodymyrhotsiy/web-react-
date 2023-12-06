import express from 'express';
import { getCats, titleCats, ageCats, textCats, getCatByName } from '../controllers/cats.js';

const router = express.Router();

router.get('/title', titleCats);
router.get('/age', ageCats);
router.get('/text', textCats);

router.get('/:name', getCatByName); 

router.get('/', getCats);

export default router;
