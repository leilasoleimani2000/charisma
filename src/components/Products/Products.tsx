import IProducts from "../../models/Products";
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
import ImageIcon from "../Icon/ImageIcon";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, clearList } from "../../store/actions";

interface Props {
  products: IProducts[];
  onSelectItem: (product: IProducts) => void;
}

const Products = ({ products, onSelectItem }: Props) => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const handleAddItem = (item: string) => {
    dispatch(addItem(item, "products"));
  };

  const clearAll = () => {
    dispatch(clearList());
  };

  const handleSearch = (term: string) => {
    let list = products.filter(
      (item) =>
        item.title.indexOf(term) > -1 || item.description.indexOf(term) > -1
    );
    setProductsList(list);
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
          {productsList.map((product) => (
            <ListItem
              key={product.id}
              onClick={() => handleAddItem(product.title)}
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={product.description}
              />
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

export default Products;
