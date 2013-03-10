//#ifdef debug
with(jasmine){
	
	describe("Array.prototype.map", function () {
		
		it("should return a new array made up of the results of a callback", function(){
			var 
				arr = ["foo", "bar", "cow"]
			,	arr2 = arr.map(function(item, i){
					return item + " " + i;
				});	
			;
			
			expect(
				( arr2[1] == "bar 1" )
			&&( arr2.length == 3 )
			).toBeTruthy();
			
		});

	});
	
}
//#endif