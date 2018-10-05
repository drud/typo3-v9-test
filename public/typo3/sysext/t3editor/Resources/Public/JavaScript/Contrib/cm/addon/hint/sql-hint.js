!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],t):t(CodeMirror)}(function(t){"use strict";var e,r,n,o,i={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},s=t.Pos,a=t.cmpPos;function u(t){return"[object Array]"==Object.prototype.toString.call(t)}function l(t){return"string"==typeof t?t:t.text}function f(t,e){return u(e)&&(e={columns:e}),e.text||(e.text=t),e}function c(t){return e[t.toUpperCase()]}function p(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function g(t,e){var r=t.length,n=l(e).substr(0,r);return t.toUpperCase()===n.toUpperCase()}function d(t,e,r,n){if(u(r))for(var o=0;o<r.length;o++)g(e,r[o])&&t.push(n(r[o]));else for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];g(e,s=s&&!0!==s?s.displayText?{text:s.text,displayText:s.displayText}:s.text:i)&&t.push(n(s))}}function h(t){"."==t.charAt(0)&&(t=t.substr(1));for(var e=t.split(o+o),r=0;r<e.length;r++)e[r]=e[r].replace(new RegExp(o,"g"),"");return e.join(o)}function v(t){for(var e=l(t).split("."),r=0;r<e.length;r++)e[r]=o+e[r].replace(new RegExp(o,"g"),o+o)+o;var n=e.join(".");return"string"==typeof t?n:((t=p(t)).text=n,t)}function x(t,e){for(var r=t.split(/\s+/),n=0;n<r.length;n++)r[n]&&e(r[n].replace(/[,;]/g,""))}function m(t,e){for(var r=e.doc,n=r.getValue(),o=t.toUpperCase(),u="",l="",f=[],p={start:s(0,0),end:s(e.lastLine(),e.getLineHandle(e.lastLine()).length)},g=n.indexOf(i.QUERY_DIV);-1!=g;)f.push(r.posFromIndex(g)),g=n.indexOf(i.QUERY_DIV,g+1);f.unshift(s(0,0)),f.push(s(e.lastLine(),e.getLineHandle(e.lastLine()).text.length));for(var d=null,h=e.getCursor(),v=0;v<f.length;v++){if((null==d||a(h,d)>0)&&a(h,f[v])<=0){p={start:d,end:f[v]};break}d=f[v]}if(p.start){var m=r.getRange(p.start,p.end,!1);for(v=0;v<m.length;v++){if(x(m[v],function(t){var e=t.toUpperCase();e===o&&c(u)&&(l=u),e!==i.ALIAS_KEYWORD&&(u=t)}),l)break}}return l}t.registerHelper("hint","sql",function(i,a){e=function(t){var e={};if(u(t))for(var r=t.length-1;r>=0;r--){var n=t[r];e[l(n).toUpperCase()]=f(l(n),n)}else if(t)for(var o in t)e[o.toUpperCase()]=f(o,t[o]);return e}(a&&a.tables);var g,x,y=a&&a.defaultTable,A=a&&a.disableKeywords;r=y&&c(y),"sql"===(g=i.doc.modeOption)&&(g="text/x-sql"),n=t.resolveMode(g).keywords,"sql"===(x=i.doc.modeOption)&&(x="text/x-sql"),o=t.resolveMode(x).identifierQuote||"`",y&&!r&&(r=m(y,i)),(r=r||[]).columns&&(r=r.columns);var b,q,C,U=i.getCursor(),O=[],j=i.getTokenAt(U);return j.end>U.ch&&(j.end=U.ch,j.string=j.string.slice(0,U.ch-j.start)),j.string.match(/^[.`"\w@]\w*$/)?(C=j.string,b=j.start,q=j.end):(b=q=U.ch,C=""),"."==C.charAt(0)||C.charAt(0)==o?b=function(t,n,i,a){for(var u=!1,l=[],f=n.start,g=!0;g;)g="."==n.string.charAt(0),u=u||n.string.charAt(0)==o,f=n.start,l.unshift(h(n.string)),"."==(n=a.getTokenAt(s(t.line,n.start))).string&&(g=!0,n=a.getTokenAt(s(t.line,n.start)));var x=l.join(".");d(i,x,e,function(t){return u?v(t):t}),d(i,x,r,function(t){return u?v(t):t}),x=l.pop();var y=l.join("."),A=!1,b=y;if(!c(y)){var q=y;(y=m(y,a))!==q&&(A=!0)}var C=c(y);return C&&C.columns&&(C=C.columns),C&&d(i,x,C,function(t){var e=y;return 1==A&&(e=b),"string"==typeof t?t=e+"."+t:(t=p(t)).text=e+"."+t.text,u?v(t):t}),f}(U,j,O,i):(d(O,C,r,function(t){return t}),d(O,C,e,function(t){return t}),A||d(O,C,n,function(t){return t.toUpperCase()})),{list:O,from:s(U.line,b),to:s(U.line,q)}})});