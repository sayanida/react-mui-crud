import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { GridToolbarContainer } from "@mui/x-data-grid";


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

export default CustomToolbar;