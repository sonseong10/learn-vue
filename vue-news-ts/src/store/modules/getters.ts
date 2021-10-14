import { RootState } from "../state";

const getters = {
  fetchedUser(state: RootState): any[] {
    return state.user;
  },

  fetchedItem(state: RootState): any[] {
    return state.item;
  },

  fetchedList(state: RootState): any[] {
    return state.list;
  },
};

type Getters = typeof getters;

export { getters, Getters };
