import React from "react";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";


const TodoItem = ({ todo, index, toggleTodo, confirmDelete }) => {
    return(
        <ListItem
            style={{textDecoration: todo.completed ? "line-through" : "none"}}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => confirmDelete(index)}>
                    <DeleteOutline />
                </IconButton> 
            }
        >
            <Checkbox 
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
            />
            <ListItemText primary={todo.text} />           
        </ListItem>
    )
}

export default TodoItem;