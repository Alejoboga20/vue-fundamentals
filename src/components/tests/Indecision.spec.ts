import { VueWrapper, shallowMount } from '@vue/test-utils';
import Indecision from '../Indecision.vue';

describe('Indecision.vue', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(Indecision);
	});

	test('should match the snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
