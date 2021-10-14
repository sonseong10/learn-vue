import { RootState } from "../state";

enum MutationTypes {
  SET_LIST = "SET_LIST",
}

const mutations = {
  [MutationTypes.SET_LIST](state: RootState, list: any[]): void {
    state.list = list;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };
