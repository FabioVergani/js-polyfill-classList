var defineGetter=(function(e){
 var O=e, f=O.defineProperty;
 return f?function(o,p,g){f(o,p,{get:g});}:function(o,p,g){o.__defineGetter__(p,g);};
})(Object);
