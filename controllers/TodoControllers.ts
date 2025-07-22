import { Request, Response } from 'express';
import * as todoService from '../services/TodoServices';

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const todo = await todoService.getTodoById(Number(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const newTodo = await todoService.createTodo(title, description);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;
  try {
    const updated = await todoService.updateTodo(
      Number(req.params.id),
      title,
      description,
      completed
    );
    if (!updated) return res.status(404).json({ message: 'Todo not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const deleted = await todoService.deleteTodo(Number(req.params.id));
    if (!deleted) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
