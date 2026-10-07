import e from 'express';
import Todo from '../models/todoModel.js';

export const getTodos = async (req, res) => {
    console.log('Get all todos');
    try {
        const todos = await Todo.find({});
        console.log('Todos:', todos);
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createTodo = async (req, res) => {
    console.log('Create a new todo');
    const { name, desc } = req.body;
    try {
        const newTodo = new Todo({ name, desc });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateTodo = async (req, res) => {
    console.log('Update a todo');
    const { id } = req.params;
    const { name, desc } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { name, desc }, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteTodo = async (req, res) => {
    console.log('Delete a todo');
    const { id } = req.params;  
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.json(deletedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
