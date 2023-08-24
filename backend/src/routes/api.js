const express = require('express');
const router = express.Router();

router.get('/most', async (req, res) => {
    res.json("display data");
});

module.exports = router;
