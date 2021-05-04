import { fetchList, fetchUser, fetchItem } from "../../service/api/news-api"

export default {
  FETCH_NEWS({ commit }) {
    fetchList("paramNews")
      .then(response => commit("SET_NEWS", response.data))
      .catch(error => console.log(error))
  },

  FETCH_JOBS({ commit }) {
    fetchList("paramJobs")
      .then(response => commit("SET_JOBS", response.data))
      .catch(error => console.log(error))
  },

  FETCH_ASK({ commit }) {
    fetchList("paramAsk")
      .then(response => commit("SET_ASK", response.data))
      .catch(error => console.log(error))
  },
  FETCH_USER({ commit }, uaserid) {
    fetchUser(uaserid)
      .then(response => commit("SET_USER", response.data))
      .catch(error => console.log(error.response))
  },
  FETCH_ITEM({ commit }, itemid) {
    fetchItem(itemid)
      .then(response => commit("SET_ITEM", response.data)) //commit("SET_ITEM", response.data))
      .catch(error => console.log(error.response))
  }
}
