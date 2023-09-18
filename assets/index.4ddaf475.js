import{_ as e,d as a,L as s,a as o,f as r,c as n,j as t,r as l,e as u,g as i,M as d,u as c,t as m,H as f,p,n as g,C as v}from"./index.1b7468c6.js";const _=a({name:"login",setup(){const e=s({username:void 0,password:void 0}),a=s({username:[{required:!0,message:"请输入帐号",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}]}),r=o(),n=c(),t=m(),{proxy:l}=f();return{formRef:r,form:e,rules:a,handleSubmit:()=>{r.value.validate().then((()=>{n.dispatch("user/login",e).then((e=>{const a=t.currentRoute.value.query.redirect||"/";n.commit("user/asyncUserInfo"),n.commit("tabs/asyncTabs"),n.commit("settings/asyncSettings"),t.replace(a),null==l||l.$message.success("登录成功")}))}))}}}}),b=e=>(p("data-v-40b9dc79"),e=e(),g(),e),h={class:"login-container"},y={class:"login-container-form"},x=b((()=>i("div",{class:"login-container-hello"},"您好!",-1))),w=b((()=>i("div",{class:"login-container-title"},"欢迎来到通用管理后台",-1))),S=v("登录"),U=b((()=>i("div",{class:"login-container-tips"},"Vue-Admin 开源通用后台管理模板",-1)));const q=e(_,[["render",function(e,a,s,o,c,m){const f=l("a-col"),p=l("Icon"),g=l("a-input"),v=l("a-form-item"),_=l("a-input-password"),b=l("a-button"),q=l("a-form"),I=l("a-row");return u(),r("div",h,[n(I,null,{default:t((()=>[n(f,{xs:0,md:12,xl:16}),n(f,{xs:24,md:12,xl:8},{default:t((()=>[i("div",y,[x,w,n(q,{ref:"formRef",model:e.form,rules:e.rules,onKeyup:d(e.handleSubmit,["enter"])},{default:t((()=>[n(v,{name:"username"},{default:t((()=>[n(g,{value:e.form.username,"onUpdate:value":a[0]||(a[0]=a=>e.form.username=a),autocomplete:"off",placeholder:"请输入帐号"},{prefix:t((()=>[n(p,{icon:"UserOutlined",style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1}),n(v,{name:"password"},{default:t((()=>[n(_,{value:e.form.password,"onUpdate:value":a[1]||(a[1]=a=>e.form.password=a),autocomplete:"off",placeholder:"请输入密码"},{prefix:t((()=>[n(p,{icon:"LockOutlined",style:{color:"rgba(0, 0, 0, 0.25)"}})])),_:1},8,["value"])])),_:1}),n(v,null,{default:t((()=>[n(b,{type:"primary",onClick:a[2]||(a[2]=a=>e.handleSubmit())},{default:t((()=>[S])),_:1})])),_:1})])),_:1},8,["model","rules","onKeyup"])])])),_:1})])),_:1}),U])}],["__scopeId","data-v-40b9dc79"]]);export{q as default};
