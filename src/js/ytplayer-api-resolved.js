(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},ra={};try{ra.__proto__=pa;oa=ra.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=na;
function u(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ta(){this.u=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.v=0;this.J=this.l=null}
function va(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ta.prototype.D=function(a){this.j=a};
function wa(a,b){a.l={Oa:b,Ta:!0};a.i=a.v||a.o}
ta.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
ta.prototype.s=function(a){this.i=a};
function xa(a,b,c){a.v=b;void 0!=c&&(a.o=c)}
function ya(a,b){a.i=b;a.v=0}
function za(a){a.v=0;var b=a.l.Oa;a.l=null;return b}
function Aa(a){a.J=[a.l];a.v=0;a.o=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Ta?a.i=a.v||a.o:void 0!=b.s&&a.o<b.s?(a.i=b.s,a.l=null):a.i=a.o:a.i=0}
function Ca(a){this.i=new ta;this.j=a}
function Da(a,b){va(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.u=!1,e;var f=e.value}catch(g){return a.i.m=null,wa(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.u=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,wa(a.i,c)}a.i.u=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Ta)throw b.Oa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){va(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.D):(a.i.D(b),b=Fa(a));return b};
this.throw=function(b){va(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.D):(wa(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ya),reject:g(this.o)}};
b.prototype.ya=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ma(g):this.v(g)}};
b.prototype.ma=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.gb(h,g):this.v(g)};
b.prototype.o=function(g){this.D(2,g)};
b.prototype.v=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.eb();this.J()};
b.prototype.eb=function(){var g=this;e(function(){if(g.P()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.P=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.fb=function(g){var h=this.m();g.pa(h.resolve,h.reject)};
b.prototype.gb=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(w,p){return"function"==typeof w?function(y){try{l(w(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(w,p){l=w;m=p});
this.pa(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.pa=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).pa(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){w[y]=z;p--;0==p&&l(w)}}
var w=[],p=0;do w.push(void 0),p++,d(k.value).pa(q(w.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||sa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ta:Wa=Ua;return Wa.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.ib=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={};function Jb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Jb().indexOf(a)}
;function Kb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Lb={};function Mb(a){this.i=Lb===Lb?a:""}
Mb.prototype.toString=function(){return this.i.toString()};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){return a?decodeURI(a):a}
function Tb(a){return Sb(a.match(Rb)[3]||null)}
function Ub(a){var b=a.match(Rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a,b){var c=a.search(Xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var Zb={};function $b(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function ac(a){ac[" "](a);return a}
ac[" "]=function(){};var bc=E("Opera"),cc=E("Trident")||E("MSIE"),dc=E("Edge"),ec=E("Gecko")&&!(-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),fc=-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge");function gc(){var a=A.document;return a?a.documentMode:void 0}
var hc;a:{var jc="",kc=function(){var a=Jb();if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(jc=kc?kc[1]:"");if(cc){var lc=gc();if(null!=lc&&lc>parseFloat(jc)){hc=String(lc);break a}}hc=jc}var mc=hc,nc;if(A.document&&cc){var oc=gc();nc=oc?oc:parseInt(mc,10)||void 0}else nc=void 0;var pc=nc;var qc=$b()||E("iPod"),rc=E("iPad");!E("Android")||Kb();Kb();var sc=E("Safari")&&!(Kb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!($b()||E("iPad")||E("iPod"));var wc={},xc=null;
function yc(a,b){Oa(a);void 0===b&&(b=0);if(!xc){xc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));wc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===xc[h]&&(xc[h]=g)}}}b=wc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var zc="undefined"!==typeof Uint8Array;var Ac="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Bc(a,b){Object.isFrozen(a)||(Ac?a[Ac]|=b:void 0!==a.ta?a.ta|=b:Object.defineProperties(a,{ta:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Cc(a){var b;Ac?b=a[Ac]:b=a.ta;return null==b?0:b}
function Dc(a){Bc(a,1);return a}
function Ec(a){return Array.isArray(a)?!!(Cc(a)&2):!1}
function Fc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Bc(a,2)}
;function Gc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Hc,Ic=Object.freeze(Dc([]));function Jc(a){if(Ec(a.C))throw Error("Cannot mutate an immutable Message");}
var Kc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Lc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Mc(a){A.setTimeout(function(){throw a;},0)}
;function Nc(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Oc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&zc&&null!=a&&a instanceof Uint8Array)return yc(a)}return a}
;function Pc(a,b){b=void 0===b?Qc:b;return Rc(a,b)}
function Sc(a,b){if(null!=a){if(Array.isArray(a))a=Rc(a,b);else if(Gc(a)){var c={},d;for(d in a)c[d]=Sc(a[d],b);a=c}else a=b(a);return a}}
function Rc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Sc(c[d],b);Array.isArray(a)&&Cc(a)&1&&Dc(c);return c}
function Tc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Oc(a);return Array.isArray(a)?Pc(a,Tc):a}
function Qc(a){return zc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Uc(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.C[b+a.l]}
function G(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Jc(a);b<a.m&&!d?a.C[b+a.l]=c:(a.j||(a.j=a.C[a.m+a.l]={}))[b]=c;return a}
function Vc(a,b,c,d){c=void 0===c?!0:c;var e=Uc(a,b,d);null==e&&(e=Ic);if(Ec(a.C))c&&(Fc(e),Object.freeze(e));else if(e===Ic||Ec(e))e=Dc(e.slice()),G(a,b,e,d);return e}
function Wc(a,b,c,d){Jc(a);(c=Xc(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),G(a,c));return G(a,b,d)}
function Xc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Uc(a,e)&&(0!==c&&G(a,c,void 0,!1,!0),c=e)}return c}
function Yc(a,b,c,d,e){if(-1===c)return null;a.i||(a.i={});var f=a.i[c];if(f)return f;var g=Uc(a,c,e);b=Nc(g,b,d);if(void 0==b)return f;d&&b.C!==g&&G(a,c,b.C,e,!0);a.i[c]=b;Ec(a.C)&&Fc(b.C);return b}
function Zc(a,b,c,d){a.i||(a.i={});var e=Ec(a.C),f=a.i[c];if(!f){d=Vc(a,c,!0,d);f=[];e=e||Ec(d);for(var g=0;g<d.length;g++){var h=Nc(d[g],b);void 0!==h&&(f.push(h),e&&Fc(h.C))}e&&(Fc(f),Object.freeze(f));a.i[c]=f}return f}
function H(a,b,c){Jc(a);a.i||(a.i={});var d=null!=c?c.C:c;a.i[b]=c;return G(a,b,d)}
function $c(a,b,c,d){Jc(a);a.i||(a.i={});var e=null!=d?d.C:d;a.i[b]=d;Wc(a,b,c,e)}
function ad(a,b,c,d){Jc(a);var e=Zc(a,c,b);c=null!=d?d:new c;a=Vc(a,b);e.push(c);a.push(c.C)}
function bd(a,b){a=Uc(a,b);return null==a?"":a}
;function cd(a,b,c){a||(a=dd);dd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.C=a;a:{d=this.C.length;a=d-1;if(d&&(d=this.C[a],Gc(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.m)a+=this.l,(d=this.C[a])?Array.isArray(d)&&Dc(d):this.C[a]=Ic;else{d=this.j||(this.j=this.C[this.m+this.l]={});var e=d[a];e?Array.isArray(e)&&
Dc(e):d[a]=Ic}}
cd.prototype.toJSON=function(){var a=this.C;return Hc?a:Pc(a,Tc)};
function ed(a){Hc=!0;try{return JSON.stringify(a.toJSON(),fd)}finally{Hc=!1}}
cd.prototype.clone=function(){var a=Pc(this.C);dd=a;a=new this.constructor(a);dd=null;gd(a,this);return a};
cd.prototype.isMutable=function(a){if(a!==Zb)throw Error("requires a valid immutable API token");return!Ec(this.C)};
cd.prototype.toString=function(){return this.C.toString()};
function fd(a,b){return Oc(b)}
function gd(a,b){b.o&&(a.o=b.o.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Zc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)gd(f[g],e[g])}else(f=Yc(a,e.constructor,g,void 0,f))&&gd(f,e)}}}}
var dd;function hd(){cd.apply(this,arguments)}
u(hd,cd);if(Kc){var id={};Object.defineProperties(hd,(id[Symbol.hasInstance]=Lc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),id))};function I(){hd.apply(this,arguments)}
u(I,hd);if(Kc){var jd={};Object.defineProperties(I,(jd[Symbol.hasInstance]=Lc(Object[Symbol.hasInstance]),jd))};var kd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var ld={};function md(){}
function nd(a){this.i=a}
u(nd,md);nd.prototype.toString=function(){return this.i};
var od=new nd("about:invalid#zTSz",ld);function pd(a){if(a instanceof md)if(a instanceof nd)a=a.i;else throw Error("");else a instanceof Hb&&a.constructor===Hb?a=a.i:(Na(a),a="type_error:SafeUrl");return a}
;function qd(a,b){a.removeAttribute("srcdoc");a.src=pd(b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function rd(a,b){this.width=a;this.height=b}
n=rd.prototype;n.clone=function(){return new rd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function sd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function td(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ud(a){var b=xd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function yd(){var a=[];ud(function(b){a.push(b)});
return a}
var xd={xb:"allow-forms",yb:"allow-modals",zb:"allow-orientation-lock",Ab:"allow-pointer-lock",Bb:"allow-popups",Cb:"allow-popups-to-escape-sandbox",Db:"allow-presentation",Eb:"allow-same-origin",Fb:"allow-scripts",Gb:"allow-top-navigation",Hb:"allow-top-navigation-by-user-activation"},zd=bb(function(){return yd()});
function Ad(){var a=Bd(),b={};D(zd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Bd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Cd(a){this.isValid=a}
function Dd(a){return new Cd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ed=[Dd("data"),Dd("http"),Dd("https"),Dd("mailto"),Dd("ftp"),new Cd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Fd(a,b){b=void 0===b?Ed:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Cd&&d.isValid(a))return new nd(a,ld)}}
function Gd(a){var b=void 0===b?Ed:b;return Fd(a,b)||od}
;var Hd=(new Date).getTime();var Id=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(434462125,!0);function Jd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Kd="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Kd);function Ld(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var w=g,p=0;64>p;p+=4)w[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=w[p-3]^w[p-8]^w[p-14]^w[p-16],w[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],F=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=F^y&(z^F);var O=1518500249}else M=y^z^F,O=1859775393;else 60>p?(M=y&z|F&(y|z),O=2400959708):(M=y^z^F,O=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+O+w[p]&4294967295;K=F;F=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+K&4294967295}
function c(q,w){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}w||(w=q.length);p=0;if(0==l)for(;p+64<w;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<w;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<w;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],w=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=w&255,w>>>=8;b(f);for(p=w=0;5>p;p++)for(var y=24;0<=y;y-=8)q[w++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,kb:function(){for(var q=d(),w="",p=0;p<q.length;p++)w+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return w}}}
;function Md(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Nd(Jd(d),a,c||null)].join(" "):null}
function Nd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Od(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Od(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Od(a){var b=Ld();b.update(a);return b.kb().toLowerCase()}
;var Pd={};function Qd(a){this.i=a||{cookie:""}}
n=Qd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Da:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Tb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Da}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Da:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Rd=new Qd("undefined"==typeof document?null:document);function Sd(a){return!!Pd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Td(a,b,c,d){(a=A[a])||(a=(new Qd(document)).get(b));return a?Md(a,c,d):null}
function Ud(a){var b=void 0===b?!1:b;var c=Jd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Sd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Qd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Sd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Qd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Md(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Sd(b)&&((b=Td("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Td("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Vd(){this.m=this.m;this.v=this.v}
Vd.prototype.m=!1;Vd.prototype.dispose=function(){this.m||(this.m=!0,this.ga())};
Vd.prototype.ga=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Wd(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
Wd.prototype.stopPropagation=function(){this.l=!0};
Wd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Xd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Yd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Zd[c])c=Zd[c];else{c=String(c);if(!Zd[c]){var f=/function\s+([^\(]+)/m.exec(c);Zd[c]=f?f[1]:"[Anonymous]"}c=Zd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Yd(a,b){b||(b={});b[$d(a)]=!0;var c=a.stack||"";(a=a.ib)&&!b[$d(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Yd(a,b));return c}
function $d(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Zd={};var ae=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function be(a,b){Wd.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Xa(be,Wd);var ce={2:"touch",3:"pen",4:"mouse"};
be.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(ec){a:{try{ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ce[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&be.O.preventDefault.call(this)};
be.prototype.stopPropagation=function(){be.O.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
be.prototype.preventDefault=function(){be.O.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var de="closure_listenable_"+(1E6*Math.random()|0);var ee=0;function fe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.sa=e;this.key=++ee;this.ia=this.oa=!1}
function ge(a){a.ia=!0;a.listener=null;a.proxy=null;a.src=null;a.sa=null}
;function he(a){this.src=a;this.listeners={};this.i=0}
he.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=ie(a,b,d,e);-1<g?(b=a[g],c||(b.oa=!1)):(b=new fe(b,this.src,f,!!d,e),b.oa=c,a.push(b));return b};
he.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ie(e,b,c,d);return-1<b?(ge(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function je(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(ge(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function ie(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ia&&f.listener==b&&f.capture==!!c&&f.sa==d)return e}return-1}
;var ke="closure_lm_"+(1E6*Math.random()|0),le={},me=0;function ne(a,b,c,d,e){if(d&&d.once)oe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ne(a,b[f],c,d,e);else c=pe(c),a&&a[de]?a.S(b,c,Pa(d)?!!d.capture:!!d,e):qe(a,b,c,!1,d,e)}
function qe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=re(a);h||(a[ke]=h=new he(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=se();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ae||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(te(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");me++}}
function se(){function a(c){return b.call(a.src,a.listener,c)}
var b=ue;return a}
function oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else c=pe(c),a&&a[de]?a.l.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):qe(a,b,c,!0,d,e)}
function ve(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ve(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=pe(c),a&&a[de])?a.l.remove(String(b),c,d,e):a&&(a=re(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ie(b,c,d,e)),(c=-1<a?b[a]:null)&&we(c))}
function we(a){if("number"!==typeof a&&a&&!a.ia){var b=a.src;if(b&&b[de])je(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(te(c),d):b.addListener&&b.removeListener&&b.removeListener(d);me--;(c=re(b))?(je(c,a),0==c.i&&(c.src=null,b[ke]=null)):ge(a)}}}
function te(a){return a in le?le[a]:le[a]="on"+a}
function ue(a,b){if(a.ia)a=!0;else{b=new be(b,this);var c=a.listener,d=a.sa||a.src;a.oa&&we(a);a=c.call(d,b)}return a}
function re(a){a=a[ke];return a instanceof he?a:null}
var xe="__closure_events_fn_"+(1E9*Math.random()>>>0);function pe(a){if("function"===typeof a)return a;a[xe]||(a[xe]=function(b){return a.handleEvent(b)});
return a[xe]}
;function J(){Vd.call(this);this.l=new he(this);this.ya=this;this.J=null}
Xa(J,Vd);J.prototype[de]=!0;J.prototype.addEventListener=function(a,b,c,d){ne(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){ve(this,a,b,c,d)};
function ye(a,b){var c=a.J;if(c){var d=[];for(var e=1;c;c=c.J)d.push(c),++e}a=a.ya;c=b.type||b;"string"===typeof b?b=new Wd(b,a):b instanceof Wd?b.target=b.target||a:(e=b,b=new Wd(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=ze(g,c,!0,b)&&e}b.l||(g=b.i=a,e=ze(g,c,!0,b)&&e,b.l||(e=ze(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=ze(g,c,!1,b)&&e}
J.prototype.ga=function(){J.O.ga.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ge(d[e]);delete a.listeners[c];a.i--}}this.J=null};
J.prototype.S=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function ze(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ia&&g.capture==c){var h=g.listener,k=g.sa||g.src;g.oa&&je(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ae(a){J.call(this);var b=this;this.D=this.j=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
Z:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return v(e,Be(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Ce(this)}
u(Ae,J);function De(){var a=Ee;Ae.i||(Ae.i=new Ae(a));return Ae.i}
Ae.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.K.Z(this.D);delete Ae.i};
Ae.prototype.G=function(){return this.i};
function Ce(a){a.D=a.K.M(function(){var b;return x(function(c){if(1==c.i)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):v(c,Be(a),3):v(c,Be(a),3);Ce(a);c.i=0})},3E4)}
function Be(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.K.M(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.u=void 0;a.j&&(a.K.Z(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ye(a,"networkstatus-online"):ye(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.s(3)}})})}
;function Fe(){this.data_=[];this.i=-1}
Fe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Fe.prototype.get=function(a){return!!this.data_[a]};
function Ge(a){-1===a.i&&(a.i=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function He(){var a=Ie,b="Ca";if(a.Ca&&a.hasOwnProperty(b))return a.Ca;var c=new a;a.Ca=c;a.hasOwnProperty(b);return c}
;function Ie(){var a={};this.B=function(b,c){return null!=a[b]?a[b]:c}}
;function Je(a){I.call(this,a,-1,Ke)}
u(Je,I);function Le(a,b){return G(a,2,b)}
function Me(a,b){return G(a,3,b)}
function Ne(a,b){return G(a,4,b)}
function Oe(a,b){return G(a,5,b)}
function Pe(a,b){return G(a,9,b)}
function Qe(a,b){Jc(a);if(b){var c=Dc([]);for(var d=0;d<b.length;d++)c[d]=b[d].C;a.i||(a.i={});a.i[10]=b}else a.i&&(a.i[10]=void 0),c=Ic;return G(a,10,c)}
function Re(a,b){return G(a,11,b)}
function Se(a,b){return G(a,1,b)}
function Te(a){I.call(this,a)}
u(Te,I);var Ke=[10,6];var Ue="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ve(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function We(a){var b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=Ve(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Ue).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function Xe(a){var b;return Re(Qe(Pe(Oe(Ne(Me(Le(Se(new Je,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Te;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function Ye(){var a=window;if(He().B(Id.flag,Id.defaultValue)){var b,c;return null!=(c=null==(b=We(a))?void 0:b.then(function(g){return Xe(g)}))?c:null}var d,e;
if("function"!==typeof(null==(d=a.navigator)?void 0:null==(e=d.userAgentData)?void 0:e.getHighEntropyValues))return null;var f;return null!=(f=a.navigator.userAgentData.getHighEntropyValues(Ue).then(function(g){return Xe(g)}))?f:null}
;function Ze(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
Ze.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function $e(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var af;function bf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=sd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.La;c.La=null;e()}};
return function(e){d.next={La:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function cf(){this.j=this.i=null}
cf.prototype.add=function(a,b){var c=df.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
cf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var df=new Ze(function(){return new ef},function(a){return a.reset()});
function ef(){this.next=this.scope=this.i=null}
ef.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
ef.prototype.reset=function(){this.next=this.scope=this.i=null};function ff(a,b){gf||hf();jf||(gf(),jf=!0);kf.add(a,b)}
var gf;function hf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);gf=function(){a.then(lf)}}else gf=function(){var b=lf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(af||(af=bf()),af(b)):A.setImmediate(b)}}
var jf=!1,kf=new cf;function lf(){for(var a;a=kf.remove();){try{a.i.call(a.scope)}catch(b){Mc(b)}$e(df,a)}jf=!1}
;function Jf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
Jf.prototype[Symbol.iterator]=function(){return this};
Jf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Kf(a,b){return new Jf(a,b)}
;function Lf(){this.blockSize=-1}
;function Mf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.v=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Xa(Mf,Lf);Mf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Nf(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Mf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Nf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Nf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Nf(this,e);f=0;break}}this.j=f;this.m+=b}};
Mf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Nf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Of(){}
Of.prototype.next=function(){return Pf};
var Pf={done:!0,value:void 0};function Qf(a){return{value:a,done:!1}}
Of.prototype.L=function(){return this};function Rf(a){if(a instanceof Sf||a instanceof Tf||a instanceof Uf)return a;if("function"==typeof a.next)return new Sf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Sf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Sf(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Sf(a){this.j=a}
Sf.prototype.L=function(){return new Tf(this.j())};
Sf.prototype[Symbol.iterator]=function(){return new Uf(this.j())};
Sf.prototype.i=function(){return new Uf(this.j())};
function Tf(a){this.j=a}
u(Tf,Of);Tf.prototype.next=function(){return this.j.next()};
Tf.prototype[Symbol.iterator]=function(){return new Uf(this.j)};
Tf.prototype.i=function(){return new Uf(this.j)};
function Uf(a){Sf.call(this,function(){return a});
this.l=a}
u(Uf,Sf);Uf.prototype.next=function(){return this.l.next()};function Vf(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vf)for(c=Wf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Wf(a){Xf(a);return a.i.concat()}
n=Vf.prototype;n.has=function(a){return Yf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Zf;Xf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Zf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Yf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Xf(this),!0):!1};
function Xf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Yf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Yf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Yf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Yf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Wf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Vf(this)};
n.keys=function(){return Rf(this.L(!0)).i()};
n.values=function(){return Rf(this.L(!1)).i()};
n.entries=function(){var a=this;return Kf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Xf(this);var b=0,c=this.l,d=this,e=new Of;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Pf;var f=d.i[b++];return Qf(a?f:d.j[f])};
return e};
function Yf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var $f=A.JSON.stringify;function ag(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function bg(a){this.i=0;this.u=void 0;this.m=this.j=this.l=null;this.o=this.v=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){cg(b,2,c)},function(c){cg(b,3,c)})}catch(c){cg(this,3,c)}}
function dg(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
dg.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var eg=new Ze(function(){return new dg},function(a){a.reset()});
function fg(a,b,c){var d=eg.get();d.j=a;d.onRejected=b;d.context=c;return d}
bg.prototype.then=function(a,b,c){return gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
bg.prototype.$goog_Thenable=!0;bg.prototype.cancel=function(a){if(0==this.i){var b=new hg(a);ff(function(){ig(this,b)},this)}};
function ig(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?ig(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):jg(c),kg(c,e,3,b)))}a.l=null}else cg(a,3,b)}
function lg(a,b){a.j||2!=a.i&&3!=a.i||mg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function gg(a,b,c,d){var e=fg(null,null,null);e.i=new bg(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof hg?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;lg(a,e);return e.i}
bg.prototype.J=function(a){this.i=0;cg(this,2,a)};
bg.prototype.P=function(a){this.i=0;cg(this,3,a)};
function cg(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.J,f=a.P;if(d instanceof bg){lg(d,fg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){ng(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.i=b,a.l=null,mg(a),3!=b||c instanceof hg||og(a,c))}}
function ng(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function mg(a){a.v||(a.v=!0,ff(a.D,a))}
function jg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
bg.prototype.D=function(){for(var a;a=jg(this);)kg(this,a,this.i,this.u);this.v=!1};
function kg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,pg(b,c,d);else try{b.l?b.j.call(b.context):pg(b,c,d)}catch(e){qg.call(null,e)}$e(eg,b)}
function pg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function og(a,b){a.o=!0;ff(function(){a.o&&qg.call(null,b)})}
var qg=Mc;function hg(a){Za.call(this,a)}
Xa(hg,Za);hg.prototype.name="cancel";function L(a){Vd.call(this);this.u=1;this.l=[];this.o=0;this.i=[];this.j={};this.D=!!a}
Xa(L,Vd);n=L.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function rg(a,b,c){var d=sg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.la(a)}}
n.la=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.o?(this.l.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.da=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];tg(this.i[g+1],this.i[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.m;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.la(c)}}return 0!=e}return!1};
function tg(a,b,c){ff(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.la,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ga=function(){L.O.ga.call(this);this.clear();this.l.length=0};function ug(a){this.i=a}
ug.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,$f(b))};
ug.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ug.prototype.remove=function(a){this.i.remove(a)};function vg(a){this.i=a}
Xa(vg,ug);function wg(a){this.data=a}
function xg(a){return void 0===a||a instanceof wg?a:new wg(a)}
vg.prototype.set=function(a,b){vg.O.set.call(this,a,xg(b))};
vg.prototype.j=function(a){a=vg.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vg.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yg(a){this.i=a}
Xa(yg,vg);yg.prototype.set=function(a,b,c){if(b=xg(b)){if(c){if(c<Date.now()){yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}yg.O.set.call(this,a,b)};
yg.prototype.j=function(a){var b=yg.O.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())yg.prototype.remove.call(this,a);else return b}};function zg(){}
;function Ag(){}
Xa(Ag,zg);Ag.prototype[Symbol.iterator]=function(){return Rf(this.L(!0)).i()};
Ag.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Bg(a){this.i=a}
Xa(Bg,Ag);n=Bg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new Of;d.next=function(){if(b>=c.length)return Pf;var e=c.key(b++);if(a)return Qf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Qf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Xa(Cg,Bg);function Dg(a,b){this.j=a;this.i=null;var c;if(c=cc)c=!(9<=Number(pc));if(c){Eg||(Eg=new Vf);this.i=Eg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Eg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Xa(Dg,Ag);var Fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Eg=null;function Gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Fg[b]})}
n=Dg.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Gg(a),b);Hg(this)};
n.get=function(a){a=this.i.getAttribute(Gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Gg(a));Hg(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Of;d.next=function(){if(b>=c.length)return Pf;var e=c[b++];if(a)return Qf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Qf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hg(this)};
function Hg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ig(a,b){this.j=a;this.i=b+"::"}
Xa(Ig,Ag);Ig.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ig.prototype.get=function(a){return this.j.get(this.i+a)};
Ig.prototype.remove=function(a){this.j.remove(this.i+a)};
Ig.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Of;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Qf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Jg(a){I.call(this,a)}
u(Jg,I);Jg.prototype.getKey=function(){return Uc(this,1)};
Jg.prototype.X=function(){return Uc(this,2===Xc(this,Kg)?2:-1)};
Jg.prototype.setValue=function(a){return Wc(this,2,Kg,a)};
var Kg=[2,3,4,5,6];function Lg(a){I.call(this,a)}
u(Lg,I);function Mg(a){I.call(this,a)}
u(Mg,I);function Ng(a){I.call(this,a,-1,Og)}
u(Ng,I);Ng.prototype.getPlayerType=function(){return Uc(this,36)};
Ng.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Og=[9,66,24,32,86,100,101];function Pg(a){I.call(this,a,-1,Qg)}
u(Pg,I);var Qg=[15,26,28];function Rg(a){I.call(this,a)}
u(Rg,I);Rg.prototype.setToken=function(a){return G(this,2,a)};function Sg(a){I.call(this,a,-1,Tg)}
u(Sg,I);Sg.prototype.setSafetyMode=function(a){return G(this,5,a)};
var Tg=[12];function Ug(a){I.call(this,a,-1,Vg)}
u(Ug,I);var Vg=[12];function Wg(a){I.call(this,a,-1,Xg)}
u(Wg,I);function Yg(a){I.call(this,a)}
u(Yg,I);Yg.prototype.getKey=function(){return bd(this,1)};
Yg.prototype.X=function(){return bd(this,2)};
Yg.prototype.setValue=function(a){return G(this,2,a)};
var Xg=[4,5];function Zg(a){I.call(this,a)}
u(Zg,I);function $g(a){I.call(this,a)}
u($g,I);var ah=[2,3,4];function bh(a){I.call(this,a)}
u(bh,I);function ch(a){I.call(this,a)}
u(ch,I);function dh(a){I.call(this,a)}
u(dh,I);function eh(a){I.call(this,a,-1,fh)}
u(eh,I);var fh=[10,17];function gh(a){I.call(this,a)}
u(gh,I);function hh(a){I.call(this,a)}
u(hh,I);function ih(a){I.call(this,a)}
u(ih,I);function jh(a){I.call(this,a,432)}
u(jh,I);
var kh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];function lh(a){I.call(this,a)}
u(lh,I);function mh(a){I.call(this,a)}
u(mh,I);mh.prototype.setVideoId=function(a){return Wc(this,1,nh,a)};
mh.prototype.getPlaylistId=function(){return Uc(this,2===Xc(this,nh)?2:-1)};
var nh=[1,2];function oh(a){I.call(this,a,-1,ph)}
u(oh,I);var ph=[3];var qh=A.window,rh,sh,th=(null==qh?void 0:null==(rh=qh.yt)?void 0:rh.config_)||(null==qh?void 0:null==(sh=qh.ytcfg)?void 0:sh.data_)||{};C("yt.config_",th);function uh(){var a=arguments;1<a.length?th[a[0]]=a[1]:1===a.length&&Object.assign(th,a[0])}
function N(a,b){return a in th?th[a]:b}
function vh(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function wh(){var a=th.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var xh=[];function yh(a){xh.forEach(function(b){return b(a)})}
function zh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ah(b)}}:a}
function Ah(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),uh("ERRORS",e));yh(a)}
function Bh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),uh("ERRORS",e))}
;var Ch=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Ch});var Dh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Eh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Dh||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Eh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Eh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Eh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Fh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Fh);
function Gh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Hh(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ih()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Ih=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Jh(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Gh(a,b,c,d);if(!e){e=++Fh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Eh(h);if(!td(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Eh(h);
h.currentTarget=a;return c.call(a,h)};
g=zh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ih()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Kh(a,b){"function"===typeof a&&(a=zh(a));return window.setTimeout(a,b)}
function Lh(a){"function"===typeof a&&(a=zh(a));return window.setInterval(a,250)}
;var Mh=/^[\w.]*$/,Nh={q:!0,search_query:!0};function Oh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ph(f[0]||""),h=Ph(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Oh);k.args=[{key:l,value:f[1],query:a,method:Qh==m?"unchanged":m}];Nh.hasOwnProperty(l)||Bh(k)}}return c}
var Qh=String(Oh);function Rh(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Sh(a){"?"==a.charAt(0)&&(a=a.substr(1));return Oh(a,"&")}
function Th(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Sh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Uh(a){if(!b)var b=window.location.href;var c=a.match(Rb)[1]||null,d=Tb(a);c&&d?(a=a.match(Rb),b=b.match(Rb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Tb(b)==d&&(Number(b.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;return a}
function Ph(a){return a&&a.match(Mh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function P(a){a=Vh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Wh(a,b){a=Vh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Vh(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function Xh(){var a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=N("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Yh(a){var b=Zh;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(X){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?kd:g;try{var h=g.history.length}catch(X){h=0}e.u_his=h;var k;e.u_h=null==(k=kd.screen)?void 0:k.height;var l;e.u_w=null==(l=kd.screen)?void 0:l.width;var m;e.u_ah=null==(m=kd.screen)?void 0:m.availHeight;var q;e.u_aw=null==
(q=kd.screen)?void 0:q.availWidth;var w;e.u_cd=null==(w=kd.screen)?void 0:w.colorDepth}catch(X){}h=b.i;try{var p=h.screenX;var y=h.screenY}catch(X){}try{var z=h.outerWidth;var F=h.outerHeight}catch(X){}try{var K=h.innerWidth;var M=h.innerHeight}catch(X){}try{var O=h.screenLeft;var gb=h.screenTop}catch(X){}try{K=h.innerWidth,M=h.innerHeight}catch(X){}try{var ic=h.screen.availWidth;var ua=h.screen.availTop}catch(X){}p=[O,gb,p,y,ic,ua,z,F,K,M];y=b.i.top;try{var ma=(y||window).document,Y="CSS1Compat"==
ma.compatMode?ma.documentElement:ma.body;var ba=(new rd(Y.clientWidth,Y.clientHeight)).round()}catch(X){ba=new rd(-12245933,-12245933)}ma=ba;ba={};var ca=void 0===ca?A:ca;Y=new Fe;ca.SVGElement&&ca.document.createElementNS&&Y.set(0);y=Ad();y["allow-top-navigation-by-user-activation"]&&Y.set(1);y["allow-popups-to-escape-sandbox"]&&Y.set(2);ca.crypto&&ca.crypto.subtle&&Y.set(3);ca.TextDecoder&&ca.TextEncoder&&Y.set(4);ca=Ge(Y);ba.bc=ca;ba.bih=ma.height;ba.biw=ma.width;ba.brdim=p.join();b=b.j;b=(ba.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ba.wgl=!!kd.WebGLRenderingContext,ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Zh=new function(){var a=window.document;this.i=window;this.j=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Rh(Yh(a))});Date.now();var $h="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ai(){if(!$h)return null;var a=$h();return"open"in a?a:null}
;var bi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ci="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Kd)),di=!1;
function ei(a,b){b=void 0===b?{}:b;var c=Uh(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in bi){var f=N(bi[e]);P("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=N("VISITOR_DATA"));!f||!c&&Tb(a)||d&&void 0!==b[e]||!P("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Tb(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Tb(a))b["X-YouTube-Ad-Signals"]=Rh(Yh());return b}
function fi(a){var b=window.location.search,c=Tb(a);P("debug_handle_relative_url_for_query_forward_killswitch")||c||!Uh(a)||(c=document.location.hostname);var d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Sh(b),f={};D(ci,function(g){e[g]&&(f[g]=e[g])});
return Th(a,f||{},!1)}
function gi(a,b){var c=b.format||"JSON";a=hi(a,b);var d=ii(a,b),e=!1,f=ji(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(l||q||w)m=ki(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Kh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function hi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Th(a,b||{},!0);return a}
function ii(a,b){var c=N("XSRF_FIELD_NAME"),d=N("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Tb(a)&&!b.withCredentials&&Tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Sh(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Wb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!di&&a&&"POST"!=b.method&&(di=!0,Ah(Error("AJAX request with postData should use POST")));return e}
function ki(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Bh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?li(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=mi(g)})}d&&ni(e);
return e}
function ni(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){A.console&&A.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Mb(d)}else ni(a[b])}}
function li(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function mi(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ji(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&zh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ai();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=fi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ei(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var oi={Mb:"WEB_DISPLAY_MODE_UNKNOWN",Ib:"WEB_DISPLAY_MODE_BROWSER",Kb:"WEB_DISPLAY_MODE_MINIMAL_UI",Lb:"WEB_DISPLAY_MODE_STANDALONE",Jb:"WEB_DISPLAY_MODE_FULLSCREEN"};function pi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var qi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ri={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},si={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},ti={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ui(){var a=A.navigator;return a?a.connection:void 0}
;function vi(){return"INNERTUBE_API_KEY"in th&&"INNERTUBE_API_VERSION"in th}
function wi(){return{innertubeApiKey:N("INNERTUBE_API_KEY"),innertubeApiVersion:N("INNERTUBE_API_VERSION"),Ba:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Qa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),nb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION"),Sa:N("INNERTUBE_CONTEXT_HL"),Ra:N("INNERTUBE_CONTEXT_GL"),ob:N("INNERTUBE_HOST_OVERRIDE")||"",qb:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pb:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA")}}
function xi(a){var b={client:{hl:a.Sa,gl:a.Ra,clientName:a.Qa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ba}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Xh();0<c.length&&(b.request={internalExperimentFlags:c});yi(a,void 0,b);zi(void 0,b);Ai(a,void 0,b);Bi(void 0,b);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&
(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(Sh(N("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ci(a){var b=new Ug,c=new Ng;G(c,1,a.Sa);G(c,2,a.Ra);G(c,16,a.nb);G(c,17,a.innertubeContextClientVersion);if(a.Ba){var d=a.Ba,e=new Lg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=A.devicePixelRatio)&&1!=d&&G(c,65,d);d=N("EXPERIMENTS_TOKEN","");""!==d&&G(c,54,d);d=Xh();if(0<d.length){e=new Pg;for(var f=0;f<d.length;f++){var g=new Jg;G(g,1,d[f].key);g.setValue(d[f].value);
ad(e,15,Jg,g)}H(b,5,e)}yi(a,c);zi(c);Ai(a,c);Bi(c);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Sg,G(a,3,N("DELEGATED_SESSION_ID")));a=t(Object.entries(Sh(N("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function yi(a,b,c){a=a.Qa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Yc(b,Mg,96)||new Mg;var d=pi();d=Object.keys(oi).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=pi())}
function zi(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ai(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Yc(b,Lg,62))?d:new Lg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Bi(a,b){a:{var c=ui();if(c){var d=qi[c.type||"unknown"]||"CONN_UNKNOWN";c=qi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,ri[d]):b&&(b.client.connectionType=d));P("web_log_effective_connection_type")&&(d=ui(),d=null!=d&&d.effectiveType?ti.hasOwnProperty(d.effectiveType)?ti[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,si[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Di(a,b,c){c=void 0===c?{}:c;var d={};P("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ob||N("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Nb:b=Ud([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function Ei(a){a=Object.assign({},a);delete a.Authorization;var b=Ud();if(b){var c=new Mf;c.update(N("INNERTUBE_API_KEY"));c.update(b);a.hash=yc(c.digest(),3)}return a}
;function Fi(a){var b=new Cg;(b=b.isAvailable()?a?new Ig(b,a):b:null)||(a=new Dg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new yg(a):null;this.j=document.domain||window.location.hostname}
Fi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape($f(b))}catch(f){return}else e=escape(b);b=this.j;Rd.set(""+a,e,{Da:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Fi.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Rd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Fi.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Rd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Gi=window,R=Gi.ytcsi&&Gi.ytcsi.now?Gi.ytcsi.now:Gi.performance&&Gi.performance.timing&&Gi.performance.now&&Gi.performance.timing.navigationStart?function(){return Gi.performance.timing.navigationStart+Gi.performance.now()}:function(){return(new Date).getTime()};var Hi;function Ii(){Hi||(Hi=new Fi("yt.innertube"));return Hi}
function Ji(a,b,c,d){if(d)return null;d=Ii().get("nextId",!0)||1;var e=Ii().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ei(c),requestTime:Math.round(R())};Ii().set("nextId",d+1,86400,!0);Ii().set("requests",e,86400,!0);return d}
function Ki(a){var b=Ii().get("requests",!0)||{};delete b[a];Ii().set("requests",b,86400,!0)}
function Li(a){var b=Ii().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Ei(Di(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Mi(a,d.method,e,{}));delete b[c]}}Ii().set("requests",b,86400,!0)}}
;function Ni(){}
function Oi(a,b){return Pi(a,0,b)}
Ni.prototype.M=function(a,b){return Pi(a,1,b)};
function Qi(a,b){Pi(a,2,b)}
;function Ri(){Ni.apply(this,arguments)}
u(Ri,Ni);function Si(){Ri.i||(Ri.i=new Ri);return Ri.i}
function Pi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Kh(a,c||0)}
Ri.prototype.Z=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Ri.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var Ee=Si();var Ti=qc||rc;var Ui=function(){var a;return function(){a||(a=new Fi("ytidb"));return a}}();
function Vi(){var a;return null==(a=Ui())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Wi=[],Xi=!1;function Yi(a){Xi||(Wi.push({type:"ERROR",payload:a}),10<Wi.length&&Wi.shift())}
function Zi(a,b){Xi||(Wi.push({type:"EVENT",eventType:a,payload:b}),10<Wi.length&&Wi.shift())}
;function $i(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
u($i,Error);function aj(){try{return bj(),!0}catch(a){return!1}}
function bj(){if(void 0!==N("DATASYNC_ID"))return N("DATASYNC_ID");throw new $i("Datasync ID not set","unknown");}
;function cj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function dj(a){return a.substr(0,a.indexOf(":"))||a}
;var ej={},fj=(ej.AUTH_INVALID="No user identifier specified.",ej.EXPLICIT_ABORT="Transaction was explicitly aborted.",ej.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ej.MISSING_INDEX="Index not created.",ej.MISSING_OBJECT_STORES="Object stores not created.",ej.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ej.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ej.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ej.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ej.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ej.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ej.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ej),gj={},hj=(gj.AUTH_INVALID="ERROR",gj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",gj.EXPLICIT_ABORT="IGNORED",gj.IDB_NOT_SUPPORTED="ERROR",gj.MISSING_INDEX=
"WARNING",gj.MISSING_OBJECT_STORES="ERROR",gj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",gj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",gj.QUOTA_EXCEEDED="WARNING",gj.QUOTA_MAYBE_EXCEEDED="WARNING",gj.UNKNOWN_ABORT="WARNING",gj.INCOMPATIBLE_DB_VERSION="WARNING",gj),ij={},jj=(ij.AUTH_INVALID=!1,ij.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ij.EXPLICIT_ABORT=!1,ij.IDB_NOT_SUPPORTED=!1,ij.MISSING_INDEX=!1,ij.MISSING_OBJECT_STORES=!1,ij.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ij.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ij.QUOTA_EXCEEDED=!1,ij.QUOTA_MAYBE_EXCEEDED=!0,ij.UNKNOWN_ABORT=!0,ij.INCOMPATIBLE_DB_VERSION=!1,ij);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?fj[a]:c;d=void 0===d?hj[a]:d;e=void 0===e?jj[a]:e;$i.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,T.prototype)}
u(T,$i);function kj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},fj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,kj.prototype)}
u(kj,T);function lj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,lj.prototype)}
u(lj,Error);var mj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function nj(a,b,c,d){b=dj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(sc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof lj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&mj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Sb:e.name})];e.level="WARNING";return e}
function oj(a,b,c){var d=Vi();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function pj(a){if(!a)throw Error();throw a;}
function qj(a){return a}
function rj(a){this.i=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new rj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={aa:0};f.aa<a.length;f={aa:f.aa},++f.aa)sj(U.resolve(a[f.aa]).then(function(g){return function(h){d[g.aa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new rj(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new rj(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!=a?a:qj,e=null!=b?b:pj;return new U(new rj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){tj(c,c,d,f,g)}),c.onRejected.push(function(){uj(c,c,e,f,g)})):"FULFILLED"===c.state.status?tj(c,c,d,f,g):"REJECTED"===c.state.status&&uj(c,c,e,f,g)}))};
function sj(a,b){a.then(void 0,b)}
function tj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?vj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function uj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?vj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?vj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function wj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function xj(a){return new Promise(function(b,c){wj(a,b,c)})}
function V(a){return new U(new rj(function(b,c){wj(a,b,c)}))}
;function yj(a,b){return new U(new rj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function zj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(R());this.j=!1}
n=zj.prototype;n.add=function(a,b,c){return ok(this,[a],{mode:"readwrite",I:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return ok(this,[a],{mode:"readwrite",I:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return ok(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).count(b)})};
function pk(a,b,c){a=a.i.createObjectStore(b,c);return new qk(a)}
n.delete=function(a,b){return ok(this,[a],{mode:"readwrite",I:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return ok(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).get(b)})};
function rk(a,b){return ok(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function ok(a,b,c,d){var e,f,g,h,k,l,m,q,w,p,y,z;return x(function(F){switch(F.i){case 1:var K={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.I?3:1;g=0;case 2:if(h){F.s(3);break}g++;k=Math.round(R());xa(F,4);l=a.i.transaction(b,e.mode);K=new sk(l);K=tk(K,d);return v(F,K,6);case 6:return m=F.j,q=Math.round(R()),uk(a,k,q,g,void 0,b.join(),e),F.return(m);case 4:w=za(F);p=Math.round(R());y=nj(w,a.i.name,b.join(),a.i.version);
if((z=y instanceof T&&!y.i)||g>=f)uk(a,k,p,g,y,b.join(),e),h=y;F.s(2);break;case 3:return F.return(Promise.reject(h))}})}
function uk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Zi("QUOTA_EXCEEDED",{dbName:dj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),Zi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),vk(a,!1,d,f,b,g.tag),Yi(e)):vk(a,!0,d,f,b,g.tag)}
function vk(a,b,c,d,e,f){Zi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function qk(a){this.i=a}
n=qk.prototype;n.add=function(a,b){return V(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return V(this.i.clear()).then(function(){})};
n.count=function(a){return V(this.i.count(a))};
function wk(a,b){return xk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?wk(this,a):V(this.i.delete(a))};
n.get=function(a){return V(this.i.get(a))};
n.index=function(a){try{return new yk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new lj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function xk(a,b,c){a=a.i.openCursor(b.query,b.direction);return zk(a).then(function(d){return yj(d,c)})}
function sk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=T;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function tk(a,b){var c=new Promise(function(d,e){try{sj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
sk.prototype.abort=function(){this.i.abort();this.j=!0;throw new T("EXPLICIT_ABORT");};
sk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new qk(a),this.l.set(a,b));return b};
function yk(a){this.i=a}
n=yk.prototype;n.count=function(a){return V(this.i.count(a))};
n.delete=function(a){return Ak(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return V(this.i.get(a))};
n.getKey=function(a){return V(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Ak(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return zk(a).then(function(d){return yj(d,c)})}
function Bk(a,b){this.request=a;this.cursor=b}
function zk(a){return V(a).then(function(b){return b?new Bk(a,b):null})}
n=Bk.prototype;n.advance=function(a){this.cursor.advance(a);return zk(this.request)};
n.continue=function(a){this.cursor.continue(a);return zk(this.request)};
n.delete=function(){return V(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.X=function(){return this.cursor.value};
n.update=function(a){return V(this.cursor.update(a))};function Ck(a,b,c){return new Promise(function(d,e){function f(){w||(w=new zj(g.result,{closed:q}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.vb,m=c.upgrade,q=c.closed,w;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Zi("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:dj(a)});var y=f(),z=new sk(g.transaction);
m&&m(y,function(F){return p.oldVersion<F&&p.newVersion>=F},z);
z.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Zi("IDB_UNEXPECTEDLY_CLOSED",{dbName:dj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Dk(a,b,c){c=void 0===c?{}:c;return Ck(a,b,c)}
function Ek(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,xj(c),4);
if(2!=g.i)return ya(g,0);f=za(g);throw nj(f,a,"",-1);})}
;function Fk(a){return new Promise(function(b){Qi(function(){b()},a)})}
function Gk(a,b){this.name=a;this.options=b;this.m=!0;this.v=this.o=0;this.j=500}
Gk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Dk(a,b,c)};
Gk.prototype.delete=function(a){a=void 0===a?{}:a;return Ek(this.name,a)};
function Hk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ik(a,b){if(!b)throw oj("openWithToken",dj(a.name));return Jk(a)}
function Jk(a){function b(){var f,g,h,k,l,m,q,w,p,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),v(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var F=a.options,K=[],M=t(Object.keys(F.ha)),O=M.next();!O.done;O=M.next()){O=O.value;var gb=F.ha[O],ic=void 0===gb.tb?Number.MAX_VALUE:gb.tb;!(h.i.version>=gb.za)||h.i.version>=ic||h.i.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.s(5);break}l=Object.keys(a.options.ha);m=h.objectStoreNames();
if(a.v<Wh("ytidb_reopen_db_retries",0))return a.v++,h.close(),Yi(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.o<Wh("ytidb_remake_db_retries",1))){z.s(6);break}a.o++;if(!P("ytidb_remake_db_enable_backoff_delay")){z.s(7);break}return v(z,Fk(a.j),8);case 8:a.j*=2;case 7:return v(z,a.delete(),9);case 9:return Yi(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new kj(m,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.s(10);break}return v(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=z.j;p=w.i.version;if(void 0!==a.options.version&&p>a.options.version+1)throw w.close(),
a.m=!1,Hk(a,p);return z.return(w);case 10:throw c(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),nj(q,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Hk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,vb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Kk=new Gk("YtIdbMeta",{ha:{databases:{za:1}},upgrade:function(a,b){b(1)&&pk(a,"databases",{keyPath:"actualName"})}});
function Lk(a,b){var c;return x(function(d){if(1==d.i)return v(d,Ik(Kk,b),2);c=d.j;return d.return(ok(c,["databases"],{I:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.i.put(a,void 0)).then(function(){})})}))})}
function Mk(a,b){var c;return x(function(d){if(1==d.i)return a?v(d,Ik(Kk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Nk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],v(e,Ik(Kk,b),2)):3!=e.i?(d=e.j,v(e,ok(d,["databases"],{I:!0,mode:"readonly"},function(f){c.length=0;return xk(f.objectStore("databases"),{},function(g){a(g.X())&&c.push(g.X());return g.continue()})}),3)):e.return(c)})}
function Ok(a){return Nk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Pk,Qk=new function(){}(new function(){});
function Rk(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=Vi();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ti)f=/WebKit\/([0-9]+)/.exec(Jb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Jb()),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Lk(d,Qk),4);case 4:return v(e,Mk("yt-idb-test-do-not-use",Qk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Sk(){if(void 0!==Pk)return Pk;Xi=!0;return Pk=Rk().then(function(a){Xi=!1;var b;if(null!=(b=Ui())&&b.i){var c;b={hasSucceededOnce:(null==(c=Vi())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Ui())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Tk(){return B("ytglobal.idbToken_")||void 0}
function Uk(){var a=Tk();return a?Promise.resolve(a):Sk().then(function(b){(b=b?Qk:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new ag;function Vk(a){if(!aj())throw a=new T("AUTH_INVALID",{dbName:a}),Yi(a),a;var b=bj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wk(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",v(m,Uk(),2);case 2:g=m.j;if(!g)throw h=oj("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Yi(h),h;cj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vk(a);xa(m,3);return v(m,Lk(k,g),5);case 5:return v(m,Dk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),xa(m,7),v(m,Mk(k.actualName,g),9);case 9:ya(m,
8);break;case 7:za(m);case 8:throw l;}})}
function Xk(a,b,c){c=void 0===c?{}:c;return Wk(a,b,!1,c)}
function Yk(a,b,c){c=void 0===c?{}:c;return Wk(a,b,!0,c)}
function Zk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return v(e,Uk(),2);if(3!=e.i){c=e.j;if(!c)return e.return();cj(a);d=Vk(a);return v(e,Ek(d.actualName,b),3)}return v(e,Mk(d.actualName,c),0)})}
function $k(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?v(e,Ek(d.actualName,b),2):v(e,Mk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function al(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return v(d,Uk(),2);if(3!=d.i){b=d.j;if(!b)return d.return();cj("LogsDatabaseV2");return v(d,Ok(b),3)}c=d.j;return v(d,$k(c,a,b),0)})}
function bl(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return v(d,Uk(),2);if(3!=d.i){c=d.j;if(!c)return d.return();cj(a);return v(d,Ek(a,b),3)}return v(d,Mk(a,c),0)})}
;function cl(a){this.na=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ca=function(){};
this.now=Date.now;this.fa=!1;var b;this.bb=null!=(b=a.bb)?b:100;var c;this.ab=null!=(c=a.ab)?c:1;var d;this.Ya=null!=(d=a.Ya)?d:2592E6;var e;this.Xa=null!=(e=a.Xa)?e:12E4;var f;this.Za=null!=(f=a.Za)?f:5E3;var g;this.A=null!=(g=a.A)?g:void 0;this.ra=!!a.ra;var h;this.qa=null!=(h=a.qa)?h:.1;var k;this.wa=null!=(k=a.wa)?k:10;a.handleError&&(this.handleError=a.handleError);a.ca&&(this.ca=a.ca);a.fa&&(this.fa=a.fa);a.na&&(this.na=a.na);this.B=a.B;this.K=a.K;this.F=a.F;this.H=a.H;this.U=a.U;this.Ga=a.Ga;
this.Fa=a.Fa;dl(this)&&(!this.B||this.B("networkless_logging"))&&el(this)}
function el(a){dl(a)&&!a.fa&&(a.i=!0,a.ra&&Math.random()<=a.qa&&a.F.jb(a.A),fl(a),a.H.G()&&a.ka(),a.H.S(a.Ga,a.ka.bind(a)),a.H.S(a.Fa,a.Ka.bind(a)))}
n=cl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(dl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.A).then(function(e){d.id=e;c.H.G()&&gl(c,d)}).catch(function(e){gl(c,d);
hl(c,e)})}else this.U(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(dl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return v(k,d.F.set(e,d.A).catch(function(l){hl(d,l)}),2);
f(g,h);k.i=0})}}this.U(a,b,e.skipRetry)}else this.F.set(e,this.A).catch(function(g){d.U(a,b,e.skipRetry);
hl(d,g)})}else this.U(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(dl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ba(d.id,c.A):e=!0;c.H.T&&c.B&&c.B("vss_network_hint")&&c.H.T(!0);f(g,h)};
this.U(d.url,d.options);this.F.set(d,this.A).then(function(g){d.id=g;e&&c.F.ba(d.id,c.A)}).catch(function(g){hl(c,g)})}else this.U(a,b)};
n.ka=function(){var a=this;if(!dl(this))throw oj("throttleSend");this.j||(this.j=this.K.M(function(){var b;return x(function(c){if(1==c.i)return v(c,a.F.Pa("NEW",a.A),2);if(3!=c.i)return b=c.j,b?v(c,gl(a,b),3):(a.Ka(),c.return());a.j&&(a.j=0,a.ka());c.i=0})},this.bb))};
n.Ka=function(){this.K.Z(this.j);this.j=0};
function gl(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!dl(a))throw c=oj("immediateSend"),c;if(void 0===b.id){e.s(2);break}return v(e,a.F.rb(b.id,a.A),3);case 3:(d=e.j)?b=d:a.ca(Error("The request cannot be found in the database."));case 2:if(il(a,b,a.Ya)){e.s(4);break}a.ca(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return v(e,a.F.ba(b.id,a.A),5);case 5:return e.return();case 4:b.skipRetry||(b=jl(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return v(e,a.F.ba(b.id,a.A),8);case 8:a.U(b.url,b.options,!!b.skipRetry),e.i=0}})}
function jl(a,b){if(!dl(a))throw oj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=kl(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.wa)){l.s(2);break}if(!a.H.V){l.s(3);break}return v(l,a.H.V(),3);case 3:if(a.H.G()){l.s(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.s(6);break}return v(l,a.F.Ha(b.id,a.A,!1),6);case 6:return l.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.wa)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.s(8);break}return b.sendCount<a.ab?v(l,a.F.Ha(b.id,a.A),12):v(l,a.F.ba(b.id,a.A),8);case 12:a.K.M(function(){a.H.G()&&a.ka()},a.Za);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):v(h,a.F.ba(b.id,a.A),2);a.H.T&&a.B&&a.B("vss_network_hint")&&a.H.T(!0);d(e,f);h.i=0})};
return b}
function il(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function fl(a){if(!dl(a))throw oj("retryQueuedRequests");a.F.Pa("QUEUED",a.A).then(function(b){b&&!il(a,b,a.Xa)?a.K.M(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.s(2):v(c,a.F.Ha(b.id,a.A),2);fl(a);c.i=0})}):a.H.G()&&a.ka()})}
function hl(a,b){a.cb&&!a.H.G()?a.cb(b):a.handleError(b)}
function dl(a){return!!a.A||a.na}
function kl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var ll=B("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.la;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;C("ytPubsub2Pubsub2Instance",ll);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function ml(a,b){Gk.call(this,a,b);this.options=b;cj(a)}
u(ml,Gk);function nl(a,b){var c;return function(){c||(c=new ml(a,b));return c}}
ml.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ia?Yk:Xk)(a,b,Object.assign({},c))};
ml.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ia?bl:Zk)(this.name,a)};
function ol(a,b){return nl(a,b)}
;var pl;
function ql(){if(pl)return pl();var a={};pl=ol("LogsDatabaseV2",{ha:(a.LogsRequestsStore={za:2},a),Ia:!1,upgrade:function(b,c,d){c(2)&&pk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return pl()}
;function rl(a){return Ik(ql(),a)}
function sl(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,rl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,rk(d,e),3);f=g.j;c.wb=R();tl(c);return g.return(f)})}
function ul(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(l,rl(b),2);if(3!=l.i)return d=l.j,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),k=void 0,v(l,ok(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(m){return Ak(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.X()&&(k=q.X(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.wb=R();tl(c);return l.return(k)})}
function vl(a,b){var c;return x(function(d){if(1==d.i)return v(d,rl(b),2);c=d.j;return d.return(ok(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.i.put(g,void 0)).then(function(){return g})})}))})}
function wl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return v(e,rl(b),2);d=e.j;return e.return(ok(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.i.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function xl(a,b){var c;return x(function(d){if(1==d.i)return v(d,rl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function yl(a){var b,c;return x(function(d){if(1==d.i)return v(d,rl(a),2);b=d.j;c=R()-2592E6;return v(d,ok(b,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){return xk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function zl(){x(function(a){return v(a,al(),0)})}
function tl(a){if(!P("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Al={},Bl=ol("ServiceWorkerLogsDatabase",{ha:(Al.SWHealthLog={za:1},Al),Ia:!0,upgrade:function(a,b){b(1)&&pk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Cl(a){return Ik(Bl(),a)}
function Dl(a){var b,c;x(function(d){if(1==d.i)return v(d,Cl(a),2);b=d.j;c=R()-2592E6;return v(d,ok(b,["SWHealthLog"],{mode:"readwrite",I:!0},function(e){return xk(e.objectStore("SWHealthLog"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function El(a){var b;return x(function(c){if(1==c.i)return v(c,Cl(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Fl={},Gl=0;
function Hl(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ji(a,void 0,"POST",b);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ji(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new $a({url:a});if(d.l&&d.j||d.m){var e=Sb(a.match(Rb)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Yb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Il(a)}}
function Il(a){var b=new Image,c=""+Gl++;Fl[c]=b;b.onload=b.onerror=function(){delete Fl[c]};
b.src=a}
;function W(){this.i=new Map;this.j=!1}
function Jl(){if(!W.i){var a=B("yt.networkRequestMonitor.instance")||new W;C("yt.networkRequestMonitor.instance",a);W.i=a}return W.i}
W.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
W.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
W.prototype.removeParams=function(a){return a.split("?")[0]};
W.prototype.removeParams=W.prototype.removeParams;W.prototype.isEndpointCFR=W.prototype.isEndpointCFR;W.prototype.requestComplete=W.prototype.requestComplete;W.getInstance=Jl;var Kl;function Ll(){Kl||(Kl=new Fi("yt.offline"));return Kl}
function Ml(a){if(P("offline_error_handling")){var b=Ll().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ll().set("errors",b,2592E3,!0)}}
function Nl(){if(P("offline_error_handling")){var a=Ll().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new $i(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Ah(c)}Ll().set("errors",{},2592E3,!0)}}}
;var Ol=Wh("network_polling_interval",3E4);function Z(){J.call(this);var a=this;this.ma=0;this.D=this.o=!1;this.j=this.Aa();P("use_shared_nsm")?(this.i=De(),P("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.S("networkstatus-online",function(){a.j=!0;a.D&&Nl()}),this.i.S("networkstatus-offline",function(){a.j=!1}))):(Pl(this),Ql(this))}
u(Z,J);function Rl(){if(!Z.i){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.i=a}return Z.i}
n=Z.prototype;n.G=function(){if(P("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.G()}return this.j};
n.T=function(a){if(P("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
n.sb=function(a){!P("use_shared_nsm")&&(this.o=!0,void 0===a?0:a)&&(this.ma||Sl(this))};
n.Aa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.lb=function(){this.D=!0};
n.S=function(a,b){return P("use_shared_nsm")&&this.i?this.i.S(a,b):J.prototype.S.call(this,a,b)};
function Ql(a){window.addEventListener("online",function(){return x(function(b){if(1==b.i)return v(b,a.V(),2);a.D&&Nl();b.i=0})})}
function Pl(a){window.addEventListener("offline",function(){return x(function(b){return v(b,a.V(),0)})})}
function Sl(a){a.ma=Oi(function(){return x(function(b){if(1==b.i)return a.j?a.Aa()||!a.o?b.s(3):v(b,a.V(),3):v(b,a.V(),3);Sl(a);b.i=0})},Ol)}
n.V=function(a){var b=this;if(P("use_shared_nsm")&&this.i){var c=Be(this.i,a);c.then(function(d){P("use_cfr_monitor")&&Jl().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,xa(k,2,3),e&&(b.P=Ee.M(function(){e.abort()},a||2E4)),v(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:Aa(k);P("use_cfr_monitor")&&Jl().requestComplete("generate_204",h);b.u=void 0;b.P&&Ee.Z(b.P);h!==b.j&&(b.j=h,b.j&&b.o?ye(b,"ytnetworkstatus-online"):b.o&&ye(b,"ytnetworkstatus-offline"));d(h);Ba(k);break;case 2:za(k),h=!1,k.s(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.V;Z.prototype.listen=Z.prototype.S;Z.prototype.enableErrorFlushing=Z.prototype.lb;Z.prototype.getWindowStatus=Z.prototype.Aa;Z.prototype.monitorNetworkStatusChange=Z.prototype.sb;Z.prototype.networkStatusHint=Z.prototype.T;Z.prototype.isNetworkAvailable=Z.prototype.G;Z.getInstance=Rl;function Tl(a){a=void 0===a?{}:a;J.call(this);var b=this;this.j=this.P=0;this.o="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";P("use_shared_nsm")&&(this.o="networkstatus-offline",this.u="networkstatus-online");this.i=Rl();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Na);a.Ua&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.xa?(this.xa=a.xa,c(this.u,
function(){Ul(b,"publicytnetworkstatus-online")}),c(this.o,function(){Ul(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){ye(b,"publicytnetworkstatus-online")}),c(this.o,function(){ye(b,"publicytnetworkstatus-offline")}))}
u(Tl,J);Tl.prototype.G=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Tl.prototype.T=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Tl.prototype.V=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return P("skip_network_check_if_cfr")&&Jl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.T((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function Ul(a,b){a.xa?a.j?(Ee.Z(a.P),a.P=Ee.M(function(){a.D!==b&&(ye(a,b),a.D=b,a.j=R())},a.xa-(R()-a.j))):(ye(a,b),a.D=b,a.j=R()):ye(a,b)}
;var Vl;function Wl(){cl.call(this,{F:{jb:yl,ba:xl,Pa:ul,rb:vl,Ha:wl,set:sl},H:Xl(),handleError:Ah,ca:Bh,U:Yl,now:R,cb:Ml,K:Si(),Ga:"publicytnetworkstatus-online",Fa:"publicytnetworkstatus-offline",ra:!0,qa:.1,wa:Wh("potential_esf_error_limit",10),B:P,fa:!(aj()&&(P("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==Tb(document.location.toString()):1))});this.l=new ag;P("networkless_immediately_drop_all_requests")&&zl();bl("LogsDatabaseV2")}
u(Wl,cl);function Zl(){var a=B("yt.networklessRequestController.instance");a||(a=new Wl,C("yt.networklessRequestController.instance",a),P("networkless_logging")&&Uk().then(function(b){a.A=b;el(a);a.l.resolve();a.ra&&Math.random()<=a.qa&&a.A&&Dl(a.A);P("networkless_immediately_drop_sw_health_store")&&$l(a)}));
return a}
Wl.prototype.writeThenSend=function(a,b){b||(b={});aj()||(this.i=!1);cl.prototype.writeThenSend.call(this,a,b)};
Wl.prototype.sendThenWrite=function(a,b,c){b||(b={});aj()||(this.i=!1);cl.prototype.sendThenWrite.call(this,a,b,c)};
Wl.prototype.sendAndWrite=function(a,b){b||(b={});aj()||(this.i=!1);cl.prototype.sendAndWrite.call(this,a,b)};
Wl.prototype.awaitInitialization=function(){return this.l.promise};
function $l(a){var b;x(function(c){if(!a.A)throw b=oj("clearSWHealthLogsDb"),b;return c.return(El(a.A).catch(function(d){a.handleError(d)}))})}
function Yl(a,b,c){P("use_cfr_monitor")&&am(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(R());c&&0===Object.keys(b).length?Hl(a):gi(a,b)}
function Xl(){Vl||(Vl=new Tl({Ua:!0,Na:!0}));return Vl}
function am(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Jl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Jl().requestComplete(a,!0);d(e,f)}}
;var bm=0,cm=0,dm,em=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:cm};C("ytNetworklessLoggingInitializationOptions",em);function fm(a,b){function c(d){var e=gm().G();if(!hm()||!d||e&&P("vss_networkless_bypass_write"))im(a,b);else{var f={url:a,options:b,timestamp:R(),status:"NEW",sendCount:0};sl(f,d).then(function(g){f.id=g;gm().G()&&jm(f)}).catch(function(g){jm(f);
gm().G()?Ah(g):Ml(g)})}}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Uk().then(function(d){c(d)}):c(Tk())}
function km(a,b){function c(d){if(hm()&&d){var e={url:a,options:b,timestamp:R(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){P("use_cfr_monitor")&&Jl().requestComplete(e.url,!0);void 0!==e.id?xl(e.id,d):f=!0;P("vss_network_hint")&&gm().T(!0);g(k,l)};
if(P("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Jl().requestComplete(e.url,!1);h(k,l)}}im(e.url,e.options);
sl(e,d).then(function(k){e.id=k;f&&xl(e.id,d)}).catch(function(k){gm().G()?Ah(k):Ml(k)})}else im(a,b)}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Uk().then(function(d){c(d)}):c(Tk())}
function lm(){var a=Tk();if(!a)throw oj("throttleSend");bm||(bm=Ee.M(function(){var b;return x(function(c){if(1==c.i)return v(c,ul("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,jm(b),3):(Ee.Z(bm),bm=0,c.return());bm&&(bm=0,lm());c.i=0})},100))}
function jm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=Tk();if(!b)throw c=oj("immediateSend"),c;if(void 0===a.id){e.s(2);break}return v(e,vl(a.id,b),3);case 3:(d=e.j)?a=d:Bh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=R()-f)){e.s(4);break}Bh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return v(e,xl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=mm(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(R());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return v(e,xl(a.id,b),8);case 8:im(a.url,a.options,!!a.skipRetry),e.i=0}})}
function mm(a){var b=Tk();if(!b)throw oj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:P("use_cfr_monitor")&&Jl().requestComplete(a.url,!1);g=kl(f);if(!(P("nwl_consider_error_code")&&g||!P("nwl_consider_error_code")&&nm()<=Wh("potential_esf_error_limit",10))){l.s(2);break}if(P("skip_checking_network_on_cfr_failure")&&(!P("skip_checking_network_on_cfr_failure")||Jl().isEndpointCFR(a.url))){l.s(3);break}return v(l,gm().V(),3);case 3:if(gm().G()){l.s(2);break}c(e,f);if(!P("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.s(6);break}return v(l,wl(a.id,b,!1),6);case 6:return l.return();case 2:if(P("nwl_consider_error_code")&&!g&&nm()>Wh("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&em.potentialEsfErrorCounter++;cm++;if(void 0===(null==(k=a)?void 0:k.id)){l.s(8);break}return 1>a.sendCount?v(l,wl(a.id,b),12):v(l,xl(a.id,b),8);case 12:Ee.M(function(){gm().G()&&lm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return P("use_cfr_monitor")&&Jl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):v(h,xl(a.id,b),2);P("vss_network_hint")&&gm().T(!0);d(e,f);h.i=0})};
return a}
function gm(){if(P("use_new_nwl"))return Xl();dm||(dm=new Tl({Ua:!0,Na:!0}));return dm}
function im(a,b,c){c&&0===Object.keys(b).length?Hl(a):gi(a,b)}
function hm(){return B("ytNetworklessLoggingInitializationOptions")?em.isNwlInitialized:!1}
function nm(){return B("ytNetworklessLoggingInitializationOptions")?em.potentialEsfErrorCounter:cm}
;function om(a){var b=this;this.config_=null;a?this.config_=a:vi()&&(this.config_=wi());Oi(function(){Li(b)},5E3)}
om.prototype.isReady=function(){!this.config_&&vi()&&(this.config_=wi());return!!this.config_};
function Mi(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ji(b,c,l,k)),z)){var F=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){Ki(z);F(M,O)};
c.onFetchSuccess=function(M,O){Ki(z);K(M,O)}}try{y&&d.retry&&!d.Va.bypassNetworkless?(g.method="POST",d.Va.writeThenSend?P("use_new_nwl_wts")?Zl().writeThenSend(p,g):fm(p,g):P("use_new_nwl_saw")?Zl().sendAndWrite(p,g):km(p,g)):(g.method="POST",g.postParams||(g.postParams={}),gi(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Ki(z),z=0),Bh(Error("An extension is blocking network request."));
else throw M;}z&&Oi(function(){Li(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Bh(new $i("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new $i("innertube xhrclient not ready",b,c,d);Ah(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ob)&&(h=f);var k=a.config_.qb||!1,l=Di(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},w=a.config_.pb&&f;w=w&&f.startsWith("Bearer");w||(q.key=a.config_.innertubeApiKey);var p=Th(""+h+m,q||{},!0);P("use_new_nwl")&&Zl().i||!P("use_new_nwl")&&
hm()?Sk().then(function(y){e(y)}):e(!1)}
;var pm={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},qm={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function rm(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var sm=A.ytPubsubPubsubInstance||new L,tm=A.ytPubsubPubsubSubscribedKeys||{},um=A.ytPubsubPubsubTopicToKeys||{},vm=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.la;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;C("ytPubsubPubsubInstance",sm);C("ytPubsubPubsubTopicToKeys",um);C("ytPubsubPubsubIsSynchronous",vm);C("ytPubsubPubsubSubscribedKeys",tm);var wm=Wh("initial_gel_batch_timeout",2E3),xm=Math.pow(2,16)-1,ym=void 0;function zm(){this.l=this.i=this.j=0}
var Am=new zm,Bm=new zm,Cm=!0,Dm=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Dm);var Em=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",Em);var Fm=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Fm);var Gm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Gm);
function Hm(a,b){if("log_event"===a.endpoint){var c=Im(a),d=Dm.get(c)||[];Dm.set(c,d);d.push(a.payload);Jm(b,d,c)}}
function Km(a,b){if("log_event"===a.endpoint){var c=Im(a,!0),d=Em.get(c)||[];Em.set(c,d);a=a.payload.toJSON();d.push(a);Jm(b,d,c,!0)}}
function Jm(a,b,c,d){d=void 0===d?!1:d;a&&(ym=new a);a=Wh("tvhtml5_logging_max_batch")||Wh("web_logging_max_batch")||100;var e=R(),f=d?Bm.l:Am.l;b.length>=a?Lm({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Mm(d),d?Bm.l=e:Am.l=e)}
function Nm(a,b){if("log_event"===a.endpoint){var c=Im(a),d=new Map;d.set(c,[a.payload]);b&&(ym=new b);return new bg(function(e,f){ym&&ym.isReady()?Om(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Pm(a,b){if("log_event"===a.endpoint){var c=Im(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(ym=new b);return new bg(function(e){ym&&ym.isReady()?Qm(d,e,{bypassNetworkless:!0},!0):e()})}}
function Im(a,b){var c="";if(a.ea)c="visitorOnlyApprovedKey";else if(a.R){if(void 0===b?0:b){b=a.R.token;c=a.R;var d=new mh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Wc(d,2,nh,c.playlistId);Gm[b]=d}else b=a.R,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Fm[a.R.token]=c;c=a.R.token}return c}
function Lm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new bg(function(d,e){c?(window.clearTimeout(Bm.j),window.clearTimeout(Bm.i),Bm.i=0):(window.clearTimeout(Am.j),window.clearTimeout(Am.i),Am.i=0);if(ym&&ym.isReady())if(void 0!==b)if(c){e=new Map;var f=Em.get(b)||[];e.set(b,f);Qm(e,d,a);Em.delete(b)}else{f=new Map;var g=Dm.get(b)||[];f.set(b,g);Om(f,d,e,a);Dm.delete(b)}else c?(Qm(Em,d,a),Em.clear()):(Om(Dm,d,e,a),Dm.clear());else Mm(c),d()})}
function Mm(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!Am.i||a&&!Bm.i)){var b=Kh(function(){Lm({writeThenSend:!0},void 0,a)},6E4);
a?Bm.i=b:Am.i=b}window.clearTimeout(a?Bm.j:Am.j);b=N("LOGGING_BATCH_TIMEOUT",Wh("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Cm&&(b=wm);b=Kh(function(){Lm({writeThenSend:!0},void 0,a)},b);
a?Bm.j=b:Am.j=b}
function Om(a,b,c,d,e){var f=ym;d=void 0===d?{}:d;var g=Math.round(R()),h=a.size;a=t(a);for(var k=a.next();!k.done;k=a.next()){var l=t(k.value);k=l.next().value;var m=l.next().value;l=k;k=sb({context:xi(f.config_||wi())});k.events=m;(m=Fm[l])&&Rm(k,l,m);delete Fm[l];l="visitorOnlyApprovedKey"===l;Sm(k,g,l);Tm(d);m=function(){h--;h||b()};
var q=function(){h--;h||b()};
try{Mi(f,"log_event",k,Um(d,l,m,q,e)),Cm=!1}catch(w){Ah(w),c()}}}
function Qm(a,b,c,d){var e=ym;c=void 0===c?{}:c;var f=Math.round(R()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new oh;var m=Ci(e.config_||wi());H(k,1,m);l=Vm(l);for(m=0;m<l.length;m++)ad(k,3,jh,l[m]);(l=Gm[h])&&Wm(k,h,l);delete Gm[h];h="visitorOnlyApprovedKey"===h;Xm(k,f,h);Tm(c);k=ed(k);h=Um(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Mi(e,"log_event","",h);Cm=!1}}
function Tm(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Um(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Va:a,ea:b,Qb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Sm(a,b,c){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID"))&&(c=Ym(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Xm(a,b,c){G(a,2,b);if(!c&&(b=N("EVENT_ID"))){c=Ym();var d=new lh;G(d,1,b);G(d,2,c);H(a,5,d)}}
function Ym(){var a=N("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*xm/2));a++;a>xm&&(a=1);uh("BATCH_CLIENT_COUNTER",a);return a}
function Rm(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Wm(a,b,c){if(Uc(c,1===Xc(c,nh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=Yc(a,Ug,1)||new Ug;c=Yc(a,Sg,3)||new Sg;var e=new Rg;e.setToken(b);G(e,1,d);ad(c,12,Rg,e);H(a,3,c)}
function Vm(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new jh(a[c]))}catch(d){Ah(new $i("Transport failed to deserialize "+String(a[c])))}return b}
;var Zm=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Zm);function $m(a){Lm(void 0,void 0,void 0===a?!1:a)}
function an(a){Zm[a]=a in Zm?Zm[a]+1:0;return Zm[a]}
;function bn(a,b){var c=void 0===c?{}:c;var d=om;N("ytLoggingEventsDefaultDisabled",!1)&&om==om&&(d=null);a:{c=void 0===c?{}:c;if(P("lr_drop_other_and_business_payloads")){if(qm[a]||pm[a])break a}else if(P("lr_drop_other_payloads")&&qm[a])break a;var e={},f=Math.round(c.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=rm();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&c.ja&&(a=e.context,b=c.ja,b={index:an(b),groupKey:b},a.sequence=
b,c.mb&&delete Zm[c.ja]);(c.ub?Nm:Hm)({endpoint:"log_event",payload:e,R:c.R,ea:c.ea},d)}}
;var cn=[{Ea:function(a){return"Cannot read property '"+a.key+"'"},
va:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ea:function(a){return"Cannot call '"+a.key+"'"},
va:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ea:function(a){return a.key+" is not defined"},
va:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var en={Y:[],W:[{hb:dn,weight:500}]};function dn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function fn(){this.W=[];this.Y=[]}
var gn;function hn(){if(!gn){var a=gn=new fn;a.Y.length=0;a.W.length=0;en.Y&&a.Y.push.apply(a.Y,en.Y);en.W&&a.W.push.apply(a.W,en.W)}return gn}
;var jn=new L;function kn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ln(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ln(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ln(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ln(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function mn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=nn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=kn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?nn(e+".ve",f,g,h):0;d+=g;d+=nn(e,a[e],b,c);if(500<d)break}}else c[b]=on(a),d+=c[b].length;else c[b]=on(a),d+=c[b].length;return d}
function nn(a,b,c,d){c+="."+a;a=on(b);d[c]=a;return c.length+a.length}
function on(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var pn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",pn);function qn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&om===om&&(c=!0);c=c?null:om;b=void 0===b?{}:b;var d=Math.round(b.timestamp||R());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=rm();d=new ih;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&b.ja){e=b.ja;var f=an(e),g=new hh;G(g,2,f);G(g,1,e);H(d,3,g);b.mb&&delete pn[b.ja]}H(a,33,d);(b.ub?Pm:Km)({endpoint:"log_event",payload:a,R:b.R,ea:b.ea},c)}
;var rn=new Set,sn=0,tn=0,un=0,vn=[],wn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function xn(){for(var a=t(wn),b=a.next();!b.done;b=a.next()){var c=Jb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function yn(){var a;return x(function(b){return(a=Ye())?b.return(a.then(function(c){c=ed(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return yc(d,3)})):b.return(Promise.resolve(null))})}
;var zn={};function An(a){return zn[a]||(zn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Bn={},Cn=[],sg=new L,Dn={};function En(){for(var a=t(Cn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Fn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[An(b)]:a.getAttribute("data-"+b):null;return c}
function Gn(a){sg.da.apply(sg,arguments)}
;function Hn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function In(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Jn(a,b,c){Kn||(Kn={},Jh(window,"message",function(d){a:{if(d.origin===In(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Kn[e.id])d.u=!0,d.u&&(D(d.v,d.sendMessage,d),d.v.length=0),d.Ja(e)}e=void 0}return e}));
Kn[c]=b}
var Kn=null;var Ln=window;function Mn(a,b,c){this.o=this.i=this.j=null;this.l=0;this.u=!1;this.v=[];this.m=null;this.J={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.D=c;this.setup(a,b)}
n=Mn.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Ja=function(a){Nn(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);On(this,a);return this};
function Pn(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&On(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Bn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);Kn&&(Kn[this.id]=null);this.j=null;a=this.i;for(var c in lb)lb[c][0]==a&&Hh(c);this.o=this.i=null};
n.Ma=function(){return{}};
function Qn(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function Nn(a,b,c){a.m.m||(c={target:a,data:c},a.m.da(b,c),Gn(a.D+"."+b,c))}
function Rn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+In(a.j,"title"));(b=In(a.j,"width"))&&c.setAttribute("width",b.toString());(b=In(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ma();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=Yb(window.location.href,k);null!==l&&(g[k]=l)});
Ln.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(Ln.yt_embedsTokenValue),delete Ln.yt_embedsTokenValue);var h=""+In(a.j,"host")+("/embed/"+In(a.j,"videoId"))+"?"+Wb(g);Ln.yt_embedsEnableUaChProbe?yn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Fd(l.href).toString();qd(c,Gd(k));return k}):
Ln.yt_embedsEnableIframeSrcWithIntent?qd(c,Gd(h)):c.src=h;
return c}
n.Wa=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function Sn(a){Jn(a.j,a,a.id);a.l=Lh(a.Wa.bind(a));Jh(a.i,"load",function(){window.clearInterval(a.l);a.l=Lh(a.Wa.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.j=new Hn(b),c||(b=Rn(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Bn[this.i.id]=this,window.postMessage){this.m=new L;Sn(this);b=In(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Dn)Dn.hasOwnProperty(e)&&
Pn(this,e)}};
function On(a,b){a.J[b]||(a.J[b]=!0,Qn(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=$f(a),c=[Ub(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Nb){if(Nb.name&&"SyntaxError"===Nb.name){if(!(Nb.message&&0<Nb.message.indexOf("target origin ''"))){var e=void 0,f=Nb;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(P("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=sn)){var m=void 0,q=void 0,w=f,p=g,y=Xd(w),z=y.message||"Unknown Error",F=y.name||"UnknownError",K=y.stack||w.j||"Not available";
if(K.startsWith(F+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=y.lineNumber||"Not available",gb=y.fileName||"Not available",ic=K,ua=0;if(w.hasOwnProperty("args")&&w.args&&w.args.length)for(var ma=0;ma<w.args.length&&!(ua=mn(w.args[ma],"params."+ma,p,ua),500<=ua);ma++);else if(w.hasOwnProperty("params")&&w.params){var Y=w.params;if("object"===typeof w.params)for(q in Y){if(Y[q]){var ba="params."+q,ca=on(Y[q]);p[ba]=ca;ua+=ba.length+ca.length;if(500<ua)break}}else p.params=on(Y)}if(vn.length)for(var X=
0;X<vn.length&&!(ua=mn(vn[X],"params.context."+X,p,ua),500<=ua);X++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:F,lineNumber:O,fileName:gb,stack:ic,params:p,sampleWeight:1},Aj=Number(w.columnNumber);isNaN(Aj)||(S.lineNumber=S.lineNumber+":"+Aj);if("IGNORED"===w.level)m=0;else a:{for(var Bj=hn(),Cj=t(Bj.Y),mf=Cj.next();!mf.done;mf=Cj.next()){var Dj=mf.value;if(S.message&&S.message.match(Dj.Rb)){m=Dj.weight;break a}}for(var Ej=t(Bj.W),
nf=Ej.next();!nf.done;nf=Ej.next()){var Fj=nf.value;if(Fj.hb(S)){m=Fj.weight;break a}}m=1}S.sampleWeight=m;for(var Gj=t(cn),of=Gj.next();!of.done;of=Gj.next()){var pf=of.value;if(pf.va[S.name])for(var Hj=t(pf.va[S.name]),qf=Hj.next();!qf.done;qf=Hj.next()){var Ij=qf.value,vd=S.message.match(Ij.regexp);if(vd){S.params["params.error.original"]=vd[0];for(var rf=Ij.groups,Jj={},Ob=0;Ob<rf.length;Ob++)Jj[rf[Ob]]=vd[Ob+1],S.params["params.error."+rf[Ob]]=vd[Ob+1];S.message=pf.Ea(Jj);break}}}S.params||(S.params=
{});var Kj=hn();S.params["params.errorServiceSignature"]="msg="+Kj.Y.length+"&cb="+Kj.W.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var qa=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(qa);if(0!==qa.sampleWeight&&!rn.has(qa.message)){if("ERROR"===h){jn.da("handleError",qa);if(P("record_app_crashed_web")&&
0===un&&1===qa.sampleWeight)if(un++,P("errors_via_jspb")){var sf=new gh;G(sf,1,1);if(!P("report_client_error_with_app_crash_ks")){var Lj=new bh;G(Lj,1,qa.message);var Mj=new ch;H(Mj,3,Lj);var Nj=new dh;H(Nj,5,Mj);var Oj=new eh;H(Oj,9,Nj);H(sf,4,Oj)}var Yn=sf,Pj=new jh;$c(Pj,20,kh,Yn);qn(Pj)}else{var Qj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(Qj.systemHealth={crashData:{clientError:{logMessage:{message:qa.message}}}});bn("appCrashed",Qj)}tn++}else"WARNING"===
h&&jn.da("handleWarning",qa);if(P("kevlar_gel_error_routing"))a:{var tf=void 0,uf=void 0,tc=h,Q=qa;if(P("errors_via_jspb")){if(xn())uf=void 0;else{var Pb=new Zg;G(Pb,1,Q.stack);Q.fileName&&G(Pb,4,Q.fileName);var Ia=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ia.length&&(1!==Ia.length||isNaN(Number(Ia[0]))?2!==Ia.length||isNaN(Number(Ia[0]))||isNaN(Number(Ia[1]))||(G(Pb,2,Number(Ia[0])),G(Pb,3,Number(Ia[1]))):G(Pb,2,Number(Ia[0])));var nb=new bh;G(nb,1,Q.message);G(nb,3,Q.name);
G(nb,6,Q.sampleWeight);"ERROR"===tc?G(nb,2,2):"WARNING"===tc?G(nb,2,1):G(nb,2,0);var vf=new $g;G(vf,1,!0);$c(vf,3,ah,Pb);var ob=new Wg;G(ob,3,window.location.href);for(var Rj=N("FEXP_EXPERIMENTS",[]),wf=0;wf<Rj.length;wf++){var Sj=ob,Zn=Rj[wf];Jc(Sj);Vc(Sj,5).push(Zn)}var xf=vh();if(!wh()&&xf)for(var Tj=t(Object.keys(xf)),pb=Tj.next();!pb.done;pb=Tj.next()){var Uj=pb.value,yf=new Yg;G(yf,1,Uj);yf.setValue(String(xf[Uj]));ad(ob,4,Yg,yf)}var zf=Q.params;if(zf){var Vj=t(Object.keys(zf));for(pb=Vj.next();!pb.done;pb=
Vj.next()){var Wj=pb.value,Af=new Yg;G(Af,1,"client."+Wj);Af.setValue(String(zf[Wj]));ad(ob,4,Yg,Af)}}var Xj=N("SERVER_NAME"),Yj=N("SERVER_VERSION");if(Xj&&Yj){var Bf=new Yg;G(Bf,1,"server.name");Bf.setValue(Xj);ad(ob,4,Yg,Bf);var Cf=new Yg;G(Cf,1,"server.version");Cf.setValue(Yj);ad(ob,4,Yg,Cf)}var wd=new ch;H(wd,1,ob);H(wd,2,vf);H(wd,3,nb);uf=wd}var Zj=uf;if(!Zj)break a;var ak=new jh;$c(ak,163,kh,Zj);qn(ak)}else{if(xn())tf=void 0;else{var uc={stackTrace:Q.stack};Q.fileName&&(uc.filename=Q.fileName);
var Ja=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(uc.lineNumber=Number(Ja[0]),uc.columnNumber=Number(Ja[1])):uc.lineNumber=Number(Ja[0]));var Df={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===tc?Df.level="ERROR_LEVEL_ERROR":"WARNING"===tc&&(Df.level="ERROR_LEVEL_WARNNING");var $n={isObfuscated:!0,browserStackInfo:uc},
Qb={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(Qb.experimentIds=N("FEXP_EXPERIMENTS"));var Ef=vh();if(!wh()&&Ef)for(var bk=t(Object.keys(Ef)),qb=bk.next();!qb.done;qb=bk.next()){var ck=qb.value;Qb.kvPairs.push({key:ck,value:String(Ef[ck])})}var Ff=Q.params;if(Ff){var dk=t(Object.keys(Ff));for(qb=dk.next();!qb.done;qb=dk.next()){var ek=qb.value;Qb.kvPairs.push({key:"client."+ek,value:String(Ff[ek])})}}var fk=N("SERVER_NAME"),gk=N("SERVER_VERSION");fk&&gk&&(Qb.kvPairs.push({key:"server.name",
value:fk}),Qb.kvPairs.push({key:"server.version",value:gk}));tf={errorMetadata:Qb,stackTrace:$n,logMessage:Df}}var hk=tf;if(!hk)break a;bn("clientError",hk)}if("ERROR"===tc||P("errors_flush_gel_always_killswitch"))P("web_fp_via_jspb")&&$m(!0),$m()}if(!P("suppress_error_204_logging")){var rb=qa,vc=rb.params||{},Va={urlParams:{a:"logerror",t:"jserror",type:rb.name,msg:rb.message.substr(0,250),line:rb.lineNumber,level:h,"client.name":vc.name},postParams:{url:N("PAGE_NAME",window.location.href),file:rb.fileName},
method:"POST"};vc.version&&(Va["client.version"]=vc.version);if(Va.postParams){rb.stack&&(Va.postParams.stack=rb.stack);for(var ik=t(Object.keys(vc)),Gf=ik.next();!Gf.done;Gf=ik.next()){var jk=Gf.value;Va.postParams["client."+jk]=vc[jk]}var Hf=vh();if(Hf)for(var kk=t(Object.keys(Hf)),If=kk.next();!If.done;If=kk.next()){var lk=If.value;Va.postParams[lk]=Hf[lk]}var mk=N("SERVER_NAME"),nk=N("SERVER_VERSION");mk&&nk&&(Va.postParams["server.name"]=mk,Va.postParams["server.version"]=nk)}gi(N("ECATCHER_REPORT_HOST",
"")+"/error_204",Va)}try{rn.add(qa.message)}catch(fo){}sn++}}}}}else throw Nb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Tn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Un(a){return 0===a.search("get")||0===a.search("is")}
;function Vn(a,b){Mn.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.N={};this.playerInfo={}}
u(Vn,Mn);n=Vn.prototype;n.Ma=function(){var a=In(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=In(this.j,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ja=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.N[c]=a[c]);break;case "infoDelivery":Wn(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.l),this.playerInfo={},this.N={},Xn(this,a.apiInterface),Wn(this,a));break;default:Nn(this,b,a)}};
function Wn(a,b){if(Pa(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Xn(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Tn(c)?this[c]=function(){this.playerInfo={};
this.N={};Qn(this,c,arguments);return this}:Un(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Qn(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=In(this.j,"host")+("/embed/"+In(this.j,"videoId")),b=Number(In(this.j,"width")),c=Number(In(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.N.namespaces?a?this.N[a]?this.N[a].options||[]:[]:this.N.namespaces||[]:[]};
n.getOption=function(a,b){if(this.N.namespaces&&a&&b&&this.N[a])return this.N[a][b]};
function ao(a){if("iframe"!==a.tagName.toLowerCase()){var b=Fn(a,"videoid");b&&(b={videoId:b,width:Fn(a,"width"),height:Fn(a,"height")},new Vn(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return Bn[a]});
C("YT.scan",En);C("YT.subscribe",function(a,b,c){sg.subscribe(a,b,c);Dn[a]=!0;for(var d in Bn)Bn.hasOwnProperty(d)&&Pn(Bn[d],a)});
C("YT.unsubscribe",function(a,b,c){rg(a,b,c)});
C("YT.Player",Vn);Mn.prototype.destroy=Mn.prototype.destroy;Mn.prototype.setSize=Mn.prototype.setSize;Mn.prototype.getIframe=Mn.prototype.getIframe;Mn.prototype.addEventListener=Mn.prototype.addEventListener;Vn.prototype.getVideoEmbedCode=Vn.prototype.getVideoEmbedCode;Vn.prototype.getOptions=Vn.prototype.getOptions;Vn.prototype.getOption=Vn.prototype.getOption;
Cn.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);D(fb(a,b),ao)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||En();var bo=A.onYTReady;bo&&bo();var co=A.onYouTubeIframeAPIReady;co&&co();var eo=A.onYouTubePlayerAPIReady;eo&&eo();}).call(this);