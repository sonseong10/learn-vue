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

export { fetchList }
