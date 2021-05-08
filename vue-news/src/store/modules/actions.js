import { fetchList, fetchUser, fetchItem } from "../../service/api/news-api"

export default {
  async FETCH_LIST({ commit }, pageName) {
    try {
      const { data } = await fetchList(pageName)
      return commit("SET_LIST", data)
    } catch (error) {
      return console.log(error.response)
    }
  },

  async FETCH_USER({ commit }, uaserid) {
    try {
      const { data } = await fetchUser(uaserid)
      return commit("SET_USER", data)
    } catch (error) {
      return console.log(error.response)
    }
  },

  async FETCH_ITEM({ commit }, itemid) {
    try {
      const { data } = await fetchItem(itemid)
      return commit("SET_ITEM", data)
    } catch (error) {
      return console.log(error.response)
    }
  }
}
