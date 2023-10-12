import { shallowMount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
	test('should match the snapshot', () => {
		const wrapper = shallowMount(Counter);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
