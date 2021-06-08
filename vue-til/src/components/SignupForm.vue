<template>
	<form class="auth-form" @submit.prevent="submitForm">
		<div class="input-box">
			<label for="username">ID</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div class="input-box">
			<label for="password">PW</label>
			<input id="password" type="password" v-model="password" />
		</div>
		<div class="input-box">
			<label for="nickname">NicName</label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button class="form-button" type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/auth';
export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};

			const { data } = await registerUser(userData);

			this.showLogMessage(data.username);
			this.initForm();
		},

		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},

		showLogMessage(username) {
			this.logMessage = `${username}님이 가입되었습니다.`;
		},
	},
};
</script>

<style></style>
