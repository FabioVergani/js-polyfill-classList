/*
var Fp=Function.prototype, Fc=Fp.call;
var Ap=Array.prototype;
var Slice=Fc.bind(Ap.slice);

*/




//polyfills by feature-detect

//Prerequisiti: array.indexOf +
var SP=String.prototype;
SP.trim=SP.trim||(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);
//
var isBlank=function(s){return s===''||/^\s*$/.test(s)};
var isValidClassname=function(s){return /^[^\d-][\dA-Za-z_-]*$/.test(s)};
var textContainWord=function(t,s){return t===s||new RegExp('(\\s|^)'+s+'(\\s|$)').test(t);};
//
//shim:classList
(function(doc){'use strict';
 var p, d=doc, w=d.defaultView;
 if('Element' in w){
	p='_classList';
	if(p in d.documentElement){
		//fix
	}else{
	 var defineGetter=(function(O){
		return 'defineProperty' in O ? function(o,p,g){Object.defineProperty(o,p,{get:g});}:function(o,p,g){o.__defineGetter__(p,g);};
	 })(window.Object),

	 DOMTokenList=function(elem){var e=this;e.el=elem;};

	 DOMTokenList.prototype={
		item:function(i){return this.classes[i]||null;},
		contains:function(s){return textContainWord(this.el.className,s);},
		add:function(){
			var k=0, e=this, tc=e.classes, space='\u0020';
			for(var s,i=0,m=arguments,l=m.length,t=e.el.className,c=tc;i<l;i++){
				var s=m[i];
				if(isValidClassname(s) && !textContainWord(t,s)){
					t+=(space+s);
					c[c.length]=s;
					k++;
				};
			};
			if(k!==0){e.el.className=tc.join(space)};
		},
		remove:function(){
			var k=0, e=this;
			for(var s,i=0,m=arguments,l=m.length,t=e.el.className;i<l;i++){
				var s=m[i];if(s!==''){t=t.replace(s,'');k++;};
			};
			if(k!==0){e.el.className=t.split(/\s+/).join('\u0020');};
		},
	 };


	 defineGetter(DOMTokenList.prototype,'classes',function(){
		var n=this.el.className;
		if(n===undefined||n===null||isBlank(n)){n=[];}else{n=n.trim().split(/\s+/);};
		return n;
	 });

	 w.DOMTokenList=DOMTokenList;
	 defineGetter(Element.prototype,p,function(){return new DOMTokenList(this);});
	};
 };
})(document);
//
//test:

/*

		 var e=this, m=Slice(arguments);
		 if(!e.contains(x)){
			e.el.className=+'sss';
		 };

/*
document.body.classList.add('pippo','s');
//
console.log(document.body.className);
document.body.className="    ";
document.body.className=null;
//document.body.className="ss   ";
console.log(document.body._classList);
console.log(document.body.classList.item[0]);
console.log(document.body._classList.item());
console.log(document.body.className);
*/
document.body.classList.add('ssss','9f99');
console.log(document.body.classList.item(0));


console.dir(document.body._classList);
console.dir(document.body._classList.item(0));
console.dir(document.body._classList.contains('ssss'));
console.dir(document.body._classList.contains('sss'));


document.body._classList.add('aaa','a324ssss2','b9f992','aaa');
document.body._classList.remove('aaa');
//document.body._classList.add('ssss');
//console.log();
