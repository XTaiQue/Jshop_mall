webpackJsonp([49],{"17rM":function(t,e){},DiIO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};n.d(r,"uploadFile",function(){return E}),n.d(r,"shopConfig",function(){return R}),n.d(r,"reg",function(){return H}),n.d(r,"login",function(){return F}),n.d(r,"userInfo",function(){return G}),n.d(r,"changeAvatar",function(){return J}),n.d(r,"editInfo",function(){return Y}),n.d(r,"sms",function(){return j}),n.d(r,"smsLogin",function(){return U}),n.d(r,"logout",function(){return z}),n.d(r,"slider",function(){return K}),n.d(r,"notice",function(){return V}),n.d(r,"noticeInfo",function(){return q}),n.d(r,"articleInfo",function(){return W}),n.d(r,"articleList",function(){return X}),n.d(r,"categories",function(){return Z}),n.d(r,"goodsList",function(){return Q}),n.d(r,"goodsDetail",function(){return tt}),n.d(r,"goodsParams",function(){return et}),n.d(r,"getProductInfo",function(){return nt}),n.d(r,"goodsComment",function(){return rt}),n.d(r,"addCart",function(){return ot}),n.d(r,"removeCart",function(){return it}),n.d(r,"cartList",function(){return at}),n.d(r,"setCartNum",function(){return ut}),n.d(r,"getCartNum",function(){return ct}),n.d(r,"userShip",function(){return st}),n.d(r,"userDefaultShip",function(){return lt}),n.d(r,"saveUserShip",function(){return dt}),n.d(r,"shipDetail",function(){return ht}),n.d(r,"editShip",function(){return ft}),n.d(r,"removeShip",function(){return pt}),n.d(r,"setDefShip",function(){return mt}),n.d(r,"createOrder",function(){return gt}),n.d(r,"getOrderList",function(){return vt}),n.d(r,"cancelOrder",function(){return bt}),n.d(r,"delOrder",function(){return wt}),n.d(r,"orderDetail",function(){return St}),n.d(r,"confirmOrder",function(){return yt}),n.d(r,"orderShip",function(){return kt}),n.d(r,"orderList",function(){return At}),n.d(r,"getOrderStatusSum",function(){return Lt}),n.d(r,"afterSalesList",function(){return Ct}),n.d(r,"afterSalesInfo",function(){return _t}),n.d(r,"afterSalesStatus",function(){return Pt}),n.d(r,"addAfterSales",function(){return $t}),n.d(r,"sendShip",function(){return It}),n.d(r,"addGoodsBrowsing",function(){return xt}),n.d(r,"delGoodsBrowsing",function(){return Dt}),n.d(r,"goodsBrowsing",function(){return Mt}),n.d(r,"goodsCollection",function(){return Ot}),n.d(r,"goodsCollectionList",function(){return Tt}),n.d(r,"paymentList",function(){return Bt}),n.d(r,"paymentInfo",function(){return Nt}),n.d(r,"pay",function(){return Et}),n.d(r,"orderEvaluate",function(){return Rt}),n.d(r,"isSign",function(){return Ht}),n.d(r,"sign",function(){return Ft}),n.d(r,"myPoint",function(){return Gt}),n.d(r,"pointLog",function(){return Jt}),n.d(r,"logistics",function(){return Yt}),n.d(r,"couponList",function(){return jt}),n.d(r,"couponDetail",function(){return Ut}),n.d(r,"getCoupon",function(){return zt}),n.d(r,"userCoupon",function(){return Kt}),n.d(r,"getSetting",function(){return Vt}),n.d(r,"getSellerSetting",function(){return qt}),n.d(r,"getBankCardList",function(){return Wt}),n.d(r,"getDefaultBankCard",function(){return Xt}),n.d(r,"addBankCard",function(){return Zt}),n.d(r,"removeBankCard",function(){return Qt}),n.d(r,"setDefaultBankCard",function(){return te}),n.d(r,"getBankCardInfo",function(){return ee}),n.d(r,"getBankCardOrganization",function(){return ne}),n.d(r,"editPwd",function(){return re}),n.d(r,"forgotPwd",function(){return oe}),n.d(r,"getBalanceList",function(){return ie}),n.d(r,"recommendList",function(){return ae}),n.d(r,"shareCode",function(){return ue}),n.d(r,"userToCash",function(){return ce}),n.d(r,"cashList",function(){return se}),n.d(r,"getTrustLogin",function(){return le}),n.d(r,"trustBind",function(){return de}),n.d(r,"getOpenId",function(){return he}),n.d(r,"usablePoint",function(){return fe}),n.d(r,"storeList",function(){return pe}),n.d(r,"switchStore",function(){return me}),n.d(r,"defaultStore",function(){return ge}),n.d(r,"isPoint",function(){return ve}),n.d(r,"couponKey",function(){return be}),n.d(r,"isStoreUser",function(){return we}),n.d(r,"storeLadingList",function(){return Se}),n.d(r,"ladingInfo",function(){return ye}),n.d(r,"ladingExec",function(){return ke}),n.d(r,"ladingDel",function(){return Ae}),n.d(r,"activityList",function(){return Le}),n.d(r,"activityDetail",function(){return Ce}),n.d(r,"weixinShare",function(){return _e});var o=n("IvJb"),i=n("4YfN"),a=n.n(i),u={props:["title"],methods:{back:function(){if("/allorder"===this.$route.path)this.$router.push({path:"/user"});else if("/orderdetail"===this.$route.path)this.$router.push({path:"/allorder"});else{if(window.history.length<=1)return this.$router.push({path:"/"}),!1;this.$router.go(-1)}}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("yd-navbar",{attrs:{slot:"navbar",title:this.title},slot:"navbar"},[e("div",{attrs:{slot:"left"},on:{click:this.back},slot:"left"},[e("yd-navbar-back-icon")],1)])},staticRenderFns:[]};var s=n("C7Lr")(u,c,!1,function(t){n("O642")},null,null).exports,l={data:function(){return{tab:[{title:"首页",link:"/index",type:"iconfont icon-shouyeshouye1",active:!0},{title:"全部分类",link:"/classify",type:"iconfont icon-fenlei1",active:!1},{title:"购物车",link:"/cart",type:"iconfont icon-gouwuche",active:!1},{title:"个人中心",link:"/user",type:"iconfont icon-icongerenzhongxin",active:!1}]}},mounted:function(){for(var t in this.$route.meta.title&&(document.title=this.$route.meta.title),this.tab)this.tab[t].link===this.$route.path?this.tab[t].active=!0:this.tab[t].active=!1},watch:{$route:function(){for(var t in this.tab)this.tab[t].link===this.$route.path?this.tab[t].active=!0:this.tab[t].active=!1}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"tabbar",staticClass:"tabbar",attrs:{slot:"tabbar"},slot:"tabbar"},t._l(t.tab,function(e,r){return n("router-link",{key:r,staticClass:"tabbar-item",attrs:{tag:"div",id:e.active,to:e.link}},[n("i",{class:e.type}),t._v(" "),n("span",[t._v(t._s(e.title))])])}))},staticRenderFns:[]};var h=n("C7Lr")(l,d,!1,function(t){n("17rM")},null,null).exports,f=n("9rMa"),p={data:function(){return{isRouterAlive:!0}},components:{navbar:s,tabbar:h},computed:a()({},Object(f.b)(["shopName","shopDesc","shopLogo","statistics"])),beforeMount:function(){this.getShopSetting()},provide:function(){return{reload:this.reload}},methods:{getShopSetting:function(){var t=this;this.$api.shopConfig().then(function(e){if(t.$store.dispatch("shopConfig",e),"/index"===t.$route.path&&(document.title=t.shopName),e.statistics){var n=document.createElement("script");n.innerHTML=e.statistics,document.getElementsByTagName("body")[0].appendChild(n)}})},reload:function(){var t=this;this.isRouterAlive=!1,this.$nextTick(function(){t.isRouterAlive=!0})}},watch:{$route:{handler:function(){document.title="/index"===this.$route.path?this.shopName:this.$route.meta.title}}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yd-layout",{attrs:{id:"app"}},[n("navbar",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.navShow,expression:"$route.meta.navShow"}],attrs:{slot:"navbar",title:t.$route.meta.title},slot:"navbar"}),t._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("keep-alive",[t.$route.meta.keepAlive&&t.isRouterAlive?n("router-view",{staticClass:"top"}):t._e()],1)],1),t._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t.isRouterAlive||t.$route.meta.keepAlive?t._e():n("router-view",{staticClass:"top"})],1),t._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t.isRouterAlive&&!t.$route.meta.keepAlive?n("router-view",{staticClass:"top"}):t._e()],1),t._v(" "),n("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.tabShow,expression:"$route.meta.tabShow"}],attrs:{slot:"tabbar"},slot:"tabbar"})],1)},staticRenderFns:[]};var g=n("C7Lr")(p,m,!1,function(t){n("DiIO")},null,null).exports,v=[{path:"/",redirect:"/index"},{path:"/authbind",component:function(t){return Promise.all([n.e(0),n.e(38)]).then(function(){var e=[n("NbfK")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AuthBind",meta:{navShow:!1,tabShow:!0,title:"用户绑定",keepAlive:!1}},{path:"/author",component:function(t){return n.e(17).then(function(){var e=[n("PfCH")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"author",meta:{navShow:!1,tabShow:!1,title:"登录授权中",keepAlive:!1}},{path:"/auth",component:function(t){return n.e(19).then(function(){var e=[n("BBeI")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"auth",meta:{navShow:!1,tabShow:!1,title:"微信支付",keepAlive:!1}},{path:"/index",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("eerB")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Index",meta:{navShow:!1,tabShow:!0,keepAlive:!0}},{path:"/classify",component:function(t){return n.e(5).then(function(){var e=[n("kE/w")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Classify",meta:{navShow:!0,tabShow:!0,title:"全部分类",keepAlive:!0}},{path:"/cart",component:function(t){return Promise.all([n.e(0),n.e(30)]).then(function(){var e=[n("HrDi")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Cart",meta:{navShow:!0,tabShow:!1,title:"购物车",keepAlive:!1,isLogin:!0}},{path:"/user",component:function(t){return n.e(1).then(function(){var e=[n("35em")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"user",meta:{navShow:!1,tabShow:!0,title:"个人中心",keepAlive:!1,isLogin:!0}},{path:"/login",component:function(t){return Promise.all([n.e(0),n.e(37)]).then(function(){var e=[n("vdVF")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Login",meta:{navShow:!0,tabShow:!1,title:"用户登录",keepAlive:!1}},{path:"/goodslist",component:function(t){return Promise.all([n.e(0),n.e(31)]).then(function(){var e=[n("bMQg")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"GoodsList",meta:{navShow:!0,tabShow:!1,title:"商品列表",keepAlive:!1}},{path:"/goodsdetail",component:function(t){return Promise.all([n.e(0),n.e(21)]).then(function(){var e=[n("/AAr")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"GoodsDetail",meta:{navShow:!1,tabShow:!1,title:"商品详情",keepAlive:!1}},{path:"/firmorder",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("aT31")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"FirmOrder",meta:{tabShow:!1,navShow:!0,title:"订单确认",keepAlive:!1,isLogin:!0}},{path:"/cashierdesk",component:function(t){return Promise.all([n.e(0),n.e(22)]).then(function(){var e=[n("HeT/")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"CashierDesk",meta:{tabShow:!1,title:"订单支付",keepAlive:!1,isLogin:!0}},{path:"/payresult",component:function(t){return n.e(12).then(function(){var e=[n("oJ7D")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"PayResult",meta:{tabShow:!1,navShow:!0,title:"支付结果",keepAlive:!1,isLogin:!0}},{path:"/allorder",component:function(t){return Promise.all([n.e(0),n.e(34)]).then(function(){var e=[n("mm0H")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AllOrder",meta:{navShow:!0,tabShow:!1,title:"订单列表",keepAlive:!1,isLogin:!0}},{path:"/orderdetail",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("E9as")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"OrderDetail",meta:{navShow:!0,tabShow:!1,title:"订单详情",keepAlive:!1,isLogin:!0}},{path:"/express",component:function(t){return n.e(42).then(function(){var e=[n("dSRY")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Express",meta:{navShow:!0,tabShow:!1,title:"物流信息",keepAlive:!1,isLogin:!0}},{path:"/afterservice",component:function(t){return n.e(10).then(function(){var e=[n("dLxA")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AfterService",meta:{tabShow:!1,title:"申请售后",keepAlive:!1,isLogin:!0}},{path:"/allafterservice",component:function(t){return Promise.all([n.e(0),n.e(32)]).then(function(){var e=[n("NGAE")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AllAfterService",meta:{tabShow:!1,title:"售后单列表",keepAlive:!1,isLogin:!0}},{path:"/collect",component:function(t){return Promise.all([n.e(0),n.e(47)]).then(function(){var e=[n("xJOu")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Collect",meta:{navShow:!0,tabShow:!1,title:"我的关注",keepAlive:!1,isLogin:!0}},{path:"/history",component:function(t){return Promise.all([n.e(0),n.e(29)]).then(function(){var e=[n("qygY")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"History",meta:{navShow:!0,tabShow:!1,title:"我的足迹",keepAlive:!1,isLogin:!0}},{path:"/notice",component:function(t){return n.e(39).then(function(){var e=[n("KxNL")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Notice",meta:{navShow:!0,tabShow:!1,title:"公告详情",keepAlive:!1}},{path:"/article",component:function(t){return n.e(28).then(function(){var e=[n("tLJp")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Article",meta:{tabShow:!1,title:"文章详情",keepAlive:!1}},{path:"/coupon",component:function(t){return n.e(13).then(function(){var e=[n("sdPH")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Coupon",meta:{navShow:!0,tabShow:!1,title:"我的优惠券",keepAlive:!1,isLogin:!0}},{path:"/evaluate",component:function(t){return n.e(16).then(function(){var e=[n("FmEr")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Evaluate",meta:{tabShow:!1,title:"订单评价",keepAlive:!1,isLogin:!0}},{path:"/datasetting",component:function(t){return n.e(14).then(function(){var e=[n("JGp4")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"DataSetting",meta:{navShow:!0,tabShow:!1,title:"资料设置",keepAlive:!1,isLogin:!0}},{path:"/aftersalesdetail",component:function(t){return n.e(25).then(function(){var e=[n("rpiT")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AfterSalesDetail",meta:{tabShow:!1,title:"售后单详情",keepAlive:!1,isLogin:!0}},{path:"/searchpage",component:function(t){return n.e(18).then(function(){var e=[n("MYsb")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"SearchPage",meta:{tabShow:!1,title:"商品搜索",keepAlive:!1}},{path:"/address",component:function(t){return n.e(23).then(function(){var e=[n("uM3d")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Address",meta:{navShow:!0,tabshow:!1,title:"地址详情",keepAlive:!1,isLogin:!0}},{path:"/addresslist",component:function(t){return Promise.all([n.e(0),n.e(36)]).then(function(){var e=[n("P3sQ")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AddressList",meta:{navShow:!0,tabshow:!1,title:"地址管理",keepAlive:!1,isLogin:!0}},{path:"/balance",component:function(t){return n.e(6).then(function(){var e=[n("p4Z9")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Balance",meta:{navShow:!0,tabshow:!1,title:"我的余额",keepAlive:!1}},{path:"/balancelist",component:function(t){return Promise.all([n.e(0),n.e(35)]).then(function(){var e=[n("dhDQ")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"BalanceList",meta:{navShow:!0,tabShow:!1,title:"余额明细",keepAlive:!1}},{path:"/withdrawcash",component:function(t){return Promise.all([n.e(0),n.e(41)]).then(function(){var e=[n("KZdo")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"WithDrawCash",meta:{navShow:!0,tabshow:!1,title:"余额提现",keepAlive:!1}},{path:"/bankcard",component:function(t){return n.e(20).then(function(){var e=[n("cceV")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"BankCard",meta:{navShow:!0,tabShow:!1,title:"添加银行卡",keepAlive:!1}},{path:"/mybankcardlist",component:function(t){return n.e(46).then(function(){var e=[n("qDIR")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"MyBankCardList",meta:{navShow:!0,tabShow:!1,title:"我的银行卡",keepAlive:!1}},{path:"/rewardlist",component:function(t){return n.e(11).then(function(){var e=[n("db5S")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"RewardList",meta:{navShow:!0,tabShow:!1,title:"我的奖励金",keepAlive:!1}},{path:"/recommendlist",component:function(t){return Promise.all([n.e(0),n.e(45)]).then(function(){var e=[n("nj6G")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"RecommendList",meta:{navShow:!0,tabShow:!1,title:"推荐记录",keepAlive:!1}},{path:"/share",component:function(t){return n.e(24).then(function(){var e=[n("qhXZ")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Share",meta:{navShow:!0,tabShow:!1,title:"推荐好友",keepAlive:!1}},{path:"/cashlist",component:function(t){return Promise.all([n.e(0),n.e(33)]).then(function(){var e=[n("RIhi")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"CashList",meta:{navShow:!0,tabShow:!1,title:"提现记录",keepAlive:!1}},{path:"/setting",component:function(t){return n.e(9).then(function(){var e=[n("rlSs")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Setting",meta:{navShow:!0,tabShow:!1,title:"更多设置",keepAlive:!1}},{path:"/register",component:function(t){return Promise.all([n.e(0),n.e(43)]).then(function(){var e=[n("PmIv")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Register",meta:{navShow:!0,tabShow:!1,title:"用户注册",keepAlive:!1}},{path:"/articlelist",component:function(t){return Promise.all([n.e(0),n.e(40)]).then(function(){var e=[n("DIsE")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"ArticleList",meta:{navShow:!0,tabShow:!1,title:"文章列表",keepAlive:!1}},{path:"/storeorder",component:function(t){return n.e(27).then(function(){var e=[n("b+YU")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"StoreOrder",meta:{navShow:!0,tabShow:!1,title:"店铺提货订单",keepAlive:!1}},{path:"/orderverification",component:function(t){return n.e(15).then(function(){var e=[n("+vSD")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"OrderVerification",meta:{navShow:!0,tabShow:!1,title:"提货单核销",keepAlive:!1}},{path:"/seckilldetail",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("amT1")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"SecKillDetail",meta:{navShow:!1,tabShow:!1,title:"秒杀活动",keepAlive:!1}},{path:"/groupbuying",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("d5Ik")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"GroupBuying",meta:{navShow:!1,tabShow:!1,title:"团购活动",keepAlive:!1}},{path:"/invoice",component:function(t){return n.e(44).then(function(){var e=[n("+2FS")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"GroupBuying",meta:{navShow:!0,tabShow:!1,title:"发票",keepAlive:!1}},{path:"/recharge",component:function(t){return n.e(26).then(function(){var e=[n("396o")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Recharge",meta:{navShow:!0,tabShow:!1,title:"余额充值",keepAlive:!1}}],b=n("zO6J"),w=n("ZLEe"),S=n.n(w),y=n("aozt"),k=n.n(y),A=n("6iV/"),L=n.n(A),C=n("hRKE"),_=n.n(C),P=n("3cXf"),$=n.n(P);var I,x={setStorage:function(t,e){t&&("string"!=typeof e&&(e=$()(e)),window.localStorage.setItem(t,e))},getStorage:function(t){if(t)return window.localStorage.getItem(t)},removeStorage:function(t){t&&window.localStorage.removeItem(t)},deepCopy:function t(e,n){if("object"!==(void 0===n?"undefined":_()(n)))return n;for(var r in n){var o={};e[r]&&(o=e[r]),e[r]=t(o,n[r])}return e},jumpToLogin:function(){je.$router.push({path:"/login",query:{redirect:je.$route.fullPath}})},timeToDate:function(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},formatMoney:function(t,e,n,r,o){t=t||0,e=isNaN(e=Math.abs(e))?2:e,n=void 0!==n?n:"￥",r=r||",",o=o||".";var i=t<0?"-":"",a=parseInt(t=Math.abs(+t||0).toFixed(e),10)+"",u=a.length>3?a.length%3:0;return n+i+(u?a.substr(0,u)+r:"")+a.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?o+Math.abs(t-a).toFixed(e).slice(2):"")},errorToShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"出错了，请重试",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;je.$dialog.toast({mes:t,timeout:e})},successToShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"保存成功",e=arguments[1];wx.showToast({title:t,icon:"success",duration:1e3}),e&&setTimeout(function(){e()},500)},throttle:function(t,e,n){clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.call(e)},n)},getCaptcha:function(){var t=10*Math.random()+1;return window.host+"/captcha?"+t},hecong:function(){return window.entId},locationHost:function(){return window.host},isWeiXinBrowser:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},D=n("X1H5"),M=n.n(D),O=n("Y9Ju"),T=["user.info","user.editinfo","user.changeavatar","user.logout","user.addgoodsbrowsing","user.delgoodsbrowsing","user.goodsbrowsing","user.goodscollection","user.goodscollectionlist","user.saveusership","user.vuesaveusership","user.getshipdetail","user.setdefship","user.editship","user.removeship","user.getusership","user.pay","user.orderevaluate","user.getuserdefaultship","user.issign","user.sign","user.mypoint","user.pointlog","user.getbankcardlist","user.getdefaultbankcard","user.addbankcard","user.removebankcard","user.setdefaultbankcard","user.getbankcardinfo","user.editpwd","user.forgotpwd","user.recommend","user.balancelist","user.sharecode","user.cash","user.cashlist","coupon.getcoupon","coupon.usercoupon","cart.add","cart.del","cart.getlist","cart.setnums","cart.getnumber","order.cancel","order.del","order.details","order.confirm","order.getlist","order.create","order.getship","order.getorderlist","order.getorderstatusnum","order.aftersaleslist","order.aftersalesinfo","order.aftersalesstatus","order.addaftersales","order.sendreship","order.iscomment","payments.getinfo","user.getuserpoint","coupon.getcouponkey","store.isclerk","store.storeladinglist","store.ladinginfo","store.lading","store.ladingdel"],B=function(t,e,n){if(T.indexOf(t)>=0){var r=x.getStorage("user_token");if(!r)return x.jumpToLogin(),!1;e.token=r}e.method=t,N(O.a,L.a.stringify(e),{},n)},N=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3];S()(n).length&&je.$dialog.loading.open("上传中..."),k.a.post(t,e,n).then(function(t){S()(n).length&&je.$dialog.loading.close(),t.data.status||(x.errorToShow(t.data.msg),14007!==t.data.data&&14006!==t.data.data||(x.removeStorage("user_token"),x.jumpToLogin())),r(t.data)}).catch(function(t){if(t&&t.response){switch(t.response.status){case 400:t.message="请求参数错误";break;case 401:t.message="未授权，请登录";break;case 403:t.message="跨域拒绝访问";break;case 404:t.message="请求地址出错: "+t.response.config.url;break;case 408:t.message="请求超时";break;case 500:t.message="服务器内部错误";break;case 501:t.message="服务未实现";break;case 502:t.message="网关错误";break;case 503:t.message="服务不可用";break;case 504:t.message="网关超时";break;case 505:t.message="HTTP版本不受支持"}je.$dialog.loading.close(),x.errorToShow(t.message)}})},E=function(t,e){t.append("method","images.upload");N(O.a,t,{headers:{"Content-Type":"multipart/form-data"}},e)},R=function(){return k.a.get(O.b+"/api/common/jshopconf").then(function(t){return t.data})},H=function(t,e){return B("user.reg",t,e)},F=function(t,e){return B("user.login",t,e)},G=function(t,e){return B("user.info",t,e)},J=function(t,e){return B("user.changeavatar",t,e)},Y=function(t,e){return B("user.editinfo",t,e)},j=function(t,e){return B("user.sms",t,e)},U=function(t,e){return B("user.smslogin",t,e)},z=function(t,e){return B("user.logout",t,e)},K=function(t,e){return B("advert.getAdvertList",t,e)},V=function(t,e){return B("notice.noticeList",t,e)},q=function(t,e){return B("notice.noticeInfo",t,e)},W=function(t,e){return B("articles.getArticleDetail",t,e)},X=function(t,e){return B("articles.getArticleList",t,e)},Z=function(t,e){return B("categories.getallcat",t,e)},Q=function(t,e){return B("goods.getlist",t,e)},tt=function(t,e){return B("goods.getdetial",t,e)},et=function(t,e){return B("goods.getgoodsparams",t,e)},nt=function(t,e){return B("goods.getproductinfo",t,e)},rt=function(t,e){return B("goods.getgoodscomment",t,e)},ot=function(t,e){return B("cart.add",t,e)},it=function(t,e){return B("cart.del",t,e)},at=function(t,e){return B("cart.getlist",t,e)},ut=function(t,e){return B("cart.setnums",t,e)},ct=function(t,e){return B("cart.getnumber",t,e)},st=function(t,e){return B("user.getusership",t,e)},lt=function(t,e){return B("user.getuserdefaultship",t,e)},dt=function(t,e){return B("user.vuesaveusership",t,e)},ht=function(t,e){return B("user.getshipdetail",t,e)},ft=function(t,e){return B("user.editship",t,e)},pt=function(t,e){return B("user.removeship",t,e)},mt=function(t,e){return B("user.setdefship",t,e)},gt=function(t,e){return B("order.create",t,e)},vt=function(t,e){return B("order.getlist",t,e)},bt=function(t,e){return B("order.cancel",t,e)},wt=function(t,e){return B("order.del",t,e)},St=function(t,e){return B("order.details",t,e)},yt=function(t,e){return B("order.confirm",t,e)},kt=function(t,e){return B("order.getship",t,e)},At=function(t,e){return B("order.getorderlist",t,e)},Lt=function(t,e){return B("order.getorderstatusnum",t,e)},Ct=function(t,e){return B("order.aftersaleslist",t,e)},_t=function(t,e){return B("order.aftersalesinfo",t,e)},Pt=function(t,e){return B("order.aftersalesstatus",t,e)},$t=function(t,e){return B("order.addaftersales",t,e)},It=function(t,e){return B("order.sendreship",t,e)},xt=function(t,e){return B("user.addgoodsbrowsing",t,e)},Dt=function(t,e){return B("user.delgoodsbrowsing",t,e)},Mt=function(t,e){return B("user.goodsbrowsing",t,e)},Ot=function(t,e){return B("user.goodscollection",t,e)},Tt=function(t,e){return B("user.goodscollectionlist",t,e)},Bt=function(t,e){return B("payments.getlist",t,e)},Nt=function(t,e){return B("payments.getinfo",t,e)},Et=function(t,e){return B("user.pay",t,e)},Rt=function(t,e){return B("user.orderevaluate",t,e)},Ht=function(t,e){return B("user.issign",t,e)},Ft=function(t,e){return B("user.sign",t,e)},Gt=function(t,e){return B("user.mypoint",t,e)},Jt=function(t,e){return B("user.pointlog",t,e)},Yt=function(t,e){return B("order.logisticbyapi",t,e)},jt=function(t,e){return B("coupon.couponlist",t,e)},Ut=function(t,e){return B("coupon.coupondetail",t,e)},zt=function(t,e){return B("coupon.getcoupon",t,e)},Kt=function(t,e){return B("coupon.usercoupon",t,e)},Vt=function(t,e){return B("user.getsetting",t,e)},qt=function(t,e){return B("user.getsellersetting",t,e)},Wt=function(t,e){return B("user.getbankcardlist",t,e)},Xt=function(t,e){return B("user.getdefaultbankcard",t,e)},Zt=function(t,e){return B("user.addbankcard",t,e)},Qt=function(t,e){return B("user.removebankcard",t,e)},te=function(t,e){return B("user.setdefaultbankcard",t,e)},ee=function(t,e){return B("user.getbankcardinfo",t,e)},ne=function(t,e){return B("user.getbankcardorganization",t,e)},re=function(t,e){return B("user.editpwd",t,e)},oe=function(t,e){return B("user.forgotpwd",t,e)},ie=function(t,e){return B("user.balancelist",t,e)},ae=function(t,e){return B("user.recommend",t,e)},ue=function(t,e){return B("user.sharecode",t,e)},ce=function(t,e){return B("user.cash",t,e)},se=function(t,e){return B("user.cashlist",t,e)},le=function(t,e){return B("user.gettrustlogin",t,e)},de=function(t,e){return B("user.trustbind",t,e)},he=function(t,e){return B("user.officiallogin",t,e)},fe=function(t,e){return B("user.getuserpoint",t,e)},pe=function(t,e){return B("store.getstorelist",t,e)},me=function(t,e){return B("store.getstoreswitch",t,e)},ge=function(t,e){return B("store.getdefaultstore",t,e)},ve=function(t,e){return B("user.ispoint",t,e)},be=function(t,e){return B("coupon.getcouponkey",t,e)},we=function(t,e){return B("store.isclerk",t,e)},Se=function(t,e){return B("store.storeladinglist",t,e)},ye=function(t,e){return B("store.ladinginfo",t,e)},ke=function(t,e){return B("store.lading",t,e)},Ae=function(t,e){return B("store.ladingdel",t,e)},Le=function(t,e){return B("group.getlist",t,e)},Ce=function(t,e){return B("group.getgoodsdetial",t,e)},_e=function(t,e,n){var r=location.href.split("#")[0],o=r.indexOf("?");o>0&&(r=r.substr(0,o)),r.indexOf("index.html")>=0?r=r.replace("index.html","redirect.html"):r+="redirect.html",r=r+"?redirect="+encodeURIComponent(location.href);var i={method:"weixinshare.share",url:location.href.split("#")[0]};k.a.post(O.a,L.a.stringify(i)).then(function(o){var i=o.data.data;M.a.config({debug:!1,appId:i.appId,timestamp:i.timestamp,nonceStr:i.nonceStr,signature:i.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),M.a.ready(function(){M.a.onMenuShareAppMessage({title:t,desc:n,link:r,imgUrl:e,success:function(){}}),M.a.onMenuShareTimeline({title:t,desc:n,link:r,imgUrl:e,success:function(){}})})})},Pe=n("vT+3"),$e=n.n(Pe),Ie=(n("Y96J"),n("JAS+")),xe=n.n(Ie),De=(n("w2u2"),n("rOEo")),Me=n.n(De),Oe=n("CmC4"),Te=n.n(Oe),Be=n("zdS3"),Ne=n.n(Be),Ee={shopConfig:function(t,e){return(0,t.commit)("SHOP_CONFIG",e)}},Re=n("a3Yh"),He=n.n(Re),Fe=(I={},He()(I,"SHOP_CONFIG",function(t,e){t.config=e}),He()(I,"INVOICE",function(t,e){t.invoice=e}),He()(I,"WECHATPAYSHOW",function(t,e){t.wechatPayShow=e}),I);o.default.use(f.a);var Ge=new f.a.Store({state:{config:{shop_name:"",shop_desc:"",shop_logo:"",upload_image_max:5,store_switch:2,cate_style:3,cate_type:1,tocash_money_low:0,tocash_money_rate:0,statistics:""},invoice:{type:1,name:"",code:""},wechatPayShow:!1},getters:{shopName:function(t){return t.config.shop_name},shopDesc:function(t){return t.config.shop_desc},shopLogo:function(t){return t.config.shop_logo},shopUploadImageMax:function(t){return t.config.upload_image_max},shopStoreSwitch:function(t){return t.config.store_switch},shopCateStyle:function(t){return t.config.cate_style},shopCateType:function(t){return t.config.cate_type},tocashMoneyLow:function(t){return t.config.tocash_money_low},tocashMoneyRate:function(t){return t.config.tocash_money_rate},statistics:function(t){return t.config.statistics},invoice:function(t){return t.invoice}},actions:Ee,mutations:Fe});o.default.use(Te.a),o.default.use(Me.a),o.default.use(xe.a),o.default.use(b.a),o.default.use($e.a),o.default.use(Ne.a,{preLoad:1.3,loading:"./static/image/loading.gif",attempt:1}),o.default.config.productionTip=!1,o.default.prototype.$api=r,o.default.prototype.GLOBAL=x;var Je=new b.a({mode:"hash",routes:v,scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),Ye=new o.default({el:"#app",router:Je,store:Ge,components:{App:g},template:"<App/>"});Je.beforeEach(function(t,e,n){document.title=t.meta.title?t.meta.title:"","undefined"!=typeof _hmt&&t.path&&_hmt.push(["_trackPageview","/#"+t.fullPath]),t.meta.isLogin&&(x.getStorage("user_token")||x.jumpToLogin()),0===t.matched.length?e.name?n({name:e.name}):n("/index"):n()});var je=e.default=Ye},O642:function(t,e){},Y96J:function(t,e){},Y9Ju:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var r="",o="";r=window.host,o=r+"/api.html"},w2u2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9ae42771b7bb97ce902a.js.map