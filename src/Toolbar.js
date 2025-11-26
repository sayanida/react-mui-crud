import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { GridToolbarContainer } from "@mui/x-data-grid";


// Custom toolbar component containing Add, Edit, and Delete buttons
// appearance only
function CustomToolbar({ onAddClick, selectedRows, userRows, handleEdit, handleDelete }) {
  return (
    <GridToolbarContainer sx={{
        backgroundColor: "#efefef",}}>
      <IconButton color="primary" aria-label="Add New" onClick ={onAddClick}>
        <AddIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Edit" onClick ={() => {
        if (selectedRows.length === 1){
            const selectedUser = userRows.find((row) => row.id === selectedRows[0]);
            handleEdit(selectedUser);
            }else{
                alert("Please select one row to edit.");
            }
      }}
      >
        <EditIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Delete"
      onClick={() => {
        if (selectedRows.length > 0) {
      handleDelete(selectedRows);
    } else {
      alert("Please select at least one row to delete.");
    }
      }}>
        <DeleteIcon />
      </IconButton>
    </GridToolbarContainer>
  );
}

export default CustomToolbar;