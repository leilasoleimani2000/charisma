import { useState } from "react";
import IUsers from "../models/Users";
import UsersApi from "../services/UsersApi";
import ProductsApi from "../services/ProductsApi";
import IProducts from "../models/Products";

const useFetchData = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);
  const fetchUsersList = (): Promise<boolean> => {
    return new Promise((resolve) => {
      UsersApi.getUsersList().then((result) => {
        setUsers(result);
      });
      resolve(true);
    });
  };

  const fetchProductsList = (): Promise<boolean> => {
    return new Promise((resolve) => {
      ProductsApi.getProductsList().then((result) => {
        setProducts(result);
      });
      resolve(true);
    });
  };

  return { fetchUsersList, users, fetchProductsList, products };
};
export default useFetchData;
