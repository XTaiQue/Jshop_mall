webpackJsonp([19],{BBeI:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{type:"",openid:"",orderId:"",state:""}},mounted:function(){this.orderId=this.getUrlParam("order_id"),this.recharge=this.getUrlParam("recharge"),this.type=this.getUrlParam("type"),this.state=this.getUrlParam("state"),this.getCode()},methods:{getCode:function(){var A=this.getUrlParam("code");A&&this.getOpenId(A)},getOpenId:function(A){var t=this,e={code:A,scope:2,state:this.state};this.$api.getOpenId(e,function(A){console.log(A),A.status?(t.openid=A.data.openid,t.toPayHandler("wechatpay")):t.GLOBAL.errorToShow(A.msg)})},checkWXJSBridge:function(A){var t=this,e=setInterval(function(){void 0!==window.WeixinJSBridge&&(clearTimeout(e),t.onBridgeReady(A))},200)},onBridgeReady:function(A){var t=this;window.WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:A.appid,timeStamp:A.timeStamp,nonceStr:A.nonceStr,package:A.package,signType:A.signType,paySign:A.paySign},function(A){"get_brand_wcpay_request:ok"===A.err_msg?t.GLOBAL.successToShow("支付成功"):"get_brand_wcpay_request:cancel"===A.err_msg?t.GLOBAL.errorToShow("取消支付"):t.GLOBAL.errorToShow("支付失败"),setTimeout(function(){t.$router.replace({path:"/payresult",query:{order_id:t.orderId}})},1e3)})},toPayHandler:function(A){var t=this,e={payment_code:A,payment_type:this.type};e.ids=1==this.type?this.orderId:this.uid,console.log(e),1==this.type&&this.orderId?this.openid&&(e.params={trade_type:"JSAPI_OFFICIAL",openid:this.openid}):2==this.type&&this.recharge&&this.openid&&(e.params={money:this.recharge,openid:this.openid}),this.$api.pay(e,function(A){if(A.status){var e=A.data;t.checkWXJSBridge(e)}else t.GLOBAL.errorToShow(A.msg)})},getUrlParam:function(A,t){t=t||window.location.href;var e=new RegExp("(^|&|/?)"+A+"=([^&|/?]*)(&|/?|$)","i"),i=t.substr(1).match(e);return null!=i?i[2]:null}}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var A=this.$createElement,t=this._self._c||A;return t("div",{staticClass:"author-body"},[t("div",{staticClass:"author-c"},[t("img",{staticClass:"loading-img",attrs:{src:e("w1N2")}}),this._v(" "),t("p",[this._v("信息加载中,请稍后...")])])])}]};var r=e("C7Lr")(i,n,!1,function(A){e("PlKi")},null,null);t.default=r.exports},PlKi:function(A,t){},w1N2:function(A,t){A.exports="data:image/gif;base64,R0lGODlhUABQALMJAP/////MzP/Mmf+Zmf+ZZv9mZv9mM/8zM8zMzP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZTcyOGEwMi0yNzE0LWM3NDUtYjhiNy05YjQ5ZmM5MTIzMWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVDM0M2OUJFMEFBMTFFOEIyQzlDNUU1MkVENDY2QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVDM0M2OUFFMEFBMTFFOEIyQzlDNUU1MkVENDY2QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlNzI4YTAyLTI3MTQtYzc0NS1iOGI3LTliNDlmYzkxMjMxYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ZTcyOGEwMi0yNzE0LWM3NDUtYjhiNy05YjQ5ZmM5MTIzMWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFFAAJACwAAAAAUABQAAAE/zDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n1AUYIqoWhFTQIWKtWanP+51XAVPAORrlodOu82Sthurzcnn6Xr8nsfx6V9iahSBf1g2f3CEiRhZZHoxgooXgoeNfJMud5mUmBqekZsWa1ugjWqQLaJbXqOmroMwq2djqQmVtrStsrG6u6W1p7+aXqmvi8GwVpHFo8PKz3FXzGW5a6SUyYTTvNHbZZfNyMvd4OHet222s8Ti2b2u7+Yvkhm4IPXU6OnaHJu5K+7ZqwXw276Ajwpi4sQPVY1EgVgRLATxhqFqii46emMHDx2DHjXd+bk4rNIchohMVltEElsYii73wCwYpabNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtGnRCAAh+QQFDQAJACwXADMAIgADAAAEI3CUcqqtJaSdgrygVQybN50nyZWSEU6DtnZBbcszLQx8jCcRACH5BAUKAAkALBMAMAApAAYAAARGMJRDTxkhpA32lpWFeR8YDolZFeyFkirFDjRrhJYn3ThlEKTUpEcUBTWJQ5D08kyW0GhqUNgYrtdckJpcKqVHMLTWQiFJEQAh+QQFCgAJACwQACsALwALAAAEdDCUQ0e6GANJTwlZtoUYR4FD95HZMFErKycpDJoeOLuqPmc4y6Vmm21eHuEvgYsxkblfUynjdag0QybJZKVChYFvSHJisIkDpmAeaLcJduGiDo1JdXx7GYr+Cm8sgXwhBnOEcXQdFD+DYIheA5KSS4cXYT8RACH5BAUKAAkALBAAKAAvAA4AAASEcJw5kr032DA0xkMxHcVnDcZUSKr5BWLhuWFrsmQwyu6F870Q8COiJA6XUi8huRgqyxkIeUooj9AlFbvsXQ2nbfeyPWTHzO31ik6T224LuHu+lYcmjZhtEVuUAVIJBB9bHhp8XX5HiiZzfXBVkXKTcItvIJaVCY8vH4SXnEybox91pBcRACH5BAUKAAkALBAAJQAvABEAAASYcJxZkr2hzFPC/cmgUR54jccgTYOZoJVriVsnrxyxtSCQFTbZDBYAmAYGSuwl85QKPJfmU/pMLctEVTgTXrWmbDTFXRqiYeEWygVlD1y0t5220oVkkKGdZd79IFsJBgJlbn8feSFwF4xziIAyfYMhknctex+Zhy4GnnUgB5mbmlykJqc6kKuWpX+CNxaOrhiTiay4IhanQhEAIfkEBQoACQAsEAAlAC8AEQAABHOwpJkCneNQfW/hWEdZVCFN50WOIkWAxtAmKV22QmLM3UfFLV9r1ZEljLzOLgnSJY+75vNpqE03T+l16+HyAkuv+Fk7IMdo5+acFlnJ7bj8FFhJtcwDfnYwGPBmMy9MZ29Uci17cmEdeIyIITQmNlR9KEkRACH5BAURAAkALBAAIQAvABUAAASIMAVzakk46z1KPUWwbYFnicnwhaPUpiaIvuU3SKYxAGThz5rOCjhSnQLD3uolPL1wtidTmjlQrxpDRvu8VLFc6c16w2Ks1EM4bL6ize8n2ktlt+JtDP2la9mzeYF6VHuCV3+GiRuIioKFI0RSfY0jeGZllJQVjplpmC2fnYqWUqSddI8ZRGpXEQAh+QQFCgAJACwQABoALwAcAAAE8DDJmUAQJes8Ap3DxnXeZ05BeKxsexQlWrhs0Z1fMNO8ccu8lQ0n0blEBcMxlkhtaLCTsTYgBa6hnZDZvDqXOe2LS5luid8ac9D6ERMD5RktHoAO5Tdlpice7AkFeh5kgXh9EmwTggmHLyZ2eIAffCBvjI1wiCgnlYlvBpuio6SlpqeolIupJ6GirqCffZg4sKWTOFEmtKqiuJu/ALS/rLuQFAaFxcYStAYCyx+/xBQDAKK6p8SCygQnNwDXHry8srsZxyYGG53KIZdrtrPKRQnyyLg6iKHXfePlgfpJABDiXrMmpbBUWVjIgh121CZEAAAh+QQFFwAJACwQACUALwARAAAEcjDJSasMNpfM+9wSyBGU4X1nIiQmlk7mKUoA57pvMmvUbgUbX85SGAxLshwuZYR5lp3mUCqhHllQ3clq9XQTtV6Wwr1iJ8De9vqtxMi08MQqCtfavIrQqVcPx0lmXntagkVTIQaKih6EeCkBkZJrc4ASEQAh+QQFFAAJACwQACEALwAVAAAEvjAFk2oCNus6yv5fEXCghWFbV26BRyauMbCw9KnWWM6Vp68ZlAZX+YUyvIqw6KqBiLbPcpBMmjTLYVP0zBAs1pwTSOSmKK9E+IoaGLXBMzgOLO6aWXXmZ+723kglU2Nre1uAdBotYkl9IId1QxYui5E9k4gglXppkZtNQJ+hK58DeVegYZswbhcfq2oBWYCmNBpNVEuwHlQ8aIkfvxoGBLqWPbWCl5pwx3UAATwF09Rr0QnCy85XzgECva2nFREAOw=="}});
//# sourceMappingURL=19.b91d08c447125f1dabad.js.map