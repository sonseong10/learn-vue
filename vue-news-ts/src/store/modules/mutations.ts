import { NewsItem } from "@/service/api/news-api";

import { RootState } from "../state";

enum MutationTypes {
  SET_NEWS = "SET_NEWS",
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]): void {
    state.news = news;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };
