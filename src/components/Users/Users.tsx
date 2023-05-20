import SearchBar from "../SearchBar/SearchBar";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import IUsers from "../../models/Users";
import ImageIcon from "../Icon/ImageIcon";
import "./Users.scss";
import { useEffect, useState } from "react";
import { addItem, clearList } from "../../store/actions";
import { useDispatch } from "react-redux";

interface Props {
  users: IUsers[];
  onSelectItem: (user: IUsers) => void;
}

const Users = ({ users, onSelectItem }: Props) => {
  const [usersList, setUsersList] = useState<IUsers[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleAddItem = (item: string) => {
    dispatch(addItem(item, "users"));
  };

  const clearAll = () => {
    dispatch(clearList());
  };

  const handleSearch = (term: string) => {
    let list = users.filter(
      (item) =>
        item.username.indexOf(term) > -1 || item.email.indexOf(term) > -1
    );
    setUsersList(list);
  };

  return (
    <div className="section">
      <SearchBar onChange={(term) => handleSearch(term)} />
      <Box
        sx={{
          width: 400,
          background: "#FFFFFF",
          padding: "20px",
          overflowY: "scroll",
          height: "570px",
        }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {usersList.map((user) => (
            <ListItem
              key={user.id}
              onClick={() => handleAddItem(user.username)}
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.username} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Button className="clear" variant="contained" onClick={() => clearAll()}>
        CLEAR LIST
      </Button>
    </div>
  );
};

export default Users;
