(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70577c1c"],{"0c33":function(t,a,e){},"30c7":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg"},[e("div",{staticClass:"bg-box"}),e("div",{staticClass:"bg-content"},[t._t("default")],2)])},n=[],c=(e("d286"),{name:"Bg"}),i=c,r=e("2877"),o=Object(r["a"])(i,s,n,!1,null,"7f7dc289",null);a["a"]=o.exports},9820:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-result-box"},[e("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":t.back},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-search",{attrs:{placeholder:"请输入搜索关键词",shape:"round"},on:{search:t.getProductData},model:{value:t.searchname,callback:function(a){t.searchname=a},expression:"searchname"}})]},proxy:!0}])}),e("Bg",[e("div",{staticClass:"pro-items"},t._l(t.productData,(function(a,s){return e("div",{key:s,staticClass:"pro-item"},[e("div",{staticClass:"pro-img"},[e("img",{staticClass:"auto-img",attrs:{src:a.smallImg},on:{click:function(e){return t.enterDetail(a.pid)}}})]),e("div",{staticClass:"pro-info"},[e("div",{staticClass:"ch-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"en-name"},[t._v(t._s(a.enname))]),e("div",{staticClass:"pro-price"},[t._v("¥"+t._s(a.price))])])])})),0)])],1)},n=[],c=(e("0c33"),e("30c7")),i={name:"SearchResult",data:function(){return{productData:[],goodsname:"",searchname:""}},methods:{back:function(){this.$router.go(-1)},getProductData:function(){var t=this;if(this.searchname){if(this.searchname==this.goodsname)return;this.goodsname=this.searchname,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseUrl+"/search",params:{appkey:this.appkey,name:this.searchname}}).then((function(a){t.$toast.clear(),"Q001"==a.data.code&&(t.productData=a.data.result)}))}},enterDetail:function(t){this.$router.push({name:"Detail",params:{pid:t}})}},components:{Bg:c["a"]},created:function(){this.searchname=this.$route.params.goodsname,this.getProductData()}},r=i,o=e("2877"),l=Object(o["a"])(r,s,n,!1,null,null,null);a["default"]=l.exports},d286:function(t,a,e){}}]);
//# sourceMappingURL=chunk-70577c1c.4322b1c9.js.map