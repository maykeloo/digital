import{u as m}from"./asyncData.c0c7e662.js";import{N as c,J as p,d as i,ae as u,r as l,O as n,k as d}from"./entry.124c8846.js";import f from"./Ellipsis.fb23934c.js";import _ from"./ComponentPlaygroundData.137dfd9f.js";import"./TabsHeader.b7e70459.js";import"./ComponentPlaygroundProps.cfe4b30e.js";import"./ProseH4.b871b08f.js";import"./ProseCodeInline.e4b96011.js";import"./Badge.da06679d.js";import"./MDCSlot.1c6a3683.js";import"./slot.4ccb5c07.js";import"./ProseP.4d5eeb0b.js";import"./index.e5a4d9ce.js";import"./ComponentPlaygroundSlots.vue.d0548720.js";import"./ComponentPlaygroundTokens.vue.388c6fb5.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const E=d(g,[["__scopeId","data-v-1cd0b156"]]);export{E as default};