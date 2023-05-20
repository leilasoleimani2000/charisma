import IUsers from "../models/Users";
import Api from "./Api";

const API_ENDPOINT = "users";

const UsersApi = {
  async getUsersList(): Promise<IUsers[]> {
    return await Api.fetchApi(API_ENDPOINT);
  },
};

export default UsersApi; 