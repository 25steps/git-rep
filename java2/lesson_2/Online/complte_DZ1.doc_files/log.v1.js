!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="/docviewer/",n(0)}([function(e,n,t){"use strict";!function(){var e=t(1);delete window.Raven,e.config("//"+location.host+"/stats/sentry/dv").install(),window.addEventListener("unhandledrejection",function(n){e.captureException(n.reason)})}()},function(e,n,t){var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,u){"use strict";function c(){return"undefined"==typeof document?"":document.location.href}function a(e,n){var t,r;if(Z){n=n||{},e="raven"+e.substr(0,1).toUpperCase()+e.substr(1),document.createEvent?(t=document.createEvent("HTMLEvents"),t.initEvent(e,!0,!0)):(t=document.createEventObject(),t.eventType=e);for(r in n)v(n,r)&&(t[r]=n[r]);if(document.createEvent)document.dispatchEvent(t);else try{document.fireEvent("on"+t.eventType.toLowerCase(),t)}catch(e){}}}function l(e){this.name="RavenConfigError",this.message=e}function s(e){var n=ue.exec(e),t={},r=7;try{for(;r--;)t[ie[r]]=n[r]||""}catch(n){throw new l("Invalid DSN: "+e)}if(t.pass)throw new l("Do not specify your private key in the DSN!");return t}function f(e){return void 0===e}function p(e){return"function"==typeof e}function g(e){return"[object String]"===Q.toString.call(e)}function d(e){return"object"===("undefined"==typeof e?"undefined":i(e))&&null!==e}function m(e){for(var n in e)return!1;return!0}function h(e){return d(e)&&"[object Error]"===Q.toString.call(e)||e instanceof Error}function v(e,n){return Q.hasOwnProperty.call(e,n)}function x(e,n){var t,r;if(f(e.length))for(t in e)v(e,t)&&n.call(null,t,e[t]);else if(r=e.length)for(t=0;t<r;t++)n.call(null,t,e[t])}function y(e,n){var t=[];e.stack&&e.stack.length&&x(e.stack,function(e,n){var r=b(n);r&&t.push(r)}),a("handle",{stackInfo:e,options:n}),E(e.name,e.message,e.url,e.lineno,t,n)}function b(e){if(e.url){var n,t={filename:e.url,lineno:e.line,colno:e.column,function:e.func||"?"},r=w(e);if(r){var o=["pre_context","context_line","post_context"];for(n=3;n--;)t[o[n]]=r[n]}return t.in_app=!(G.includePaths.test&&!G.includePaths.test(t.filename)||/(Raven|TraceKit)\./.test(t.function)||/raven\.(min\.)?js$/.test(t.filename)),t}}function w(e){if(e.context&&G.fetchContext){for(var n=e.context,t=~~(n.length/2),r=n.length,o=!1;r--;)if(n[r].length>300){o=!0;break}if(o){if(f(e.column))return;return[[],n[t].substr(e.column,50),[]]}return[n.slice(0,t),n[t],n.slice(t+1)]}}function E(e,n,t,r,o,i){var u,c;G.ignoreErrors.test&&G.ignoreErrors.test(n)||(n+="",c=e+": "+n,o&&o.length?(t=o[0].filename||t,o.reverse(),u={frames:o}):t&&(u={frames:[{filename:t,lineno:r,in_app:!0}]}),G.ignoreUrls.test&&G.ignoreUrls.test(t)||G.whitelistUrls.test&&!G.whitelistUrls.test(t)||O(S({exception:{values:[{type:e,value:n,stacktrace:u}]},culprit:t,message:c},i)))}function S(e,n){return n?(x(n,function(n,t){e[n]=t}),e):e}function k(e,n){return e.length<=n?e:e.substr(0,n)+"…"}function C(e){var n=G.maxMessageLength;if(e.message=k(e.message,n),e.exception){var t=e.exception.values[0];t.value=k(t.value,n)}return e}function R(){return+new Date}function _(){if(Z&&document.location&&document.location.href){var e={headers:{"User-Agent":navigator.userAgent}};return e.url=document.location.href,document.referrer&&(e.headers.Referer=document.referrer),e}}function O(e){var n={project:z,logger:G.logger,platform:"javascript"},t=_();t&&(n.request=t),e=S(n,e),e.tags=S(S({},B.tags),e.tags),e.extra=S(S({},B.extra),e.extra),e.extra["session:duration"]=R()-te,m(e.tags)&&delete e.tags,B.user&&(e.user=B.user),G.release&&(e.release=G.release),G.serverName&&(e.server_name=G.serverName),p(G.dataCallback)&&(e=G.dataCallback(e)||e),e&&!m(e)&&(p(G.shouldSendCallback)&&!G.shouldSendCallback(e)||(D=e.event_id||(e.event_id=N()),e=C(e),F("debug","Raven about to send:",e),U()&&(G.transport||T)({url:V,auth:{sentry_version:"7",sentry_client:"raven-js/"+oe.VERSION,sentry_key:q},data:e,options:G,onSuccess:function(){a("success",{data:e,src:V})},onError:function(){a("failure",{data:e,src:V})}})))}function T(e){e.auth.sentry_data=JSON.stringify(e.data);var n=$(),t=e.url+"?"+I(e.auth),r=e.options.crossOrigin;(r||""===r)&&(n.crossOrigin=r),n.onload=e.onSuccess,n.onerror=n.onabort=e.onError,n.src=t}function $(){return document.createElement("img")}function U(){return!!X&&(!!V||(ce||F("error","Error: Raven has not been configured."),ce=!0,!1))}function j(e){for(var n,t=[],r=0,o=e.length;r<o;r++)n=e[r],g(n)?t.push(n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):n&&n.source&&t.push(n.source);return new RegExp(t.join("|"),"i")}function N(){var e=t.crypto||t.msCrypto;if(!f(e)&&e.getRandomValues){var n=new Uint16Array(8);e.getRandomValues(n),n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768;var r=function(e){for(var n=e.toString(16);n.length<4;)n="0"+n;return n};return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0,t="x"==e?n:3&n|8;return t.toString(16)})}function F(e){ee[e]&&oe.debug&&ee[e].apply(Y,P.call(arguments,1))}function M(){var e=t.RavenConfig;e&&oe.config(e.dsn,e.config).install()}function I(e){var n=[];return x(e,function(e,t){n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))}),n.join("&")}function L(e,n){f(n)?delete B[e]:B[e]=S(B[e]||{},n)}var A={remoteFetching:!1,collectWindowErrors:!0,linesOfContext:7,debug:!1},P=[].slice,J="?";A.report=function(){function e(e){a(),d.push(e)}function n(e){for(var n=d.length-1;n>=0;--n)d[n]===e&&d.splice(n,1)}function r(){l(),d=[]}function o(e,n){var t=null;if(!n||A.collectWindowErrors){for(var r in d)if(v(d,r))try{d[r].apply(null,[e].concat(P.call(arguments,2)))}catch(e){t=e}if(t)throw t}}function i(e,n,t,r,i){var u=null;if(x)A.computeStackTrace.augmentStackTraceWithInitialElement(x,n,t,e),s();else if(i)u=A.computeStackTrace(i),o(u,!0);else{var a={url:n,line:t,column:r};a.func=A.computeStackTrace.guessFunctionName(a.url,a.line),a.context=A.computeStackTrace.gatherContext(a.url,a.line),u={message:e,url:c(),stack:[a]},o(u,!0)}return!!p&&p.apply(this,arguments)}function a(){g||(p=t.onerror,t.onerror=i,g=!0)}function l(){g&&(t.onerror=p,g=!1,p=u)}function s(){var e=x,n=m;m=null,x=null,h=null,o.apply(null,[e,!1].concat(n))}function f(e,n){var r=P.call(arguments,1);if(x){if(h===e)return;s()}var o=A.computeStackTrace(e);if(x=o,h=e,m=r,t.setTimeout(function(){h===e&&s()},o.incomplete?2e3:0),n!==!1)throw e}var p,g,d=[],m=null,h=null,x=null;return f.subscribe=e,f.unsubscribe=n,f.uninstall=r,f}(),A.computeStackTrace=function(){function e(e){if(!A.remoteFetching)return"";try{var n=function(){try{return new t.XMLHttpRequest}catch(e){return new t.ActiveXObject("Microsoft.XMLHTTP")}},r=n();return r.open("GET",e,!1),r.send(""),r.responseText}catch(e){return""}}function n(n){if(!g(n))return[];if(!v(b,n)){var t="",r="";try{r=document.domain}catch(e){}n.indexOf(r)!==-1&&(t=e(n)),b[n]=t?t.split("\n"):[]}return b[n]}function r(e,t){var r,o=/function ([^(]*)\(([^)]*)\)/,i=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,u="",c=10,a=n(e);if(!a.length)return J;for(var l=0;l<c;++l)if(u=a[t-l]+u,!f(u)){if(r=i.exec(u))return r[1];if(r=o.exec(u))return r[1]}return J}function o(e,t){var r=n(e);if(!r.length)return null;var o=[],i=Math.floor(A.linesOfContext/2),u=i+A.linesOfContext%2,c=Math.max(0,t-i-1),a=Math.min(r.length,t+u-1);t-=1;for(var l=c;l<a;++l)f(r[l])||o.push(r[l]);return o.length>0?o:null}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function u(e){return i(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function a(e,t){for(var r,o,i=0,u=t.length;i<u;++i)if((r=n(t[i])).length&&(r=r.join("\n"),o=e.exec(r)))return{url:t[i],line:r.substring(0,o.index).split("\n").length,column:o.index-r.lastIndexOf("\n",o.index)-1};return null}function l(e,t,r){var o,u=n(t),c=new RegExp("\\b"+i(e)+"\\b");return r-=1,u&&u.length>r&&(o=c.exec(u[r]))?o.index:null}function s(e){if("undefined"!=typeof document){for(var n,r,o,c,l=[t.location.href],s=document.getElementsByTagName("script"),f=""+e,p=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,g=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,d=0;d<s.length;++d){var m=s[d];m.src&&l.push(m.src)}if(o=p.exec(f)){var h=o[1]?"\\s+"+o[1]:"",v=o[2].split(",").join("\\s*,\\s*");n=i(o[3]).replace(/;$/,";?"),r=new RegExp("function"+h+"\\s*\\(\\s*"+v+"\\s*\\)\\s*{\\s*"+n+"\\s*}")}else r=new RegExp(i(f).replace(/\s+/g,"\\s+"));if(c=a(r,l))return c;if(o=g.exec(f)){var x=o[1];if(n=u(o[2]),r=new RegExp("on"+x+"=[\\'\"]\\s*"+n+"\\s*[\\'\"]","i"),c=a(r,l[0]))return c;if(r=new RegExp(n),c=a(r,l))return c}return null}}function p(e){if(!f(e.stack)&&e.stack){for(var n,t,i=/^\s*at (.*?) ?\(?((?:(?:file|https?|chrome-extension):.*?)|<anonymous>):(\d+)(?::(\d+))?\)?\s*$/i,u=/^\s*(.*?)(?:\((.*?)\))?@((?:file|https?|chrome).*?):(\d+)(?::(\d+))?\s*$/i,a=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,s=e.stack.split("\n"),p=[],g=/^(.*) is undefined$/.exec(e.message),d=0,m=s.length;d<m;++d){if(n=u.exec(s[d]))t={url:n[3],func:n[1]||J,args:n[2]?n[2].split(","):"",line:+n[4],column:n[5]?+n[5]:null};else if(n=i.exec(s[d]))t={url:n[2],func:n[1]||J,line:+n[3],column:n[4]?+n[4]:null};else{if(!(n=a.exec(s[d])))continue;t={url:n[2],func:n[1]||J,line:+n[3],column:n[4]?+n[4]:null}}!t.func&&t.line&&(t.func=r(t.url,t.line)),t.line&&(t.context=o(t.url,t.line)),p.push(t)}return p.length?(p[0].line&&!p[0].column&&g?p[0].column=l(g[1],p[0].url,p[0].line):p[0].column||f(e.columnNumber)||(p[0].column=e.columnNumber+1),{name:e.name,message:e.message,url:c(),stack:p}):null}}function d(e){var n=e.stacktrace;if(!f(e.stacktrace)&&e.stacktrace){for(var t,i=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,u=n.split("\n"),a=[],l=0,s=u.length;l<s;l+=2)if(t=i.exec(u[l])){var p={line:+t[1],column:+t[2],func:t[3]||t[4],args:t[5]?t[5].split(","):[],url:t[6]};if(!p.func&&p.line&&(p.func=r(p.url,p.line)),p.line)try{p.context=o(p.url,p.line)}catch(e){}p.context||(p.context=[u[l+1]]),a.push(p)}return a.length?{name:e.name,message:e.message,url:c(),stack:a}:null}}function m(e){var i=e.message.split("\n");if(i.length<4)return null;var l,s,f,p,g=/^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,d=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,m=/^\s*Line (\d+) of function script\s*$/i,h=[],x=document.getElementsByTagName("script"),y=[];for(s in x)v(x,s)&&!x[s].src&&y.push(x[s]);for(s=2,f=i.length;s<f;s+=2){var b=null;if(l=g.exec(i[s]))b={url:l[2],func:l[3],line:+l[1]};else if(l=d.exec(i[s])){b={url:l[3],func:l[4]};var w=+l[1],E=y[l[2]-1];if(E&&(p=n(b.url))){p=p.join("\n");var S=p.indexOf(E.innerText);S>=0&&(b.line=w+p.substring(0,S).split("\n").length)}}else if(l=m.exec(i[s])){var k=t.location.href.replace(/#.*$/,""),C=l[1],R=new RegExp(u(i[s+1]));p=a(R,[k]),b={url:k,line:p?p.line:C,func:""}}if(b){b.func||(b.func=r(b.url,b.line));var _=o(b.url,b.line),O=_?_[Math.floor(_.length/2)]:null;_&&O.replace(/^\s*/,"")===i[s+1].replace(/^\s*/,"")?b.context=_:b.context=[i[s+1]],h.push(b)}}return h.length?{name:e.name,message:i[0],url:c(),stack:h}:null}function h(e,n,t,i){var u={url:n,line:t};if(u.url&&u.line){e.incomplete=!1,u.func||(u.func=r(u.url,u.line)),u.context||(u.context=o(u.url,u.line));var c=/ '([^']+)' /.exec(i);if(c&&(u.column=l(c[1],u.url,u.line)),e.stack.length>0&&e.stack[0].url===u.url){if(e.stack[0].line===u.line)return!1;if(!e.stack[0].line&&e.stack[0].func===u.func)return e.stack[0].line=u.line,e.stack[0].context=u.context,!1}return e.stack.unshift(u),e.partial=!0,!0}return e.incomplete=!0,!1}function x(e,n){for(var t,o,i,u=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,a=[],f={},p=!1,g=x.caller;g&&!p;g=g.caller)if(g!==y&&g!==A.report){if(o={url:null,func:J,line:null,column:null},g.name?o.func=g.name:(t=u.exec(g.toString()))&&(o.func=t[1]),"undefined"==typeof o.func)try{o.func=t.input.substring(0,t.input.indexOf("{"))}catch(e){}if(i=s(g)){o.url=i.url,o.line=i.line,o.func===J&&(o.func=r(o.url,o.line));var d=/ '([^']+)' /.exec(e.message||e.description);d&&(o.column=l(d[1],i.url,i.line))}f[""+g]?p=!0:f[""+g]=!0,a.push(o)}n&&a.splice(0,n);var m={name:e.name,message:e.message,url:c(),stack:a};return h(m,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),m}function y(e,n){var t=null;n=null==n?0:+n;try{if(t=d(e))return t}catch(e){if(A.debug)throw e}try{if(t=p(e))return t}catch(e){if(A.debug)throw e}try{if(t=m(e))return t}catch(e){if(A.debug)throw e}try{if(t=x(e,n+1))return t}catch(e){if(A.debug)throw e}return{name:e.name,message:e.message,url:c()}}var b={};return y.augmentStackTraceWithInitialElement=h,y.computeStackTraceFromStackProp=p,y.guessFunctionName=r,y.gatherContext=o,y}();var W,D,V,q,z,H=t.Raven,X=!("object"!==("undefined"==typeof JSON?"undefined":i(JSON))||!JSON.stringify),Z="undefined"!=typeof document,B={},G={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],crossOrigin:"anonymous",collectWindowErrors:!0,maxMessageLength:100},K=!1,Q=Object.prototype,Y=t.console||{},ee={},ne=[],te=R();for(var re in Y)ee[re]=Y[re];var oe={VERSION:"1.3.0",debug:!1,noConflict:function(){return t.Raven=H,oe},config:function(e,n){if(V)return F("error","Error: Raven has already been configured"),oe;if(!e)return oe;var t=s(e),r=t.path.lastIndexOf("/"),o=t.path.substr(1,r);return n&&x(n,function(e,n){"tags"==e||"extra"==e?B[e]=n:G[e]=n}),G.ignoreErrors.push(/^Script error\.?$/),G.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),G.ignoreErrors=j(G.ignoreErrors),G.ignoreUrls=!!G.ignoreUrls.length&&j(G.ignoreUrls),G.whitelistUrls=!!G.whitelistUrls.length&&j(G.whitelistUrls),G.includePaths=j(G.includePaths),q=t.user,z=t.path.substr(r+1),V="//"+t.host+(t.port?":"+t.port:"")+"/"+o+"api/"+z+"/store/",t.protocol&&(V=t.protocol+":"+V),G.fetchContext&&(A.remoteFetching=!0),G.linesOfContext&&(A.linesOfContext=G.linesOfContext),A.collectWindowErrors=!!G.collectWindowErrors,oe},install:function(){return U()&&!K&&(A.report.subscribe(y),x(ne,function(e,n){n()}),K=!0),oe},context:function(e,n,t){return p(e)&&(t=n||[],n=e,e=u),oe.wrap(e,n).apply(this,t)},wrap:function(e,n){function t(){for(var t=[],r=arguments.length,o=!e||e&&e.deep!==!1;r--;)t[r]=o?oe.wrap(e,arguments[r]):arguments[r];try{return n.apply(this,t)}catch(n){throw oe.captureException(n,e),n}}if(f(n)&&!p(e))return e;if(p(e)&&(n=e,e=u),!p(n))return n;if(n.__raven__)return n;for(var r in n)v(n,r)&&(t[r]=n[r]);return t.prototype=n.prototype,t.__raven__=!0,t.__inner__=n,t},uninstall:function(){return A.report.uninstall(),K=!1,oe},captureException:function(e,n){if(!h(e))return oe.captureMessage(e,n);W=e;try{var t=A.computeStackTrace(e);y(t,n)}catch(n){if(e!==n)throw n}return oe},captureMessage:function(e,n){if(!G.ignoreErrors.test||!G.ignoreErrors.test(e))return O(S({message:e+""},n)),oe},addPlugin:function(e){return ne.push(e),K&&e(),oe},setUserContext:function(e){return B.user=e,oe},setExtraContext:function(e){return L("extra",e),oe},setTagsContext:function(e){return L("tags",e),oe},clearContext:function(){return B={},oe},getContext:function(){return JSON.parse(JSON.stringify(B))},setRelease:function(e){return G.release=e,oe},setDataCallback:function(e){return G.dataCallback=e,oe},setShouldSendCallback:function(e){return G.shouldSendCallback=e,oe},setTransport:function(e){return G.transport=e,oe},lastException:function(){return W},lastEventId:function(){return D},isSetup:function(){return U()}};oe.setUser=oe.setUserContext,oe.setReleaseContext=oe.setRelease;var ie="source protocol user pass host port path".split(" "),ue=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;l.prototype=new Error,l.prototype.constructor=l;var ce;M(),t.Raven=oe,r=[],o=function(){return oe}.apply(n,r),!(o!==u&&(e.exports=o))}("undefined"!=typeof window?window:void 0)}]);