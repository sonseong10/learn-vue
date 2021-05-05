import {
  fetchNews,
  fetchJobs,
  fetchAsk,
  fetchUser,
  fetchItem
} from "../../service/api/news-api"

export default {
  FETCH_NEWS({ commit }) {
    fetchNews()
      .then(({ data }) => commit("SET_NEWS", data))
      .catch(error => console.log(error))
  },

  FETCH_JOBS({ commit }) {
    fetchJobs()
      .then(({ data }) => commit("SET_JOBS", data))
      .catch(error => console.log(error))
  },

  FETCH_ASK({ commit }) {
    fetchAsk()
      .then(({ data }) => commit("SET_ASK", data))
      .catch(error => console.log(error))
  },
  FETCH_USER({ commit }, uaserid) {
    fetchUser(uaserid)
      .then(({ data }) => commit("SET_USER", data))
      .catch(error => console.log(error.response))
  },
  FETCH_ITEM({ commit }, itemid) {
    fetchItem(itemid)
      .then(({ data }) => commit("SET_ITEM", data)) //commit("SET_ITEM", response.data))
      .catch(error => console.log(error.response))
  }
}
