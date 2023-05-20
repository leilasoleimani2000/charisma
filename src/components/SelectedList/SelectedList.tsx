import { Box, Chip, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { deleteItem } from "../../store/actions";
import ISelectedList from "../../models/SelectedList";

const SelectedList = () => {
  const dispatch = useDispatch();
  const items: ISelectedList[] = useSelector((state: RootState) => state.items);
  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };
  return (
    <div className="section">
      <Box
        sx={{
          width: 400,
          background: "#FFFFFF",
          padding: "20px",
          overflowY: "scroll",
          height: "674px",
        }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <div>
            <div>
              {items.map((item, index) => (
                <Chip
                  className="chips"
                  style={{ margin: "3px" }}
                  key={index}
                  onClick={() => handleDeleteItem(index)}
                  label={item.item}
                  color="primary"
                />
              ))}
            </div>
          </div>
        </List>
      </Box>
    </div>
  );
};

export default SelectedList;
