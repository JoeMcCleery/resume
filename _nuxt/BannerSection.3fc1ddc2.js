import{u as U}from"./vue.f36acd1f.8c4e697e.js";import{I,J as G,K as S,L as E,M as P,N as V,O as T,Q as W,s as F,R,D as p,h as k,C as M,g as J,E as Q,o as $,n as C,q as z,v as Y,x as X,w as Z,b as O,a as q,S as K,c as ee,t as te}from"./entry.bf04bf29.js";import{_ as ie}from"./SectionContainer.vue.e874e909.js";async function re(e,t){return await oe(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function oe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function N(e){return t=>t?e[t]||t:e.missingValue}function ne({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=N(t));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=N(o[n]))}),(n={})=>Object.entries(n).filter(([c,l])=>typeof l<"u").map(([c,l])=>{const d=o[c];return typeof d=="function"&&(l=d(n[c])),c=typeof t=="function"?t(c):c,e(c,l)}).join(r)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function se(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function ae(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ce(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function le(e){const t={options:e},r=(o,n={})=>D(t,o,n),i=(o,n={},s={})=>r(o,{...s,modifiers:P(n,s.modifiers||{})}).url;for(const o in e.presets)i[o]=(n,s,c)=>i(n,s,{...e.presets[o],...c});return i.options=e,i.getImage=r,i.getMeta=(o,n)=>de(t,o,n),i.getSizes=(o,n)=>me(t,o,n),t.$img=i,i}async function de(e,t,r){const i=D(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await re(e,i.url)}function D(e,t,r){var d,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=ue(e,r.provider||e.options.provider),n=fe(e,r.preset);if(t=I(t)?t:G(t),!i.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=S(e.options.alias[g],t.substr(g.length)));if(i.validateDomains&&I(t)){const g=E(t).host;if(!e.options.domains.find(y=>y===g))return{url:t}}const s=P(r,n,o);s.modifiers={...s.modifiers};const c=s.modifiers.format;(d=s.modifiers)!=null&&d.width&&(s.modifiers.width=h(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=h(s.modifiers.height));const l=i.getImage(t,s,e);return l.format=l.format||c||"",l}function ue(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function fe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function me(e,t,r){var f,_,x,w,j;const i=h((f=r.modifiers)==null?void 0:f.width),o=h((_=r.modifiers)==null?void 0:_.height),n=ce(r.sizes),s=(x=r.densities)!=null&&x.trim()?se(r.densities.trim()):e.options.densities;ae(s);const c=i&&o?o/i:0,l=[],d=[];if(Object.keys(n).length>=1){for(const m in n){const v=A(m,String(n[m]),o,c,e);if(v!==void 0){l.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const b of s)d.push({width:v._cWidth*b,src:B(e,t,r,v,b)})}}ge(l)}else for(const m of s){const v=Object.keys(n)[0];let b=A(v,String(n[v]),o,c,e);b===void 0&&(b={size:"",screenMaxWidth:0,_cWidth:(w=r.modifiers)==null?void 0:w.width,_cHeight:(j=r.modifiers)==null?void 0:j.height}),d.push({width:m,src:B(e,t,r,b,m)})}he(d);const u=d[d.length-1],g=l.length?l.map(m=>`${m.media?m.media+" ":""}${m.size}`).join(", "):void 0,y=g?"w":"x",a=d.map(m=>`${m.src} ${m.width}${y}`).join(", ");return{sizes:g,srcset:a,src:u==null?void 0:u.src}}function A(e,t,r,i,o){const n=o.options.screens&&o.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let c=parseInt(t);if(!n||!c)return;s&&(c=Math.round(c/100*n));const l=i?Math.round(c*i):r;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:l}}function B(e,t,r,i,o){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},r)}function ge(e){var r;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function he(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ve="https://a.storyblok.com",ye=(e,{modifiers:t={},baseURL:r=ve}={})=>{const{fit:i,smart:o,width:n="0",height:s="0",filters:c={},format:l,quality:d}=t,u=e.endsWith(".svg"),g=!u&&(n!=="0"||s!=="0");u||(l&&(c.format=l+""),d&&(c.quality=d+""));const y=Object.entries(c||{}).map(w=>`${w[0]}(${w[1]})`).join(":"),a=S(i?`fit-${i}`:"",g?`${n}x${s}`:"",o?"smart":"",y?"filters:"+y:""),{pathname:f}=E(e);return{url:V(S(f,a?"/m/":"",a),r)}},pe=Object.freeze(Object.defineProperty({__proto__:null,getImage:ye},Symbol.toStringTag,{value:"Module"})),be=ne({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),we=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=be(t)||"_";return r||(r=S(i.options.nuxt.baseURL,"/_ipx")),{url:S(r,o,T(e))}},Se=!0,_e=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,getImage:we,supportsAlias:_e,validateDomains:Se},Symbol.toStringTag,{value:"Module"})),L={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};L.providers={storyblok:{provider:pe,defaults:{baseURL:"https://a.storyblok.com"}},ipxStatic:{provider:xe,defaults:{}}};const H=()=>{const e=F(),t=R();return t.$img||t._img||(t._img=le({...L,nuxt:{baseURL:e.app.baseURL}}))},$e={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ze=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=H(),o=p(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:o}},ke={...$e,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},je=k({name:"NuxtImg",props:ke,emits:["load","error"],setup:(e,t)=>{const r=H(),i=ze(e),o=M(!1),n=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),s=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(a.sizes=n.value.sizes,a.srcset=n.value.srcset),a}),c=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||o.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},i.options.value)}),l=p(()=>e.sizes?n.value.src:r(e.src,i.modifiers.value,i.options.value)),d=p(()=>c.value?c.value:l.value);if(e.preload){const a=Object.values(n.value).every(f=>f);U({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:d.value}}]})}const u=M(),y=R().isHydrating;return J(()=>{if(c.value){const a=new Image;a.src=l.value,e.sizes&&(a.sizes=n.value.sizes||"",a.srcset=n.value.srcset),a.onload=f=>{o.value=!0,t.emit("load",f)};return}u.value&&(u.value.complete&&y&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=a=>{t.emit("load",a)},u.value.onerror=a=>{t.emit("error",a)})}),()=>Q("img",{ref:u,src:d.value,...s.value,...t.attrs})}}),Ie=k({__name:"ImageComponent",props:{image:{type:Object,required:!0}},setup(e){return(t,r)=>{const i=je;return e.image.id?($(),C(i,{key:0,provider:"storyblok",format:"webp",src:e.image.filename,title:e.image.title,alt:e.image.alt,copyright:e.image.copyright,source:e.image.source},null,8,["src","title","alt","copyright","source"])):z("",!0)}}}),We={class:"relative h-full container m-auto p-4 flex justify-center items-center flex-col space-between space-y-4 z-10"},Me={key:0,class:"text-6xl font-bold text-center"},Ae=k({__name:"BannerSection",props:{blok:{type:Object,required:!0}},setup(e){return(t,r)=>{const i=Ie,o=ie,n=Y("editable");return e.blok?X(($(),C(o,{key:0,blok:e.blok,class:"w-full h-96"},{default:Z(()=>[O(i,{image:e.blok.background_image,class:"object-cover absolute w-full h-full"},null,8,["image"]),q("div",{class:"absolute w-full h-full bg-context",style:K(`opacity: ${e.blok.overlay_opacity/100}`)},null,4),q("div",We,[O(i,{image:e.blok.banner_image,class:"rounded-full aspect-square h-40"},null,8,["image"]),e.blok.banner_text?($(),ee("h1",Me,te(e.blok.banner_text),1)):z("",!0)])]),_:1},8,["blok"])),[[n,e.blok]]):z("",!0)}}});export{Ae as default};