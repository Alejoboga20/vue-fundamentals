describe('Example Test Suite', () => {
	test('should be greater than 10', () => {
		let value = 10;
		value += 1;

		expect(value).toBeGreaterThan(10);
	});
});
