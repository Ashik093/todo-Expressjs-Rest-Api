const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/ProfileController')
const AuthVerifyMiddleware = require('../middlewares/AuthVerfiyMiddleware')

router.post("/CreateProfile", ProfileController.CreateProfile)
router.post("/Login", ProfileController.Login)
router.post("/SelectProfile", AuthVerifyMiddleware, ProfileController.SelectProfile)

module.exports = router