import {React, useState} from "react";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

/**
 * Renders a form for adding a new todo.
 *
 * @param {function} addTodo - A function that adds a new todo to the list.
 * @return {JSX.Element} A form with a text input and a submit button.
 */
const TodoInput = ({addTodo}) => {
    const [text, setText] = useState('');
    /**
     * Handles the form submission and adds a new todo if the text is valid
     * @param {Event} e - The form submission event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the entered text is valid
        if (text.trim()){
            // Add the new todo
            addTodo({text, completed: false});
            // Reset the text input
            setText('');
        }
    };
    return(
        <form onSubmit={handleSubmit} style={{display: 'flex', marginBottom: 16}}>
            <TextField
                variant="outlined"
                placeholder="Add a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
            />
            <Button type="submit" color="primary" variant="contained" style={{marginLeft: 8}}>
                <AddIcon />
            </Button>
        </form>
    )
}

export default TodoInput;