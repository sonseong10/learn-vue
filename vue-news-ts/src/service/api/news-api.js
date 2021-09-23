import axios from "axios"

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
}

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function fetchUser(userId) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${userId}.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function fetchItem(itemId) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${itemId}.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export { fetchList, fetchUser, fetchItem }
