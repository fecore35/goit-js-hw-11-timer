parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
class t{constructor({selector:t,targetDate:e}){this.targetDate=e,this.rootSelector=document.querySelector(t),this.refs={days:this.rootSelector.querySelector('[data-value="days"]'),hours:this.rootSelector.querySelector('[data-value="hours"]'),minutes:this.rootSelector.querySelector('[data-value="mins"]'),seconds:this.rootSelector.querySelector('[data-value="secs"]')}}init(){setInterval(()=>{const t=this.targetDate-Date.now(),e=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);this.refs.days.textContent=e<10?`0${e}`:e,this.refs.hours.textContent=o<10?`0${o}`:o,this.refs.minutes.textContent=r<10?`0${r}`:r,this.refs.seconds.textContent=s<10?`0${s}`:s},1e3)}}const e=new t({selector:"#timer-1",targetDate:new Date("Sep 23, 2021")});document.addEventListener("loadstart",e.init());
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.2647d516.js.map