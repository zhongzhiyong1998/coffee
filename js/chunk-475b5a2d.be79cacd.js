(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-475b5a2d"],{c84b:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detail"},[i("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),i("div",[i("img",{staticClass:"auto-img",attrs:{src:t.detailData.large_img}})]),i("div",{staticClass:"pro-info"},[i("div",{staticClass:"pro-box"},[i("div",{staticClass:"pro-name"},[i("div",{staticClass:"ch-name"},[t._v(t._s(t.detailData.name))]),i("div",{staticClass:"en-name"},[t._v(t._s(t.detailData.enname))])]),i("div",{staticClass:"pro-price"},[t._v("¥"+t._s(t.detailData.price))])]),i("div",{staticClass:"rules"},t._l(t.detailData.rulesData,(function(a,e){return i("div",{key:e,staticClass:"rule"},[i("div",{staticClass:"rule-title"},[t._v(t._s(a.title))]),i("div",{staticClass:"rule-items"},t._l(a.rule,(function(e,s){return i("div",{key:s,class:{active:a.currentIndex==s},on:{click:function(i){return t.selectRule(a,s)}}},[t._v(t._s(e.title))])})),0)])})),0),i("div",{staticClass:"count-box"},[i("div",{staticClass:"select-count"},[t._v("选择数量")]),i("div",{staticClass:"count"},[i("van-stepper",{attrs:{theme:"round","button-size":"22","disable-input":""},model:{value:t.count,callback:function(a){t.count=a},expression:"count"}})],1)]),i("div",{staticClass:"desc"},[i("div",{staticClass:"desc-title"},[t._v(" 商品描述 ")]),i("div",{staticClass:"desc-text"},t._l(t.detailData.descData,(function(a,e){return i("div",{key:e},[t._v(t._s(e+1)+"、"+t._s(a))])})),0)])]),i("van-goods-action",[i("van-goods-action-icon",{attrs:{icon:"bag",text:"购物车",color:"#666",badge:t.shopbagCount>0?t.shopbagCount:""},on:{click:t.goShopbag}}),i("van-goods-action-icon",{attrs:{icon:"like",text:t.likeStatus?"已收藏":"收藏",color:t.likeStatus?"#0c34ba":"#666"},on:{click:t.likeAndNotLike}}),i("van-goods-action-button",{attrs:{color:"#5E88E0",type:"warning",text:"加入购物车"},on:{click:t.addShopbag}}),i("van-goods-action-button",{attrs:{color:"#0733B2",type:"danger",text:"立即购买"},on:{click:t.goShopbag}})],1)],1)},s=[],o=(i("4160"),i("a15b"),i("ac1f"),i("1276"),i("159b"),i("5530")),n=(i("eadb"),i("2f62")),c={name:"Detail",data:function(){return{pid:"",detailData:{},likeStatus:!1,count:1}},created:function(){this.pid=this.$route.params.pid,this.getproductDetail(),this.getLikeProduct(),this.getShopbagCount()},methods:Object(o["a"])({back:function(){this.$router.go(-1)},getproductDetail:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseUrl+"/productDetail",params:{appkey:this.appkey,pid:this.pid}}).then((function(a){if(t.$toast.clear(),600==a.data.code){var i=a.data.result[0],e=["cream","milk","sugar","tem"],s=[];i.rulesData=[],e.forEach((function(t){var a={title:i[t+"_desc"],rule:[],currentIndex:0};if(i[t]){var e=i[t].split("/");e.forEach((function(t){var i={title:t};a.rule.push(i)})),i.rulesData.push(a)}})),s=i.desc.split("\n"),i.descData=s,t.detailData=a.data.result[0]}})).catch((function(a){t.$toast.clear(),t.$toast({msg:a,forbidClick:!0,duration:1e3})}))},selectRule:function(t,a){t.currentIndex!=a&&(t.currentIndex=a)},like:function(){var t=this,a=this.$cookies.get("tokenString");if(!a)return this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:this.baseUrl+"/like",data:{appkey:this.appkey,pid:this.pid,tokenString:a}}).then((function(a){if(t.$toast.clear(),700==a.data.code)return t.$toast({message:a.data.msg,forbidClick:!0,duration:1e3}),t.$router.push({name:"Login"});800==a.data.code&&(t.likeStatus=!0)})).catch((function(a){t.$toast.clear(),t.$toast({msg:a,forbidClick:!0,duration:1e3})}))},getLikeProduct:function(){var t=this,a=this.$cookies.get("tokenString");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseUrl+"/findlike",params:{appkey:this.appkey,pid:this.pid,tokenString:a}}).then((function(a){t.$toast.clear(),700!=a.data.code&&1e3==a.data.code&&a.data.result.length>0&&(t.likeStatus=!0)})).catch((function(a){t.$toast.clear(),t.$toast({msg:a,forbidClick:!0,duration:1e3})})))},notLike:function(){var t=this,a=this.$cookies.get("tokenString");if(!a)return this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:this.baseUrl+"/notlike",data:{appkey:this.appkey,pid:this.pid,tokenString:a}}).then((function(a){if(t.$toast.clear(),700==a.data.code)return t.$toast({message:a.data.msg,forbidClick:!0,duration:3e3}),t.$router.push({name:"Login"});900==a.data.code&&1==a.data.result&&(t.likeStatus=!1)})).catch((function(a){t.$toast.clear(),t.$toast({msg:a,forbidClick:!0,duration:1e3})}))},likeAndNotLike:function(){this.likeStatus?(this.notLike(),this.changeNewLike(!1)):(this.like(),this.changeNewLike(!0))},addShopbag:function(){var t=this,a=this.$cookies.get("tokenString");if(!a)return this.$router.push({name:"Login"});var i=[];this.detailData.rulesData.forEach((function(t){i.push(t.rule[t.currentIndex].title)})),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:this.baseUrl+"/addShopcart",data:{pid:this.pid,count:this.count,rule:i.join("/"),appkey:this.appkey,tokenString:a}}).then((function(a){if(t.$toast.clear(),700==a.data.code)return t.$toast({message:a.data.msg,forbidClick:!0,duration:1e3}),t.$router.push({name:"Login"});3e3==a.data.code&&1==a.data.status&&(t.changeShopbagCount(t.shopbagCount+1),t.$toast({message:a.data.msg,forbidClick:!0,duration:500}))})).catch((function(a){t.$toast.clear(),t.$toast({msg:a,forbidClick:!0,duration:1e3})}))},goShopbag:function(){this.$router.push({name:"Shopcar"})},getShopbagCount:function(){var t=this;if(!this.isLoadShopbagCount){var a=this.$cookies.get("tokenString");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseUrl+"/shopcartRows",params:{appkey:this.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),700!=a.data.code&&8e3==a.data.code&&(t.changeShopbagCount(a.data.result),t.changeIsLoadShopbagCount(!0))})).catch((function(a){t.$toast.clear(),t.$toast({msg:a,forbidClick:!0,duration:1e3})})))}}},Object(n["b"])(["changeShopbagCount","changeIsLoadShopbagCount","changeNewLike"])),computed:Object(o["a"])({},Object(n["c"])(["shopbagCount","isLoadShopbagCount","isNewLike"]))},r=c,d=i("2877"),u=Object(d["a"])(r,e,s,!1,null,null,null);a["default"]=u.exports},eadb:function(t,a,i){}}]);
//# sourceMappingURL=chunk-475b5a2d.be79cacd.js.map