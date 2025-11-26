import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; 
 
function UserDialog ({ 
    open,
    editing,
    firstName,
    lastName, 
    age, 
    onClose, 
    onSave, 
    onFirstNameChange, 
    onLastNameChange, 
    onAgeChange}){
    return (
        // Dialog component used for adding a new user
     <Dialog open={open} onClose={onClose}>
        <DialogTitle>
            {editing ? "Edit User" : "Add User"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            { editing ? "Update the user information below." : "Enter new user information below."}
          </DialogContentText>

          {/* Input fields for the user's first name, last name, and age */}
          <TextField autoFocus 
          margin="dense" 
          label="First Name" 
          fullWidth value={firstName} 
          onChange={onFirstNameChange}/>
          <TextField 
          margin="dense" 
          label="Last Name" 
          fullWidth value={lastName} 
          onChange={onLastNameChange}/>
          <TextField 
          margin="dense" 
          label="Age" 
          type="number" 
          fullWidth 
          value={age} 
          onChange={onAgeChange}/>
        </DialogContent>

         {/* Action buttons at the bottom of the dialog */}
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSave}>{editing ? "Update" : "Save"}</Button>
        </DialogActions>
      </Dialog>
    );
}

export default UserDialog;