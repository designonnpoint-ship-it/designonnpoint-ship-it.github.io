import{A as l}from"./index-BU4aZydA.js";import{r as m}from"./useSendQuoteEmail-De619kgs.js";const d=6e3;async function f(e){const o=new AbortController,r=setTimeout(()=>o.abort(),d);try{const i=e+(e.includes("?")?"&":"?")+"cb="+Date.now(),a=await fetch(i,{mode:"cors",cache:"no-cache",signal:o.signal});if(!a.ok)return;const s=await a.blob();return await new Promise((t,c)=>{const n=new FileReader;n.onloadend=()=>t(n.result),n.onerror=c,n.readAsDataURL(s)})}catch{return}finally{clearTimeout(r)}}async function b({avatarUrl:e,materialSelections:o,materialCategories:r}){const[i,a]=await Promise.all([e?(async()=>{const t=await f(e);return t||(await l(e,400,"#ffffff").catch(()=>{})??void 0)})():Promise.resolve(void 0),o?m(o,r):Promise.resolve([])]),s=[];e&&!i&&s.push("Rep headshot");for(const t of a)typeof t.imageBase64=="string"&&t.imageBase64.length>0||s.push(`${t.categoryTitle}: ${t.optionName}`);return{repAvatarBase64:i,resolvedMaterials:a,missing:s}}function g(e){return`These images couldn't be loaded and will be missing from the PDF:

`+e.map(o=>`• ${o}`).join(`
`)+`

This estimate will be signed by the customer. Send the PDF anyway?`}export{g as b,b as p};
