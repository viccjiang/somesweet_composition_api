import{M}from"./modal-ddb9eb11.js";import{_ as y,e as d,f as l,g as t,j as $,t as o,m as f,z as v,F as u,n as g,q as k,U as x,d as p,h as m}from"./index-52e2f2b0.js";import{P as D}from"./PaginationComponent-18a3f5d7.js";import"./component-functions-3e43fe49.js";import"./selector-engine-85b27f3a.js";import"./focustrap-ed59e4cd.js";const E={props:{order:{type:Object,default(){return{}}}},data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new M(this.$refs.delModal)}},V={id:"delOrderModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},L={class:"modal-dialog"},U={class:"modal-content border-0"},A=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delOrderModalLabel",class:"modal-title"},[t("span",null,"刪除訂單")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),T={class:"modal-body"},j={class:"text-danger"},S={class:"modal-footer"},q=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function B(s,n,i,h,e,c){return d(),l("div",V,[t("div",L,[t("div",U,[A,t("div",T,[$(" 是否刪除 "),t("strong",j,o(i.order.id),1),$(" 訂單(刪除後將無法恢復)。 ")]),t("div",S,[q,t("button",{type:"button",class:"btn btn-danger",onClick:n[0]||(n[0]=a=>s.$emit("delOrder"))}," 確認刪除 ")])])])],512)}const I=y(E,[["render",B]]),N={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},methods:{date(s){return new Date(s*1e3).toLocaleDateString()},openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new M(this.$refs.orderModal)},watch:{order(){this.tempOrder=this.order},isPaid(){this.isPaid=this.order.is_paid}}},R={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},z={class:"modal-dialog modal-xl",role:"document"},F={class:"modal-content border-0"},H=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),G={class:"modal-body"},J={class:"row"},K={class:"col-md-4"},Q=t("h3",null,"用戶資料",-1),W={class:"table"},X={key:0},Y=t("th",{style:{width:"100px"}},"姓名",-1),Z=t("th",null,"Email",-1),tt=t("th",null,"電話",-1),et=t("th",null,"地址",-1),ot={class:"col-md-8"},st=t("h3",null,"訂單細節",-1),dt={class:"table"},lt=t("th",{style:{width:"100px"}},"訂單編號",-1),nt=t("th",null,"購買時間",-1),rt=t("th",null,"付款時間",-1),at={key:0},it={key:1},ct=t("th",null,"付款狀態",-1),_t=t("th",null,"總金額",-1),ht=t("h3",null,"選購商品",-1),ut={class:"table"},pt=t("thead",null,[t("tr")],-1),mt={class:"text-end"},bt={class:"d-flex justify-content-end"},Ot={class:"form-check"},ft=["id"],gt=["for"],yt={class:"modal-footer"},$t=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Mt(s,n,i,h,e,c){return d(),l("div",R,[t("div",z,[t("div",F,[H,t("div",G,[t("div",J,[t("div",K,[Q,t("table",W,[e.tempOrder.user?(d(),l("tbody",X,[t("tr",null,[Y,t("td",null,o(e.tempOrder.user.name),1)]),t("tr",null,[Z,t("td",null,o(e.tempOrder.user.email),1)]),t("tr",null,[tt,t("td",null,o(e.tempOrder.user.tel),1)]),t("tr",null,[et,t("td",null,o(e.tempOrder.user.address),1)])])):f("",!0)])]),t("div",ot,[st,t("table",dt,[t("tbody",null,[t("tr",null,[lt,t("td",null,o(e.tempOrder.id),1)]),t("tr",null,[nt,t("td",null,o(e.tempOrder.create_at),1)]),t("tr",null,[rt,t("td",null,[e.tempOrder.paid_date?(d(),l("span",at,o(e.tempOrder.paid_date),1)):(d(),l("span",it,"時間不正確"))])]),t("tr",null,[ct,t("td",null,[t("p",{class:v({"text-success":e.tempOrder.is_paid})},o(e.tempOrder.is_paid?"已付款":"尚未付款"),3)])]),t("tr",null,[_t,t("td",null,o(e.tempOrder.total),1)])])]),ht,t("table",ut,[pt,t("tbody",null,[(d(!0),l(u,null,g(e.tempOrder.products,a=>(d(),l("tr",{key:a.id},[t("th",null,o(a.product.title),1),t("td",null,o(a.qty)+" / "+o(a.product.unit),1),t("td",mt,o(a.final_total),1)]))),128))])]),t("div",bt,[t("div",Ot,[k(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"{tempOrder.id}","onUpdate:modelValue":n[0]||(n[0]=a=>e.tempOrder.is_paid=a)},null,8,ft),[[x,e.tempOrder.is_paid]]),t("label",{class:"form-check-label",for:"{tempOrder.id}"},[t("span",null,o(e.tempOrder.is_paid?"已付款":"未付款"),1)],8,gt)])])])])]),t("div",yt,[$t,t("button",{type:"button",class:"btn btn-primary",onClick:n[1]||(n[1]=a=>s.$emit("update-paid",e.tempOrder))}," 修改付款狀態 ")])])])],512)}const vt=y(N,[["render",Mt]]),{VITE_APP_URL:b,VITE_APP_PATH:O}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet_composition_api/",MODE:"production",DEV:!1,PROD:!0},kt={data(){return{pagination:{},orders:{},tempOrder:{},page:1}},components:{Pagination:D,OrderModal:vt,DelModal:I},methods:{getOrders(s=1){this.page=s,this.$http.get(`${b}api/${O}/admin/orders?page=${s}`).then(n=>{const{orders:i,pagination:h}=n.data;this.orders=i,this.pagination=h,console.log("後台訂單:",i,"後台訂單分頁",h)})},openModal(s){this.tempOrder={...s},this.$refs.orderModal.openModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.showModal()},updatePaid(s){const n={is_paid:s.is_paid};this.$http.put(`${b}api/${O}/admin/order/${s.id}`,{data:n}).then(i=>{console.log(i),this.$refs.orderModal.hideModal(),this.getOrders(this.page)}).catch(i=>{console.log(i)})},delOrder(){this.$http.delete(`${b}api/${O}/admin/order/${this.tempOrder.id}`).then(()=>{this.$refs.delModal.hideModal(),this.getOrders(this.page)}).catch(s=>{console.log(s)})}},mounted(){this.getOrders()}},xt={class:"table-responsive"},Pt={class:"table table-hover mt-4"},Ct=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),wt=["textContent"],Dt={class:"list-unstyled"},Et={class:"text-right"},Vt={class:"form-check form-switch"},Lt=["id","onUpdate:modelValue","onChange"],Ut=["for"],At={key:0},Tt={key:1},jt=["onClick"],St=t("i",{class:"bi bi-pencil-square"},null,-1),qt=[St],Bt=["onClick"],It=t("i",{class:"bi bi-trash3-fill"},null,-1),Nt=[It];function Rt(s,n,i,h,e,c){const a=p("Pagination"),P=p("OrderModal"),C=p("DelModal");return d(),l(u,null,[t("div",xt,[t("table",Pt,[Ct,t("tbody",null,[(d(!0),l(u,null,g(e.orders,r=>(d(),l(u,{key:r.id},[e.orders.length?(d(),l("tr",{key:0,class:v({"text-bk-gray":!r.is_paid})},[t("td",null,o(r.create_at),1),t("td",null,[r.user?(d(),l("span",{key:0,textContent:o(r.user.email)},null,8,wt)):f("",!0)]),t("td",null,[t("ul",Dt,[(d(!0),l(u,null,g(r.products,(_,w)=>(d(),l("li",{key:w},o(_.product.title)+" 數量："+o(_.qty)+" "+o(_.product.unit),1))),128))])]),t("td",Et,o(r.total),1),t("td",null,[t("div",Vt,[k(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${r.id}`,"onUpdate:modelValue":_=>r.is_paid=_,onChange:_=>c.updatePaid(r)},null,40,Lt),[[x,r.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${r.id}`},[r.is_paid?(d(),l("span",At,"已付款")):(d(),l("span",Tt,"未付款"))],8,Ut)])]),t("td",null,[t("button",{class:"btn btn-outline-primary btn-sm m-1",type:"button",onClick:_=>c.openModal(r)},qt,8,jt),t("button",{class:"btn btn-outline-danger btn-sm m-1",type:"button",onClick:_=>c.openDelOrderModal(r)},Nt,8,Bt)])],2)):f("",!0)],64))),128))])]),m(a,{pages:e.pagination,onEmitPages:c.getOrders},null,8,["pages","onEmitPages"])]),m(P,{ref:"orderModal",order:e.tempOrder,onUpdatePaid:c.updatePaid},null,8,["order","onUpdatePaid"]),m(C,{ref:"delModal",order:e.tempOrder,onDelOrder:c.delOrder},null,8,["order","onDelOrder"])],64)}const Qt=y(kt,[["render",Rt]]);export{Qt as default};