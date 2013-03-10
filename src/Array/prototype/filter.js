if( !Array.prototype.filter ){
	Array.prototype.filter = function (fn, scope){//Only used if browser doesn't support "[].each"
		switch(true){
			case (this === void 0 || this === null):
			case (typeof fn !== "function"):
				throw new TypeError();
			break;
		}
		var _return = [];
		for(var i=0, len=this.length; i<len; i++){
			if(i in this){
				if(fn.call(scope, this[i], i, this)){
					_return.push(this[i]);
				}
			}
		}
		return _return;
	};
}