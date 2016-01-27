(function($w){
 //<classList>
 var w=$w, node=w.document.documentElement, o=node, p='classList', P,f,g=function(){return new f(this);};
 if(!(p in o)){

 }else{
	o=w,p='DOMTokenList';
	if(p in o){
		f=o[p];
		P=f.prototype;
		o=node.classList;//console.log(1,node.className)
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
 };
 //</classList>
})(window);
