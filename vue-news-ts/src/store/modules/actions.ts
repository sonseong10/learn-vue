import { ActionContext } from "vuex";
import { fetchNews } from "../../service/api/news-api";
import { RootState } from "../state";
import { Mutations, MutationTypes } from "./mutations";

enum ActionTyoes {
  FETCH_NEWS = "FETCH_NEWS",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  async [ActionTyoes.FETCH_NEWS](context: MyActionContext, payload?: any) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data);
    return data;
  },
};

type Actions = typeof actions;

export { ActionTyoes, actions, Actions };
