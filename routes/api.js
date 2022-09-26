const medico = require("../")
const express = require('express');
const router = express.Router();


router.get(`/`, function (req, res) {
	res.status(200).json({msg: `API online`});
});

router.get()

module.exports = router;