(()=>{var t={};t.id=931,t.ids=[931],t.modules={20399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:t=>{"use strict";t.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:t=>{"use strict";t.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:t=>{"use strict";t.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:t=>{"use strict";t.exports=require("assert")},78893:t=>{"use strict";t.exports=require("buffer")},17702:t=>{"use strict";t.exports=require("events")},32615:t=>{"use strict";t.exports=require("http")},35240:t=>{"use strict";t.exports=require("https")},98216:t=>{"use strict";t.exports=require("net")},19801:t=>{"use strict";t.exports=require("os")},55315:t=>{"use strict";t.exports=require("path")},86624:t=>{"use strict";t.exports=require("querystring")},76162:t=>{"use strict";t.exports=require("stream")},82452:t=>{"use strict";t.exports=require("tls")},74175:t=>{"use strict";t.exports=require("tty")},17360:t=>{"use strict";t.exports=require("url")},21764:t=>{"use strict";t.exports=require("util")},71568:t=>{"use strict";t.exports=require("zlib")},6005:t=>{"use strict";t.exports=require("node:crypto")},78668:t=>{t.exports={style:{fontFamily:"'Lato', 'Lato Fallback'"},className:"__className_544c45"}},53027:t=>{t.exports={style:{fontFamily:"'Bodoni Moda', 'Bodoni Moda Fallback'",fontStyle:"normal"},className:"__className_79d478"}},87577:t=>{t.exports={style:{fontFamily:"'Lato', 'Lato Fallback'"},className:"__className_544c45"}},5404:t=>{t.exports={style:{fontFamily:"'Bodoni Moda', 'Bodoni Moda Fallback'",fontStyle:"normal"},className:"__className_79d478"}},66601:t=>{t.exports={style:{fontFamily:"'Lato', 'Lato Fallback'"},className:"__className_544c45"}},39627:(t,e,a)=>{"use strict";a.r(e),a.d(e,{GlobalError:()=>n.a,__next_app__:()=>x,pages:()=>d,routeModule:()=>h,tree:()=>c});var s=a(3003),i=a(14293),r=a(66550),n=a.n(r),o=a(86979),l={};for(let t in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(t)&&(l[t]=()=>o[t]);a.d(e,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,23455)),"/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/page.tsx"],metadata:{icon:[async t=>(await Promise.resolve().then(a.bind(a,73881))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,37973)),"/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,52075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async t=>(await Promise.resolve().then(a.bind(a,73881))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/page.tsx"],x={require:a,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},59632:(t,e,a)=>{"use strict";a.r(e),a.d(e,{"47f0056d599dd073fd4350a95791b576bbe8d91b":()=>i.b,"508612faf0cb5d2ad9c09337503539559a64dd4a":()=>s.n,"92ac37075f28a05c29f63ef02d9c264fdd56a5e8":()=>s.N});var s=a(16218),i=a(86816)},2729:(t,e,a)=>{Promise.resolve().then(a.bind(a,55443)),Promise.resolve().then(a.bind(a,30894)),Promise.resolve().then(a.bind(a,37897)),Promise.resolve().then(a.t.bind(a,92481,23)),Promise.resolve().then(a.t.bind(a,79404,23)),Promise.resolve().then(a.bind(a,52589))},20470:(t,e,a)=>{Promise.resolve().then(a.t.bind(a,96114,23)),Promise.resolve().then(a.t.bind(a,92639,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,79671,23)),Promise.resolve().then(a.t.bind(a,41868,23)),Promise.resolve().then(a.t.bind(a,84759,23)),Promise.resolve().then(a.t.bind(a,22816,23))},90158:(t,e,a)=>{Promise.resolve().then(a.bind(a,69652))},3221:function(t,e,a){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,e,a,s){void 0===s&&(s=a),Object.defineProperty(t,s,{enumerable:!0,get:function(){return e[a]}})}:function(t,e,a,s){void 0===s&&(s=a),t[s]=e[a]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&i(e,t,a);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ImageUrlBuilder=void 0;var o=n(a(77435)),l=["clip","crop","fill","fillmax","max","scale","min"],c=["top","bottom","left","right","center","focalpoint","entropy"],d=["format"];e.default=function(t){if(t&&"config"in t&&"function"==typeof t.config){var e=t.config(),a=e.apiHost,s=e.projectId,i=e.dataset,r=a||"https://api.sanity.io";return new x(null,{baseUrl:r.replace(/^https:\/\/api\./,"https://cdn."),projectId:s,dataset:i})}if(t&&"clientConfig"in t&&"object"==typeof t.clientConfig){var n=t.clientConfig,a=n.apiHost,s=n.projectId,i=n.dataset,r=a||"https://api.sanity.io";return new x(null,{baseUrl:r.replace(/^https:\/\/api\./,"https://cdn."),projectId:s,dataset:i})}return new x(null,t||{})};var x=function(){function t(t,e){this.options=t?s(s({},t.options||{}),e||{}):s({},e||{})}return t.prototype.withOptions=function(e){var a=e.baseUrl||this.options.baseUrl,i={baseUrl:a};for(var r in e)e.hasOwnProperty(r)&&(i[function(t){for(var e=o.SPEC_NAME_TO_URL_NAME_MAPPINGS,a=0;a<e.length;a++){var s=e[a],i=s[0],r=s[1];if(t===i||t===r)return i}return t}(r)]=e[r]);return new t(this,s({baseUrl:a},i))},t.prototype.image=function(t){return this.withOptions({source:t})},t.prototype.dataset=function(t){return this.withOptions({dataset:t})},t.prototype.projectId=function(t){return this.withOptions({projectId:t})},t.prototype.bg=function(t){return this.withOptions({bg:t})},t.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},t.prototype.width=function(t){return this.withOptions({width:t})},t.prototype.height=function(t){return this.withOptions({height:t})},t.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},t.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},t.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},t.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},t.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},t.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},t.prototype.blur=function(t){return this.withOptions({blur:t})},t.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},t.prototype.rect=function(t,e,a,s){return this.withOptions({rect:{left:t,top:e,width:a,height:s}})},t.prototype.format=function(t){return this.withOptions({format:t})},t.prototype.invert=function(t){return this.withOptions({invert:t})},t.prototype.orientation=function(t){return this.withOptions({orientation:t})},t.prototype.quality=function(t){return this.withOptions({quality:t})},t.prototype.forceDownload=function(t){return this.withOptions({download:t})},t.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},t.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},t.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},t.prototype.fit=function(t){if(-1===l.indexOf(t))throw Error('Invalid fit mode "'.concat(t,'"'));return this.withOptions({fit:t})},t.prototype.crop=function(t){if(-1===c.indexOf(t))throw Error('Invalid crop mode "'.concat(t,'"'));return this.withOptions({crop:t})},t.prototype.saturation=function(t){return this.withOptions({saturation:t})},t.prototype.auto=function(t){if(-1===d.indexOf(t))throw Error('Invalid auto mode "'.concat(t,'"'));return this.withOptions({auto:t})},t.prototype.pad=function(t){return this.withOptions({pad:t})},t.prototype.vanityName=function(t){return this.withOptions({vanityName:t})},t.prototype.frame=function(t){if(1!==t)throw Error('Invalid frame value "'.concat(t,'"'));return this.withOptions({frame:t})},t.prototype.url=function(){return(0,o.default)(this.options)},t.prototype.toString=function(){return this.url()},t}();e.ImageUrlBuilder=x},86426:function(t,e,a){"use strict";var s=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(a(3221));t.exports=s.default},27647:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";e.default=function(t){var e=t.split("-"),s=e[1],i=e[2],r=e[3];if(!s||!i||!r)throw Error("Malformed asset _ref '".concat(t,"'. Expected an id like \"").concat(a,'".'));var n=i.split("x"),o=n[0],l=n[1],c=+o,d=+l;if(!(isFinite(c)&&isFinite(d)))throw Error("Malformed asset _ref '".concat(t,"'. Expected an id like \"").concat(a,'".'));return{id:s,width:c,height:d,format:r}}},64725:function(t,e){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function s(t){var e=t.split("/").slice(-1);return"image-".concat(e[0]).replace(/\.([a-z]+)$/,"-$1")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;if(!t)return null;if("string"==typeof t&&/^https?:\/\//.test("".concat(t)))e={asset:{_ref:s(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if(t&&"string"==typeof t._ref)e={asset:t};else if(t&&"string"==typeof t._id)e={asset:{_ref:t._id||""}};else if(t&&t.asset&&"string"==typeof t.asset.url)e={asset:{_ref:s(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=a({},t)}return t.crop&&(e.crop=t.crop),t.hotspot&&(e.hotspot=t.hotspot),function(t){if(t.crop&&t.hotspot)return t;var e=a({},t);return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}(e)}},77435:function(t,e,a){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.parseSource=e.SPEC_NAME_TO_URL_NAME_MAPPINGS=void 0;var r=i(a(27647)),n=i(a(64725));e.parseSource=n.default,e.SPEC_NAME_TO_URL_NAME_MAPPINGS=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"],["frame","frame"]],e.default=function(t){var a=s({},t||{}),i=a.source;delete a.source;var o=(0,n.default)(i);if(!o)throw Error("Unable to resolve image URL from source (".concat(JSON.stringify(i),")"));var l=o.asset._ref||o.asset._id||"",c=(0,r.default)(l),d=Math.round(o.crop.left*c.width),x=Math.round(o.crop.top*c.height),h={left:d,top:x,width:Math.round(c.width-o.crop.right*c.width-d),height:Math.round(c.height-o.crop.bottom*c.height-x)},m=o.hotspot.height*c.height/2,p=o.hotspot.width*c.width/2,u=o.hotspot.x*c.width,f=o.hotspot.y*c.height;return a.rect||a.focalPoint||a.ignoreImageParams||a.crop||(a=s(s({},a),function(t,e){var a,s=e.width,i=e.height;if(!(s&&i))return{width:s,height:i,rect:t.crop};var r=t.crop,n=t.hotspot,o=s/i;if(r.width/r.height>o){var l=Math.round(r.height),c=Math.round(l*o),d=Math.max(0,Math.round(r.top)),x=Math.max(0,Math.round(Math.round((n.right-n.left)/2+n.left)-c/2));x<r.left?x=r.left:x+c>r.left+r.width&&(x=r.left+r.width-c),a={left:x,top:d,width:c,height:l}}else{var c=r.width,l=Math.round(c/o),x=Math.max(0,Math.round(r.left)),h=Math.max(0,Math.round(Math.round((n.bottom-n.top)/2+n.top)-l/2));h<r.top?h=r.top:h+l>r.top+r.height&&(h=r.top+r.height-l),a={left:x,top:h,width:c,height:l}}return{width:s,height:i,rect:a}}({crop:h,hotspot:{left:u-p,top:f-m,right:u+p,bottom:f+m}},a))),function(t){var a=(t.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),s=t.vanityName?"/".concat(t.vanityName):"",i="".concat(t.asset.id,"-").concat(t.asset.width,"x").concat(t.asset.height,".").concat(t.asset.format).concat(s),r="".concat(a,"/images/").concat(t.projectId,"/").concat(t.dataset,"/").concat(i),n=[];if(t.rect){var o=t.rect,l=o.left,c=o.top,d=o.width,x=o.height;(0!==l||0!==c||x!==t.asset.height||d!==t.asset.width)&&n.push("rect=".concat(l,",").concat(c,",").concat(d,",").concat(x))}t.bg&&n.push("bg=".concat(t.bg)),t.focalPoint&&(n.push("fp-x=".concat(t.focalPoint.x)),n.push("fp-y=".concat(t.focalPoint.y)));var h=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return(h&&n.push("flip=".concat(h)),e.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(e){var a=e[0],s=e[1];void 0!==t[a]?n.push("".concat(s,"=").concat(encodeURIComponent(t[a]))):void 0!==t[s]&&n.push("".concat(s,"=").concat(encodeURIComponent(t[s])))}),0===n.length)?r:"".concat(r,"?").concat(n.join("&"))}(s(s({},a),{asset:c}))}},52589:(t,e,a)=>{"use strict";a.d(e,{default:()=>f});var s=a(68819),i=a(53027),r=a.n(i),n=a(87577),o=a.n(n),l=a(17266),c=a(46226),d=a(10720),x=a(86426),h=a.n(x);let m=(0,d.eI)({projectId:"t79x65c2",dataset:"production",apiVersion:"2024-01-01",useCdn:!1}),p=h()(m);var u=a(90434);function f({persons:t}){let[e,a]=(0,l.useState)(0),[i,n]=(0,l.useState)(1);return(0,s.jsxs)("div",{className:"mt-32 text-center mx-auto max-w-7xl px-4",children:[(0,s.jsx)("h3",{className:"text-3xl mb-4 md:text-4xl",children:"Meet the Team"}),(0,s.jsx)("div",{className:"redline mb-8 h-[3px] w-[120px] bg-red-500 rounded mx-auto"}),(0,s.jsxs)("div",{className:"relative overflow-hidden",children:[(0,s.jsx)("button",{className:"absolute left-[2px] top-1/2 transform -translate-y-1/2 text-black z-10p-2",onClick:()=>{a(e=>0===e?Math.max(0,t.length-i):e-1)},children:(0,s.jsx)(c.default,{src:"/assets/arrow_left.png",alt:"Previous Arrow",width:24,height:24})}),(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsx)("div",{className:"flex transition-transform duration-500 gap-1",style:{transform:`translateX(-${100/i*e}%)`},children:t.map((t,e)=>{var a;return(0,s.jsx)("div",{className:"flex-none px-0.5",style:{width:`calc(${100/i}% - 3px)`},children:(0,s.jsx)(u.default,{href:`team/${t.slug.current}`,children:(0,s.jsx)("div",{className:"border border-gray-300 h-[350px] w-[275px] px-4 mx-auto",children:(0,s.jsxs)("div",{className:r().className,children:[(0,s.jsx)("div",{className:"mt-10 w-full flex justify-center",children:(0,s.jsx)(c.default,{src:(a=t.image,p.image(a)).quality(100).url(),alt:t.name,width:150,height:150,className:"object-contain mx-auto"})}),(0,s.jsx)("p",{className:"text-3xl font-normal mt-2",children:t.name}),(0,s.jsxs)("div",{className:o().className,children:[(0,s.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:t.title}),(0,s.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:t.subtitle})]})]})})})},e)})})}),(0,s.jsx)("button",{className:"absolute right-[-2px] top-1/2 transform -translate-y-1/2 text-black z-10 p-2",onClick:()=>{a(e=>e>=Math.max(0,t.length-i)?0:e+1)},children:(0,s.jsx)(c.default,{src:"/assets/arrow_right.png",alt:"Next Arrow",width:24,height:24})})]})]})}},69652:(t,e,a)=>{"use strict";a.d(e,{default:()=>d});var s=a(68819);a(23824);var i=a(17266),r=a(46226),n=a(90434);let o={src:"/_next/static/media/close-white.a5ac7f7b.svg",height:13,width:13,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/exigent_base.b796f044.jpg",height:146,width:548,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAApYK//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAECMnL/2gAIAQEAAT8AhZ7P/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjL/2gAIAQMBAT8ArTP/2Q==",blurWidth:8,blurHeight:2},c={src:"/_next/static/media/menu.017d5aa9.svg",height:12,width:16,blurWidth:0,blurHeight:0},d=()=>{let[t,e]=(0,i.useState)(!1),[a,d]=(0,i.useState)(!1),x=()=>d(!1);return(0,i.useEffect)(()=>{let t=()=>{window.innerWidth>800&&e(!1)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),(0,s.jsxs)("div",{className:"sticky top-0 z-50 w-full md:max-w-3xl md:px-8 lg:max-w-[940px] xl:max-w-[1120px] 2xl:max-w-[1320px] flex items-center justify-between lg:justify-between py-4 mx-auto px-8",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{href:"/",className:"w-28 md:w-36",children:(0,s.jsx)(r.default,{src:l,alt:"Logo",className:"max-h-16"})})}),(0,s.jsxs)("div",{className:"hidden md:flex md:flex-row md:items-center space-x-6 text-base text-gray-500",children:[(0,s.jsxs)(n.default,{href:"/about",className:"group border-b-3 border-transparent",children:["About",(0,s.jsx)("div",{className:"border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,s.jsxs)(n.default,{href:"/team",className:"group border-b-3 border-transparent",children:["Team",(0,s.jsx)("div",{className:"border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,s.jsxs)("div",{className:"group relative border-b-3 border-transparent cursor-pointer mb-[6px]",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,s.jsx)("span",{children:"Services"}),a&&(0,s.jsxs)("div",{className:"absolute left-0 top-full w-56 opacity-100 transition-opacity duration-300",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,s.jsx)(n.default,{href:"/family",onClick:x,className:"block py-[2px] hover:text-red-700",children:"Family Office"}),(0,s.jsx)(n.default,{href:"/special",onClick:x,className:"block py-[2px] hover:text-red-700",children:"Investment Products"}),(0,s.jsx)(n.default,{href:"/strategic",onClick:x,className:"block py-[2px] hover:text-red-700",children:"Strategic Advisory"})]})]}),(0,s.jsxs)(n.default,{href:"/contact",className:"group border-b-3 border-transparent",children:["Contact",(0,s.jsx)("div",{className:"border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]})]}),(0,s.jsx)("button",{type:"button",className:"md:hidden",onClick:()=>e(!0),children:(0,s.jsx)(r.default,{src:c,alt:"Menu Icon"})}),(0,s.jsxs)("div",{className:`fixed top-0 right-0 h-max pb-6 w-1/4 max-w-xs px-6 text-base bg-gray-800 text-white transform ${t?"translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out z-50`,children:[(0,s.jsx)("button",{type:"button",className:"absolute top-4 left-4",onClick:()=>e(!1),children:(0,s.jsx)(r.default,{src:o,alt:"Close Menu"})}),(0,s.jsxs)("div",{className:"flex flex-col space-y-4 mt-12",children:[(0,s.jsx)(n.default,{href:"/about",className:"text-white",onClick:()=>e(!1),children:"About"}),(0,s.jsx)(n.default,{href:"/team",className:"text-white",onClick:()=>e(!1),children:"Team"}),(0,s.jsx)(n.default,{href:"/family",className:"text-white",onClick:()=>e(!1),children:"Family Office"}),(0,s.jsx)(n.default,{href:"/special",className:"text-white",onClick:()=>e(!1),children:"Special Situations"}),(0,s.jsx)(n.default,{href:"/strategic",className:"text-white",onClick:()=>e(!1),children:"Strategic Advisory"}),(0,s.jsx)(n.default,{href:"/contact",className:"text-white",onClick:()=>e(!1),children:"Contact"})]})]})]})}},45580:(t,e,a)=>{"use strict";a.d(e,{default:()=>i.a});var s=a(40266),i=a.n(s)},40266:(t,e,a)=>{"use strict";let{createProxy:s}=a(71851);t.exports=s("/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/node_modules/next/dist/client/link.js")},10993:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(89351);a(22052);var i=a(74894),r=a(45580);let n=()=>(0,s.jsx)("div",{children:(0,s.jsx)(r.default,{href:"/family",className:"text-sm inline-block mt-4 hover:bg-[#F5101E] hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6",children:"Learn more"})}),o=()=>(0,s.jsx)("div",{className:"text-center mx-auto max-w-[460px] mt-14 px-4 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-2",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("h4",{className:"text-3xl font-semibold text-gray-800 md:text-xl lg:text-2xl xl:text-2xl",children:"Family Office"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"For high-net-worth families"}),(0,s.jsx)(i.default,{src:"/assets/Birds.png",alt:"Family Office",width:200,height:200,className:"mt-6 md:mt-5 w-2/3 object-contain"}),(0,s.jsx)(n,{})]}),(0,s.jsxs)("div",{className:"mt-6 flex flex-col items-center md:mt-0",children:[(0,s.jsx)("h4",{className:"text-3xl font-semibold text-gray-800 md:text-xl lg:text-2xl xl:text-2xl",children:"Investment Products"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"For well-qualified investors"}),(0,s.jsx)(i.default,{src:"/assets/ShipA.jpg",alt:"Investment Products",width:200,height:200,className:"mt-6 md:mt-1 w-2/3 object-contain"}),(0,s.jsx)(n,{})]}),(0,s.jsxs)("div",{className:"mt-6 flex flex-col items-center md:mt-0",children:[(0,s.jsx)("h4",{className:"text-3xl  font-semibold text-gray-800 md:text-xl lg:text-2xl xl:text-2xl",children:"Strategic Advisory"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"For businesses and corporates"}),(0,s.jsx)(i.default,{src:"/assets/Cufflink.jpg",alt:"Strategic Advisory",width:200,height:200,className:"mt-6 md:mt-5 w-[60%] object-contain"}),(0,s.jsx)(n,{})]})]})})},82134:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(89351),i=a(45580),r=a(74894);let n=()=>(0,s.jsxs)("div",{className:"mt-28 text-center mx-auto justify-items-center max-w-7xl",children:[(0,s.jsx)("h3",{className:"text-3xl sm:text-4xl lg:text-5xl mb-4",children:"Contact"}),(0,s.jsx)("div",{className:"h-[3px] w-[60px] md:w-[80px] lg:w-[120px] bg-red-500 rounded mx-auto md:mb-12"}),(0,s.jsxs)("div",{className:"mt-12 md:grid md:grid-cols-3 md:gap-10 lg:gap-24",children:[(0,s.jsx)("div",{className:"text-left",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-lg font-normal font-sans",children:"Jerusalem"}),(0,s.jsx)("p",{className:"text-base font-light font-sans",children:"Wyndham Deeds Street #5"}),(0,s.jsx)("p",{className:"mb-8",children:"Jerusalem, Israel"}),(0,s.jsx)("h1",{className:"text-lg font-normal font-sans",children:"Herzliya"}),(0,s.jsx)("p",{className:"text-base font-light font-sans",children:"Arik Einstein #3"}),(0,s.jsx)("p",{className:"text-base font-light font-sans md:mb-36",children:"Herzliya, Israel"})]})}),(0,s.jsx)("div",{className:"mt-8 md:mt-1 text-left",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-base",children:"Israel 972-2-500-9450"}),(0,s.jsx)("p",{className:"mb-8 text-base",children:"US 1-646-506-9450"}),(0,s.jsx)("h1",{className:"text-lg pb-2 md:text-base text-red-500 font-sans font-light",children:"info@exigentcap.com"})]})}),(0,s.jsxs)("div",{className:"pb-24 flex space-x-3",children:[(0,s.jsxs)(i.default,{href:"https://www.linkedin.com/company/exigentcapitalgroup/",className:"mr-4 group relative",target:"_blank",children:[(0,s.jsx)(r.default,{src:"/assets/LinkedIn.png",alt:"LinkedIn",width:112,height:28,className:"transition-opacity duration-100 group-hover:opacity-0 w-20 md:w-26"}),(0,s.jsx)(r.default,{src:"/assets/RedLinkedIn.png",alt:"LinkedIn Red",width:112,height:28,className:"absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]}),(0,s.jsxs)(i.default,{href:"mailto:info@exigentcapitalgroup.com",className:"mr-4 group relative",children:[(0,s.jsx)(r.default,{src:"/assets/Email.png",alt:"Email Icon",width:24,height:24,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,s.jsx)(r.default,{src:"/assets/RedMail.png",alt:"Red Email Icon",width:24,height:24,className:"absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]}),(0,s.jsxs)(i.default,{href:"tel:info@exigentcapitalgroup.com",className:"mr-4 group relative",children:[(0,s.jsx)(r.default,{src:"/assets/Phone Icon.png",alt:"Phone Icon",width:16,height:16,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,s.jsx)(r.default,{src:"/assets/RedPhone.png",alt:"Red Phone Icon",width:16,height:16,className:"absolute top-0 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]}),(0,s.jsxs)(i.default,{href:"mailto:info@exigentcapitalgroup.com",className:"mr-4 group relative",children:[(0,s.jsx)(r.default,{src:"/assets/Location Icon.png",alt:"Location Icon",width:16,height:16,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,s.jsx)(r.default,{src:"/assets/RedLocation.png",alt:"Red Location Icon",width:16,height:16,className:"absolute top-0 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]})]})]})]})},99829:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(89351),i=a(74894);let r=()=>(0,s.jsxs)("div",{className:"max-w-2xl text-center justify-items-center mx-auto mt-16",children:[(0,s.jsx)("h3",{className:"text-3xl md:text-4xl mb-4 lg:text-5xl",children:"Our Firm"}),(0,s.jsx)("div",{className:"h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"}),(0,s.jsxs)("div",{className:"text-base justify-self-center mt-6 max-w-2xl lg:text-lg",children:[(0,s.jsxs)("p",{className:"text-center md:text-left",children:["The Exigent symbol marks our striving for e",(0,s.jsx)("span",{children:(0,s.jsx)(i.default,{src:"/assets/small-x.svg",alt:"x",width:16,height:16,className:"w-3 inline"})}),"cellence."]}),(0,s.jsx)("p",{className:"text-center md:text-left",children:"It also serves as a place or item of value."})]}),(0,s.jsx)("div",{className:"w-3/4 px-6 md:1/2 mt-12 mx-auto",children:(0,s.jsx)(i.default,{src:"/assets/Asset12.png",alt:"Map",width:500,height:300,className:"mx-auto w-5/6 lg:w-[90%] px-4"})})]})},67206:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var s=a(89351);let i=()=>(0,s.jsx)("footer",{className:"fixed bottom-0 w-full bg-white/60 backdrop-blur-lg blur-sm h-16",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"})})},32864:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(89351),i=a(78668),r=a.n(i),n=a(74894);let o=()=>(0,s.jsxs)("div",{className:"text-center mx-auto max-w-[460px] mt-16 md:max-w-4xl lg:max-w-5xl xl:max-w-5xl",children:[(0,s.jsx)("h3",{className:"text-3xl px-6 md:px-36 md:text-4xl",children:"Notable Investments & Partnerships"}),(0,s.jsx)("div",{className:"h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"}),(0,s.jsxs)("div",{className:"mt-12 mx-auto text-base max-w-[280px] md:max-w-3xl md:mx-12 md:grid md:grid-cols-3 lg:flex lg:max-w-6xl",children:[(0,s.jsxs)("div",{className:"mt-6 text-base",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/assets/investments/XAI.png",alt:"xAI Logo",width:64,height:64,className:"mx-auto"})}),(0,s.jsx)("div",{className:"mt-8 text-[18px] md:mt-9 md:text-sm md:w-full md:px-2 md:leading-6 lg:text-base xl:text-[18px] xl:w-66 xl:leading-7",children:(0,s.jsx)("h1",{className:r().className,children:(0,s.jsx)("span",{className:"font-light italic",children:"We are early backers of Elon Musk in his mission to build the worlds leading artificial intelligence company, xAI"})})})]}),(0,s.jsxs)("div",{className:"mt-8 px-4",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/assets/investments/HP.png",alt:"HighPost Capital Logo",width:56,height:56,className:"mx-auto"})}),(0,s.jsx)("div",{className:"mt-6 text-[18px] md:w-full md:px-2 xl:w-66 xl:px-10 xl:leading-7",children:(0,s.jsx)("h1",{className:r().className,children:(0,s.jsx)("span",{className:"font-light md:text-sm lg:text-base md:leading-6 xl:text-[18px] italic",children:"We are GP partners with Bezos and Moros families in HighPost Capital and anchor investors in the firms consumer-focused investment funds"})})})]}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("div",{className:"lg:w-64 px-4",children:(0,s.jsx)(n.default,{src:"/assets/investments/Insightec.png",alt:"Insightec Logo",width:160,height:100,className:"mx-auto mt-6"})}),(0,s.jsx)("div",{className:"mt-11 text-[18px]  md:w-full md:px-2 xl:w-66 xl:leading-7",children:(0,s.jsx)("h1",{className:r().className,children:(0,s.jsx)("span",{className:"font-light md:text-sm lg:text-base md:leading-6 xl:text-[18px] italic",children:"We are board members and major shareholders in Insightec, the world leader in incisionless brain surgery"})})})]})]})]})},63225:(t,e,a)=>{"use strict";a.a(t,async(t,s)=>{try{a.d(e,{Z:()=>t});var i=a(71851);let t=(await (0,i.createProxy)(String.raw`/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/components/MeetTheTeamTwo.tsx`)).default;s()}catch(t){s(t)}},1)},32617:(t,e,a)=>{"use strict";a.a(t,async(t,s)=>{try{a.r(e),a.d(e,{default:()=>t});var i=a(71851);let t=(await (0,i.createProxy)(String.raw`/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/components/NavBar.tsx`)).default;s()}catch(t){s(t)}},1)},88658:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(89351),i=a(5404),r=a.n(i),n=a(66601),o=a.n(n),l=a(74894);let c=()=>(0,s.jsxs)("div",{className:"mt-24 text-center mx-auto justify-items-center sm:max-w-[420px] md:max-w-3xl lg:max-w-5xl",children:[(0,s.jsx)("h3",{className:"text-3xl justify-self-center mb-4 md:text-4xl lg:text-4xl",children:"Strategic Advisors & Domain Experts"}),(0,s.jsx)("div",{className:"redline justify-self-center mb-8 h-[3px] w-[120px] bg-red-500 rounded"}),(0,s.jsxs)("div",{className:"mt-8 max-w-[300px] mx-auto md:max-w-3xl md:px-4 md:grid md:grid-cols-11 md:gap-4 lg:max-w-6xl",children:[(0,s.jsx)("div",{className:"my-6 md:my-0 md:col-span-4 border border-gray-300 px-2 h-[400px]",children:(0,s.jsxs)("div",{className:r().className,children:[(0,s.jsx)("div",{className:"mt-10 w-3/5 mx-auto",children:(0,s.jsx)(l.default,{src:"/assets/team/Carter.png",alt:"Sir General Nick Carter",width:200,height:200})}),(0,s.jsx)("p",{className:"text-3xl mt-2 font-normal",children:"Sir General Nick Carter"}),(0,s.jsxs)("div",{className:o().className,children:[(0,s.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:"Strategic Advisory"}),(0,s.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:"Aerospace & Defence"})]})]})}),(0,s.jsx)("div",{className:"my-6 md:my-0 md:col-span-3 border border-gray-300 px-2  h-[400px] lg:mb-4",children:(0,s.jsxs)("div",{className:r().className,children:[(0,s.jsx)("div",{className:"mt-14 md:mt-10 md:w-4/5 mx-auto w-[188px]",children:(0,s.jsx)(l.default,{src:"/assets/team/David.png",alt:"Dr. Elie David",width:188,height:188})}),(0,s.jsx)("p",{className:"text-3xl mt-4 font-normal",children:"Dr. Elie David"}),(0,s.jsxs)("div",{className:o().className,children:[(0,s.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:"Strategic Advisory"}),(0,s.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:"Artificial Intelligence"})]})]})}),(0,s.jsx)("div",{className:"md:col-span-4 md:mt-0 border border-gray-300 px-2 h-[400px]",children:(0,s.jsxs)("div",{className:r().className,children:[(0,s.jsx)("div",{className:"mt-10 w-3/5 mx-auto",children:(0,s.jsx)(l.default,{src:"/assets/team/Hoenlein.png",alt:"Hon. Malcolm Hoenlein",width:200,height:200})}),(0,s.jsx)("p",{className:"text-3xl mt-2 font-normal",children:"Hon. Malcolm Hoenlein"}),(0,s.jsxs)("div",{className:o().className,children:[(0,s.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:"Global Ambassador"}),(0,s.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:"Exigent Family Office"})]})]})})]})]})},37973:(t,e,a)=>{"use strict";a.a(t,async(t,s)=>{try{a.r(e),a.d(e,{default:()=>l,metadata:()=>c});var i=a(89351);a(5023);var r=a(32617),n=a(67206),o=t([r]);r=(o.then?(await o)():o)[0];let c={title:"Create Next App",description:"Generated by create next app"};function l({children:t}){return(0,i.jsx)("html",{lang:"en",children:(0,i.jsxs)("body",{children:[(0,i.jsx)(r.default,{}),t,(0,i.jsx)(n.Z,{})]})})}s()}catch(t){s(t)}})},23455:(t,e,a)=>{"use strict";a.a(t,async(t,s)=>{try{a.r(e),a.d(e,{default:()=>p});var i=a(89351),r=a(74894),n=a(44962),o=a(99829),l=a(32864),c=a(88658),d=a(82134),x=a(10993),h=a(63225),m=t([n,h]);[n,h]=m.then?(await m)():m;let u={next:{revalidate:30}};async function p(){let t=await n.L.fetch('*[_type == "person" && order < 12] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }',{},u);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"fixed inset-0 bg-white z-[999999] animate-[backgroundanimation_9.5s_ease-in-out_forwards]"}),(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)("div",{className:"w-full max-w-[1200px] mx-auto",children:(0,i.jsxs)("div",{className:"relative z-[9999999] animate-[backgroundanimation_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:[(0,i.jsx)("div",{className:"absolute left-[35.7vw] top-[1.5vw] w-[5.0vw] animate-[animation-x_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:(0,i.jsx)(r.default,{src:"/assets/logo-x.svg",alt:"Logo X",width:75,height:75})}),(0,i.jsx)("div",{className:"absolute top-[0.4vw] left-0 right-0 mx-auto w-[40vw] animate-[animation-1_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:(0,i.jsx)(r.default,{src:"/assets/logo-ani-e.svg",alt:"Logo E",width:320,height:320})}),(0,i.jsx)("div",{className:"absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-2_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]",children:"traordinary People"}),(0,i.jsx)("div",{className:"absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-3_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]",children:"emplary Values"}),(0,i.jsx)("div",{className:"absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-4_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]",children:"ceptional Opportunities"}),(0,i.jsx)("div",{className:"absolute left-[41.0vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-4_9.5s_cubic-bezier(0.5,0,0,1)_forwards] top-[calc(50%-2px)]",children:"ceptional"}),(0,i.jsx)("div",{className:"absolute top-[0.2vw] left-0 right-0 mx-auto w-[40vw] animate-[animation-8_9.5s_ease-in-out_forwards]",children:(0,i.jsx)(r.default,{src:"/assets/logo-ani.svg",alt:"Final Animated Logo",width:320,height:320})})]})})}),(0,i.jsx)("div",{className:"mt-36 text-center mx-auto max-w-5xl",children:(0,i.jsxs)("div",{className:"justify-items-center mx-auto max-w-3xl",children:[(0,i.jsx)("h3",{className:"max-w-[320px] text-xl font-semibold sm:max-w-[500px] sm:text-2xl  sm:px-8  md:text-2xl md:max-w-2xl lg:text-2xl xl:text-[26px] text-gray-500",children:"Exigent is a diversified financial services company with three distinct businesses."}),(0,i.jsx)("div",{className:"h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"})]})}),(0,i.jsx)(x.Z,{}),(0,i.jsx)(h.Z,{persons:t}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(d.Z,{})]})}s()}catch(t){s(t)}})},44962:(t,e,a)=>{"use strict";a.a(t,async(t,s)=>{try{a.d(e,{L:()=>t,i:()=>o});var i=a(90729),r=a(38203),n=a.n(r);let t=(0,i.eI)({projectId:"t79x65c2",dataset:"production",apiVersion:"2024-01-01",useCdn:!1}),l=n()(t);function o(t){return l.image(t)}s()}catch(t){s(t)}})},11168:(t,e,a)=>{"use strict";a.d(e,{n:()=>i});var s=a(46242);let i=(0,s.createServerReference)("508612faf0cb5d2ad9c09337503539559a64dd4a",s.callServer,void 0,s.findSourceMapURL,"revalidateSyncTags")},73881:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(40771);let i=t=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",t.params,"favicon.ico")+""}]},5023:()=>{},23824:()=>{}};var e=require("../webpack-runtime.js");e.C(t);var a=t=>e(e.s=t),s=e.X(0,[147,97,917,894,783],()=>a(39627));module.exports=s})();