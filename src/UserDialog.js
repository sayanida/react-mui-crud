import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UserDialog({
  open,
  readOnly,
  editing,
  firstName,
  lastName,
  age,
  onClose,
  onSave,
  onFirstNameChange,
  onLastNameChange,
  onAgeChange,
}) {
  return (
    // Dialog component used for adding a new user
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {/* condition ? trueExpression : falseExpression */}
        {readOnly ? "User Info" : editing ? "Edit User" : "Add User"}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {readOnly
            ? ""
            : editing
            ? "Update the user information below."
            : "Enter new user information below."}
        </DialogContentText>

        {/* Input fields for the user's first name, last name, and age */}
        <TextField
          autoFocus
          margin="dense" //Make it compact by reducing the top and bottom margins
          label="First Name"
          type="text"
          fullWidth
          value={firstName}
          onChange={onFirstNameChange}
          disabled={readOnly}
        />
        <TextField
          margin="dense"
          label="Last Name"
          type="text"
          fullWidth
          value={lastName}
          onChange={onLastNameChange}
          disabled={readOnly}
        />
        <TextField
          margin="dense"
          label="Age"
          type="number"
          fullWidth
          value={age}
          onChange={onAgeChange}
          disabled={readOnly}
        />
      </DialogContent>

      {/* Action buttons at the bottom of the dialog */}
      <DialogActions>
        <Button onClick={onClose}>{readOnly ? "Close" : "Cancel"}</Button>
        {!readOnly && // Doesn't show Save button when "readOnly" mode
        <Button onClick={onSave}>{editing ? "Update" : "Save"}</Button>
        }
      </DialogActions>
    </Dialog>
  );
}

export default UserDialog;
