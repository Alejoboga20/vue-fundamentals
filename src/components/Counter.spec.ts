import { shallowMount, VueWrapper } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
	let wrapper: VueWrapper<any>;
	const DEFAULT_TITLE = 'Counter';
	const DEFAULT_COUNTER_VALUE = 0;

	beforeEach(() => {
		wrapper = shallowMount(Counter);
	});

	test('should match the snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should have the default title', () => {
		const titleElement = wrapper.find('h2').exists();
		expect(titleElement).toBeTruthy();

		const title = wrapper.find('h2').text();
		expect(title).toBe(DEFAULT_TITLE);
	});

	test('should have the default counter value', () => {
		const counterValue = wrapper.find('[data-testid="counter-value"]').text();

		expect(counterValue).toBe(DEFAULT_COUNTER_VALUE.toString());
	});

	test('should increment the counter by 1', async () => {
		const [increaseButton] = wrapper.findAll('button');
		await increaseButton.trigger('click');

		const counterValue = wrapper.find('[data-testid="counter-value"]').text();
		expect(counterValue).toBe((+DEFAULT_COUNTER_VALUE + 1).toString());
	});

	test('should decrement the counter by 1', async () => {
		const [_, decreaseButton] = wrapper.findAll('button');

		await decreaseButton.trigger('click');
		const counterValue = wrapper.find('[data-testid="counter-value"]').text();
		expect(counterValue).toBe((+DEFAULT_COUNTER_VALUE - 1).toString());
	});

	test('should have the default props', () => {
		const { title, start } = wrapper.props();

		expect(title).toBe(undefined);
		expect(start).toBe(0);
	});
});
