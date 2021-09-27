import axios, { AxiosPromise } from "axios";

const api = {
  news: "https://api.hnpwa.com/v0/news/1.json",
  jobs: "https://api.hnpwa.com/v0/jobs/1.json",
  ask: "https://api.hnpwa.com/v0/ask/1.json",
  user: "https://api.hnpwa.com/v0/user/1.json",
  item: "https://api.hnpwa.com/v0/item/1.json",
};

export interface NewsItem {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

function fetchNews(): AxiosPromise<NewsItem[]> {
  return axios.get(api.news);
}

function fetchAsk() {
  return axios.get(api.ask);
}

function fetchJobs() {
  return axios.get(api.jobs);
}

async function fetchList(type: any) {
  try {
    const response = await axios.get(`https://api.hnpwa.com/v0/${type}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUser(userId: any) {
  try {
    const response = await axios.get(`${api.user}${userId}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchItem(itemId: any) {
  try {
    const response = await axios.get(`${api.item}${itemId}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchNews, fetchAsk, fetchJobs, fetchList, fetchUser, fetchItem };
