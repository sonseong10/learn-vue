import { posts } from './base';

function fetchPosts() {
	return posts.get('/');
}

function createPost(postData) {
	return posts.post('/', postData);
}

function deletePost(postID) {
	return posts.delete(postID);
}

export { fetchPosts, createPost, deletePost };
