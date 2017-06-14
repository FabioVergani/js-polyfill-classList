(function($){
 var o=$.Array.prototype,p='indexOf';
 if(!(p in o && o[p])){o[p]=function(a,b){var i,e=p(this),l=e.length>>>0,r=-1;if(l>0){i=o.abs(+b||0);if(i<l){for(i=o.max(0<=i?i:l-i,0);i<l;++i){if(i in e && e[i]===a){r=i;break}}}};return r};o=$.Math,p=$.Object}
})(window);
//
(function($){
 var $Element=$.Element;
 if($Element){
 (function(A,B){
	var f,a=A.createElement('span');
	if('classList' in a && B){
	 (a=a.classList).add('a','b');
	 if(a.contains('b')!==true){f=function(o,p){var x=o[p];o[p]=function(){var m=arguments,l=m.length;for(i=0;i<l;++i){x.call(this,m[i])}}};f(B,'remove');f(B,'add')};
	 a.toggle('c',false);
	 if(a.contains('c')){(function(o,p){var x=o[p];o[p]=function(a,b){var e=this;return arguments.length && e.contains(a)===b?b:x.call(e,a)}})(e,'toggle')}
	}
 })($.document,$.DOMTokenList.prototype);
 }else{
	(function(p){
	 function f(x){return x.element.className.split(/\s+/)}
	 function g(e,x){var m=f(e);for(var v,a=arguments,l=a.length,i=0;i<l;++i){if(m.indexOf(v=a[i])<0){m[x](v,1)}};e.element.className=m.join('\u0020')}
	 var a=function(x){this.element=x},o=a.prototype,d;
	 o.length=0;
	 o.add=function(){g(this,'push')};
	 o.remove=function(){g(this,'splice')};
	 o.item=function(x){return f(this)[x]};
	 o.contains=function(x){return f(this).indexOf(x)<0?false:true};
	 o.toggle=function(a,b){var e=this,i=e.contains(a);if(b===i){return b};e[i?'remove':'add'](a);return i?false:true};
	 if(d=(Object.defineproperty||p.__defineGetter__)){d(p,'classList',{get:function(){return new a(this)}});d(o,'length',function(){return f(this).length})};
	})($Element.prototype);
 }
})(window);
