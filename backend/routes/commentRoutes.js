const express = require('express'); 
const router = express.Router();
const commentCtrl = require('../controllers/commentCtrl');
const auth = require('../middleware/auth');

router.post('/:id/wall', auth, commentCtrl.addComment);         // Ajouter un commentaire
router.put('/:id/wall', auth, commentCtrl.updateComment);    // Modifier un commentaire
router.delete('/:id/wall', auth, commentCtrl.deleteComment); // Supprimer un commentaire

module.exports = router;