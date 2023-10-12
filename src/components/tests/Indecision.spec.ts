import { vi, type SpyInstance } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';

import Indecision from '../Indecision.vue';

describe('Indecision.vue', () => {
	let wrapper: VueWrapper<any>;
	let clgSpy: SpyInstance<any, any>;

	const INPUT_WITHOUT_QUESTION_MARK = 'test';

	beforeEach(() => {
		wrapper = shallowMount(Indecision);
		clgSpy = vi.spyOn(console, 'log');
	});

	test('should match the snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should not trigger the fetch when question mark (?) is not present', async () => {
		const input = wrapper.find('input');
		await input.setValue(INPUT_WITHOUT_QUESTION_MARK);

		expect(clgSpy).toHaveBeenCalledWith({ value: INPUT_WITHOUT_QUESTION_MARK });
	});

	test('should trigger the fetch when question mark (?) is typed', () => {});

	test('should getAnswers', () => {});
	test('should handler getAnswers error', () => {});
});
