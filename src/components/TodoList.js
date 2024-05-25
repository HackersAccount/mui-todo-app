import { List, Typography } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    return(
        <>
            {todos.length === 0 ? (
                <Typography align="center">No Todos yet!</Typography>
            ): (
                <List>
                    {todos.map((todo, index) =>(
                        <TodoItem 
                            key = {index}
                            todo = {todo} 
                            index = {index} 
                            toggleTodo = {toggleTodo} 
                            deleteTodo = {deleteTodo} 
                        />
                    ))}
                </List>
            )}           
        </>
    )
}

export default TodoList;