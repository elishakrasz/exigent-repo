"use strict";exports.id=506,exports.ids=[506,145],exports.modules={21145:(e,t,r)=>{r.r(t),r.d(t,{encodeIntoResult:()=>p,stegaEncodeSourceMap:()=>g,stegaEncodeSourceMap$1:()=>m});var n=r(73854);let i=/_key\s*==\s*['"](.*)['"]/;function o(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,r)=>{let n=typeof t;if("number"===n)return`${e}[${t}]`;if("string"===n)return`${e}${0===r?"":"."}${t}`;if(("string"==typeof t?i.test(t.trim()):"object"==typeof t&&"_key"in t)&&t._key)return`${e}[_key=="${t._key}"]`;if(Array.isArray(t)){let[r,n]=t;return`${e}[${r}:${n}]`}throw Error(`Unsupported path segment \`${JSON.stringify(t)}\``)},"")}let a={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},s={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function l(e){let t;let r=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;for(;null!==(t=n.exec(e));){if(void 0!==t[1]){let e=t[1].replace(/\\(\\|f|n|r|t|')/g,e=>s[e]);r.push(e);continue}if(void 0!==t[2]){r.push(parseInt(t[2],10));continue}if(void 0!==t[3]){let e=t[3].replace(/\\(\\')/g,e=>s[e]);r.push({_key:e,_index:-1});continue}}return r}function u(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)})}function c(e){return"object"==typeof e&&null!==e}function p(e,t,r){return function e(t,r,n=[]){if(null!==t&&Array.isArray(t))return t.map((t,i)=>{if(c(t)){let o=t._key;if("string"==typeof o)return e(t,r,n.concat({_key:o,_index:i}))}return e(t,r,n.concat(i))});if(c(t)){if("block"===t._type||"span"===t._type){let i={...t};return"block"===t._type?i.children=e(t.children,r,n.concat("children")):"span"===t._type&&(i.text=e(t.text,r,n.concat("text"))),i}return Object.fromEntries(Object.entries(t).map(([t,i])=>[t,e(i,r,n.concat(t))]))}return r(t,n)}(e,(e,n)=>{if("string"!=typeof e)return e;let i=function(e,t){var r;if(!t?.mappings)return;let n=(r=e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)}),`$${r.map(e=>"string"==typeof e?`['${e.replace(/[\f\n\r\t'\\]/g,e=>a[e])}']`:"number"==typeof e?`[${e}]`:""!==e._key?`[?(@._key=='${e._key.replace(/['\\]/g,e=>a[e])}')]`:`[${e._index}]`).join("")}`);if(void 0!==t.mappings[n])return{mapping:t.mappings[n],matchedPath:n,pathSuffix:""};let i=Object.entries(t.mappings).filter(([e])=>n.startsWith(e)).sort(([e],[t])=>t.length-e.length);if(0==i.length)return;let[o,s]=i[0],l=n.substring(o.length);return{mapping:s,matchedPath:o,pathSuffix:l}}(n,t);if(!i)return e;let{mapping:o,matchedPath:s}=i;if("value"!==o.type||"documentValue"!==o.source.type)return e;let u=t.documents[o.source.document],c=t.paths[o.source.path],p=l(s);return r({sourcePath:l(c).concat(n.slice(p.length)),sourceDocument:u,resultPath:n,value:e})})}let f="drafts.",d=({sourcePath:e,resultPath:t,value:r})=>{if(function(e){return!!/^\d{4}-\d{2}-\d{2}/.test(e)&&!!Date.parse(e)}(r)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(r))return!1;let n=e.at(-1);return!("slug"===e.at(-2)&&"current"===n||"string"==typeof n&&(n.startsWith("_")||n.endsWith("Id"))||e.some(e=>"meta"===e||"metadata"===e||"openGraph"===e||"seo"===e)||y(e)||y(t)||"string"==typeof n&&h.has(n))},h=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","textTheme","unit","url","username","variant","website"]);function y(e){return e.some(e=>"string"==typeof e&&null!==e.match(/type/i))}function g(e,t,r){let{filter:a,logger:s,enabled:l}=r;if(!l){let n="config.enabled must be true, don't call this function otherwise";throw s?.error?.(`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}if(!t)return s?.error?.("[@sanity/client]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:r}),e;if(!r.studioUrl){let n="config.studioUrl must be defined";throw s?.error?.(`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}let c={encoded:[],skipped:[]},h=p(e,t,({sourcePath:e,sourceDocument:t,resultPath:i,value:l})=>{var p;let h;if(("function"==typeof a?a({sourcePath:e,resultPath:i,filterDefault:d,sourceDocument:t,value:l}):d({sourcePath:e,resultPath:i,filterDefault:d,sourceDocument:t,value:l}))===!1)return s&&c.skipped.push({path:o(u(e)),value:`${l.slice(0,20)}${l.length>20?"...":""}`,length:l.length}),l;s&&c.encoded.push({path:o(u(e)),value:`${l.slice(0,20)}${l.length>20?"...":""}`,length:l.length});let{baseUrl:y,workspace:g,tool:m}=("/"!==(h="string"==typeof(p="function"==typeof r.studioUrl?r.studioUrl(t):r.studioUrl)?p:p.baseUrl)&&(h=h.replace(/\/$/,"")),"string"==typeof p?{baseUrl:h}:{...p,baseUrl:h});if(!y)return l;let{_id:b,_type:$,_projectId:_,_dataset:v}=t;return(0,n.C)(l,{origin:"sanity.io",href:function(e){let{baseUrl:t,workspace:r="default",tool:n="default",id:i,type:a,path:s,projectId:l,dataset:c}=e;if(!t)throw Error("baseUrl is required");if(!s)throw Error("path is required");if(!i)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let p="default"===r?void 0:r,d="default"===n?void 0:n,h=i.startsWith(f)?i.slice(f.length):i,y=Array.isArray(s)?o(u(s)):s,g=new URLSearchParams({baseUrl:t,id:h,type:a,path:y});p&&g.set("workspace",p),d&&g.set("tool",d),l&&g.set("projectId",l),c&&g.set("dataset",c),i.startsWith(f)&&g.set("isDraft","");let m=["/"===t?"":t];p&&m.push(p);let b=["mode=presentation",`id=${h}`,`type=${a}`,`path=${encodeURIComponent(y)}`];return d&&b.push(`tool=${d}`),m.push("intent","edit",`${b.join(";")}?${g}`),m.join("/")}({baseUrl:y,workspace:g,tool:m,id:b,type:$,path:e,...!r.omitCrossDatasetReferenceData&&{dataset:v,projectId:_}})},!1)});if(s){let e=c.skipped.length,t=c.encoded.length;if((e||t)&&((s?.groupCollapsed||s.log)?.("[@sanity/client]: Encoding source map into result"),s.log?.(`[@sanity/client]: Paths encoded: ${c.encoded.length}, skipped: ${c.skipped.length}`)),c.encoded.length>0&&(s?.log?.("[@sanity/client]: Table of encoded paths"),(s?.table||s.log)?.(c.encoded)),c.skipped.length>0){let e=new Set;for(let{path:t}of c.skipped)e.add(t.replace(i,"0").replace(/\[\d+\]/g,"[]"));s?.log?.("[@sanity/client]: List of skipped paths",[...e.values()])}(e||t)&&s?.groupEnd?.()}return h}var m=Object.freeze({__proto__:null,stegaEncodeSourceMap:g})},72506:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n,i,o,a=r(68819),s=r(21145),l=r(17266),u=r(98820),c=r(1787),p=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((o||(o=1,i=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;0!=i--;){var n,i,o,a=o[i];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}),i));let f="use"in(n||(n=r.t(l,2)))?l.use:()=>{throw TypeError("SanityLiveStream requires a React version with React.use()")};function d(e){let{query:t,dataset:r,params:n={},perspective:i,projectId:o,stega:d}=e,h=(0,l.useCallback)(e=>(c.Y5.add(e),()=>c.Y5.delete(e)),[]),y=(0,l.useSyncExternalStore)(h,()=>c.id,()=>null),[g,m]=(0,l.useState)(void 0),b=(0,u.i)(e=>{e.post({type:"loader/query-listen",data:{projectId:o,dataset:r,perspective:i,query:t,params:n,heartbeat:1e3}})}),$=(0,u.i)(i=>{if(p({projectId:o,dataset:r,query:t,params:n},{projectId:i.projectId,dataset:i.dataset,query:i.query,params:i.params})){let{result:t,resultSourceMap:r,tags:n}=i,o=d?(0,s.stegaEncodeSourceMap)(t,r,{enabled:!0,studioUrl:"/"}):t;console.groupCollapsed("rendering with server action"),e.children({data:o,sourceMap:r,tags:n||[]}).then(e=>{console.log("setChildren(children)"),m(e)},e=>{console.error("rendering with server action: render children error",e)}).finally(()=>console.groupEnd())}});return(0,l.useEffect)(()=>{if(!y)return;let e=y.on("loader/query-change",$),t=setInterval(()=>b(y),1e3);return()=>{clearInterval(t),e()}},[y,$,b]),y&&void 0!==g?(0,a.jsx)(a.Fragment,{children:g}):f(e.initial)}d.displayName="SanityLiveStream"}};