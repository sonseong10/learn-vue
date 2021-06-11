<template>
	<div class="container">
		<h1 class="page-title">Today I Learned</h1>
		<router-link class="icon-button" to="/add">
			<PlusIcon></PlusIcon>
		</router-link>
		<PostList></PostList>
	</div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import { PlusIcon } from 'vue-feather-icons';

export default {
	components: { PostList, PlusIcon },
};
</script>

<style scoped>
.icon-button {
	position: fixed;
	right: 30px;
	bottom: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background-color: #40b381;
	font-size: 15px;
	color: #fff;
	border: 3px solid #fff;
	border-radius: 50%;
	box-shadow: 4px 4px 6px rgb(0 0 0 / 6%);
	z-index: 100;
	transition: background-color 300ms ease-in-out;
}

.icon-button:active {
	background-color: #008756;
}

@media screen and (min-width: 768px) {
	.icon-button {
		font-size: 18px;
		width: 50px;
		height: 50px;
	}

	.icon-button:hover {
		background-color: #008756;
	}
}

@media screen and (min-width: 1200px) {
	.icon-button {
		right: 18%;
	}
}
</style>
