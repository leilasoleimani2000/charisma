import { combineReducers } from "redux";
import ISelectedList from "../models/SelectedList";

type ItemsState = ISelectedList[];

type Action = {
  type: "ADD_ITEM" | "DELETE_ITEM" | "CLEAR_ALL";
  payload: {
    item: string;
    type: "users" | "products";
    index: number;
  };
};

const itemsReducer = (state: ItemsState = [], action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        { item: action.payload.item, type: action.payload.type },
      ];
    case "DELETE_ITEM":
      return state.filter((_, index) => index !== action.payload.index);
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
