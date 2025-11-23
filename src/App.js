import "./App.css";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

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

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <IconButton color="primary" aria-label="Add New">
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
    toolbar: CustomToolbar,
  }}
  showToolbar
        />
      </Paper>
    </div>
  );
}

export default GridTable;
