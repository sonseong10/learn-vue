<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID: </label>
			<input id="username" type="text" v-model="username" />
		</div>

		<div>
			<label for="password">PW: </label>
			<input id="password" type="text" v-model="password" />
		</div>

		<button type="submit">로그인</button>

		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/auth';

export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};

				const { data } = await loginUser(userData);

				this.showLogMessage(data.user.username, true);
			} catch (error) {
				this.showLogMessage(error.response.data, false);
			} finally {
				this.initForm();
			}
		},

		initForm() {
			this.username = '';
			this.password = '';
		},

		showLogMessage(message, resualt) {
			resualt
				? (this.logMessage = `${message}님 환영합니다.`)
				: (this.logMessage = message);
		},
	},
};
</script>

<style></style>
