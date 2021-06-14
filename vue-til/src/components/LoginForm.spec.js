import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('component is mounted, username must exist and be set to its initial value.', () => {
		const instance = new Vue(LoginForm).$mount();
		console.log(instance.username);
		expect(instance.username).toBe('');
	});
});
