import Api from "./Api";
import IProducts from "../models/Products";

const API_ENDPOINT = "products";

const UsersApi = {
    async getProductsList(): Promise<IProducts[]> {
        return await Api.fetchApi(API_ENDPOINT);
    }
}

export default UsersApi;