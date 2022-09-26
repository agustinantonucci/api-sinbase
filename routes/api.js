const medico = require("../")
const express = require('express');
const { getAll } = require("../controllers/medicoController");
const { response } = require("express");
const router = express.Router();


router.get("/", async function (req, res) {
	try {
		const [result] = await getAll()
		res.send({success: true, result})
	} catch (error) {
		response.status(500).send({
			success:false,
			error: "Algo salió mal"
		})
	}
	// res.status(200).json({msg: `API online`});
});

router.get()

module.exports = router;