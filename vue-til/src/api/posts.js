import { posts } from './base';

function fetchPostsAll() {
	return posts.get('/');
}

function fetchPost(postID) {
	return posts.get(postID);
}

function createPost(postData) {
	return posts.post('/', postData);
}

function deletePost(postID) {
	return posts.delete(postID);
}

function editPost(postID, editData) {
	return posts.put(postID, editData);
}

export { fetchPostsAll, fetchPost, createPost, deletePost, editPost };
