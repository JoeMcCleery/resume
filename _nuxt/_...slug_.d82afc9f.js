import{u as g,f as _,g as k,h as f,i as d,j as r,r as b,k as m,o as v,l as C,m as y,n as h}from"./entry.14533d8f.js";import{u as x}from"./useAsyncStoryblok.9a7849b8.js";import{u as M}from"./vue.f36acd1f.86e5e31d.js";function T(u,l){const{title:t,titleTemplate:s,...a}=u;return M({title:t,titleTemplate:s,_flatMeta:a},{...l,transform(n){const o=g({...n._flatMeta});return delete n._flatMeta,{...n,meta:o}}})}const A=_({__name:"[...slug]",emits:["pageLayout","pageColours"],async setup(u,{emit:l}){let t,s;const a=l,n=h(),o=k().params.slug,e=([t,s]=f(()=>x("pages/"+(o&&o.length>0?o.join("/"):"home"),{version:n.public.storyblokVersion,resolve_links:"url"},{resolveLinks:"url"})),t=await t,s(),t);if(e.value.status)throw d({statusCode:e.value.status,statusMessage:e.value.response});a("pageLayout",e.value.content.layout),a("pageColours",{light:{textColour:r(e.value.content.text_colour.color),backgroundColour:r(e.value.content.background_colour.color)},dark:{textColour:r(e.value.content.text_colour_dark.color),backgroundColour:r(e.value.content.background_colour_dark.color)}});const c=e.value.content.seo.title||n.public.websiteTitle+(o&&o.length>0?` - ${o.join(" - ")}`:""),i=e.value.content.seo.description||"";return T({title:c,ogTitle:c,description:i,ogDescription:i,ogImage:""}),(w,S)=>{const p=b("StoryblokComponent");return m(e)?(v(),C(p,{key:0,blok:m(e).content},null,8,["blok"])):y("",!0)}}});export{A as default};
