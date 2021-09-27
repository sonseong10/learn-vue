import {
  fetchList,
  fetchUser,
  fetchItem,
  fetchAsk,
  fetchJobs,
  fetchNews,
} from "../../service/api/news-api";

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const { data } = await fetchNews();
      return commit("SET_NEWS", data);
    } catch (error) {
      console.error(error);
    }
  },

  async FETCH_JOBS({ commit }) {
    try {
      const { data } = await fetchJobs();
      return commit("SET_JOBS", data);
    } catch (error) {
      console.error(error);
    }
  },

  async FETCH_ASK({ commit }) {
    try {
      const { data } = await fetchAsk();
      return commit("SET_ASK", data);
    } catch (error) {
      console.error(error);
    }
  },

  async FETCH_LIST({ commit }, pageName) {
    try {
      const { data } = await fetchList(pageName);
      return commit("SET_LIST", data);
    } catch (error) {
      return console.log(error.response);
    }
  },

  async FETCH_USER({ commit }, uaserid) {
    try {
      const { data } = await fetchUser(uaserid);
      return commit("SET_USER", data);
    } catch (error) {
      return console.log(error.response);
    }
  },

  async FETCH_ITEM({ commit }, itemid) {
    try {
      const { data } = await fetchItem(itemid);
      return commit("SET_ITEM", data);
    } catch (error) {
      return console.log(error.response);
    }
  },
};
