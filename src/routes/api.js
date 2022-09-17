const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/ProfileController')
const TodoListController = require('../controllers/TodoListController')
const AuthVerifyMiddleware = require('../middlewares/AuthVerfiyMiddleware')

router.post("/CreateProfile", ProfileController.CreateProfile)
router.post("/Login", ProfileController.Login)
router.get("/SelectProfile", AuthVerifyMiddleware, ProfileController.SelectProfile)
router.post("/UpdateProfile", AuthVerifyMiddleware, ProfileController.UpdateProfile)
    //Todo List
router.post('/CreateTodoList', AuthVerifyMiddleware, TodoListController.CreateTodoList)
router.get('/SelectTodoList', AuthVerifyMiddleware, TodoListController.SelectTodoList)
router.post('/UpdateTodoList', AuthVerifyMiddleware, TodoListController.UpdateTodoList)
router.post('/UpdateStatusToDoList', AuthVerifyMiddleware, TodoListController.UpdateStatusToDo)
router.post('/RemoveToDoList', AuthVerifyMiddleware, TodoListController.RemoveToDo)
router.post('/SelectTodoListByStatus', AuthVerifyMiddleware, TodoListController.SelectTodoListByStatus)
router.post('/SelectTodoListByDate', AuthVerifyMiddleware, TodoListController.SelectTodoListByDate)


module.exports = router