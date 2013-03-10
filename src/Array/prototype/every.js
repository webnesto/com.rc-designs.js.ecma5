if( !Array.prototype.every ){
	
	Array.prototype.every = function (fn, scope) {
		switch(true){
			case (this === void 0 || this === null):
			case (typeof fn !== "function"):
				throw new TypeError();
			break;
		}
		for(var i=0, len=this.length; i<len; i++){
			if(i in this){
				if( !(fn.call(scope, this[i], i, this)) ){
					return false;
				}
			}
		}
		return true;
	};
	
}