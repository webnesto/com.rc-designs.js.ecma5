//#ifdef debug
with(jasmine){
	
	describe("Array.prototype.filter", function(){
		
		it("should return each member who's callback returns true", function () {
			var 
				arr = ["apple", "berry", "cantaloupe", "durian", "eggplant"]
			, fives = arr.filter(function (item) {
					return item.length == 5;
				})
			, rWords = arr.filter(function (item) {
					return item.indexOf("r") != -1;
				})
			, withoutFives = arr.filter(function (item) {
					return item.length != 5;
				})
			, withoutRwords = arr.filter(function (item) {
					return item.indexOf("r") == -1;
				})
			;
			
			expect(
				( fives.length == 2 )
			&&( fives[0] == "apple" )
			&&( fives[1] == "berry" )
			&&( rWords.length == 2 )
			&&( rWords[0] == "berry" )
			&&( rWords[1] == "durian" )
			).toBeTruthy();
			
			expect(
				( withoutFives.length == 3 )
			&&( withoutFives[0] == "cantaloupe" )
			&&( withoutFives[1] == "durian" )
			&&( withoutRwords.length == 3 )
			&&( withoutRwords[0] == "apple" )
			&&( withoutRwords[1] == "cantaloupe" )
			).toBeTruthy();
			;
			
		});
		
	});
	
}
//#endif