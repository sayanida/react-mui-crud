import React from "react";
import "./App.css";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


// Column definitions for the DataGrid table
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
];


// Custom toolbar component containing Add, Edit, and Delete buttons
// appearance only
function CustomToolbar({ onAddClick }) {
  return (
    <GridToolbarContainer>
      <IconButton color="primary" aria-label="Add New" onClick ={onAddClick}>
        <AddIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Edit">
        <EditIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </GridToolbarContainer>
  );
}

function GridTable() {
// State for managing the open/close of the dialog
const [open, setOpen] = React.useState(false);

// state that manage the values ​​entered in the dialog
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");

// Sample data rows displayed in the DataGrid
// Make the rows dynamic
const [userRows, setUserRows] = React.useState([
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
]);

 // Open dialog when Add button is clicked
const handleClickOpen = () => {
    setOpen(true);
  };

  // Close dialog when Cancel or Save is clicked
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const newUser = {
      id: userRows.length +1, //Add 1 to the current row count to determine the new user's ID
      firstName,
      lastName,
      age: Number(age) // Convert string to number
    };
    setUserRows([...userRows, newUser]); // Add to list
  setFirstName("");
  setLastName("");
  setAge("");
  handleClose();
};

  return (
    <div className="GridTable">
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userRows} // use state instead of "rows"
          columns={columns}
          pageSizeOptions={[5, 10]} // Options for page size in the pagination
          checkboxSelection // Enables checkboxes to select rows
          sx={{ border: 0 }} // Removes the default border around the grid
          // Replacing the default toolbar with a custom toolbar
           slots={{
            toolbar: () => <CustomToolbar onAddClick={handleClickOpen} />,
           }}
  showToolbar // Ensures that the toolbar is displayed
        />
      </Paper>

      {/* Dialog component used for adding a new user */}
     <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Enter new user information below.
          </DialogContentText>

          {/* Input fields for the user's first name, last name, and age */}
          <TextField autoFocus margin="dense" label="First Name" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <TextField margin="dense" label="Last Name" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <TextField margin="dense" label="Age" type="number" fullWidth value={age} onChange={(e) => setAge(e.target.value)}/>
        </DialogContent>

         {/* Action buttons at the bottom of the dialog */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GridTable;

