import{B as x,r as v,u as P,b as C,o as E,d as T,e as c,f as r,h as m,g as t,t as s,F as b,n as V,m as y,i as $,j as A}from"./index-52e2f2b0.js";import{U as D}from"./UserCartStepComponent-0a9b2ac3.js";const I={class:"bg-light pt-5 pb-7 mt-10"},L={class:"container pt-10 pb-10"},R={class:"row justify-content-center flex-column flex-md-row"},S={class:"col-md-8 sticky-lg-top position-lg-sticky h-50"},U={class:"border rounded-4 p-4 mb-4"},j={class:"d-flex justify-content-between"},B=t("h4",{class:"mb-4"},"訂購資訊",-1),O={class:"table align-middle"},N={class:"align-middle"},q=t("th",{scope:"col"},"訂購編號",-1),F={scope:"col",id:"orderId"},H=t("th",{scope:"col"},"訂購日期",-1),M={scope:"col"},z=t("th",{scope:"row"},"姓名",-1),G=t("th",{scope:"row"},"Email",-1),J=t("th",{scope:"row"},"電話",-1),K={scope:"row"},Q=t("th",{scope:"row"},"地址",-1),W={scope:"row"},X=t("th",{scope:"row"},"訂購產品",-1),Y={scope:"row"},Z={class:"w-100"},tt={class:""},et={class:"mb-0"},ot={class:"mb-0"},st=t("th",{scope:"row"},"付款金額",-1),nt={scope:"row"},ct=t("th",{scope:"row"},"付款方式",-1),rt={scope:"row"},at=t("th",{scope:"row"},"付款狀態",-1),lt={scope:"row"},dt={key:0,class:"text-danger"},it={key:1,class:"text-success"},ut={key:0,type:"button",class:"btn btn-primary float-end rounded-4"},vt={__name:"UserOrderPayment",setup(_t){const i=x("$http"),{VITE_APP_URL:u,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet_composition_api/",MODE:"production",DEV:!1,PROD:!0},e=v({user:{}}),w=P(),f=C(),a=v("");function p(){const n=`${u}api/${_}/order/${a.value}`;i.get(n).then(o=>{o.data.success&&(e.value=o.data.order,console.log(e.value))})}function g(){const n=`${u}v2/api/${_}/pay/${a.value}`;i.post(n).then(o=>{o.data.success&&(e.value.is_paid=!0,w.push({path:"/order_completed",query:{id:a.value}}),p())})}function h(n){const o=d=>document.querySelector(d);o("#orderSave").addEventListener("click",()=>{navigator.clipboard.writeText(o("#orderId").textContent),this.showAlert()})}function k(n){return new Date(n*1e3).toLocaleDateString()}return a.value=f.params.orderId,p(),E(()=>{h()}),(n,o)=>{const d=T("RouterLink");return c(),r(b,null,[m(D),t("div",I,[t("div",L,[t("div",R,[t("div",S,[t("div",U,[t("div",j,[B,t("button",{type:"button",id:"orderSave",class:"btn btn-outline-primary",onClick:o[0]||(o[0]=l=>h(e.value.id))},"複製訂單編號")]),t("table",O,[t("thead",null,[t("tr",N,[q,t("th",F,[t("span",null,s(e.value.id),1)])])]),t("tbody",null,[t("tr",null,[H,t("td",M,s(k(e.value.create_at)),1)]),t("tr",null,[z,t("td",null,s(e.value.user.name),1)]),t("tr",null,[G,t("td",null,s(e.value.user.email),1)]),t("tr",null,[J,t("td",K,s(e.value.user.tel),1)]),t("tr",null,[Q,t("td",W,s(e.value.user.address),1)]),t("tr",null,[X,t("td",Y,[(c(!0),r(b,null,V(e.value.products,l=>(c(),r("div",{class:"",key:l.id},[t("div",Z,[t("div",tt,[t("p",et,[A(s(l.product.title)+" ",1),t("span",ot," x "+s(l.qty),1)])])])]))),128))])]),t("tr",null,[st,t("td",nt,s(e.value.total),1)]),t("tr",null,[ct,t("td",rt,s(e.value.user.shipping),1)]),t("tr",null,[at,t("td",lt,[e.value.is_paid?(c(),r("span",it,"付款完成")):(c(),r("span",dt,"未付款"))])])])])]),e.value.is_paid?y("",!0):(c(),r("button",{key:0,type:"button",class:"btn btn-primary float-end rounded-4",onClick:g},"確認付款")),m(d,{to:"/products"},{default:$(()=>[e.value.is_paid?(c(),r("button",ut,"繼續購物")):y("",!0)]),_:1})])])])])],64)}}};export{vt as default};