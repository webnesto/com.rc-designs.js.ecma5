if( !Array.prototype.map ){
	Array.prototype.map = function (fn, scope){//Only used if browser doesn't support "[].each"
		switch(true){
			case (this === void 0 || this === null):
			case (typeof fn !== "function"):
				throw new TypeError();
			break;
		}
		var _return = [];
		for(var i=0, len=this.length; i<len; i++){
			if(i in this){
				_return.push(fn.call(scope, this[i], i, this));
			}
		}
		return _return;
	};
}