import{_ as n}from"./D53pkKto.js";import{g as i,y as s,s as c,v as k,o as u,m,w as b,d,t as f,l as y,n as p}from"./DOtT7igE.js";const h=i({__name:"LinkElement",props:{blok:{type:Object,required:!0}},setup(t){const l=t,o=s(()=>{let e="";switch(l.blok.link.linktype){case"story":e=l.blok.link.story.url,e.charAt(0)!=="/"&&(e="/"+e);break;case"url":e=l.blok.link.url;break}return e});return(e,x)=>{const r=n,a=c("editable");return t.blok?k((u(),m(r,{key:0,to:y(o),rel:t.blok.link.rel,target:t.blok.link.target,class:"underline focus-default"},{default:b(()=>[d(f(t.blok.link.title),1)]),_:1},8,["to","rel","target"])),[[a,t.blok]]):p("",!0)}}});export{h as default};
