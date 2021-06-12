<template>
	<div class="post">
		<LoadingSpinner v-if="isLoding"></LoadingSpinner>
		<ul class="post-list">
			<PostItem
				v-for="postItem in postItems"
				:key="postItem._id"
				:postItem="postItem"
			></PostItem>
		</ul>
	</div>
</template>

<script>
import PostItem from './PostItem.vue';
import LoadingSpinner from '@/components/common/LodingSpinner.vue';
import { fetchPosts } from '@/api/posts';

export default {
	components: { PostItem, LoadingSpinner },
	data() {
		return {
			postItems: [],
			isLoding: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoding = true;
			const { data } = await fetchPosts();
			this.isLoding = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
.post-list {
	display: flex;
	flex-flow: wrap;
}
</style>
