//#ifdef debug
with(jasmine){
	describe("Array.isArray", function () {
		var _isA = Array.isArray;
		it("should identify an array as an array", function () {
			expect( _isA([1,2,3]) ).toBeTruthy();
		});
		it("should identify an empty array as an array", function () {
			expect( _isA([]) ).toBeTruthy();
		});
		it("should not identify objects, numbers, strings, undefineds, or null as an array", function () {
			var 
				_undefined
			,	_null = {
					prop: null
				}
			;
			expect(
				( _isA({}) )
			&&( _isA(1) )
			&&( _isA("foo") )
			&&( _isA(_undefined) )
			&&( _isA(_null.prop) )
			).toBeFalsy();
		});
	});	
}
//#endif