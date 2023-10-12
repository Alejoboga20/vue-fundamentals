import { vi, type SpyInstance } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';

import Indecision from '../Indecision.vue';

const API_RESPONSE = {
	answer: 'yes',
	forced: false,
	image: 'https://yesno.wtf/assets/yes/2.gif',
};

const ERROR_RESPONSE = {
	message: 'Something went wrong',
};

const INPUT_WITHOUT_QUESTION_MARK = 'test';
const INPUT_WITH_QUESTION_MARK = 'test?';

describe('Indecision.vue', () => {
	let wrapper: VueWrapper<any>;
	let clgSpy: SpyInstance<any, any>;

	global.fetch = vi.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve({ ...API_RESPONSE }),
		} as Response)
	);

	beforeEach(() => {
		vi.clearAllMocks();

		wrapper = shallowMount(Indecision);
		clgSpy = vi.spyOn(console, 'log');
	});

	test('should match the snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should not trigger the fetch when question mark (?) is not present', async () => {
		const getAnswerSpy = vi.spyOn(wrapper.vm, 'getAnswer');
		const input = wrapper.find('input');
		await input.setValue(INPUT_WITHOUT_QUESTION_MARK);

		expect(clgSpy).toHaveBeenCalledWith({ value: INPUT_WITHOUT_QUESTION_MARK });
		expect(getAnswerSpy).not.toHaveBeenCalled();
	});

	test('should trigger the fetch when question mark (?) is typed', async () => {
		const getAnswerSpy = vi.spyOn(wrapper.vm, 'getAnswer');
		const input = wrapper.find('input');
		await input.setValue(INPUT_WITH_QUESTION_MARK);

		expect(clgSpy).toHaveBeenCalledWith({ value: INPUT_WITH_QUESTION_MARK });
		expect(getAnswerSpy).toHaveBeenCalled();
	});

	test('should getAnswers', async () => {
		await wrapper.vm.getAnswer();
		const answer = wrapper.find('h1').text();
		const image = wrapper.find('img');

		expect(image.attributes('src')).toBe(API_RESPONSE.image);
		expect(answer).toBe(API_RESPONSE.answer);
	});

	test('should handler getAnswers error', async () => {
		fetch.mockImplementationOnce(() => Promise.reject(ERROR_RESPONSE));
		await wrapper.vm.getAnswer();

		const answer = wrapper.find('h1').text();
		const image = wrapper.find('img');

		expect(image.exists()).toBeFalsy();
		expect(answer).toBe(ERROR_RESPONSE.message);
	});
});
