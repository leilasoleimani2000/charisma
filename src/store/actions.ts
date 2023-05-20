export const addItem = (item: string, type: "users" | "products") => {
  return {
    type: "ADD_ITEM",
    payload: {
      item,
      type,
    },
  };
};

export const deleteItem = (index: number) => {
  return {
    type: "DELETE_ITEM",
    payload: {
      index,
    },
  };
};

export const clearList = () => {
  return {
    type: "CLEAR_ALL",
  };
};
