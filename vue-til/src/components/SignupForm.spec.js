import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
	test('Visible warning message if ID is not in email format', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID, Password and Nickname is empty, button is not available.', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: '',
					password: '',
					nickname: '',
				};
			},
		});
		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});
