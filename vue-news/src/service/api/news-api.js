import axios from "axios"

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUser(userId) {
  return axios.get(`${config.baseUrl}user/${userId}.json`)
}

function fetchItem(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export { fetchList, fetchUser, fetchItem }
