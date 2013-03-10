if( !Array.prototype.forEach ){
	Array.prototype.forEach = function (fn, scope){//Only used if browser doesn't support "[].each"
		switch(true){
			case (this === void 0 || this === null):
			case (typeof fn !== "function"):
				throw new TypeError();
			break;
		}
		for(var i=0, len=this.length; i<len; i++){
			if(i in this){
				fn.call(scope, this[i], i, this);
			}
		}
	};
}