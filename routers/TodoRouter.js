const express = require('express');
const router = express.Router();
const todoController = require('../controllers/TodoControllers');

router.get('/todos',todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodosById);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
