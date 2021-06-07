<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">PassWord: </label>
			<input id="password" type="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">NickName: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">회원 가입</button>
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
