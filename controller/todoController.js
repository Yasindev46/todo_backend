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
