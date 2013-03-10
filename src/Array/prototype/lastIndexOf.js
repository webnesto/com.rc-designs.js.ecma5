/*
 * This prototype is provided by the Mozilla foundation and
 * is distributed under the MIT license.
 * http://www.ibiblio.org/pub/Linux/LICENSES/mit.license
 */
if (!Array.prototype.lastIndexOf){
	
	Array.prototype.lastIndexOf = function (elt /*, from*/)
	{
	  var len = this.length;
	
	  var from = Number(arguments[1]);
	  if (isNaN(from))
	  {
	    from = len - 1;
	  }
	  else
	  {
	  	from = (from < 0)
			 ? Math.ceil(from)
			 : Math.floor(from);
	    if (from < 0)
	      from += len;
	    else if (from >= len)
	      from = len - 1;
	  }
	
	  for (; from > -1; from--)
	  {
	    if (from in this &&
	        this[from] === elt)
	      return from;
	  }
	  return -1;
	};

}