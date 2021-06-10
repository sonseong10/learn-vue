<template>
	<li class="post-item">
		<div class="post-card">
			<h2 class="post-title">{{ postItem.title }}</h2>
			<p class="post-desc">{{ postItem.contents }}</p>
			<span class="post-time">{{ postItem.createdAt }}</span>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.post-card {
	position: relative;
	flex-grow: 1;
	margin: 10px 0;
	padding: 16px;
	height: 220px;
	background-color: #fff;
	border-radius: 4px;
	transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
}

.post-card:hover {
	transform: translate3d(0, -10px, 0);
	box-shadow: 0 4px 12px #e4e4e4;
}

.post-title {
	margin: 0 0 8px;
	font-size: 24px;
	color: #1d1d1d;
	font-weight: 400;
}

.post-desc {
	color: #555;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.post-time {
	position: absolute;
	bottom: 16px;
	right: 16px;
	font-size: 14px;
	color: #555;
}

@media screen and (min-width: 1200px) {
	.post-card {
		margin-right: 10px;
		width: 360px;
	}
}
</style>
