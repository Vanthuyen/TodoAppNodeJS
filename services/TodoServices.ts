import { pool } from '../config/db';
import { Todo } from '../models/Todo';

export const getAllTodos = async (): Promise<Todo[]> => {
  const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
  return result.rows;
};

export const getTodoById = async (id: number): Promise<Todo | null> => {
  const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const createTodo = async (title: string, description: string): Promise<Todo> => {
  const result = await pool.query(
    'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  return result.rows[0];
};

export const updateTodo = async (
  id: number,
  title: string,
  description: string,
  completed: boolean
): Promise<Todo | null> => {
  const result = await pool.query(
    'UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
    [title, description, completed, id]
  );
  return result.rows[0] || null;
};

export const deleteTodo = async (id: number): Promise<Todo | null> => {
  const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0] || null;
};
