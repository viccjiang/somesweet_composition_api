import{U as x}from"./UserCartStepComponent-9131537c.js";import{u as g,b as P,B as y,r as d,o as C,d as E,e as T,f as R,h as u,g as e,j as s,t as _,i as V,F as k}from"./index-0d111a99.js";const A={class:"container mt-10 mb-10"},I={class:"row justify-content-center"},w={class:"col bg-white py-5 px-2 px-lg-3 border rounded-5"},L={class:"text-center"},S=e("h2",{class:"d-flex flex-column mb-3"},[e("span",{class:"text-success fs-6 mb-2"},[e("i",{class:"bi bi-check-circle fs-1"})]),s(" 訂單支付完成 ")],-1),U={class:"fs-3 text-secondary mb-4"},$=e("h5",{class:"mb-10"},"— 感謝您的訂購 —",-1),j={class:"d-flex justify-content-center align-items-center"},B={class:"fs-6 me-2"},D={id:"orderId"},O=e("p",{class:"fs-6"}," 從備貨到寄出商品為 7 個工作天（不包含假日） ",-1),N=e("p",{class:"fs-6 mb-10"},"再請留意簡訊通知",-1),F=e("a",{href:"#/products",class:"btn btn-primary px-5 py-2 mb-10 rounded-4"},"繼續選購",-1),G={__name:"UserOrderCompleted",setup(H){const{VITE_APP_URL:p,VITE_APP_PATH:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},h=g(),f=P(),v=y("$http"),n=d("10"),c=d({user:{}}),o=d("");function i(){n.value--,n.value===0&&h.push("/"),setTimeout(()=>{i()},1e3)}function b(){const r=`${p}api/${m}/order/${o.value}`;v.get(r).then(t=>{t.data.success&&(c.value=t.data.order,console.log(c.value))})}function l(r){const t=a=>document.querySelector(a);t("#orderSave").addEventListener("click",()=>{navigator.clipboard.writeText(t("#orderId").textContent)})}return o.value=f.params.id,console.log(o.value),b(),C(()=>{i(),l()}),(r,t)=>{const a=E("RouterLink");return T(),R(k,null,[u(x),e("div",A,[e("div",I,[e("div",w,[e("div",L,[S,e("div",U,[$,e("div",j,[e("p",B,[s("此為您的訂單編號 : "),e("span",D,_(o.value),1)]),e("button",{type:"button",id:"orderSave",class:"btn border-bottom rounded-0 p-0",onClick:t[0]||(t[0]=M=>l(c.value.id))},"複製訂單編號")]),O,N]),F,e("p",null,[s("該頁將在 "),e("span",null,_(n.value),1),s(" 秒後自動跳轉 ")]),u(a,{to:"/"},{default:V(()=>[s("點擊跳轉")]),_:1})])])])])],64)}}};export{G as default};
