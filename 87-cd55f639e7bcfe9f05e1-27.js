(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{t55B:function(e,t,r){"use strict";var n,a;function isLiteralElement(e){return e.type===n.literal}function isArgumentElement(e){return e.type===n.argument}function isNumberElement(e){return e.type===n.number}function isDateElement(e){return e.type===n.date}function isTimeElement(e){return e.type===n.time}function isSelectElement(e){return e.type===n.select}function isPluralElement(e){return e.type===n.plural}function isPoundElement(e){return e.type===n.pound}function isTagElement(e){return e.type===n.tag}function isNumberSkeleton(e){return!(!e||"object"!=typeof e||0!==e.type)}function isDateTimeSkeleton(e){return!(!e||"object"!=typeof e||1!==e.type)}function createLiteralElement(e){return{type:n.literal,value:e}}function createNumberElement(e,t){return{type:n.number,value:e,style:t}}r.r(t),r.d(t,"TYPE",(function(){return n})),r.d(t,"SKELETON_TYPE",(function(){return a})),r.d(t,"isLiteralElement",(function(){return isLiteralElement})),r.d(t,"isArgumentElement",(function(){return isArgumentElement})),r.d(t,"isNumberElement",(function(){return isNumberElement})),r.d(t,"isDateElement",(function(){return isDateElement})),r.d(t,"isTimeElement",(function(){return isTimeElement})),r.d(t,"isSelectElement",(function(){return isSelectElement})),r.d(t,"isPluralElement",(function(){return isPluralElement})),r.d(t,"isPoundElement",(function(){return isPoundElement})),r.d(t,"isTagElement",(function(){return isTagElement})),r.d(t,"isNumberSkeleton",(function(){return isNumberSkeleton})),r.d(t,"isDateTimeSkeleton",(function(){return isDateTimeSkeleton})),r.d(t,"createLiteralElement",(function(){return createLiteralElement})),r.d(t,"createNumberElement",(function(){return createNumberElement})),r.d(t,"SyntaxError",(function(){return o})),r.d(t,"pegParse",(function(){return s})),r.d(t,"parseDateTimeSkeleton",(function(){return parseDateTimeSkeleton})),r.d(t,"convertNumberSkeletonToNumberFormatOptions",(function(){return convertNumberSkeletonToNumberFormatOptions})),r.d(t,"parse",(function(){return parse})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(a||(a={}));var i,p=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function __(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e){function SyntaxError(t,r,n,a){var i=e.call(this)||this;return i.message=t,i.expected=r,i.found=n,i.location=a,i.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(i,SyntaxError),i}return p(SyntaxError,e),SyntaxError.buildMessage=function(e,t){function hex(e){return e.charCodeAt(0).toString(16).toUpperCase()}function literalEscape(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+hex(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+hex(e)}))}function classEscape(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+hex(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+hex(e)}))}function describeExpectation(e){switch(e.type){case"literal":return'"'+literalEscape(e.text)+'"';case"class":var t=e.parts.map((function(e){return Array.isArray(e)?classEscape(e[0])+"-"+classEscape(e[1]):classEscape(e)}));return"["+(e.inverted?"^":"")+t+"]";case"any":return"any character";case"end":return"end of input";case"other":return e.description}}return"Expected "+function describeExpected(e){var t,r,n=e.map(describeExpectation);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+function describeFound(e){return e?'"'+literalEscape(e)+'"':"end of input"}(t)+" found."},SyntaxError}(Error);var s=function peg$parse(e,t){t=void 0!==t?t:{};var r,a={},i={start:peg$parsestart},p=peg$parsestart,s=peg$literalExpectation("#",!1),u=peg$otherExpectation("tagElement"),c=peg$literalExpectation("<",!1),l=peg$literalExpectation("/>",!1),g=peg$literalExpectation(">",!1),peg$c15=function(e){return me.pop(),!0},f=peg$literalExpectation("</",!1),$=peg$otherExpectation("argumentElement"),m=peg$literalExpectation("{",!1),h=peg$literalExpectation("}",!1),d=peg$otherExpectation("numberSkeletonId"),E=/^['\/{}]/,b=peg$classExpectation(["'","/","{","}"],!1,!1),v={type:"any"},x=peg$otherExpectation("numberSkeletonTokenOption"),y=peg$literalExpectation("/",!1),A=peg$otherExpectation("numberSkeletonToken"),S=peg$literalExpectation("::",!1),peg$c41=function(e){return me.pop(),e.replace(/\s*$/,"")},w=peg$literalExpectation(",",!1),k=peg$literalExpectation("number",!1),peg$c46=function(e,t,r){return __assign({type:"number"===t?n.number:"date"===t?n.date:n.time,style:r&&r[2],value:e},insertLocation())},T=peg$literalExpectation("'",!1),C=/^[^']/,_=peg$classExpectation(["'"],!0,!1),N=/^[^a-zA-Z'{}]/,D=peg$classExpectation([["a","z"],["A","Z"],"'","{","}"],!0,!1),O=/^[a-zA-Z]/,F=peg$classExpectation([["a","z"],["A","Z"]],!1,!1),L=peg$literalExpectation("date",!1),P=peg$literalExpectation("time",!1),R=peg$literalExpectation("plural",!1),j=peg$literalExpectation("selectordinal",!1),z=peg$literalExpectation("offset:",!1),B=peg$literalExpectation("select",!1),I=peg$literalExpectation("=",!1),Z=peg$otherExpectation("whitespace"),q=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,M=peg$classExpectation([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),H=peg$otherExpectation("syntax pattern"),Y=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,J=peg$classExpectation([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),K=peg$otherExpectation("optional whitespace"),U=peg$otherExpectation("number"),V=peg$literalExpectation("-",!1),G=(peg$otherExpectation("apostrophe"),peg$otherExpectation("double apostrophes")),Q=peg$literalExpectation("''",!1),W=peg$literalExpectation("\n",!1),X=peg$otherExpectation("argNameOrNumber"),ee=peg$otherExpectation("validTag"),te=peg$otherExpectation("argNumber"),re=peg$literalExpectation("0",!1),ne=/^[1-9]/,ae=peg$classExpectation([["1","9"]],!1,!1),ie=/^[0-9]/,pe=peg$classExpectation([["0","9"]],!1,!1),oe=peg$otherExpectation("argName"),se=peg$otherExpectation("tagName"),ue=0,ce=0,le=[{line:1,column:1}],ge=0,fe=[],$e=0;if(void 0!==t.startRule){if(!(t.startRule in i))throw new Error("Can't start parsing from rule \""+t.startRule+'".');p=i[t.startRule]}function text(){return e.substring(ce,ue)}function location(){return peg$computeLocation(ce,ue)}function error(e,t){throw function peg$buildSimpleError(e,t){return new o(e,[],"",t)}(e,t=void 0!==t?t:peg$computeLocation(ce,ue))}function peg$literalExpectation(e,t){return{type:"literal",text:e,ignoreCase:t}}function peg$classExpectation(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function peg$otherExpectation(e){return{type:"other",description:e}}function peg$computePosDetails(t){var r,n=le[t];if(n)return n;for(r=t-1;!le[r];)r--;for(n={line:(n=le[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return le[t]=n,n}function peg$computeLocation(e,t){var r=peg$computePosDetails(e),n=peg$computePosDetails(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function peg$fail(e){ue<ge||(ue>ge&&(ge=ue,fe=[]),fe.push(e))}function peg$buildStructuredError(e,t,r){return new o(o.buildMessage(e,t),e,t,r)}function peg$parsestart(){return peg$parsemessage()}function peg$parsemessage(){var e,t;for(e=[],t=peg$parsemessageElement();t!==a;)e.push(t),t=peg$parsemessageElement();return e}function peg$parsemessageElement(){var t;return(t=function peg$parseliteralElement(){var e,t;e=ue,(t=peg$parsemessageText())!==a&&(ce=e,r=t,t=__assign({type:n.literal,value:r},insertLocation()));var r;return e=t}())===a&&(t=function peg$parseargumentElement(){var t,r,i,p;$e++,t=ue,123===e.charCodeAt(ue)?(r="{",ue++):(r=a,0===$e&&peg$fail(m));r!==a&&peg$parse_()!==a&&(i=peg$parseargNameOrNumber())!==a&&peg$parse_()!==a?(125===e.charCodeAt(ue)?(p="}",ue++):(p=a,0===$e&&peg$fail(h)),p!==a?(ce=t,o=i,r=__assign({type:n.argument,value:o},insertLocation()),t=r):(ue=t,t=a)):(ue=t,t=a);var o;$e--,t===a&&(r=a,0===$e&&peg$fail($));return t}())===a&&(t=function peg$parsesimpleFormatElement(){var t;(t=function peg$parsenumberFormatElement(){var t,r,n,i,p,o,s,u,c;t=ue,123===e.charCodeAt(ue)?(r="{",ue++):(r=a,0===$e&&peg$fail(m));r!==a&&peg$parse_()!==a&&(n=peg$parseargNameOrNumber())!==a&&peg$parse_()!==a?(44===e.charCodeAt(ue)?(i=",",ue++):(i=a,0===$e&&peg$fail(w)),i!==a&&peg$parse_()!==a?("number"===e.substr(ue,6)?(p="number",ue+=6):(p=a,0===$e&&peg$fail(k)),p!==a&&peg$parse_()!==a?(o=ue,44===e.charCodeAt(ue)?(s=",",ue++):(s=a,0===$e&&peg$fail(w)),s!==a&&(u=peg$parse_())!==a&&(c=function peg$parsenumberArgStyle(){var t,r,n;t=ue,"::"===e.substr(ue,2)?(r="::",ue+=2):(r=a,0===$e&&peg$fail(S));r!==a&&(n=function peg$parsenumberSkeleton(){var e,t,r;if(e=ue,t=[],(r=peg$parsenumberSkeletonToken())!==a)for(;r!==a;)t.push(r),r=peg$parsenumberSkeletonToken();else t=a;t!==a&&(ce=e,t=__assign({type:0,tokens:t},insertLocation()));return e=t}())!==a?(ce=t,t=r=n):(ue=t,t=a);t===a&&(t=ue,ce=ue,me.push("numberArgStyle"),(r=(r=!0)?void 0:a)!==a&&(n=peg$parsemessageText())!==a?(ce=t,r=peg$c41(n),t=r):(ue=t,t=a));return t}())!==a?o=s=[s,u,c]:(ue=o,o=a),o===a&&(o=null),o!==a&&(s=peg$parse_())!==a?(125===e.charCodeAt(ue)?(u="}",ue++):(u=a,0===$e&&peg$fail(h)),u!==a?(ce=t,r=peg$c46(n,p,o),t=r):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a);return t}())===a&&(t=function peg$parsedateOrTimeFormatElement(){var t,r,n,i,p,o,s,u,c;t=ue,123===e.charCodeAt(ue)?(r="{",ue++):(r=a,0===$e&&peg$fail(m));r!==a&&peg$parse_()!==a&&(n=peg$parseargNameOrNumber())!==a&&peg$parse_()!==a?(44===e.charCodeAt(ue)?(i=",",ue++):(i=a,0===$e&&peg$fail(w)),i!==a&&peg$parse_()!==a?("date"===e.substr(ue,4)?(p="date",ue+=4):(p=a,0===$e&&peg$fail(L)),p===a&&("time"===e.substr(ue,4)?(p="time",ue+=4):(p=a,0===$e&&peg$fail(P))),p!==a&&peg$parse_()!==a?(o=ue,44===e.charCodeAt(ue)?(s=",",ue++):(s=a,0===$e&&peg$fail(w)),s!==a&&(u=peg$parse_())!==a&&(c=function peg$parsedateOrTimeArgStyle(){var t,r,n;t=ue,"::"===e.substr(ue,2)?(r="::",ue+=2):(r=a,0===$e&&peg$fail(S));r!==a&&(n=function peg$parsedateTimeSkeleton(){var t,r,n,i;t=ue,r=ue,n=[],(i=peg$parsedateTimeSkeletonLiteral())===a&&(i=peg$parsedateTimeSkeletonPattern());if(i!==a)for(;i!==a;)n.push(i),(i=peg$parsedateTimeSkeletonLiteral())===a&&(i=peg$parsedateTimeSkeletonPattern());else n=a;r=n!==a?e.substring(r,ue):n;r!==a&&(ce=t,r=__assign({type:1,pattern:r},insertLocation()));return t=r}())!==a?(ce=t,t=r=n):(ue=t,t=a);t===a&&(t=ue,ce=ue,me.push("dateOrTimeArgStyle"),(r=(r=!0)?void 0:a)!==a&&(n=peg$parsemessageText())!==a?(ce=t,r=peg$c41(n),t=r):(ue=t,t=a));return t}())!==a?o=s=[s,u,c]:(ue=o,o=a),o===a&&(o=null),o!==a&&(s=peg$parse_())!==a?(125===e.charCodeAt(ue)?(u="}",ue++):(u=a,0===$e&&peg$fail(h)),u!==a?(ce=t,r=peg$c46(n,p,o),t=r):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a);return t}());return t}())===a&&(t=function peg$parsepluralElement(){var t,r,i,p,o,s,u,c,l,g,f;t=ue,123===e.charCodeAt(ue)?(r="{",ue++):(r=a,0===$e&&peg$fail(m));if(r!==a)if(peg$parse_()!==a)if((i=peg$parseargNameOrNumber())!==a)if(peg$parse_()!==a)if(44===e.charCodeAt(ue)?(p=",",ue++):(p=a,0===$e&&peg$fail(w)),p!==a)if(peg$parse_()!==a)if("plural"===e.substr(ue,6)?(o="plural",ue+=6):(o=a,0===$e&&peg$fail(R)),o===a&&("selectordinal"===e.substr(ue,13)?(o="selectordinal",ue+=13):(o=a,0===$e&&peg$fail(j))),o!==a)if(peg$parse_()!==a)if(44===e.charCodeAt(ue)?(s=",",ue++):(s=a,0===$e&&peg$fail(w)),s!==a)if(peg$parse_()!==a)if(u=ue,"offset:"===e.substr(ue,7)?(c="offset:",ue+=7):(c=a,0===$e&&peg$fail(z)),c!==a&&(l=peg$parse_())!==a&&(g=peg$parsenumber())!==a?u=c=[c,l,g]:(ue=u,u=a),u===a&&(u=null),u!==a)if((c=peg$parse_())!==a){if(l=[],(g=peg$parsepluralOption())!==a)for(;g!==a;)l.push(g),g=peg$parsepluralOption();else l=a;l!==a&&(g=peg$parse_())!==a?(125===e.charCodeAt(ue)?(f="}",ue++):(f=a,0===$e&&peg$fail(h)),f!==a?(ce=t,r=function(e,t,r,a){return __assign({type:n.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:a.reduce((function(e,t){var r=t.id,n=t.value,a=t.location;return r in e&&error('Duplicate option "'+r+'" in plural element: "'+text()+'"',location()),e[r]={value:n,location:a},e}),{})},insertLocation())}(i,o,u,l),t=r):(ue=t,t=a)):(ue=t,t=a)}else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;return t}())===a&&(t=function peg$parseselectElement(){var t,r,i,p,o,s,u,c,l;t=ue,123===e.charCodeAt(ue)?(r="{",ue++):(r=a,0===$e&&peg$fail(m));if(r!==a)if(peg$parse_()!==a)if((i=peg$parseargNameOrNumber())!==a)if(peg$parse_()!==a)if(44===e.charCodeAt(ue)?(p=",",ue++):(p=a,0===$e&&peg$fail(w)),p!==a)if(peg$parse_()!==a)if("select"===e.substr(ue,6)?(o="select",ue+=6):(o=a,0===$e&&peg$fail(B)),o!==a)if(peg$parse_()!==a)if(44===e.charCodeAt(ue)?(s=",",ue++):(s=a,0===$e&&peg$fail(w)),s!==a)if(peg$parse_()!==a){if(u=[],(c=peg$parseselectOption())!==a)for(;c!==a;)u.push(c),c=peg$parseselectOption();else u=a;u!==a&&(c=peg$parse_())!==a?(125===e.charCodeAt(ue)?(l="}",ue++):(l=a,0===$e&&peg$fail(h)),l!==a?(ce=t,r=function(e,t){return __assign({type:n.select,value:e,options:t.reduce((function(e,t){var r=t.id,n=t.value,a=t.location;return r in e&&error('Duplicate option "'+r+'" in select element: "'+text()+'"',location()),e[r]={value:n,location:a},e}),{})},insertLocation())}(i,u),t=r):(ue=t,t=a)):(ue=t,t=a)}else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;else ue=t,t=a;return t}())===a&&(t=function peg$parsetagElement(){var t,r,i,p,o,s;$e++,t=ue,r=ue,60===e.charCodeAt(ue)?(i="<",ue++):(i=a,0===$e&&peg$fail(c));i!==a&&(p=peg$parsevalidTag())!==a&&(o=peg$parse_())!==a?("/>"===e.substr(ue,2)?(s="/>",ue+=2):(s=a,0===$e&&peg$fail(l)),s!==a?r=i=[i,p,o,s]:(ue=r,r=a)):(ue=r,r=a);r!==a&&(ce=t,$=r,r=__assign({type:n.literal,value:$.join("")},insertLocation()));var $;(t=r)===a&&(t=ue,(r=function peg$parseopeningTag(){var t,r,n,i;t=ue,60===e.charCodeAt(ue)?(r="<",ue++):(r=a,0===$e&&peg$fail(c));r!==a?(ce=ue,me.push("openingTag"),(!0?void 0:a)!==a&&(n=peg$parsevalidTag())!==a?(62===e.charCodeAt(ue)?(i=">",ue++):(i=a,0===$e&&peg$fail(g)),i!==a?(ce=ue,(peg$c15()?void 0:a)!==a?(ce=t,t=r=n):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a);return t}())!==a&&(i=peg$parsemessage())!==a&&(p=function peg$parseclosingTag(){var t,r,n,i;t=ue,"</"===e.substr(ue,2)?(r="</",ue+=2):(r=a,0===$e&&peg$fail(f));r!==a?(ce=ue,me.push("closingTag"),(!0?void 0:a)!==a&&(n=peg$parsevalidTag())!==a?(62===e.charCodeAt(ue)?(i=">",ue++):(i=a,0===$e&&peg$fail(g)),i!==a?(ce=ue,(peg$c15()?void 0:a)!==a?(ce=t,t=r=n):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a);return t}())!==a?(ce=t,h=i,(m=r)!==(d=p)&&error('Mismatch tag "'+m+'" !== "'+d+'"',location()),r=__assign({type:n.tag,value:m,children:h},insertLocation()),t=r):(ue=t,t=a));var m,h,d;$e--,t===a&&(r=a,0===$e&&peg$fail(u));return t}())===a&&(t=function peg$parsepoundElement(){var t,r;t=ue,35===e.charCodeAt(ue)?(r="#",ue++):(r=a,0===$e&&peg$fail(s));r!==a&&(ce=t,r=__assign({type:n.pound},insertLocation()));return t=r}()),t}function peg$parsemessageText(){var e,t,r;if(e=ue,t=[],(r=peg$parsedoubleApostrophes())===a&&(r=peg$parsequotedString())===a&&(r=peg$parseunquotedString()),r!==a)for(;r!==a;)t.push(r),(r=peg$parsedoubleApostrophes())===a&&(r=peg$parsequotedString())===a&&(r=peg$parseunquotedString());else t=a;return t!==a&&(ce=e,t=t.join("")),e=t}function peg$parsenumberSkeletonId(){var t,r,n,i,p;if($e++,t=ue,r=[],n=ue,i=ue,$e++,(p=peg$parsewhiteSpace())===a&&(E.test(e.charAt(ue))?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(b))),$e--,p===a?i=void 0:(ue=i,i=a),i!==a?(e.length>ue?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(v)),p!==a?n=i=[i,p]:(ue=n,n=a)):(ue=n,n=a),n!==a)for(;n!==a;)r.push(n),n=ue,i=ue,$e++,(p=peg$parsewhiteSpace())===a&&(E.test(e.charAt(ue))?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(b))),$e--,p===a?i=void 0:(ue=i,i=a),i!==a?(e.length>ue?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(v)),p!==a?n=i=[i,p]:(ue=n,n=a)):(ue=n,n=a);else r=a;return t=r!==a?e.substring(t,ue):r,$e--,t===a&&(r=a,0===$e&&peg$fail(d)),t}function peg$parsenumberSkeletonTokenOption(){var t,r,n;return $e++,t=ue,47===e.charCodeAt(ue)?(r="/",ue++):(r=a,0===$e&&peg$fail(y)),r!==a&&(n=peg$parsenumberSkeletonId())!==a?(ce=t,t=r=n):(ue=t,t=a),$e--,t===a&&(r=a,0===$e&&peg$fail(x)),t}function peg$parsenumberSkeletonToken(){var e,t,r,n;if($e++,e=ue,peg$parse_()!==a)if((t=peg$parsenumberSkeletonId())!==a){for(r=[],n=peg$parsenumberSkeletonTokenOption();n!==a;)r.push(n),n=peg$parsenumberSkeletonTokenOption();r!==a?(ce=e,e=function(e,t){return{stem:e,options:t}}(t,r)):(ue=e,e=a)}else ue=e,e=a;else ue=e,e=a;return $e--,e===a&&(a,0===$e&&peg$fail(A)),e}function peg$parsedateTimeSkeletonLiteral(){var t,r,n,i;if(t=ue,39===e.charCodeAt(ue)?(r="'",ue++):(r=a,0===$e&&peg$fail(T)),r!==a){if(n=[],(i=peg$parsedoubleApostrophes())===a&&(C.test(e.charAt(ue))?(i=e.charAt(ue),ue++):(i=a,0===$e&&peg$fail(_))),i!==a)for(;i!==a;)n.push(i),(i=peg$parsedoubleApostrophes())===a&&(C.test(e.charAt(ue))?(i=e.charAt(ue),ue++):(i=a,0===$e&&peg$fail(_)));else n=a;n!==a?(39===e.charCodeAt(ue)?(i="'",ue++):(i=a,0===$e&&peg$fail(T)),i!==a?t=r=[r,n,i]:(ue=t,t=a)):(ue=t,t=a)}else ue=t,t=a;if(t===a)if(t=[],(r=peg$parsedoubleApostrophes())===a&&(N.test(e.charAt(ue))?(r=e.charAt(ue),ue++):(r=a,0===$e&&peg$fail(D))),r!==a)for(;r!==a;)t.push(r),(r=peg$parsedoubleApostrophes())===a&&(N.test(e.charAt(ue))?(r=e.charAt(ue),ue++):(r=a,0===$e&&peg$fail(D)));else t=a;return t}function peg$parsedateTimeSkeletonPattern(){var t,r;if(t=[],O.test(e.charAt(ue))?(r=e.charAt(ue),ue++):(r=a,0===$e&&peg$fail(F)),r!==a)for(;r!==a;)t.push(r),O.test(e.charAt(ue))?(r=e.charAt(ue),ue++):(r=a,0===$e&&peg$fail(F));else t=a;return t}function peg$parseselectOption(){var t,r,n,i,p,o,s;return t=ue,peg$parse_()!==a&&(r=peg$parseargName())!==a&&peg$parse_()!==a?(123===e.charCodeAt(ue)?(n="{",ue++):(n=a,0===$e&&peg$fail(m)),n!==a?(ce=ue,me.push("select"),(!0?void 0:a)!==a&&(i=peg$parsemessage())!==a?(125===e.charCodeAt(ue)?(p="}",ue++):(p=a,0===$e&&peg$fail(h)),p!==a?(ce=t,o=r,s=i,me.pop(),t=__assign({id:o,value:s},insertLocation())):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a),t}function peg$parsepluralOption(){var t,r,n,i,p,o,s;return t=ue,peg$parse_()!==a&&(r=function peg$parsepluralRuleSelectValue(){var t,r,n,i;return t=ue,r=ue,61===e.charCodeAt(ue)?(n="=",ue++):(n=a,0===$e&&peg$fail(I)),n!==a&&(i=peg$parsenumber())!==a?r=n=[n,i]:(ue=r,r=a),(t=r!==a?e.substring(t,ue):r)===a&&(t=peg$parseargName()),t}())!==a&&peg$parse_()!==a?(123===e.charCodeAt(ue)?(n="{",ue++):(n=a,0===$e&&peg$fail(m)),n!==a?(ce=ue,me.push("plural"),(!0?void 0:a)!==a&&(i=peg$parsemessage())!==a?(125===e.charCodeAt(ue)?(p="}",ue++):(p=a,0===$e&&peg$fail(h)),p!==a?(ce=t,o=r,s=i,me.pop(),t=__assign({id:o,value:s},insertLocation())):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a)):(ue=t,t=a),t}function peg$parsewhiteSpace(){var t;return $e++,q.test(e.charAt(ue))?(t=e.charAt(ue),ue++):(t=a,0===$e&&peg$fail(M)),$e--,t===a&&(a,0===$e&&peg$fail(Z)),t}function peg$parsepatternSyntax(){var t;return $e++,Y.test(e.charAt(ue))?(t=e.charAt(ue),ue++):(t=a,0===$e&&peg$fail(J)),$e--,t===a&&(a,0===$e&&peg$fail(H)),t}function peg$parse_(){var t,r,n;for($e++,t=ue,r=[],n=peg$parsewhiteSpace();n!==a;)r.push(n),n=peg$parsewhiteSpace();return t=r!==a?e.substring(t,ue):r,$e--,t===a&&(r=a,0===$e&&peg$fail(K)),t}function peg$parsenumber(){var t,r,n,i,p;return $e++,t=ue,45===e.charCodeAt(ue)?(r="-",ue++):(r=a,0===$e&&peg$fail(V)),r===a&&(r=null),r!==a&&(n=peg$parseargNumber())!==a?(ce=t,i=r,t=r=(p=n)?i?-p:p:0):(ue=t,t=a),$e--,t===a&&(r=a,0===$e&&peg$fail(U)),t}function peg$parsedoubleApostrophes(){var t,r;return $e++,t=ue,"''"===e.substr(ue,2)?(r="''",ue+=2):(r=a,0===$e&&peg$fail(Q)),r!==a&&(ce=t,r="'"),$e--,(t=r)===a&&(r=a,0===$e&&peg$fail(G)),t}function peg$parsequotedString(){var t,r,n,i,p,o;if(t=ue,39===e.charCodeAt(ue)?(r="'",ue++):(r=a,0===$e&&peg$fail(T)),r!==a)if((n=function peg$parseescapedChar(){var t,r,n,i;t=ue,r=ue,e.length>ue?(n=e.charAt(ue),ue++):(n=a,0===$e&&peg$fail(v));n!==a?(ce=ue,(i=(i="<"===(p=n)||">"===p||"{"===p||"}"===p||isInPluralOption()&&"#"===p)?void 0:a)!==a?r=n=[n,i]:(ue=r,r=a)):(ue=r,r=a);var p;t=r!==a?e.substring(t,ue):r;return t}())!==a){for(i=ue,p=[],"''"===e.substr(ue,2)?(o="''",ue+=2):(o=a,0===$e&&peg$fail(Q)),o===a&&(C.test(e.charAt(ue))?(o=e.charAt(ue),ue++):(o=a,0===$e&&peg$fail(_)));o!==a;)p.push(o),"''"===e.substr(ue,2)?(o="''",ue+=2):(o=a,0===$e&&peg$fail(Q)),o===a&&(C.test(e.charAt(ue))?(o=e.charAt(ue),ue++):(o=a,0===$e&&peg$fail(_)));(i=p!==a?e.substring(i,ue):p)!==a?(39===e.charCodeAt(ue)?(p="'",ue++):(p=a,0===$e&&peg$fail(T)),p===a&&(p=null),p!==a?(ce=t,t=r=n+i.replace("''","'")):(ue=t,t=a)):(ue=t,t=a)}else ue=t,t=a;else ue=t,t=a;return t}function peg$parseunquotedString(){var t,r,n,i,p;return t=ue,r=ue,e.length>ue?(n=e.charAt(ue),ue++):(n=a,0===$e&&peg$fail(v)),n!==a?(ce=ue,(i=(i=!("<"===(p=n)||"{"===p||isInPluralOption()&&"#"===p||isNestedMessageText()&&"}"===p||isNestedMessageText()&&">"===p))?void 0:a)!==a?r=n=[n,i]:(ue=r,r=a)):(ue=r,r=a),r===a&&(10===e.charCodeAt(ue)?(r="\n",ue++):(r=a,0===$e&&peg$fail(W))),t=r!==a?e.substring(t,ue):r}function peg$parseargNameOrNumber(){var t,r;return $e++,t=ue,(r=peg$parseargNumber())===a&&(r=peg$parseargName()),t=r!==a?e.substring(t,ue):r,$e--,t===a&&(r=a,0===$e&&peg$fail(X)),t}function peg$parsevalidTag(){var t,r;return $e++,t=ue,(r=peg$parseargNumber())===a&&(r=function peg$parsetagName(){var t,r,n,i,p;$e++,t=ue,r=[],45===e.charCodeAt(ue)?(n="-",ue++):(n=a,0===$e&&peg$fail(V));n===a&&(n=ue,i=ue,$e++,(p=peg$parsewhiteSpace())===a&&(p=peg$parsepatternSyntax()),$e--,p===a?i=void 0:(ue=i,i=a),i!==a?(e.length>ue?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(v)),p!==a?n=i=[i,p]:(ue=n,n=a)):(ue=n,n=a));if(n!==a)for(;n!==a;)r.push(n),45===e.charCodeAt(ue)?(n="-",ue++):(n=a,0===$e&&peg$fail(V)),n===a&&(n=ue,i=ue,$e++,(p=peg$parsewhiteSpace())===a&&(p=peg$parsepatternSyntax()),$e--,p===a?i=void 0:(ue=i,i=a),i!==a?(e.length>ue?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(v)),p!==a?n=i=[i,p]:(ue=n,n=a)):(ue=n,n=a));else r=a;t=r!==a?e.substring(t,ue):r;$e--,t===a&&(r=a,0===$e&&peg$fail(se));return t}()),t=r!==a?e.substring(t,ue):r,$e--,t===a&&(r=a,0===$e&&peg$fail(ee)),t}function peg$parseargNumber(){var t,r,n,i,p;if($e++,t=ue,48===e.charCodeAt(ue)?(r="0",ue++):(r=a,0===$e&&peg$fail(re)),r!==a&&(ce=t,r=0),(t=r)===a){if(t=ue,r=ue,ne.test(e.charAt(ue))?(n=e.charAt(ue),ue++):(n=a,0===$e&&peg$fail(ae)),n!==a){for(i=[],ie.test(e.charAt(ue))?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(pe));p!==a;)i.push(p),ie.test(e.charAt(ue))?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(pe));i!==a?r=n=[n,i]:(ue=r,r=a)}else ue=r,r=a;r!==a&&(ce=t,r=parseInt(r.join(""),10)),t=r}return $e--,t===a&&(r=a,0===$e&&peg$fail(te)),t}function peg$parseargName(){var t,r,n,i,p;if($e++,t=ue,r=[],n=ue,i=ue,$e++,(p=peg$parsewhiteSpace())===a&&(p=peg$parsepatternSyntax()),$e--,p===a?i=void 0:(ue=i,i=a),i!==a?(e.length>ue?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(v)),p!==a?n=i=[i,p]:(ue=n,n=a)):(ue=n,n=a),n!==a)for(;n!==a;)r.push(n),n=ue,i=ue,$e++,(p=peg$parsewhiteSpace())===a&&(p=peg$parsepatternSyntax()),$e--,p===a?i=void 0:(ue=i,i=a),i!==a?(e.length>ue?(p=e.charAt(ue),ue++):(p=a,0===$e&&peg$fail(v)),p!==a?n=i=[i,p]:(ue=n,n=a)):(ue=n,n=a);else r=a;return t=r!==a?e.substring(t,ue):r,$e--,t===a&&(r=a,0===$e&&peg$fail(oe)),t}var me=["root"];function isNestedMessageText(){return me.length>1}function isInPluralOption(){return"plural"===me[me.length-1]}function insertLocation(){return t&&t.captureLocation?{location:location()}:{}}if((r=p())!==a&&ue===e.length)return r;throw r!==a&&ue<e.length&&peg$fail({type:"end"}),peg$buildStructuredError(fe,ge<e.length?e.charAt(ge):null,ge<e.length?peg$computeLocation(ge,ge+1):peg$computeLocation(ge,ge))},__spreadArrays=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var i=arguments[t],p=0,o=i.length;p<o;p++,a++)n[a]=i[p];return n},u=/(^|[^\\])#/g;var skeleton_assign=function(){return(skeleton_assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function parseDateTimeSkeleton(e){var t={};return e.replace(c,(function(e){var r=e.length;switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short";break;case"y":t.year=2===r?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===r?"short":5===r?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead")}return""})),t}var l=/^\.(?:(0+)(\+|#+)?)?$/g,g=/^(@+)?(\+|#+)?$/g;function parseSignificantPrecision(e){var t={};return e.replace(g,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function parseSign(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":return{currencySign:"accounting"};case"sign-always":return{signDisplay:"always"};case"sign-accounting-always":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":return{signDisplay:"never"}}}function parseNotationOptions(e){var t=parseSign(e);return t||{}}function convertNumberSkeletonToNumberFormatOptions(e){for(var t={},r=0,n=e;r<n.length;r++){var a=n[r];switch(a.stem){case"percent":t.style="percent";continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":t.useGrouping=!1;continue;case"precision-integer":t.maximumFractionDigits=0;continue;case"measure-unit":t.style="unit",t.unit=a.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=skeleton_assign(skeleton_assign(skeleton_assign({},t),{notation:"scientific"}),a.options.reduce((function(e,t){return skeleton_assign(skeleton_assign({},e),parseNotationOptions(t))}),{}));continue;case"engineering":t=skeleton_assign(skeleton_assign(skeleton_assign({},t),{notation:"engineering"}),a.options.reduce((function(e,t){return skeleton_assign(skeleton_assign({},e),parseNotationOptions(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue}if(l.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(l,(function(e,r,n){return"."===e?t.maximumFractionDigits=0:"+"===n?t.minimumFractionDigits=n.length:"#"===r[0]?t.maximumFractionDigits=r.length:(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length+("string"==typeof n?n.length:0)),""})),a.options.length&&(t=skeleton_assign(skeleton_assign({},t),parseSignificantPrecision(a.options[0])))}else if(g.test(a.stem))t=skeleton_assign(skeleton_assign({},t),parseSignificantPrecision(a.stem));else{var i=parseSign(a.stem);i&&(t=skeleton_assign(skeleton_assign({},t),i))}}return t}function parse(e,t){var r=s(e,t);return t&&!1===t.normalizeHashtagInPlural||function normalizeHashtagInPlural(e){e.forEach((function(e){(isPluralElement(e)||isSelectElement(e))&&Object.keys(e.options).forEach((function(t){for(var r,n=e.options[t],a=-1,i=void 0,p=0;p<n.value.length;p++){var o=n.value[p];if(isLiteralElement(o)&&u.test(o.value)){a=p,i=o;break}}if(i){var c=i.value.replace(u,"$1{"+e.value+", number}"),l=s(c);(r=n.value).splice.apply(r,__spreadArrays([a,1],l))}normalizeHashtagInPlural(n.value)}))}))}(r),r}}}]);