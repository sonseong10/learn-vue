import axios from "axios"

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
}

function fetchNews() {
  return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAsk() {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobs() {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchUser(userId) {
  return axios.get(`${config.baseUrl}user/${userId}.json`)
}

function fetchItem(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export { fetchNews, fetchAsk, fetchJobs, fetchUser, fetchItem }
