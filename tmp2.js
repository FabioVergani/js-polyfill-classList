//Prerequisiti:
var SP=String.prototype;
SP.trim=SP.trim||(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);


//shim:classList
(function(doc){'use strict';
 var p, d=doc, w=d.defaultView;
 if('Element' in w){
	p='_classList';
	if(p in d.documentElement){

	}else{
	 var defineGetter=(function(O){
		 return 'defineProperty' in O ? function(o,p,g){Object.defineProperty(o,p,{get:g});}:function(o,p,g){o.__defineGetter__(p,g);};
	 })(w.Object),
	 DOMTokenList=function(e){
		var n=e.className;
		if(n===undefined||n===null||/^\s*$/.test(n)){

			e.className='';
			n=[];

		}else{

			n=e.className=n.trim();
			n=n.split(/\s+/);

			console.dir(n)
			console.log(2,n)
		};
		return n;


		/*
			for(var o=e, m=n?n.split(/\s+/):[],l=m.length,i=0;i<l;i++){
				o[o.length]=m[i];
			};
		*/
	 };
	 w.DOMTokenList=DOMTokenList;
	 defineGetter(Element.prototype,p,function(){return new DOMTokenList(this);});
	};
 };
})(document);
//
//test:


document.body.classList.add('pippo','s');
//
console.log(document.body.className);
document.body.className="    ";
document.body.className=null;
document.body.className="  ss sss  ";
console.log(document.body._classList);

//console.log();
