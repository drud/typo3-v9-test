!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("lint","coffeescript",function(o){var r=[];if(!window.coffeelint)return window.console&&window.console.error("Error: window.coffeelint not defined, CodeMirror CoffeeScript linting cannot run."),r;var i,n;try{for(var t=coffeelint.lint(o),f=0;f<t.length;f++)i=t[f],void 0,n=i.lineNumber,r.push({from:e.Pos(n-1,0),to:e.Pos(n,0),severity:i.level,message:i.message})}catch(o){r.push({from:e.Pos(o.location.first_line,0),to:e.Pos(o.location.last_line,o.location.last_column),severity:"error",message:o.message})}return r})});