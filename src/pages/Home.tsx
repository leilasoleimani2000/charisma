import Users from "../components/Users/Users";
import "./Home.scss";
import useFetchData from "../hooks/useFetchData";
import { useEffect } from "react";
import IUsers from "../models/Users";
import Products from "../components/Products/Products";
import IProducts from "../models/Products";
import SelectedList from "../components/SelectedList/SelectedList";

const Home = () => {
  const { users, fetchUsersList, products, fetchProductsList } = useFetchData();

  useEffect(() => {
    fetchUsersList();
    fetchProductsList();
  }, []);

  const addToList = (user: IUsers) => {};

  const addProductToList = (product: IProducts) => {};

  return (
    <div className="main-container">
      <Users users={users} onSelectItem={(user) => addToList(user)} />
      <Products
        products={products}
        onSelectItem={(product) => addProductToList(product)}
      />
      <SelectedList />
    </div>
  );
};

export default Home;
