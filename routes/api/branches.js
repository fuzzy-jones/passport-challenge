const express = require("express");
const router = express.Router();

// GET api/branches/test
// test that branches route works
router.get('/test', (req, res) => res.json({ msg: 'branches route works'}));

module.exports = router;