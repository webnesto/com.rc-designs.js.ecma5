if(!Array.isArray){
	Array.isArray = function(a){
		var s = typeof a;
		if ( s === "object" ) {
			if ( s ) {
				if (
					( typeof a.length === "number" ) 
				&&( !( a.propertyIsEnumerable('length') ) ) 
				&&( typeof a.splice === "function" )
				){
					return true;
				}
			} else {
				return false;
			}
		}
		return false;
	};
}