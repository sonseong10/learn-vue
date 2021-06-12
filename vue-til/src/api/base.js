import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function creacteInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

function creacteInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});

	return setInterceptors(instance);
}

const instance = creacteInstance();
const posts = creacteInstanceWithAuth('posts');

export { instance, posts };
