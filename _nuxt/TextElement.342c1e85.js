import{g as o,y as i,o as s,c as l,l as u,n as a,W as m,s as x,v as d,m as p}from"./entry.e668bd82.js";const _=["innerHTML"],k=o({__name:"RichText",props:{text:{type:Object,required:!0}},setup(e){const t=e,n=i(()=>m(t.text));return(c,r)=>e.text?(s(),l("div",{key:0,class:"prose dark:prose-invert max-w-none",innerHTML:u(n)},null,8,_)):a("",!0)}}),h=o({__name:"TextElement",props:{blok:{type:Object,required:!0}},setup(e){return(t,n)=>{const c=k,r=x("editable");return e.blok?d((s(),p(c,{key:0,text:e.blok.text},null,8,["text"])),[[r,e.blok]]):a("",!0)}}});export{h as default};
