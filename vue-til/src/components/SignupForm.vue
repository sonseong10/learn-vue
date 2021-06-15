<template>
	<form class="auth-form" @submit.prevent="submitForm">
		<div class="input-box">
			<label for="username">ID</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<strong class="validation-text">
			<span class="warning" v-if="!isUsernameValid && username">
				이메일 형식을 입력 해 주세요.
			</span>
		</strong>
		<div class="input-box">
			<label for="password">PW</label>
			<input id="password" type="password" v-model="password" />
		</div>
		<div class="input-box">
			<label for="nickname">NicName</label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button
			class="form-button"
			type="submit"
			:disabled="!username || !password || !nickname"
		>
			회원 가입
		</button>
		<strong class="validation-text">
			<span class="error">
				{{ logMessage }}
			</span>
		</strong>
	</form>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

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
					nickname: this.nickname,
				};
				const { data } = await registerUser(userData);
				this.showLogMessage(data.username);
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
			this.nickname = '';
		},

		showLogMessage(status) {
			switch (status) {
				case 409:
					this.logMessage =
						'사용자 아이디가 이미 존재하여 회원 가입이 실패하였습니다.';
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

<style></style>
