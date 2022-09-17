const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/ProfileController')
const AuthVerifyMiddleware = require('../middlewares/AuthVerfiyMiddleware')

router.post("/CreateProfile", ProfileController.CreateProfile)
router.post("/Login", ProfileController.Login)
router.get("/SelectProfile", AuthVerifyMiddleware, ProfileController.SelectProfile)
router.post("/UpdateProfile", AuthVerifyMiddleware, ProfileController.UpdateProfile)

module.exports = router