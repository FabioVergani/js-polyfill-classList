(function(){

 function DOMTokenList(x){var e=this,m=(e.el=x).className.replace(/^\s+|\s+$/g,'').split(/\s+/),i=0,l=m.length,f=push;while(i<l){f.call(e,m[i]);++i;};}

 function set(a,b,c){var O=w.Object,o=a,p=b,f=c;if(O.defineProperty){O.defineProperty(o,p,{get:f});}else{o.__defineGetter__(p,f);};}

 var w=window, E=w.Element;
 if(typeof E === 'undefined' || 'classList' in w.document.documentElement){
  return;
 }else{
  var A=Array.prototype, push=A.push, splice=A.splice, join=A.join;
  (w.DOMTokenList=DOMTokenList).prototype={
   add:function(s){var e=this;if(e.contains(s)){return;}push.call(e,s);e.el.className=e.toString();},
   contains:function(s){return this.el.className.indexOf(s) !== -1;},
   item:function(i){return this[i]||null;},
   remove:function(s){var e=this;if(e.contains(s)){var i=0;for(var l=e.length;i<l;){if(e[i]===s){break;};++i;};splice.call(e,i,1);e.el.className=e.toString();}else{return;};},
   toString:function(){return join.call(this,'\u0020');},
   toggle:function(s){var e=this,i=e.contains(s);if(i){e.remove(s);}else{e.add(s);i=e.contains(s);};return i;}
  };
  set(E.prototype,'classList',function(){return new DOMTokenList(this);});//defineElementGetter
 };
})();
