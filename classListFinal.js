
//indexOf=w.Array.prototype.indexOf;

(function($w){
 var w=$w, d=w.document, html=d.root=d.documentElement;
 //<classList>
 (function(c){'use strict';
	var o=c,p,f,P,$=w,e;
	if(o){//console.log(1,node.className)
		if(f=$.DOMTokenList){
			P=f.prototype;
			p='b';
			o.add('a',p);//console.log(2,node.className)
			if(!o.contains(p)){
				(function(f){
					f('add');//o.add('a2','b2');console.log(4,node.className);
					f('remove');//o.remove('a2','b2');console.log(5,node.className);
				})(function(s){var o=P,p=s,g=o[p];o[p]=function(){for(var f=g,e=this,m=arguments,i=m.length-1;i>=0;i--){f.call(e,m[i]);};};});
			};
			o.remove('a',p);//console.log(3,node.className)
			p='toggle';
			o[p](p,false);
			if(o.contains(p)){P[p]=(function(g){var f=g;return function(s,k){var e=this;return ((arguments.length>0)&&(e.contains(s)===k))?k:f.call(e,s);};})(P[p]);};
		};
	}else{
		//<trim>
		o=$.String.prototype;
		if(!o.trim){o.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};};
		//</trim>
		f=function(i){this.element=i;};
		P=f.prototype;
		P.s=function(e){return e.element.className.trim().split(/\s+/);};
		P.item=function(i){var e=this;return e.s(e)[i];};
		P.contains=function(i){var e=this;return -1!==e.s(e).indexOf(i);};
		P.add=function(){var r=[],e=this,f=e.s;for(var v,m=r,c=f(e),a=arguments,i=a.length-1;i>=0;i--){v=a[i];if (-1 === c.indexOf(v)){m[m.length]=v;};};if(r.length>0){e.element.className=(f(e).concat(r)).join('\u0020');};};
		P.remove=function(){var e=this,c=e.s(e);for(var j,a=arguments,i=a.length-1;i>=0;i--){j=c.indexOf(a[i]);if(-1!==j){c=c.splice(j,1);};};e.element.className=c.join('\u0020');};
		P.toggle=function(v,b){var i=v,k=b,e=this,x=e.contains(i);if(x!==k){e[x?'remove':'add'](i);x=!x;};return x;};
		P.length=0;
		e=Element.prototype;
		//<getter>
		o=(function(i,f){return f?function(e,p,g){f(e,p,{get:g});}:function(e,p,g){i.__defineGetter__(p,g);};})(e,$.Object.defineProperty);
		//</getter>
		o(e,'classList',function(){return new f(this);});
		o(P,'length',function(){var e=this;return e.s(e).length;});

	};

 })(html.classList);
 //</classList>

//test:
var tester=d.root, o=tester.classList;
o.add('a1','a2','a3');
console.log(tester.className);
console.dir(o.length);
console.dir(o.item(1));
console.log(o.contains('a2'));
console.log(o.contains('a4'));
console.log(o.remove('a2'));
console.log(o.contains('a2'));
console.log(o.remove('a2'));
console.log(o.toggle('xxx'));
console.log(o.toggle('xxx'));


})(window);


