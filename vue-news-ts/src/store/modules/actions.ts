import { ActionContext } from "vuex";
import {
  fetchAsk,
  fetchJobs,
  fetchList,
  fetchNews,
} from "../../service/api/news-api";
import { RootState } from "../state";
import { Mutations, MutationTypes } from "./mutations";

enum ActionTyoes {
  FETCH_LIST = "FETCH_LIST",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  async [ActionTyoes.FETCH_LIST](context: MyActionContext, pageName: string) {
    const { data } = await fetchList(pageName);
    context.commit(MutationTypes.SET_LIST, data);
    return data;
  },
};

type Actions = typeof actions;

export { ActionTyoes, actions, Actions };
