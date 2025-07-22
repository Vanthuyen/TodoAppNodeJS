const db = require("../Postgre");

const getAllTodos = async () =>{
    const result = await db.query("select * from todos order by id asc");
    return result.rows;
}

const getTodobyId = async (id) =>{
    const result = await db.query("select * from todos where id = $1",[id]);
    return result.rows[0];
}

const createTodo = async (title, description) =>{
    const result = await db.query('insert into todos (title,description) values ($1,$2) returning *',
        [title,description]
    );
    return result.rows[0];
}

const updateTodo = async (id, title, description, completed) =>{
    const result = await db.query("update todos set title = $1, description = $2, completed = $3 where id = $4 returning *",
        [title, description, completed, id]
    );
    return result.rows[0];
}

const deleteTodo = async (id) =>{
    const result = await db.query("delete from todos where id = $1 returning *",[id]);
    return result.rows[0];
}

module.exports= {
    getAllTodos,
    getTodobyId,
    createTodo,
    updateTodo,
    deleteTodo,
};

