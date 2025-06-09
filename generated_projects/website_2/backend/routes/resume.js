const express = require('express');
const ResumeController = require('../controllers/ResumeController');
const router = express.Router();

router.post('/upload', ResumeController.upload);

module.exports = router;