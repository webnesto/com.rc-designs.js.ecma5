//#ifdef debug
with(jasmine){
	
	describe("Array.prototype.every", function () {
		
		/* Implementation tests */
		it("should return true if every callback returns true", function(){
			var arr = ["foo", "bar", "cow"];
			
			expect(
				( arr.every(function(item){
					return typeof(item) != "number";
				}) )
			&&( arr.every(function(item, i){
					return i < 5;
				}) )
			).toBeTruthy();
			
		});

	});
	
}
//#endif