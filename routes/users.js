const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check')

// @route      POST api/user
// @desc       Register a user
// @access     Public
router.post('/', [
    check('name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 4 or more characters').isLength({ min: 4 })
],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send('Passed!');
    });

module.exports = router;
