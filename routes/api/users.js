const express = require("express");
const router = express.Router();

// // es5
// router.get('/test', function(req, res) {
//     res.json({
//         msg: 'users route works'
//     })
// });

// GET api/users/test
// test that users route works
router.get('/test', (req, res) => res.json({ msg: 'users route works'}));

module.exports = router;