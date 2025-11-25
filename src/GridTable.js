import React from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import CustomToolbar from "./Toolbar";
import UserDialog from "./UserDialog";


// Column definitions for the DataGrid table
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
];


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

      {/* UserDialog */}
      <UserDialog
      open={open}
      editing={false}
      firstName={firstName}
      lastName={lastName}
      age={age}
    onClose={handleClose}
    onSave={handleSave}
    onFirstNameChange={(e) => setFirstName(e.target.value)}
    onLastNameChange={(e) => setLastName(e.target.value)}
    onAgeChange={(e) => setAge(e.target.value)}
      />
</div>
);
}

export default GridTable;