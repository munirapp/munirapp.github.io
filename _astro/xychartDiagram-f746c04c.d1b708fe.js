import{x as zt,a2 as ot,a3 as wt,y as Ft,s as Nt,g as Xt,o as Yt,p as St,a as Ht,b as $t,q as Ut,l as Ct,v as qt,i as jt,d as Gt}from"./mermaid.core.aff49e01.js";import{a as Qt}from"./createText-aebacdfe.96e5c940.js";import{i as Kt}from"./init.77b53fdd.js";import{o as Zt}from"./ordinal.b935e931.js";import{l as ft}from"./linear.ffd1b386.js";import{l as pt}from"./line.22d8f80a.js";import"./hoisted.7f532ee2.js";import"./hoisted.f47fbe38.js";import"./array.9f3ba611.js";import"./path.53f90ab3.js";function Jt(t,i,e){t=+t,i=+i,e=(n=arguments.length)<2?(i=t,t=0,1):n<3?1:+e;for(var s=-1,n=0|Math.max(0,Math.ceil((i-t)/e)),a=new Array(n);++s<n;)a[s]=t+s*e;return a}function st(){var t,i,e=Zt().unknown(void 0),s=e.domain,n=e.range,a=0,h=1,o=!1,r=0,l=0,c=.5;function g(){var e=s().length,g=h<a,u=g?h:a,x=g?a:h;t=(x-u)/Math.max(1,e-r+2*l),o&&(t=Math.floor(t)),u+=(x-u-t*(e-r))*c,i=t*(1-r),o&&(u=Math.round(u),i=Math.round(i));var d=Jt(e).map((function(i){return u+t*i}));return n(g?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(s(t),g()):s()},e.range=function(t){return arguments.length?([a,h]=t,a=+a,h=+h,g()):[a,h]},e.rangeRound=function(t){return[a,h]=t,a=+a,h=+h,o=!0,g()},e.bandwidth=function(){return i},e.step=function(){return t},e.round=function(t){return arguments.length?(o=!!t,g()):o},e.padding=function(t){return arguments.length?(r=Math.min(1,l=+t),g()):r},e.paddingInner=function(t){return arguments.length?(r=Math.min(1,t),g()):r},e.paddingOuter=function(t){return arguments.length?(l=+t,g()):l},e.align=function(t){return arguments.length?(c=Math.max(0,Math.min(1,t)),g()):c},e.copy=function(){return st(s(),[a,h]).round(o).paddingInner(r).paddingOuter(l).align(c)},Kt.apply(g(),arguments)}var nt=function(){var t=function(t,i,e,s){for(e=e||{},s=t.length;s--;e[t[s]]=i);return e},i=[1,10,12,14,16,18,19,21,23],e=[2,6],s=[1,3],n=[1,5],a=[1,6],h=[1,7],o=[1,5,10,12,14,16,18,19,21,23,34,35,36],r=[1,25],l=[1,26],c=[1,28],g=[1,29],u=[1,30],x=[1,31],d=[1,32],p=[1,33],f=[1,34],y=[1,35],m=[1,36],b=[1,37],A=[1,43],w=[1,42],S=[1,47],C=[1,50],k=[1,10,12,14,16,18,19,21,23,34,35,36],_=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],T=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],R=[1,64],D={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:function(t,i,e,s,n,a,h){var o=a.length-1;switch(n){case 5:s.setOrientation(a[o]);break;case 9:s.setDiagramTitle(a[o].text.trim());break;case 12:s.setLineData({text:"",type:"text"},a[o]);break;case 13:s.setLineData(a[o-1],a[o]);break;case 14:s.setBarData({text:"",type:"text"},a[o]);break;case 15:s.setBarData(a[o-1],a[o]);break;case 16:this.$=a[o].trim(),s.setAccTitle(this.$);break;case 17:case 18:this.$=a[o].trim(),s.setAccDescription(this.$);break;case 19:case 27:this.$=a[o-1];break;case 20:this.$=[Number(a[o-2]),...a[o]];break;case 21:this.$=[Number(a[o])];break;case 22:s.setXAxisTitle(a[o]);break;case 23:s.setXAxisTitle(a[o-1]);break;case 24:s.setXAxisTitle({type:"text",text:""});break;case 25:s.setXAxisBand(a[o]);break;case 26:s.setXAxisRangeData(Number(a[o-2]),Number(a[o]));break;case 28:this.$=[a[o-2],...a[o]];break;case 29:this.$=[a[o]];break;case 30:s.setYAxisTitle(a[o]);break;case 31:s.setYAxisTitle(a[o-1]);break;case 32:s.setYAxisTitle({type:"text",text:""});break;case 33:s.setYAxisRangeData(Number(a[o-2]),Number(a[o]));break;case 37:case 38:this.$={text:a[o],type:"text"};break;case 39:this.$={text:a[o],type:"markdown"};break;case 40:this.$=a[o];break;case 41:this.$=a[o-1]+""+a[o]}},table:[t(i,e,{3:1,4:2,7:4,5:s,34:n,35:a,36:h}),{1:[3]},t(i,e,{4:2,7:4,3:8,5:s,34:n,35:a,36:h}),t(i,e,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:a,36:h}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},t(o,[2,34]),t(o,[2,35]),t(o,[2,36]),{1:[2,1]},t(i,e,{4:2,7:4,3:21,5:s,34:n,35:a,36:h}),{1:[2,3]},t(o,[2,5]),t(i,[2,7],{4:22,34:n,35:a,36:h}),{11:23,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},{11:39,13:38,24:A,27:w,29:40,30:41,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},{11:45,15:44,27:S,33:46,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},{11:49,17:48,24:C,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},{11:52,17:51,24:C,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},{20:[1,53]},{22:[1,54]},t(k,[2,18]),{1:[2,2]},t(k,[2,8]),t(k,[2,9]),t(_,[2,37],{40:55,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b}),t(_,[2,38]),t(_,[2,39]),t(T,[2,40]),t(T,[2,42]),t(T,[2,43]),t(T,[2,44]),t(T,[2,45]),t(T,[2,46]),t(T,[2,47]),t(T,[2,48]),t(T,[2,49]),t(T,[2,50]),t(T,[2,51]),t(k,[2,10]),t(k,[2,22],{30:41,29:56,24:A,27:w}),t(k,[2,24]),t(k,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},t(k,[2,11]),t(k,[2,30],{33:60,27:S}),t(k,[2,32]),{31:[1,61]},t(k,[2,12]),{17:62,24:C},{25:63,27:R},t(k,[2,14]),{17:65,24:C},t(k,[2,16]),t(k,[2,17]),t(T,[2,41]),t(k,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},t(k,[2,31]),{27:[1,69]},t(k,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},t(k,[2,15]),t(k,[2,26]),t(k,[2,27]),{11:59,32:72,37:24,38:r,39:l,40:27,41:c,42:g,43:u,44:x,45:d,46:p,47:f,48:y,49:m,50:b},t(k,[2,33]),t(k,[2,19]),{25:73,27:R},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:function(t,i){if(!i.recoverable){var e=new Error(t);throw e.hash=i,e}this.trace(t)},parse:function(t){var i=this,e=[0],s=[],n=[null],a=[],h=this.table,o="",r=0,l=0,c=a.slice.call(arguments,1),g=Object.create(this.lexer),u={yy:{}};for(var x in this.yy)Object.prototype.hasOwnProperty.call(this.yy,x)&&(u.yy[x]=this.yy[x]);g.setInput(t,u.yy),u.yy.lexer=g,u.yy.parser=this,typeof g.yylloc>"u"&&(g.yylloc={});var d=g.yylloc;a.push(d);var p,f=g.options&&g.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,m,b,A,w,S,C,k,_={};;){if(m=e[e.length-1],this.defaultActions[m]?b=this.defaultActions[m]:((null===y||typeof y>"u")&&(p=void 0,"number"!=typeof(p=s.pop()||g.lex()||1)&&(p instanceof Array&&(p=(s=p).pop()),p=i.symbols_[p]||p),y=p),b=h[m]&&h[m][y]),typeof b>"u"||!b.length||!b[0]){var T="";for(w in k=[],h[m])this.terminals_[w]&&w>2&&k.push("'"+this.terminals_[w]+"'");T=g.showPosition?"Parse error on line "+(r+1)+":\n"+g.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(r+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(T,{text:g.match,token:this.terminals_[y]||y,line:g.yylineno,loc:d,expected:k})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+y);switch(b[0]){case 1:e.push(y),n.push(g.yytext),a.push(g.yylloc),e.push(b[1]),y=null,l=g.yyleng,o=g.yytext,r=g.yylineno,d=g.yylloc;break;case 2:if(S=this.productions_[b[1]][1],_.$=n[n.length-S],_._$={first_line:a[a.length-(S||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(S||1)].first_column,last_column:a[a.length-1].last_column},f&&(_._$.range=[a[a.length-(S||1)].range[0],a[a.length-1].range[1]]),typeof(A=this.performAction.apply(_,[o,l,r,u.yy,b[1],n,a].concat(c)))<"u")return A;S&&(e=e.slice(0,-1*S*2),n=n.slice(0,-1*S),a=a.slice(0,-1*S)),e.push(this.productions_[b[1]][0]),n.push(_.$),a.push(_._$),C=h[e[e.length-2]][e[e.length-1]],e.push(C);break;case 3:return!0}}return!0}},L={EOF:1,parseError:function(t,i){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,i)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===s.length?this.yylloc.first_column:0)+s[s.length-e.length].length-e[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"},test_match:function(t,i){var e,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var a in n)this[a]=n[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,i,e,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),a=0;a<n.length;a++)if((e=this._input.match(this.rules[n[a]]))&&(!i||e[0].length>i[0].length)){if(i=e,s=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,n[a])))return t;if(this._backtrack){i=!1;continue}return!1}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,n[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,i,e,s){switch(e){case 0:case 1:case 5:case 43:break;case 2:case 3:return this.popState(),34;case 4:return 34;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:case 25:case 27:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 26:this.pushState("string");break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 44:return 35;case 45:return 36}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};function P(){this.yy={}}return D.lexer=L,P.prototype=D,D.Parser=P,new P}();nt.parser=nt;const ti=nt;function mt(t){return"bar"===t.type}function _t(t){return"band"===t.type}function N(t){return"linear"===t.type}class kt{constructor(t){this.parentGroup=t}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce(((t,i)=>Math.max(i.length,t)),0)*i,height:i};const e={width:0,height:0},s=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const n of t){const t=Qt(s,1,n),a=t?t.width:n.length*i,h=t?t.height:i;e.width=Math.max(e.width,a),e.height=Math.max(e.height,h)}return s.remove(),e}}const yt=.7,bt=.2;class Rt{constructor(t,i,e,s){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}setRange(t){this.range=t,"left"===this.axisPosition||"right"===this.axisPosition?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((t=>t.toString())),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){yt*this.getTickDistance()>2*this.outerPadding&&(this.outerPadding=Math.floor(yt*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=bt*t.width;this.outerPadding=Math.min(e.width/2,s);const n=e.height+2*this.axisConfig.labelPadding;this.labelTextHeight=e.height,n<=i&&(i-=n,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const t=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),e=t.height+2*this.axisConfig.titlePadding;this.titleTextHeight=t.height,e<=i&&(i-=e,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=bt*t.height;this.outerPadding=Math.min(e.height/2,s);const n=e.width+2*this.axisConfig.labelPadding;n<=i&&(i-=n,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const t=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),e=t.height+2*this.axisConfig.titlePadding;this.titleTextHeight=t.height,e<=i&&(i-=e,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return"left"===this.axisPosition||"right"===this.axisPosition?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map((t=>({text:t.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(t),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"})))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map((t=>({path:`M ${i},${this.getScaleValue(t)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(t)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth})))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map((t=>({text:t.toString(),x:this.getScaleValue(t),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"})))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map((t=>({path:`M ${this.getScaleValue(t)},${i} L ${this.getScaleValue(t)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth})))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map((t=>({text:t.toString(),x:this.getScaleValue(t),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+2*this.axisConfig.titlePadding:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"})))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map((t=>({path:`M ${this.getScaleValue(t)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(t)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth})))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if("left"===this.axisPosition)return this.getDrawableElementsForLeftAxis();if("right"===this.axisPosition)throw Error("Drawing of right axis is not implemented");return"bottom"===this.axisPosition?this.getDrawableElementsForBottomAxis():"top"===this.axisPosition?this.getDrawableElementsForTopAxis():[]}}class ii extends Rt{constructor(t,i,e,s,n){super(t,s,n,i),this.categories=e,this.scale=st().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=st().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),Ct.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)||this.getRange()[0]}}class ei extends Rt{constructor(t,i,e,s,n){super(t,s,n,i),this.domain=e,this.scale=ft().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];"left"===this.axisPosition&&t.reverse(),this.scale=ft().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}}function At(t,i,e,s){const n=new kt(s);return _t(t)?new ii(i,e,t.categories,t.title,n):new ei(i,e,[t.min,t.max],t.title,n)}class si{constructor(t,i,e,s){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),s=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=s&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=s,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}}function ni(t,i,e,s){const n=new kt(s);return new si(n,t,i,e)}class ai{constructor(t,i,e,s,n){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=s,this.plotIndex=n}getDrawableElement(){const t=this.plotData.data.map((t=>[this.xAxis.getScaleValue(t[0]),this.yAxis.getScaleValue(t[1])]));let i;return i="horizontal"===this.orientation?pt().y((t=>t[0])).x((t=>t[1]))(t):pt().x((t=>t[0])).y((t=>t[1]))(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}}class oi{constructor(t,i,e,s,n,a){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=s,this.orientation=n,this.plotIndex=a}getDrawableElement(){const t=this.barData.data.map((t=>[this.xAxis.getScaleValue(t[0]),this.yAxis.getScaleValue(t[1])])),i=.95*Math.min(2*this.xAxis.getAxisOuterPadding(),this.xAxis.getTickDistance()),e=i/2;return"horizontal"===this.orientation?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map((t=>({x:this.boundingRect.x,y:t[0]-e,height:i,width:t[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill})))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map((t=>({x:t[0]-e,y:t[1],width:i,height:this.boundingRect.y+this.boundingRect.height-t[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill})))}]}}class ri{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!this.xAxis||!this.yAxis)throw Error("Axes must be passed to render Plots");const t=[];for(const[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{const s=new ai(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break;case"bar":{const s=new oi(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}}return t}}function hi(t,i,e){return new ri(t,i,e)}class li{constructor(t,i,e,s){this.chartConfig=t,this.chartData=i,this.componentStore={title:ni(t,i,e,s),plot:hi(t,i,e),xAxis:At(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},s),yAxis:At(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},s)}}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,n=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),a=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),h=this.componentStore.plot.calculateSpace({width:n,height:a});t-=h.width,i-=h.height,h=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=h.height,i-=h.height,this.componentStore.xAxis.setAxisPosition("bottom"),h=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=h.height,this.componentStore.yAxis.setAxisPosition("left"),h=this.componentStore.yAxis.calculateSpace({width:t,height:i}),e=h.width,t-=h.width,t>0&&(n+=t,t=0),i>0&&(a+=i,i=0),this.componentStore.plot.calculateSpace({width:n,height:a}),this.componentStore.plot.setBoundingBoxXY({x:e,y:s}),this.componentStore.xAxis.setRange([e,e+n]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:s+a}),this.componentStore.yAxis.setRange([s,s+a]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:s}),this.chartData.plots.some((t=>mt(t)))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizonatalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,n=0,a=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),h=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),o=this.componentStore.plot.calculateSpace({width:a,height:h});t-=o.width,i-=o.height,o=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),e=o.height,i-=o.height,this.componentStore.xAxis.setAxisPosition("left"),o=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=o.width,s=o.width,this.componentStore.yAxis.setAxisPosition("top"),o=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=o.height,n=e+o.height,t>0&&(a+=t,t=0),i>0&&(h+=i,i=0),this.componentStore.plot.calculateSpace({width:a,height:h}),this.componentStore.plot.setBoundingBoxXY({x:s,y:n}),this.componentStore.yAxis.setRange([s,s+a]),this.componentStore.yAxis.setBoundingBoxXY({x:s,y:e}),this.componentStore.xAxis.setRange([n,n+h]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some((t=>mt(t)))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){"horizontal"===this.chartConfig.chartOrientation?this.calculateHorizonatalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}}class ci{static build(t,i,e,s){return new li(t,i,e,s).getDrawableElement()}}let Tt,X=0,Y=Pt(),H=Dt(),y=Lt(),at=H.plotColorPalette.split(",").map((t=>t.trim())),G=!1,rt=!1;function Dt(){const t=zt(),i=ot();return wt(t.xyChart,i.themeVariables.xyChart)}function Pt(){const t=ot();return wt(Ft.xyChart,t.xyChart)}function Lt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}function ht(t){const i=ot();return Gt(t.trim(),i)}function ui(t){Tt=t}function gi(t){Y.chartOrientation="horizontal"===t?"horizontal":"vertical"}function xi(t){y.xAxis.title=ht(t.text)}function vt(t,i){y.xAxis={type:"linear",title:y.xAxis.title,min:t,max:i},G=!0}function di(t){y.xAxis={type:"band",title:y.xAxis.title,categories:t.map((t=>ht(t.text)))},G=!0}function fi(t){y.yAxis.title=ht(t.text)}function pi(t,i){y.yAxis={type:"linear",title:y.yAxis.title,min:t,max:i},rt=!0}function mi(t){const i=Math.min(...t),e=Math.max(...t),s=N(y.yAxis)?y.yAxis.min:1/0,n=N(y.yAxis)?y.yAxis.max:-1/0;y.yAxis={type:"linear",title:y.yAxis.title,min:Math.min(s,i),max:Math.max(n,e)}}function Et(t){let i=[];if(0===t.length)return i;if(!G){const i=N(y.xAxis)?y.xAxis.min:1/0,e=N(y.xAxis)?y.xAxis.max:-1/0;vt(Math.min(i,1),Math.max(e,t.length))}if(rt||mi(t),_t(y.xAxis)&&(i=y.xAxis.categories.map(((i,e)=>[i,t[e]]))),N(y.xAxis)){const e=y.xAxis.min,s=y.xAxis.max,n=(s-e+1)/t.length,a=[];for(let t=e;t<=s;t+=n)a.push(`${t}`);i=a.map(((i,e)=>[i,t[e]]))}return i}function Mt(t){return at[0===t?0:t%at.length]}function yi(t,i){const e=Et(i);y.plots.push({type:"line",strokeFill:Mt(X),strokeWidth:2,data:e}),X++}function bi(t,i){const e=Et(i);y.plots.push({type:"bar",fill:Mt(X),data:e}),X++}function Ai(){if(0===y.plots.length)throw Error("No Plot to render, please provide a plot with some data");return y.title=St(),ci.build(Y,y,H,Tt)}function wi(){return H}function Si(){return Y}const Ci=function(){Ut(),X=0,Y=Pt(),y=Lt(),H=Dt(),at=H.plotColorPalette.split(",").map((t=>t.trim())),G=!1,rt=!1},_i={getDrawableElem:Ai,clear:Ci,setAccTitle:Nt,getAccTitle:Xt,setDiagramTitle:Yt,getDiagramTitle:St,getAccDescription:Ht,setAccDescription:$t,setOrientation:gi,setXAxisTitle:xi,setXAxisRangeData:vt,setXAxisBand:di,setYAxisTitle:fi,setYAxisRangeData:pi,setLineData:yi,setBarData:bi,setTmpSVGG:ui,getChartThemeConfig:wi,getChartConfig:Si},ki=(t,i,e,s)=>{const n=s.db,a=n.getChartThemeConfig(),h=n.getChartConfig();function o(t){return"top"===t?"text-before-edge":"middle"}function r(t){return"left"===t?"start":"right"===t?"end":"middle"}function l(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}Ct.debug("Rendering xychart chart\n"+t);const c=qt(i),g=c.append("g").attr("class","main"),u=g.append("rect").attr("width",h.width).attr("height",h.height).attr("class","background");jt(c,h.height,h.width,!0),c.attr("viewBox",`0 0 ${h.width} ${h.height}`),u.attr("fill",a.backgroundColor),n.setTmpSVGG(c.append("g").attr("class","mermaid-tmp-group"));const x=n.getDrawableElem(),d={};function p(t){let i=g,e="";for(const[s]of t.entries()){let n=g;s>0&&d[e]&&(n=d[e]),e+=t[s],i=d[e],i||(i=d[e]=n.append("g").attr("class",t[s]))}return i}for(const t of x){if(0===t.data.length)continue;const i=p(t.groupTexts);switch(t.type){case"rect":i.selectAll("rect").data(t.data).enter().append("rect").attr("x",(t=>t.x)).attr("y",(t=>t.y)).attr("width",(t=>t.width)).attr("height",(t=>t.height)).attr("fill",(t=>t.fill)).attr("stroke",(t=>t.strokeFill)).attr("stroke-width",(t=>t.strokeWidth));break;case"text":i.selectAll("text").data(t.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",(t=>t.fill)).attr("font-size",(t=>t.fontSize)).attr("dominant-baseline",(t=>o(t.verticalPos))).attr("text-anchor",(t=>r(t.horizontalPos))).attr("transform",(t=>l(t))).text((t=>t.text));break;case"path":i.selectAll("path").data(t.data).enter().append("path").attr("d",(t=>t.path)).attr("fill",(t=>t.fill?t.fill:"none")).attr("stroke",(t=>t.strokeFill)).attr("stroke-width",(t=>t.strokeWidth))}}},Ri={draw:ki},Wi={parser:ti,db:_i,renderer:Ri};export{Wi as diagram};