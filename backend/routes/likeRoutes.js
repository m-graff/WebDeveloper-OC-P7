const express = require('express');  
const router = express.Router();
const likeCtrl = require('../controllers/likeCtrl');
/* const auth = require('../middleware/auth'); */

router.post('/', likeCtrl.addLike);     // Liker une publication

module.exports = router;