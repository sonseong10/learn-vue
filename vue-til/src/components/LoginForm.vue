<template>
	<form class="auth-form" @submit.prevent="submitForm">
		<div class="input-box">
			<label for="username">ID</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<strong class="validation-text">
			<span class="warning" v-if="!isUsernameValid && username">
				Please enter an email address
			</span>
		</strong>

		<div class="input-box">
			<label for="password">PW</label>
			<input id="password" type="password" v-model="password" />
		</div>

		<button
			class="form-button"
			:disabled="!isUsernameValid || !password"
			type="submit"
		>
			로그인
		</button>

		<p class="result-text" :class="{ warning: !errorStyle }">
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
				const { data } = await loginUser(userData);
				this.$store.commit('setUsername', data.user.username);
				this.$router.push('/main');
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

		showLogMessage(status, username = '') {
			switch (status) {
				case 200:
					this.errorStyle = true;
					this.logMessage = `${username}님 로그인이 완료되었습니다.`;
					break;
				case 401:
					this.errorStyle = false;
					this.logMessage = '비밀번호가 맞지 않아 로그인에 실패하였습니다.';
					break;
				case 500:
					this.errorStyle = false;
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
.validation-text {
	align-self: flex-end;
	margin-bottom: 10px;
}

.result-text {
	margin-top: 20px;
}

.warning {
	color: #ff4057;
	font-weight: 400;
}
</style>
