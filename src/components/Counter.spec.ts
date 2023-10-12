import { shallowMount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
	const DEFAULT_TITLE = 'Counter';
	const DEFAULT_COUNTER_VALUE = 0;

	test('should match the snapshot', () => {
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

	test('should have the default counter value', () => {
		const wrapper = shallowMount(Counter);
		const counterValue = wrapper.find('[data-testid="counter-value"]').text();

		expect(counterValue).toBe(DEFAULT_COUNTER_VALUE.toString());
	});

	test('should increment the counter by 1', async () => {
		const wrapper = shallowMount(Counter);
		const increaseButton = wrapper.find('button');
		await increaseButton.trigger('click');

		const counterValue = wrapper.find('[data-testid="counter-value"]').text();
		expect(counterValue).toBe((+DEFAULT_COUNTER_VALUE + 1).toString());
	});
});
