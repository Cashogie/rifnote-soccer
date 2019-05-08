const express = require('express');
const { getTable, getScorers, getLiveMatches, getAllMatches } = require('../controllers/Epl-Table.js');

const router = express.Router();

router.get('/table',  getTable);
router.get('/scorers',  getScorers);
router.get('/live',  getLiveMatches);
router.get('/all',  getAllMatches);

module.exports = router;
