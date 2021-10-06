import { NewsItem } from "@/service/api/news-api";

const state = {
  news: [] as NewsItem[],
};

type RootState = typeof state;

export { state, RootState };
