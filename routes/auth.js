const express  = require('express'),
      router   = express.Router(),
      passport = require('passport');


router.get('/google', passport.authenticate('google',
  {scope: ['profile', 'email']}));

router.get('/google/callback',
  passport.authenticate('google', {failureRedirect: '/'}),(req, res) => {
    res.redirect('/dashboard');
  });

// Authentication verification route
router.get('/verify', (req, res) => {
  if (req.user) {
    console.log(req.user);
  } else {
    console.log('Not Auth');
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
