<template>
	<li class="post-item">
		<div class="post-card">
			<header class="card-header">
				<h2 class="post-title">{{ postItem.title }}</h2>
				<div class="tool-button-wrap">
					<button class="edit-button" type="button">
						<EditIcon size="1.2x"></EditIcon>
					</button>
					<button class="delete-button" type="button" @click="deleteItem">
						<Trash2Icon size="1.2x"></Trash2Icon>
					</button>
				</div>
			</header>

			<p class="post-desc">{{ postItem.contents }}</p>

			<footer class="card-footer">
				<span class="post-time">{{ postItem.createdAt }}</span>
			</footer>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';

import { EditIcon, Trash2Icon } from 'vue-feather-icons';
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	components: {
		EditIcon,
		Trash2Icon,
	},
	methods: {
		async deleteItem() {
			await deletePost(this.postItem._id);
			this.$emit('refresh');
		},
	},
};
</script>

<style scoped>
.post-item {
	flex-grow: 1;
}

.post-card {
	position: relative;
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

.card-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tool-button-wrap {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.edit-button,
.delete-button {
	padding: 12px;
	color: #666;
	transition: color 300ms ease-in-out;
}

.edit-button:active {
	color: #1d1d1d;
}

.delete-button:active {
	color: #ff4057;
}

.post-title {
	margin: 0;
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
	.post-item {
		flex-grow: 0;
	}

	.post-card {
		margin-right: 10px;
		width: 360px;
	}

	.edit-button:hover {
		color: #1d1d1d;
	}

	.delete-button:hover {
		color: #ff4057;
	}
}
</style>
