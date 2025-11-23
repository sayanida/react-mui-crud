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



const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
];

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
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="GridTable">
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
           slots={{
            toolbar: () => <CustomToolbar onAddClick={handleClickOpen} />,
           }}
  showToolbar
        />
      </Paper>

      {/* Dialog */}
     <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter new user information below.
          </DialogContentText>
          <TextField autoFocus margin="dense" label="First Name" fullWidth />
          <TextField margin="dense" label="Last Name" fullWidth />
          <TextField margin="dense" label="Age" type="number" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GridTable;

