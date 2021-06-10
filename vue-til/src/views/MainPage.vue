<template>
	<div class="container">
		<h1 class="form-title">Today I Learned</h1>
		<PostList></PostList>
	</div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
export default {
	components: { PostList },
};
</script>

<style></style>
