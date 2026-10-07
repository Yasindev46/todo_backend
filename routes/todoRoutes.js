import express from 'express';
import  {getTodos}  from '../controller/todoController.js';

const route=express.Router();

route.get('/',(req,res)=>{
    console.log('API is working fine');
    res.send('Todo List API is working fine');
})

route.get('/todos', getTodos);

export default route;