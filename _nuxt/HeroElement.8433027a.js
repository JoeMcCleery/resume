import{_ as m}from"./ImageComponent.vue.376781f7.js";import{_ as u}from"./nuxt-link.e753faa6.js";import{g as d,y as k,s as f,v as b,o as h,c as p,b as a,w as _,a as o,t as s,l as x,n as g}from"./entry.e668bd82.js";const v={key:0,class:"h-24 flex"},w={class:"relative aspect-square w-24 h-24"},y={class:"flex flex-col p-4"},C={class:"text-sm line-clamp-2"},j=d({__name:"HeroElement",props:{blok:{type:Object,required:!0}},setup(e){const l=e,n=k(()=>{let t="";switch(l.blok.link.linktype){case"story":t=l.blok.link.story.url,t.charAt(0)!=="/"&&(t="/"+t);break;case"url":t=l.blok.link.url;break}return t});return(t,N)=>{const r=m,c=u,i=f("editable");return e.blok?b((h(),p("article",v,[a(c,{to:x(n),rel:e.blok.link.rel,target:e.blok.link.target,class:"group flex flex-grow focus-default rounded-2xl overflow-hidden neumorphic-animated"},{default:_(()=>[o("div",w,[a(r,{image:e.blok.image,sizes:"192px",class:"object-cover absolute w-full h-full rounded-2xl neumorphic-sm border-none"},null,8,["image"])]),o("div",y,[o("p",null,s(e.blok.link.title),1),o("p",C,s(e.blok.description),1)])]),_:1},8,["to","rel","target"])])),[[i,e.blok]]):g("",!0)}}});export{j as default};
