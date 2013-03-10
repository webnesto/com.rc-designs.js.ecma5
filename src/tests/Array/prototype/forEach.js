//#ifdef debug
with(jasmine){
	
	describe("Array.prototype.forEach", function () {
		
		/* Implementation tests */
		it("should execute callback for each array member", function(){
			var 
				arr = ["foo", "bar", "cow"]
			,	count1 = 0
			, count2 = 0
			;
			arr.forEach(function(item){
				count1++;
			});
			arr.forEach(function(item){
				count1++;
				count2++;
			});
			
			expect(
				( count1 == 6 )
			&&( count2 == 3 )
			).toBeTruthy();
			
		});
		
		it("should pass 3 arguments to the callback", function () {
			var 
				arr = ["foo"]
			,	_args
			;
			arr.forEach(function(){
				_args = arguments;
			});
			expect(
				( _args.length == 3)
			&&( typeof _args[1] == "number" )
			).toBeTruthy();
		});
		
		it("should execute the callback in the scope provided", function () {
			var
				arr = ["foo"]
			, scope = {
					attr: "bar"
				}
			;
			
			arr.forEach(function(item){
				this.attr = item;
			}, scope);
			
			expect(scope.attr == "foo").toBeTruthy();
		});

	});
	
}
//#endif