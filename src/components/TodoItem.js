import React from "react";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import { DeleteIcon } from "@mui/icons-material/Delete";


const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
    return(
        <ListItem
            style={{textDecoration: todo.completed ? "line-through" : "none"}}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)}>
                    <DeleteIcon />
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