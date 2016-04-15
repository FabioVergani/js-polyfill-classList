(function($){
 'use strict';
 var dummy=function(){},
 w=$,
 d=w.document,
 $id=d.getElementById.bind(d),
 dE=d.documentElement,
 dECl=(function($){
	var o, p, nope=dummy,
	w=$,
	O=w.Object,
	CL=dE.classList,
	DTL=w.DOMTokenList,
	ua=w.navigator.userAgent,
	ChromeVers=(function(e){var m=e.match(/Chrom(e|ium)\/([0-9]+)\./);return m?parseInt(m[2],10):false;})(ua),
	defineGetter=(function(e){var O=e, f=O.defineProperty;return f?function(o,p,g){f(o,p,{get:g});}:function(o,p,g){o.__defineGetter__(p,g);};})(O);
	o=w.Array.prototype;
	p='indexOf';
	if(!(p in o)){o[p]=function(x,i){var k,o,l,n,e=this,v=-1;if(e!=null){o=O(e);l=o.length>>>0;if(l!==0){e=w.Math;if((k=e.abs((n=(+i)||0)))===Infinity){n=0;};if(n<l){for(k=e.max((n>=0)?n:l-k,0),e=x;k<l;k++){if((k in o)&&(o[k]===e)){v=k;break;};};};};};return v;};};
	o=w.String.prototype;
	p='trim';
	if(!(p in o)){o[p]=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};};
	o=w.Element.prototype;
	p='scrollIntoView';
	if(!(p in o)){o[p]=nope;};
	if(CL){
		if(DTL && (ChromeVers<12)){
			(function(x){
				var o=x,f,dt=DTL.prototype,a='add',b='remove';
				o.add(a,b);if(!o.contains(b)){f=function(s){var o=dt,p=s,g=o[p];o[p]=function(){for(var e=this,f=g,m=arguments,i=m.length-1;i>=0;i--){f.call(e,m[i]);};};};f(a);f(b);};
				o.remove(a,b);
				o.toggle(b,false);if(o.contains(b)){dt.toggle=function(s,k){var e=DTL;return ((arguments.length>0)&&(e.contains(s)===k))?k:e.toggle.call(e,s);};};
			})(CL);
		};
	}else{
		(function(x){
			var f=DTL=w.DOMTokenList=function(i){this.el=i;},
			em=function(e,m){e.el.className=m.join('\u0020');},
			n=function(e){return e.el.className.trim().split(/\s+/);},
			P=f.prototype,
			i='classList';
			P.item=function(i){return n(this)[i]||null;};
			P.contains=function(i){return n(this).indexOf(i)!==-1;};
			P.add=function(){var r,e=this,f=n;for(var v,c=f(e),a=arguments,i=a.length-1,m=r=Array(i);i>=0;i--){if(c.indexOf(v=a[i])===-1){m[i]=v;};};if(r.length>0){em(e,f(e).concat(r));};};
			P.remove=function(){var e=this,c=n(e);for(var j,a=arguments,i=a.length-1;i>=0;i--){j=c.indexOf(a[i]);if(-1!==j){c.splice(j,1);};};em(e,c);};
			P.toggle=function(v,b){var i=v,k=b,e=this,x=e.contains(i);if(x!==k){e[x?'remove':'add'](i);x=!x;};return x;};
			P.length=0;
			defineGetter(x,i,function(){return new f(this);});
			CL=dE[i];
		})(o);
	};

	DTL.prototype.replace=function(a,b){var e=this,v=e.contains(a);e.add(b);if(v){e.remove(a);};return v;};
	//...
	return CL;
 })(w),

 at=function(e,s,f,b){
	var g=function(o){f(o);e.removeEventListener(s,g);};
	e.addEventListener(s,g,b&&true);
 },


 isReady=function(evt){
	dECl.replace('loading','ready');

 },

 isComplete=function(evt){
	dECl.replace('ready','loaded');
	d.title=d.originaltitle;

 };

//#
 dECl.replace('no-js','js');
//#
 if(d.readyState==='complete'){
  isReady(false);
  isComplete(false);
 }else{
  d.originaltitle=d.title;
  dECl.add('loading');
  d.title='Loading\u2009\u2026';
  at(w,'DOMContentLoaded',isReady);
  at(w,'load',isComplete);
 };
})(window);
//END.
