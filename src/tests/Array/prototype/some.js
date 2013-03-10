//#ifdef debug
with(jasmine){
	
	describe("Array.prototype.some", function () {
		
		it("should return true if any callback returns true", function(){
			var arr = ["foo", "bar", "cow"];
			
			expect(
				( arr.some(function(item){
					return item == "bar";
				}) )
			&&( arr.some(function(item, i){
					return i > 1;
				}) )
			).toBeTruthy();
			
		});

	});
	
}
//#endif