const mongoose = require('mongoose')
const TodoListSchema = mongoose.Schema({
    UserName: { type: String },
    TodoListSbject: { type: String },
    TodoListDescription: { type: String },
    TodoListStatus: { type: String, default: "New" },
    TodoListCreateDate: { type: Date, default: Date.now },
    TodoListUpdateDate: { type: Date, default: Date.now },
}, { versionKey: false })

const TodoListModel = mongoose.model("TodoList", TodoListSchema)
module.exports = TodoListModel