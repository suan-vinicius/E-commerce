const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/data', controller.getAllData);
router.get('/data/:min/:max', controller.getFilter);
router.get('/data/:min/:max/:section', controller.getFilter);
router.post('/data', controller.uploadImg, controller.postData);
router.delete('/data', controller.deleteData);
router.get('/data/:name', controller.getOneData);
router.put('/data/:id', controller.uploadImg ,controller.updateData);
router.delete('/data/:name', controller.deleteOneData);

module.exports = router;