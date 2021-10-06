import { RootState } from "../state";
import { NewsItem } from "@/service/api/news-api";

const getters = {
  fetchedNews(state: RootState): NewsItem[] {
    return state.news;
  },
};

type Getters = typeof getters;

export { getters, Getters };

// export default {
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
// };
