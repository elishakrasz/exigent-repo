(()=>{var t={};t.id=931,t.ids=[931],t.modules={20399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:t=>{"use strict";t.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:t=>{"use strict";t.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:t=>{"use strict";t.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:t=>{"use strict";t.exports=require("assert")},78893:t=>{"use strict";t.exports=require("buffer")},17702:t=>{"use strict";t.exports=require("events")},32615:t=>{"use strict";t.exports=require("http")},35240:t=>{"use strict";t.exports=require("https")},98216:t=>{"use strict";t.exports=require("net")},19801:t=>{"use strict";t.exports=require("os")},55315:t=>{"use strict";t.exports=require("path")},86624:t=>{"use strict";t.exports=require("querystring")},76162:t=>{"use strict";t.exports=require("stream")},82452:t=>{"use strict";t.exports=require("tls")},74175:t=>{"use strict";t.exports=require("tty")},17360:t=>{"use strict";t.exports=require("url")},21764:t=>{"use strict";t.exports=require("util")},71568:t=>{"use strict";t.exports=require("zlib")},6005:t=>{"use strict";t.exports=require("node:crypto")},78668:t=>{t.exports={style:{fontFamily:"'Lato', 'Lato Fallback'"},className:"__className_544c45"}},83939:t=>{t.exports={style:{fontFamily:"'Bodoni Moda', 'Bodoni Moda Fallback'",fontStyle:"normal"},className:"__className_79d478"}},31140:t=>{t.exports={style:{fontFamily:"'Lato', 'Lato Fallback'"},className:"__className_544c45"}},5404:t=>{t.exports={style:{fontFamily:"'Bodoni Moda', 'Bodoni Moda Fallback'",fontStyle:"normal"},className:"__className_79d478"}},66601:t=>{t.exports={style:{fontFamily:"'Lato', 'Lato Fallback'"},className:"__className_544c45"}},39627:(t,e,s)=>{"use strict";s.r(e),s.d(e,{GlobalError:()=>n.a,__next_app__:()=>h,pages:()=>d,routeModule:()=>p,tree:()=>c});var a=s(3003),r=s(14293),i=s(66550),n=s.n(i),o=s(86979),l={};for(let t in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(t)&&(l[t]=()=>o[t]);s.d(e,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,23455)),"/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/page.tsx"],metadata:{icon:[async t=>(await Promise.resolve().then(s.bind(s,73881))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,37973)),"/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,52075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async t=>(await Promise.resolve().then(s.bind(s,73881))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/page.tsx"],h={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},59632:(t,e,s)=>{"use strict";s.r(e),s.d(e,{"47f0056d599dd073fd4350a95791b576bbe8d91b":()=>r.b,"508612faf0cb5d2ad9c09337503539559a64dd4a":()=>a.n,"92ac37075f28a05c29f63ef02d9c264fdd56a5e8":()=>a.N});var a=s(16218),r=s(86816)},36171:(t,e,s)=>{Promise.resolve().then(s.bind(s,55443)),Promise.resolve().then(s.bind(s,30894)),Promise.resolve().then(s.bind(s,37897)),Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.t.bind(s,79404,23)),Promise.resolve().then(s.bind(s,57232))},20470:(t,e,s)=>{Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,92639,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23)),Promise.resolve().then(s.t.bind(s,22816,23))},90158:(t,e,s)=>{Promise.resolve().then(s.bind(s,69652))},3221:function(t,e,s){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(t,e,s,a){void 0===a&&(a=s),Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[s]}})}:function(t,e,s,a){void 0===a&&(a=s),t[a]=e[s]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)"default"!==s&&Object.prototype.hasOwnProperty.call(t,s)&&r(e,t,s);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ImageUrlBuilder=void 0;var o=n(s(77435)),l=["clip","crop","fill","fillmax","max","scale","min"],c=["top","bottom","left","right","center","focalpoint","entropy"],d=["format"];e.default=function(t){if(t&&"config"in t&&"function"==typeof t.config){var e=t.config(),s=e.apiHost,a=e.projectId,r=e.dataset,i=s||"https://api.sanity.io";return new h(null,{baseUrl:i.replace(/^https:\/\/api\./,"https://cdn."),projectId:a,dataset:r})}if(t&&"clientConfig"in t&&"object"==typeof t.clientConfig){var n=t.clientConfig,s=n.apiHost,a=n.projectId,r=n.dataset,i=s||"https://api.sanity.io";return new h(null,{baseUrl:i.replace(/^https:\/\/api\./,"https://cdn."),projectId:a,dataset:r})}return new h(null,t||{})};var h=function(){function t(t,e){this.options=t?a(a({},t.options||{}),e||{}):a({},e||{})}return t.prototype.withOptions=function(e){var s=e.baseUrl||this.options.baseUrl,r={baseUrl:s};for(var i in e)e.hasOwnProperty(i)&&(r[function(t){for(var e=o.SPEC_NAME_TO_URL_NAME_MAPPINGS,s=0;s<e.length;s++){var a=e[s],r=a[0],i=a[1];if(t===r||t===i)return r}return t}(i)]=e[i]);return new t(this,a({baseUrl:s},r))},t.prototype.image=function(t){return this.withOptions({source:t})},t.prototype.dataset=function(t){return this.withOptions({dataset:t})},t.prototype.projectId=function(t){return this.withOptions({projectId:t})},t.prototype.bg=function(t){return this.withOptions({bg:t})},t.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},t.prototype.width=function(t){return this.withOptions({width:t})},t.prototype.height=function(t){return this.withOptions({height:t})},t.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},t.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},t.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},t.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},t.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},t.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},t.prototype.blur=function(t){return this.withOptions({blur:t})},t.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},t.prototype.rect=function(t,e,s,a){return this.withOptions({rect:{left:t,top:e,width:s,height:a}})},t.prototype.format=function(t){return this.withOptions({format:t})},t.prototype.invert=function(t){return this.withOptions({invert:t})},t.prototype.orientation=function(t){return this.withOptions({orientation:t})},t.prototype.quality=function(t){return this.withOptions({quality:t})},t.prototype.forceDownload=function(t){return this.withOptions({download:t})},t.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},t.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},t.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},t.prototype.fit=function(t){if(-1===l.indexOf(t))throw Error('Invalid fit mode "'.concat(t,'"'));return this.withOptions({fit:t})},t.prototype.crop=function(t){if(-1===c.indexOf(t))throw Error('Invalid crop mode "'.concat(t,'"'));return this.withOptions({crop:t})},t.prototype.saturation=function(t){return this.withOptions({saturation:t})},t.prototype.auto=function(t){if(-1===d.indexOf(t))throw Error('Invalid auto mode "'.concat(t,'"'));return this.withOptions({auto:t})},t.prototype.pad=function(t){return this.withOptions({pad:t})},t.prototype.vanityName=function(t){return this.withOptions({vanityName:t})},t.prototype.frame=function(t){if(1!==t)throw Error('Invalid frame value "'.concat(t,'"'));return this.withOptions({frame:t})},t.prototype.url=function(){return(0,o.default)(this.options)},t.prototype.toString=function(){return this.url()},t}();e.ImageUrlBuilder=h},86426:function(t,e,s){"use strict";var a=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(s(3221));t.exports=a.default},27647:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";e.default=function(t){var e=t.split("-"),a=e[1],r=e[2],i=e[3];if(!a||!r||!i)throw Error("Malformed asset _ref '".concat(t,"'. Expected an id like \"").concat(s,'".'));var n=r.split("x"),o=n[0],l=n[1],c=+o,d=+l;if(!(isFinite(c)&&isFinite(d)))throw Error("Malformed asset _ref '".concat(t,"'. Expected an id like \"").concat(s,'".'));return{id:a,width:c,height:d,format:i}}},64725:function(t,e){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function a(t){var e=t.split("/").slice(-1);return"image-".concat(e[0]).replace(/\.([a-z]+)$/,"-$1")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;if(!t)return null;if("string"==typeof t&&/^https?:\/\//.test("".concat(t)))e={asset:{_ref:a(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if(t&&"string"==typeof t._ref)e={asset:t};else if(t&&"string"==typeof t._id)e={asset:{_ref:t._id||""}};else if(t&&t.asset&&"string"==typeof t.asset.url)e={asset:{_ref:a(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=s({},t)}return t.crop&&(e.crop=t.crop),t.hotspot&&(e.hotspot=t.hotspot),function(t){if(t.crop&&t.hotspot)return t;var e=s({},t);return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}(e)}},77435:function(t,e,s){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.parseSource=e.SPEC_NAME_TO_URL_NAME_MAPPINGS=void 0;var i=r(s(27647)),n=r(s(64725));e.parseSource=n.default,e.SPEC_NAME_TO_URL_NAME_MAPPINGS=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"],["frame","frame"]],e.default=function(t){var s=a({},t||{}),r=s.source;delete s.source;var o=(0,n.default)(r);if(!o)throw Error("Unable to resolve image URL from source (".concat(JSON.stringify(r),")"));var l=o.asset._ref||o.asset._id||"",c=(0,i.default)(l),d=Math.round(o.crop.left*c.width),h=Math.round(o.crop.top*c.height),p={left:d,top:h,width:Math.round(c.width-o.crop.right*c.width-d),height:Math.round(c.height-o.crop.bottom*c.height-h)},m=o.hotspot.height*c.height/2,x=o.hotspot.width*c.width/2,u=o.hotspot.x*c.width,f=o.hotspot.y*c.height;return s.rect||s.focalPoint||s.ignoreImageParams||s.crop||(s=a(a({},s),function(t,e){var s,a=e.width,r=e.height;if(!(a&&r))return{width:a,height:r,rect:t.crop};var i=t.crop,n=t.hotspot,o=a/r;if(i.width/i.height>o){var l=Math.round(i.height),c=Math.round(l*o),d=Math.max(0,Math.round(i.top)),h=Math.max(0,Math.round(Math.round((n.right-n.left)/2+n.left)-c/2));h<i.left?h=i.left:h+c>i.left+i.width&&(h=i.left+i.width-c),s={left:h,top:d,width:c,height:l}}else{var c=i.width,l=Math.round(c/o),h=Math.max(0,Math.round(i.left)),p=Math.max(0,Math.round(Math.round((n.bottom-n.top)/2+n.top)-l/2));p<i.top?p=i.top:p+l>i.top+i.height&&(p=i.top+i.height-l),s={left:h,top:p,width:c,height:l}}return{width:a,height:r,rect:s}}({crop:p,hotspot:{left:u-x,top:f-m,right:u+x,bottom:f+m}},s))),function(t){var s=(t.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),a=t.vanityName?"/".concat(t.vanityName):"",r="".concat(t.asset.id,"-").concat(t.asset.width,"x").concat(t.asset.height,".").concat(t.asset.format).concat(a),i="".concat(s,"/images/").concat(t.projectId,"/").concat(t.dataset,"/").concat(r),n=[];if(t.rect){var o=t.rect,l=o.left,c=o.top,d=o.width,h=o.height;(0!==l||0!==c||h!==t.asset.height||d!==t.asset.width)&&n.push("rect=".concat(l,",").concat(c,",").concat(d,",").concat(h))}t.bg&&n.push("bg=".concat(t.bg)),t.focalPoint&&(n.push("fp-x=".concat(t.focalPoint.x)),n.push("fp-y=".concat(t.focalPoint.y)));var p=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return(p&&n.push("flip=".concat(p)),e.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(e){var s=e[0],a=e[1];void 0!==t[s]?n.push("".concat(a,"=").concat(encodeURIComponent(t[s]))):void 0!==t[a]&&n.push("".concat(a,"=").concat(encodeURIComponent(t[a])))}),0===n.length)?i:"".concat(i,"?").concat(n.join("&"))}(a(a({},s),{asset:c}))}},57232:(t,e,s)=>{"use strict";s.d(e,{default:()=>f});var a=s(68819),r=s(83939),i=s.n(r),n=s(31140),o=s.n(n),l=s(17266),c=s(46226),d=s(10720),h=s(86426),p=s.n(h);let m=(0,d.eI)({projectId:"t79x65c2",dataset:"production",apiVersion:"2024-01-01",useCdn:!1}),x=p()(m);var u=s(90434);function f({persons:t}){let[e,s]=(0,l.useState)(0);return(0,a.jsxs)("div",{className:"mt-32 text-center mx-auto justify-items-center",children:[(0,a.jsx)("h3",{className:"text-3xl justify-self-center mb-4",children:"Meet the Team"}),(0,a.jsx)("div",{className:"redline justify-self-center mb-8 h-[3px] w-[120px] bg-red-500 rounded"}),(0,a.jsxs)("div",{className:"relative w-full max-w-5xl mx-auto mt-10",children:[(0,a.jsx)("button",{className:"absolute left-[-2rem] top-1/2 transform -translate-y-1/2 text-black font-bold p-2 z-10",onClick:()=>{s(e=>0===e?t.length-4:e-1)},style:{width:"40px",height:"40px"},children:(0,a.jsx)(c.default,{src:"/assets/arrow_left.png",alt:"Previous Arrow",width:40,height:40})}),(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsx)("div",{className:"flex transition-transform duration-500",style:{transform:`translateX(-${25*e}%)`},children:t.map((t,e)=>{var s;return(0,a.jsx)("div",{className:"flex-none w-1/4 px-2",style:{minWidth:"25%"},children:(0,a.jsx)(u.default,{href:`team/${t.slug.current}`,className:"",children:(0,a.jsx)("div",{className:"border border-gray-300 h-[315px] w-[230px]",children:(0,a.jsxs)("div",{className:i().className,children:[(0,a.jsx)("div",{className:"mt-10 w-3/5 mx-auto",children:(0,a.jsx)(c.default,{src:(s=t.image,x.image(s)).quality(100).url(),alt:t.name,width:150,height:150,className:"object-contain"})}),(0,a.jsx)("p",{className:"text-2xl font-semibold mt-2",children:t.name}),(0,a.jsxs)("div",{className:o().className,children:[(0,a.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:t.title}),(0,a.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:t.subtitle})]})]})})},e)},e)})})}),(0,a.jsx)("button",{className:"absolute right-[-2rem] top-1/2 transform -translate-y-1/2 text-black font-bold p-2 z-10",onClick:()=>{s(e=>e===t.length-4?0:e+1)},style:{width:"40px",height:"40px"},children:(0,a.jsx)(c.default,{src:"/assets/arrow_right.png",alt:"Next Arrow",width:40,height:40})})]})]})}},69652:(t,e,s)=>{"use strict";s.d(e,{default:()=>d});var a=s(68819);s(23824);var r=s(17266),i=s(46226),n=s(90434);let o={src:"/_next/static/media/close-white.a5ac7f7b.svg",height:13,width:13,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/exigent_base.b796f044.jpg",height:146,width:548,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAApYK//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAECMnL/2gAIAQEAAT8AhZ7P/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjL/2gAIAQMBAT8ArTP/2Q==",blurWidth:8,blurHeight:2},c={src:"/_next/static/media/menu.017d5aa9.svg",height:12,width:16,blurWidth:0,blurHeight:0},d=()=>{let[t,e]=(0,r.useState)(!1),[s,d]=(0,r.useState)(!1),h=()=>d(!1);return(0,r.useEffect)(()=>{let t=()=>{window.innerWidth>800&&e(!1)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),(0,a.jsxs)("div",{className:"sticky top-0 z-50 w-full md:max-w-[720px] lg:max-w-[940px] xl:max-w-[1180px] 2xl:max-w-[1320px] flex items-center justify-between lg:justify-between py-4 mx-auto px-8",children:[(0,a.jsx)("div",{children:(0,a.jsx)(n.default,{href:"/",className:"w-36 mb-2",children:(0,a.jsx)(i.default,{src:l,alt:"Logo",className:"max-h-16"})})}),(0,a.jsxs)("div",{className:"hidden md:flex md:flex-row md:items-center space-x-6 text-base md:text-lg text-gray-500",children:[(0,a.jsxs)(n.default,{href:"/about",className:"group border-b-3 border-transparent",children:["About",(0,a.jsx)("div",{className:"border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,a.jsxs)(n.default,{href:"/team",className:"group border-b-3 border-transparent",children:["Team",(0,a.jsx)("div",{className:"border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,a.jsxs)("div",{className:"group relative border-b-3 border-transparent cursor-pointer mb-[6px]",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,a.jsx)("span",{children:"Services"}),s&&(0,a.jsxs)("div",{className:"absolute left-0 top-full w-56 opacity-100 transition-opacity duration-300",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,a.jsx)(n.default,{href:"/family",onClick:h,className:"block py-[2px] hover:text-red-700",children:"Family Office"}),(0,a.jsx)(n.default,{href:"/special",onClick:h,className:"block py-[2px] hover:text-red-700",children:"Investment Products"}),(0,a.jsx)(n.default,{href:"/strategic",onClick:h,className:"block py-[2px] hover:text-red-700",children:"Strategic Advisory"})]})]}),(0,a.jsxs)(n.default,{href:"/contact",className:"group border-b-3 border-transparent",children:["Contact",(0,a.jsx)("div",{className:"border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]})]}),(0,a.jsx)("button",{type:"button",className:"md:hidden",onClick:()=>e(!0),children:(0,a.jsx)(i.default,{src:c,alt:"Menu Icon"})}),(0,a.jsxs)("div",{className:`fixed top-0 right-0 h-max pb-6 w-1/4 max-w-xs px-6 text-base bg-gray-800 text-white transform ${t?"translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out z-50`,children:[(0,a.jsx)("button",{type:"button",className:"absolute top-4 left-4",onClick:()=>e(!1),children:(0,a.jsx)(i.default,{src:o,alt:"Close Menu"})}),(0,a.jsxs)("div",{className:"flex flex-col space-y-4 mt-12",children:[(0,a.jsx)(n.default,{href:"/about",className:"text-white",onClick:()=>e(!1),children:"About"}),(0,a.jsx)(n.default,{href:"/team",className:"text-white",onClick:()=>e(!1),children:"Team"}),(0,a.jsx)(n.default,{href:"/family",className:"text-white",onClick:()=>e(!1),children:"Family Office"}),(0,a.jsx)(n.default,{href:"/special",className:"text-white",onClick:()=>e(!1),children:"Special Situations"}),(0,a.jsx)(n.default,{href:"/strategic",className:"text-white",onClick:()=>e(!1),children:"Strategic Advisory"}),(0,a.jsx)(n.default,{href:"/contact",className:"text-white",onClick:()=>e(!1),children:"Contact"})]})]})]})}},45580:(t,e,s)=>{"use strict";s.d(e,{default:()=>r.a});var a=s(40266),r=s.n(a)},40266:(t,e,s)=>{"use strict";let{createProxy:a}=s(71851);t.exports=a("/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/node_modules/next/dist/client/link.js")},15516:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(89351),r=s(45580),i=s(74894);let n=()=>(0,a.jsxs)("div",{className:"px-8 max-w-[380px] sm-max-w-[480px] md:max-w-[840px] lg:max-w-[920px] xl:max-w-[10060] mt-12 mx-auto text-center grid grid-cols-1 lg:grid-cols-3 lg:gap-2",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"text-2xl font-semibold",children:"Family Office"}),(0,a.jsx)("p",{className:"text-gray-400 text-base mt-2 md:mt-0",children:"For high-net-worth families"}),(0,a.jsx)("div",{className:"w-2/3 mt-8 mx-auto md:w-1/2 lg:w-2/3",children:(0,a.jsx)(i.default,{src:"/assets/Birds.png",alt:"Family Office",width:300,height:200,className:"rounded-lg object-cover"})}),(0,a.jsx)(r.default,{href:"/family",className:"text-sm inline-block mt-4 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6",children:"Learn more"})]}),(0,a.jsxs)("div",{className:"py-4 md:mt-4 lg:py-0 lg:mt-0",children:[(0,a.jsx)("h1",{className:"text-2xl font-semibold",children:"Investment Products"}),(0,a.jsx)("p",{className:"text-gray-400 text-base mt-2 md:mt-0",children:"For well-qualified investors"}),(0,a.jsx)("div",{className:"w-2/3 mx-auto md:w-[275px] lg:w-2/3 lg:mt-2",children:(0,a.jsx)(i.default,{src:"/assets/ShipA.jpg",alt:"Investment Products",width:300,height:224,className:"rounded-lg object-cover"})}),(0,a.jsx)(r.default,{href:"/special",className:"text-sm mt-4 inline-block  hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6",children:"Learn more"})]}),(0,a.jsxs)("div",{className:"md:mt-4 lg:py-0 lg:mt-0",children:[(0,a.jsx)("h1",{className:"text-2xl font-semibold",children:"Strategic Advisory"}),(0,a.jsx)("p",{className:"text-gray-400 text-base mt-2 md:mt-0",children:"For businesses and corporates"}),(0,a.jsx)("div",{className:"w-2/3 px-[14px] mt-6 mx-auto  md:w-[275px] lg:w-[180px] lg:mt-6 xl:w-[224px] xl:mt-10",children:(0,a.jsx)(i.default,{src:"/assets/Cufflink.jpg",alt:"Strategic Advisory",width:300,height:208,className:"rounded-lg object-cover"})}),(0,a.jsx)(r.default,{href:"/strategic",className:"text-sm mt-4 inline-block md:mt-8 lg:mt-8 xl:mt-6 hover:bg-red-600 hover:text-white font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6",children:"Learn more"})]})]})},82134:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(89351),r=s(45580),i=s(74894);let n=()=>(0,a.jsxs)("div",{className:"mt-28 text-center mx-auto justify-items-center",children:[(0,a.jsx)("h3",{className:"text-3xl mb-4",children:"Contact"}),(0,a.jsx)("div",{className:"h-[3px] w-[60px] md:w-[120px] bg-red-500 rounded mx-auto mb-24"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-16",children:[(0,a.jsx)("div",{className:"text-left",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-lg font-normal font-sans",children:"Jerusalem"}),(0,a.jsx)("p",{className:"text-base font-light font-sans",children:"Wyndham Deeds Street #5"}),(0,a.jsx)("p",{className:"mb-8",children:"Jerusalem, Israel"}),(0,a.jsx)("h1",{className:"text-lg font-normal font-sans",children:"Herzliya"}),(0,a.jsx)("p",{className:"text-base font-light font-sans",children:"Arik Einstein #3"}),(0,a.jsx)("p",{className:"text-base font-light font-sans mb-36",children:"Herzliya, Israel"})]})}),(0,a.jsx)("div",{className:"text-left",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-base",children:"Israel 972-2-500-9450"}),(0,a.jsx)("p",{className:"mb-8 text-base",children:"US 1-646-506-9450"}),(0,a.jsx)("h1",{className:"text-base text-red-500 font-sans font-light",children:"info@exigentcap.com"})]})}),(0,a.jsxs)("div",{className:"flex space-x-3",children:[(0,a.jsxs)(r.default,{href:"https://www.linkedin.com/company/exigentcapitalgroup/",className:"mr-4 group relative",target:"_blank",children:[(0,a.jsx)(i.default,{src:"/assets/LinkedIn.png",alt:"LinkedIn",width:112,height:28,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,a.jsx)(i.default,{src:"/assets/RedLinkedIn.png",alt:"LinkedIn Red",width:112,height:28,className:"absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]}),(0,a.jsxs)(r.default,{href:"mailto:info@exigentcapitalgroup.com",className:"mr-4 group relative",children:[(0,a.jsx)(i.default,{src:"/assets/Email.png",alt:"Email Icon",width:24,height:24,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,a.jsx)(i.default,{src:"/assets/RedMail.png",alt:"Red Email Icon",width:24,height:24,className:"absolute top-0 left-0 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]}),(0,a.jsxs)(r.default,{href:"tel:info@exigentcapitalgroup.com",className:"mr-4 group relative",children:[(0,a.jsx)(i.default,{src:"/assets/Phone Icon.png",alt:"Phone Icon",width:16,height:16,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,a.jsx)(i.default,{src:"/assets/RedPhone.png",alt:"Red Phone Icon",width:16,height:16,className:"absolute top-0 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]}),(0,a.jsxs)(r.default,{href:"mailto:info@exigentcapitalgroup.com",className:"mr-4 group relative",children:[(0,a.jsx)(i.default,{src:"/assets/Location Icon.png",alt:"Location Icon",width:16,height:16,className:"transition-opacity duration-100 group-hover:opacity-0"}),(0,a.jsx)(i.default,{src:"/assets/RedLocation.png",alt:"Red Location Icon",width:16,height:16,className:"absolute top-0 left-1 transition-opacity duration-100 opacity-0 group-hover:opacity-100"})]})]})]})]})},99829:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(89351),r=s(74894);let i=()=>(0,a.jsxs)("div",{className:"max-w-2xl text-center justify-items-center mx-auto mt-36",children:[(0,a.jsx)("h3",{className:"text-3xl md:text-4xl mb-4",children:"Our Firm"}),(0,a.jsx)("div",{className:"h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"}),(0,a.jsxs)("div",{className:"text-base justify-self-center mt-6 max-w-2xl",children:[(0,a.jsxs)("p",{className:"text-center md:text-left",children:["The Exigent symbol marks our striving for e",(0,a.jsx)("span",{children:(0,a.jsx)(r.default,{src:"/assets/small-x.svg",alt:"x",width:20,height:20,className:"w-4 inline"})}),"cellence."]}),(0,a.jsx)("p",{className:"text-center md:text-left mt-2",children:"It also serves as a place or item of value."})]}),(0,a.jsx)("div",{className:"w-3/4 px-6 md:1/2 mt-12 mx-auto",children:(0,a.jsx)(r.default,{src:"/assets/Asset12.png",alt:"Map",width:500,height:300,className:"mx-auto"})})]})},67206:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(89351);let r=()=>(0,a.jsx)("footer",{className:"fixed bottom-0 w-full bg-white/60 backdrop-blur-lg blur-sm h-16",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"})})},32864:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(89351),r=s(78668),i=s.n(r),n=s(74894);let o=()=>(0,a.jsxs)("div",{className:"text-center mt-12 mx-auto max-w-4xl justify-items-center",children:[(0,a.jsx)("h3",{className:"text-3xl max-w-[300px] sm:max-w-[300px] sm:text-3xl md:text-4xl md:max-w-[560px] lg:text-4xl lg:max-w-4xl",children:"Notable Investments & Partnerships"}),(0,a.jsx)("div",{className:"h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-4"}),(0,a.jsxs)("div",{className:"mt-12 mx-auto max-w-[280px] md:max-w-[340px] text-base lg:flex lg:max-w-6xl",children:[(0,a.jsxs)("div",{className:"mt-6 text-base",children:[(0,a.jsx)("div",{children:(0,a.jsx)(n.default,{src:"/assets/investments/XAI.png",alt:"xAI Logo",width:64,height:64,className:"mx-auto"})}),(0,a.jsx)("div",{className:"mt-8 md:text-[18px] md:mt-10 lg:w-64 px-4",children:(0,a.jsx)("h1",{className:i().className,children:(0,a.jsx)("span",{className:"font-light italic",children:"We are early backers of Elon Musk in his mission to build the worlds leading artificial intelligence company, xAI"})})})]}),(0,a.jsxs)("div",{className:"mt-10 lg:w-64 px-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(n.default,{src:"/assets/investments/HP.png",alt:"HighPost Capital Logo",width:56,height:56,className:"mx-auto"})}),(0,a.jsx)("div",{className:"mt-8 md:text-[18px] md:mt-10 lg:mt-4 lg:w-64 px-4",children:(0,a.jsx)("h1",{className:i().className,children:(0,a.jsx)("span",{className:"font-light md:text-[18px] italic",children:"We are GP partners with Bezos and Moros families in HighPost Capital and anchor investors in the firms consumer-focused investment funds"})})})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("div",{className:"lg:w-64 px-4",children:(0,a.jsx)(n.default,{src:"/assets/investments/Insightec.png",alt:"Insightec Logo",width:160,height:100,className:"mx-auto mt-6"})}),(0,a.jsx)("div",{className:"mt-10 lg:max-w-full lg:mt-12 lg:w-64 px-4",children:(0,a.jsx)("h1",{className:i().className,children:(0,a.jsx)("span",{className:"font-light md:text-[18px] italic",children:"We are board members and major shareholders in Insightec, the world leader in incisionless brain surgery"})})})]})]})]})},94195:(t,e,s)=>{"use strict";s.a(t,async(t,a)=>{try{s.r(e),s.d(e,{default:()=>t});var r=s(71851);let t=(await (0,r.createProxy)(String.raw`/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/components/MeetTheTeam.tsx`)).default;a()}catch(t){a(t)}},1)},32617:(t,e,s)=>{"use strict";s.a(t,async(t,a)=>{try{s.r(e),s.d(e,{default:()=>t});var r=s(71851);let t=(await (0,r.createProxy)(String.raw`/home/elisha/dev/exigent_upgrade/nextjs-exigent-upgrade/src/app/components/NavBar.tsx`)).default;a()}catch(t){a(t)}},1)},88658:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(89351),r=s(5404),i=s.n(r),n=s(66601),o=s.n(n),l=s(74894);let c=()=>(0,a.jsxs)("div",{className:"mt-36 text-center mx-auto justify-items-center max-w-5xl",children:[(0,a.jsx)("h3",{className:"text-3xl justify-self-center mb-4",children:"Strategic Advisors & Domain Experts"}),(0,a.jsx)("div",{className:"redline justify-self-center mb-8 h-[3px] w-[120px] bg-red-500 rounded"}),(0,a.jsxs)("div",{className:"mt-8 mx-auto max-w-6xl grid grid-cols-11 gap-4",children:[(0,a.jsx)("div",{className:"col-span-4 border border-gray-300 px-2",children:(0,a.jsxs)("div",{className:i().className,children:[(0,a.jsx)("div",{className:"mt-10 w-3/5 mx-auto",children:(0,a.jsx)(l.default,{src:"/assets/team/Carter.png",alt:"Sir General Nick Carter",width:200,height:200})}),(0,a.jsx)("p",{className:"text-3xl mt-2 font-normal",children:"Sir General Nick Carter"}),(0,a.jsxs)("div",{className:o().className,children:[(0,a.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:"Strategic Advisory"}),(0,a.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:"Aerospace & Defence"})]})]})}),(0,a.jsx)("div",{className:"col-span-3 border border-gray-300 px-2",children:(0,a.jsxs)("div",{className:i().className,children:[(0,a.jsx)("div",{className:"mt-14 mx-auto w-[188px]",children:(0,a.jsx)(l.default,{src:"/assets/team/David.png",alt:"Dr. Elie David",width:188,height:188})}),(0,a.jsx)("p",{className:"text-3xl mt-4 font-normal",children:"Dr. Elie David"}),(0,a.jsxs)("div",{className:o().className,children:[(0,a.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:"Strategic Advisory"}),(0,a.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:"Artificial Intelligence"})]})]})}),(0,a.jsx)("div",{className:"col-span-4 border border-gray-300 px-2",children:(0,a.jsxs)("div",{className:i().className,children:[(0,a.jsx)("div",{className:"mt-10 w-3/5 mx-auto",children:(0,a.jsx)(l.default,{src:"/assets/team/Hoenlein.png",alt:"Hon. Malcolm Hoenlein",width:200,height:200})}),(0,a.jsx)("p",{className:"text-3xl mt-2 font-normal",children:"Hon. Malcolm Hoenlein"}),(0,a.jsxs)("div",{className:o().className,children:[(0,a.jsx)("p",{className:"text-[18px] italic mt-2 text-gray-600",children:"Global Ambassador"}),(0,a.jsx)("p",{className:"text-[18px] mb-12 text-gray-600",children:"Exigent Family Office"})]})]})})]})]})},37973:(t,e,s)=>{"use strict";s.a(t,async(t,a)=>{try{s.r(e),s.d(e,{default:()=>l,metadata:()=>c});var r=s(89351);s(5023);var i=s(32617),n=s(67206),o=t([i]);i=(o.then?(await o)():o)[0];let c={title:"Create Next App",description:"Generated by create next app"};function l({children:t}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsxs)("body",{children:[(0,r.jsx)(i.default,{}),t,(0,r.jsx)(n.Z,{})]})})}a()}catch(t){a(t)}})},23455:(t,e,s)=>{"use strict";s.a(t,async(t,a)=>{try{s.r(e),s.d(e,{default:()=>x});var r=s(89351),i=s(74894),n=s(44962),o=s(99829),l=s(15516),c=s(94195),d=s(32864),h=s(88658),p=s(82134),m=t([n,c]);[n,c]=m.then?(await m)():m;let u={next:{revalidate:30}};async function x(){let t=await n.L.fetch('*[_type == "person" && order < 12] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }',{},u);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-white z-[999999] animate-[backgroundanimation_9.5s_ease-in-out_forwards]"}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("div",{className:"w-full max-w-[1200px] mx-auto",children:(0,r.jsxs)("div",{className:"relative z-[9999999] animate-[backgroundanimation_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:[(0,r.jsx)("div",{className:"absolute left-[35.45vw] top-[2.5vw] w-[4.5vw] animate-[animation-x_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:(0,r.jsx)(i.default,{src:"/assets/logo-x.svg",alt:"Logo X",width:80,height:80})}),(0,r.jsx)("div",{className:"absolute top-[0.4vw] left-0 right-0 mx-auto w-[40vw] animate-[animation-1_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:(0,r.jsx)(i.default,{src:"/assets/logo-ani-e.svg",alt:"Logo E",width:400,height:400})}),(0,r.jsx)("div",{className:"absolute left-[40vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-2_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:"traordinary People"}),(0,r.jsx)("div",{className:"absolute left-[40vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-3_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:"emplary Values"}),(0,r.jsx)("div",{className:"absolute left-[40vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-4_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:"ceptional Opportunities"}),(0,r.jsx)("div",{className:"absolute left-[40vw] text-gray-400 uppercase font-[Bodoni Moda] text-[7vw] leading-[8.4vw] animate-[animation-4_9.5s_cubic-bezier(0.5,0,0,1)_forwards]",children:"ceptional"}),(0,r.jsx)("div",{className:"absolute top-[0.2vw] left-0 right-0 mx-auto w-[40vw] animate-[animation-8_9.5s_ease-in-out_forwards]",children:(0,r.jsx)(i.default,{src:"/assets/logo-ani.svg",alt:"Final Animated Logo",width:400,height:400})})]})})}),(0,r.jsx)("div",{className:"mt-36 text-center mx-auto max-w-5xl",children:(0,r.jsxs)("div",{className:"justify-items-center mx-auto max-w-3xl",children:[(0,r.jsx)("h3",{className:"max-w-[320px] text-xl sm:max-w-[500px] sm:text-xl  sm:px-8  md:text-2xl md:max-w-2xl lg:text-2xl xl:text-[26px] text-gray-500",children:"Exigent is a diversified financial services company with three distinct businesses."}),(0,r.jsx)("div",{className:"h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"})]})}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(c.default,{persons:t}),(0,r.jsx)(d.Z,{}),(0,r.jsx)(h.Z,{}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(p.Z,{})]})}a()}catch(t){a(t)}})},44962:(t,e,s)=>{"use strict";s.a(t,async(t,a)=>{try{s.d(e,{L:()=>t,i:()=>o});var r=s(90729),i=s(38203),n=s.n(i);let t=(0,r.eI)({projectId:"t79x65c2",dataset:"production",apiVersion:"2024-01-01",useCdn:!1}),l=n()(t);function o(t){return l.image(t)}a()}catch(t){a(t)}})},11168:(t,e,s)=>{"use strict";s.d(e,{n:()=>r});var a=s(46242);let r=(0,a.createServerReference)("508612faf0cb5d2ad9c09337503539559a64dd4a",a.callServer,void 0,a.findSourceMapURL,"revalidateSyncTags")},73881:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(40771);let r=t=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",t.params,"favicon.ico")+""}]},5023:()=>{},23824:()=>{}};var e=require("../webpack-runtime.js");e.C(t);var s=t=>e(e.s=t),a=e.X(0,[147,97,917,894,783],()=>s(39627));module.exports=a})();