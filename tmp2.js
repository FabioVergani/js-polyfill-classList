//polyfills by feature-detect

//Prerequisiti:
var SP=String.prototype;
SP.trim=SP.trim||(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);
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

	 DOMTokenList=function(e){
		var s='',n=e.className;
		if(n===undefined||n===null||/^\s*$/.test(n)){
			n=[];
		}else{
			s=n.trim();
			n=s.split(/\s+/);
		};
		e.className=s;
		this.classes=n;
	 };


	 DOMTokenList.prototype={
		item: function(i){return this.classes[i]||null;},
	 };


	 w.DOMTokenList=DOMTokenList;
	 defineGetter(Element.prototype,p,function(){return new DOMTokenList(this);});
	};
 };
})(document);
//
//test:

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
document.body.classList.add('ssss');
console.log(document.body.classList.item(0));


console.dir(document.body._classList);
console.dir(document.body._classList.item(0));



//document.body._classList.add('ssss');
//console.log();
