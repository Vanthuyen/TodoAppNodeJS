const todoService = require('../services/TodoServices');

const getAllTodos = async (req, res) =>{
    try {
        const todos = await todoService.getAllTodos();
        res.json(todos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getTodosById = async(req, res) =>{
    try {
        const todo = await todoService.getTodobyId(req.params.id);
        if (!todo){
            return res.status(404).json({message: "Todo not found"});
        }
        res.json(todo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const createTodo = async (req, res)=>{
    const {title, description } = req.body;
    try {
        const newTodo = await todoService.createTodo(title,description);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const updateTodo = async (req, res) =>{
    const {title, description, completed} = req.body;
    const {id} = req.params;
    
    try {
        const updateTodo = await todoService.updateTodo(id, title, description,completed);
        if (!updateTodo) return res.status(404).json({message: "Todo noy found"});
        res.json(updateTodo);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


const deleteTodo = async(req, res) =>{
    try {
        const deleteTodo = await todoService.deleteTodo(req.params.id);
        if(!deleteTodo) return res.status(404).json({message: "Todo not found"});
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
};

module.exports ={
    getAllTodos,
    createTodo,
    getTodosById,
    updateTodo,
    deleteTodo
};