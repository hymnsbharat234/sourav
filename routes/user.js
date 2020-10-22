const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user');

router.get('/logout', userController.destroySession);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), userController.popup);
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), userController.popup);


module.exports = router;