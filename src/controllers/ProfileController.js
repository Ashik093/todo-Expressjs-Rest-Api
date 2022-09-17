const ProfileModel = require("../models/ProfileModel")
const jwt = require('jsonwebtoken')

exports.CreateProfile = (req, res) => {
    let reqBody = req.body
    ProfileModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(400).json({ status: "failed", data: error })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}

exports.Login = (req, res) => {
    let userName = req.body['UserName']
    let password = req.body['Password']
    ProfileModel.find({ UserName: userName, Password: password }, (error, data) => {
        if (error === null && data.length > 0) {
            let payload = {
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: data[0]
            }
            const token = jwt.sign(payload, "secrete23")
            res.status(200).json({ status: "success", token: token, data: data[0] })
        } else {
            res.status(401).json({ status: "unauthorized", data: error })
        }
    })
}
exports.SelectProfile = (req, res) => {
    let userName = req.headers['username']
    ProfileModel.find({ UserName: userName }, (error, data) => {
        if (error === null && data.length > 0) {
            res.status(200).json({ status: "success", data: data[0] })
        } else {
            res.status(401).json({ status: "unauthorized", data: error })
        }
    })
}

exports.UpdateProfile = (req, res) => {
    let userName = req.headers['username']
    let reqBody = req.body
    ProfileModel.updateOne({ UserName: userName }, { $set: reqBody }, {
        upsert: true
    }, (error, data) => {
        if (error) {
            res.status(400).json({ status: "failed", data: error })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}