<template>
	<form @submit.prevent="submitForm">
		<div class="input-box">
			<label for="title">Title</label>
			<input id="title" type="text" v-model="title" />
		</div>
		<div class="input-box">
			<label for="contents">Contents</label>
			<textarea
				id="contents"
				type="text"
				rows="5"
				v-model="contents"
				placeholder="200자 이내"
			/>
		</div>

		<button class="form-button" type="submit" :disabled="!isContentsValid">
			등록
		</button>
		<strong class="validation-text" v-if="!isContentsValid">
			<span class="warning"> 200자 이상 입력 하셨습니다. </span>
		</strong>
		<strong class="validation-text">
			<span class="warning">
				{{ errorMsg }}
			</span>
		</strong>
	</form>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
			errorMsg: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				const postData = {
					title: this.title,
					contents: this.contents,
				};
				await createPost(postData);
				this.$router.push('/main');
			} catch (error) {
				const status = error.response.status;
				if (status === 400) {
					this.errorMsg = '동일한 제목의 게시물이 이미 있습니다.';
				}
				console.log(status);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.title = '';
			this.contents = '';
		},
	},
};
</script>

<style scoped>
.input-box {
	padding: 10px;
	height: 100%;
}

.form-button {
	position: absolute;
	right: 10px;
}

.validation-text {
	display: block;
	text-align: center;
}
</style>
