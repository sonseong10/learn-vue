import { fetchList } from "../../service/api/news-api"

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
  }
}
