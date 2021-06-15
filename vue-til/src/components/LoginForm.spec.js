import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('ID must be in email format.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test@abc.com',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('id pw value nall login btn disabled', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: '',
					password: '',
				};
			},
		});
		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});
