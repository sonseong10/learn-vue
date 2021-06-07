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

		<button :disabled="!isUsernameValid || !password" type="submit">
			로그인
		</button>

		<p :class="{ isActive: !errorStyle }">
			{{ logMessage }}
		</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: '',
			// style
			errorStyle: false,
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};

				const response = await loginUser(userData);
				const status = response.status;
				const username = response.data.user.username;

				this.showLogMessage(status, true, username);
			} catch (error) {
				const status = error.response.status;
				this.showLogMessage(status);
			} finally {
				this.initForm();
			}
		},

		initForm() {
			this.username = '';
			this.password = '';
		},

		showLogMessage(status, type = false, username = '') {
			switch (status) {
				case 200:
					this.errorStyle = type;
					this.logMessage = `${username}님 로그인이 완료되었습니다.`;
					break;
				case 401:
					this.errorStyle = type;
					this.logMessage = '비밀번호가 맞지 않아 로그인에 실패하였습니다.';
					break;
				case 500:
					this.errorStyle = type;
					this.logMessage = '서버에 문제가 있어 로그인하지 못했습니다.';
					break;
				default:
					this.logMessage = '';
					break;
			}
		},
	},
};
</script>

<style scoped>
.isActive {
	color: #ff4949;
}
</style>
