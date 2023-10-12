import { shallowMount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
	const DEFAULT_TITLE = 'Counter';

	test.skip('should match the snapshot', () => {
		const wrapper = shallowMount(Counter);

		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should have the default title', () => {
		const wrapper = shallowMount(Counter);

		const titleElement = wrapper.find('h2').exists();
		expect(titleElement).toBeTruthy();

		const title = wrapper.find('h2').text();
		expect(title).toBe(DEFAULT_TITLE);
	});
});
