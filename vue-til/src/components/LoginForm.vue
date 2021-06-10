<template>
	<form class="auth-form" @submit.prevent="submitForm">
		<div class="input-box">
			<label for="username">ID</label>
			<input id="username" type="text" autocomplete="on" v-model="username" />
		</div>
		<strong class="validation-text">
			<span class="warning" v-if="!isUsernameValid && username">
				Please enter an email address
			</span>
		</strong>

		<div class="input-box">
			<label for="password">PW</label>
			<input
				id="password"
				type="password"
				autocomplete="current-password"
				v-model="password"
			/>
		</div>

		<button
			class="form-button"
			:disabled="!isUsernameValid || !password"
			type="submit"
		>
			로그인
		</button>
		<strong class="validation-text">
			<span class="warning">
				{{ logMessage }}
			</span>
		</strong>
	</form>
</template>

<script>
import { mapActions } from 'vuex';
import { validateEmail } from '@/utils/validation';

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
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		...mapActions(['LOGIN']),

		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				await this.LOGIN(userData);
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

		showLogMessage(status) {
			switch (status) {
				case 401:
					this.logMessage = '비밀번호가 맞지 않아 로그인에 실패하였습니다.';
					break;
				case 500:
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
