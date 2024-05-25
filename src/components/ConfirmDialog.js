import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";


const ConfirmDialog = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Are you sure you want to delete this task? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Delete 
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;