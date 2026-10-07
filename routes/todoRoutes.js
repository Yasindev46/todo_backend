import express from 'express';
import  {getTodos,createTodo,updateTodo,deleteTodo}  from '../controller/todoController.js';

const route=express.Router();

route.get('/',(req,res)=>{
    console.log('API is working fine');
    res.send('Todo List API is working fine');
})

route.post('/todos',createTodo);

route.get('/todos', getTodos);

route.put('/todos/:id', updateTodo);

route.delete('/todos/:id', deleteTodo);

export default route;