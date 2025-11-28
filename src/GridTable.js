import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import CustomToolbar from "./Toolbar";
import UserDialog from "./UserDialog";

// Column definitions for the DataGrid table
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 140 },
  { field: "lastName", headerName: "Last name", width: 140 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
];

function GridTable() {
  // State for managing the open/close of the dialog
  const [open, setOpen] = React.useState(false);

  // state that manage the values ​​entered in the dialog
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");

  // State for Edit dialog
  const [openEdit, setOpenEdit] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState("");
  const [editFirstName, setEditFirstName] = React.useState("");
  const [editLastName, setEditLastName] = React.useState("");
  const [editAge, setEditAge] = React.useState("");
  const [selectedRows, setSelectedRows] = React.useState([]);

  // Sample data rows displayed in the DataGrid
  // Make the rows dynamic
  const [userRows, setUserRows] = React.useState(() => {
    const saved = localStorage.getItem("userRows"); // use local　storage
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
          { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
          { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
          { id: 4, firstName: "Arya", lastName: "Stark", age: 16 },
          { id: 5, firstName: "Sansa", lastName: "Stark", age: 20 },
          { id: 6, firstName: "Bran", lastName: "Stark", age: 18 },
          { id: 7, firstName: "Tyrion", lastName: "Lannister", age: 39 },
          { id: 8, firstName: "Daenerys", lastName: "Targaryen", age: 32 },
          { id: 9, firstName: "Jorah", lastName: "Mormont", age: 45 },
          { id: 10, firstName: "Samwell", lastName: "Tarly", age: 25 },
        ];
  });

  // when userRows updated, save to localStorage
  React.useEffect(() => {
    localStorage.setItem("userRows", JSON.stringify(userRows));
  }, [userRows]);

  const [openRead, setOpenRead] = React.useState(false);
  const [readUser, setReadUser] = React.useState(null);

  const handleRead = (user) => {
    setReadUser(user);
    setOpenRead(true);
  };

  const handleReadClose = () => {
    setOpenRead(false);
    setReadUser(null);
  };

  // Open dialog when Add button is clicked
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close dialog when Cancel or Save is clicked
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // not allow "null"
    if (!firstName.trim() || !lastName.trim() || !age) {
      alert("All fields are required!");
      return;
    }
    const newUser = {
      id: userRows.length + 1, //Add 1 to the current row count to determine the new user's ID
      firstName,
      lastName,
      age: Number(age), // Convert string to number
    };
    setUserRows([...userRows, newUser]); // Add to list
    setFirstName("");
    setLastName("");
    setAge("");
    handleClose();
  };

  const handleEdit = (user) => {
    setSelectedUser(user); // Save selected user
    setEditFirstName(user.firstName);
    setEditLastName(user.lastName);
    setEditAge(user.age);
    setOpenEdit(true); // Open Edit dialog
  };

  const handleEditSave = () => {
    if (!selectedUser) return;

    // Update selected user info inside userRows
    const updateRows = userRows.map((user) =>
      user.id === selectedUser.id
        ? {
            ...user,
            firstName: editFirstName,
            lastName: editLastName,
            age: Number(editAge),
          }
        : user
    );
    setUserRows(updateRows); //set updated user
    setOpenEdit(false);
    setSelectedUser(null);
    setSelectedRows([]); // clear selection after complete editing
  };

  const handleEditClose = () => setOpenEdit(false);

  // Delete
  const handleDelete = () => {
    const remainingRows = userRows.filter(
      (user) => !selectedRows.includes(user.id)
    );
    setUserRows(remainingRows);
    setSelectedRows([]);
  };

  return (
    <div className="GridTable">
      <Paper
        sx={{
          margin: "20px auto",
          // make it responsive
          width: {
            xs: "90%",
            sm: "80%",
            md: "50%",
            lg: "40%",
          },
          height: 600,
        }}
      >
        <DataGrid
          rows={userRows} // use state instead of "rows"
          columns={columns}
          pageSizeOptions={[5, 10]} // Options for page size in the pagination
          checkboxSelection // Enables checkboxes to select rows
          disableColumnFilter // disables default filter function
          sortingOrder={["asc", "desc", null]} // Enables sort function
          onRowClick={(params) => handleRead(params.row)}
          sx={{ border: 0 }} // Removes the default border around the grid
          // Replacing the default toolbar with a custom toolbar
          slots={{
            toolbar: () => (
              <CustomToolbar
                onAddClick={handleClickOpen}
                selectedRows={selectedRows}
                userRows={userRows}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ),
          }}
          showToolbar // Ensures that the toolbar is displayed
          selectionModel={selectedRows}
          onRowSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection);
            setSelectedRows(Array.from(newSelection.ids));
          }}
        />
      </Paper>

      {/* UserDialog */}
      {/* This part calls the UserDialog component to display the dialog.*/}
      <UserDialog
        mode={openRead ? "read" : openEdit ? "edit" : "add"} // decide the mode
        open={open || openRead || openEdit}
        firstName={openRead ? readUser?.firstName || "" : firstName}
        lastName={
          openRead
            ? readUser?.lastName || ""
            : openEdit
            ? editLastName
            : lastName
        }
        age={openRead ? readUser?.age || "" : openEdit ? editAge : age}
        onChangeFirstName={openEdit ? setEditFirstName : setFirstName}
        onChangeLastName={openEdit ? setEditLastName : setLastName}
        onChangeAge={openEdit ? setEditAge : setAge}
        onSave={openEdit ? handleEditSave : handleSave}
        onClose={
          openRead ? handleReadClose : openEdit ? handleEditClose : handleClose
        }
          onFirstNameChange={(e) => {
    if (openEdit) setEditFirstName(e.target.value);
    else if (!openRead) setFirstName(e.target.value);
  }}
  onLastNameChange={(e) => {
    if (openEdit) setEditLastName(e.target.value);
    else if (!openRead) setLastName(e.target.value);
  }}
  onAgeChange={(e) => {
    if (openEdit) setEditAge(e.target.value);
    else if (!openRead) setAge(e.target.value);
  }}
      />
    </div>
  );
}

export default GridTable;
