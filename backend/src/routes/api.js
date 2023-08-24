const express = require('express');
const router = express.Router();

router.get('/data', async (req, res) => {
    res.json("display data");
});

module.exports = router;
