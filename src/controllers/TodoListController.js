const TodoListModel = require('../models/TodoListModel')
exports.CreateTodoList = (req, res) => {
    let data = {
        UserName: req.headers['username'],
        TodoListSbject: req.body['TodoListSbject'],
        TodoListDescription: req.body['TodoListDescription'],
    }
    TodoListModel.create(data, (error, data) => {
        if (error) {
            res.status(400).json({ status: "Failed", data: error })
        } else {
            res.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}
exports.SelectTodoList = (req, res) => {
    TodoListModel.find({ UserName: req.headers['username'] }, (error, data) => {
        if (error) {
            res.status(400).json({ status: "Failed", data: error })

        } else {
            res.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}
exports.UpdateTodoList = (req, res) => {
    let data = {
        TodoListSbject: req.body['TodoListSbject'],
        TodoListDescription: req.body['TodoListDescription'],
        TodoListUpdateDate: req.body['TodoListUpdateDate']
    }

    TodoListModel.updateOne({ _id: req.body['_id'] }, { $set: data }, (error, data) => {
        if (error) {
            res.status(400).json({ status: "Failed", data: error })
        } else {
            res.status(200).json({ status: "Success", data: data })
        }
    })
}