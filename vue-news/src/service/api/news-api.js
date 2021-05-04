import axios from "axios"

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
  paramNews: "news/1.json",
  paramJobs: "jobs/1.json",
  paramAsk: "ask/1.json"
}

function fetchList(type) {
  return axios.get(`${config.baseUrl}${config[type]}`)
}

function fetchUser(userId) {
  return axios.get(`${config.baseUrl}user/${userId}.json`)
}

function fetchItem(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export { fetchList, fetchUser, fetchItem }
