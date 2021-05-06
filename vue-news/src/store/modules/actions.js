import { fetchList, fetchUser, fetchItem } from "../../service/api/news-api"

export default {
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch(error => console.log(error.response))
  },

  FETCH_USER({ commit }, uaserid) {
    return fetchUser(uaserid)
      .then(({ data }) => commit("SET_USER", data))
      .catch(error => console.log(error.response))
  },

  FETCH_ITEM({ commit }, itemid) {
    return fetchItem(itemid)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch(error => console.log(error.response))
  }
}
