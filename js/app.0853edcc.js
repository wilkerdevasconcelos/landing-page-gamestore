(function(t){function e(e){for(var i,o,a=e[0],c=e[1],d=e[2],u=0,p=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/landing-page-vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"349e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center m-0",attrs:{id:"app"}},[n("div",{staticClass:"col-11"},[n("div",{staticClass:"row pt-5"},[n("div",{staticClass:"col-9"},[n("div",{staticClass:"row d-flex justify-content-between pb-4"},[n("h1",{attrs:{id:"topic"}},[t._v("Games")]),n("div",{staticClass:"col-7 col-sm-3 d-flex align-items-center"},[n("Select",{attrs:{options:t.options,sortByBiggestPrice:t.sortByBiggestPrice,sortBySmallPrice:t.sortBySmallPrice}})],1)]),n("div",{staticClass:"row justify-content-between"},t._l(t.games,(function(e,i){return n("div",{key:i,staticClass:"col-6 col-sm-6 col-md-4 pl-0 pb-5"},[n("Card",{attrs:{data:e,onClickAdd:t.onClickAdd}})],1)})),0)]),n("div",{staticClass:"col-3"},[n("CardCart",{key:t.update,attrs:{items:t.selectedsItems}})],1)])])])},s=[],o=(n("c740"),n("a434"),n("a9e3"),n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{staticClass:"form-control",on:{change:t.handleChange}},t._l(t.options,(function(e){return n("option",{key:e.title},[t._v(t._s(e.title))])})),0)}),a=[],c={name:"Select",props:{options:Array},methods:{handleChange:function(t){var e=this.options.findIndex((function(e){return e.title==t.target.value}));this.options[e].func()}},created:function(){console.log(this.options)}},d=c,l=n("2877"),u=Object(l["a"])(d,o,a,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{mouseenter:t.handleAddShopOver,mouseleave:t.handleAddShopOut}},[n("div",{staticClass:"d-flex justify-content-center align-items-center rounded",attrs:{id:"card"}},[n("img",{attrs:{src:t.data.path,id:"image-games"}})]),t.addShopIsOpen?t._e():n("div",[n("span",{staticClass:"text-center d-block",attrs:{id:"title"}},[t._v(t._s(t.data.name))]),n("span",{staticClass:"text-center d-block font-weight-bold",attrs:{id:"price"}},[t._v("R$"+t._s(t.data.price))])]),t.addShopIsOpen?n("span",{staticClass:"text-center d-block font-weight-bold",attrs:{id:"price"},on:{click:function(e){return t.onClickAddCart(t.data)}}},[t._v(" Adicionar ao carrinho ")]):t._e()])},m=[],h={name:"card",props:{data:Object,onClickAdd:Function},data:function(){return{addShopIsOpen:!1}},methods:{handleAddShopOut:function(){this.addShopIsOpen=!1},handleAddShopOver:function(){this.addShopIsOpen=!0},onClickAddCart:function(t){var e=Object.assign(t,{quantidade:1});this.onClickAdd(e)}},created:function(){console.log(this.data)}},g=h,v=(n("67da"),Object(l["a"])(g,f,m,!1,null,null,null)),b=v.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border rounded p-3"},[n("h5",[t._v("Carrinho")]),t.items.length?t._e():n("div",[t._m(0),n("p",{staticClass:"text-center",attrs:{id:"info"}},[t._v("Até o momento o seu carrinho está vazio")])]),t.items.length?n("div",[t._l(t.items,(function(t,e){return n("div",{key:e,staticClass:"pt-2"},[n("CardItems",{attrs:{item:t}})],1)})),n("div",{staticClass:"pt-2"},[n("p",{staticClass:"text-right"},[n("b",[t._v("Valor total:")]),t._v("R$"+t._s(this.price))]),n("p",{staticClass:"text-right"},[n("b",[t._v("Valor do frete:")]),t._v(t._s(this.freight))]),t._m(1)])],2):t._e()])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center pt-4 pb-4"},[n("i",{staticClass:"fas fa-cart-plus fa-5x",attrs:{id:"cart"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-end"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Finalizar Compra")])])}],y=(n("13d5"),n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row border rounded m-0"},[n("div",{staticClass:"col-2 d-flex align-items-center justify-content-center w-100 button-exclude",on:{click:t.handleRemoveItem}},[n("i",{staticClass:"far fa-trash-alt"})]),n("div",{staticClass:"col-6 text-truncate p-0",attrs:{id:"title"}},[t._v(" "+t._s(t.item.name)+" ")]),n("div",{staticClass:"col-4 d-flex justify-content-between align-items-center"},[n("i",{staticClass:"fas fa-minus button-operator",on:{click:function(e){return t.handleSubAmount(t.item.codigoProduto)}}}),t._v(" "+t._s(t.item.quantidade)+" "),n("i",{staticClass:"fas fa-plus button-operator",on:{click:function(e){return t.handleAddAmount(t.item.codigoProduto)}}})])])}),I=[],x={name:"CardItems",props:{item:Object},data:function(){return{addShopIsOpen:!1}},inject:["handleAddAmount","handleSubAmount","handleRemoveItem"],methods:{},watch:{item:function(){console.log(this.item)}},created:function(){console.log(this.item)}},j=x,S=(n("64f3"),Object(l["a"])(j,y,I,!1,null,null,null)),w=S.exports,A={name:"cart",props:["items"],components:{CardItems:w},data:function(){return{price:0,freight:"Gratis"}},created:function(){this.price=this.items.reduce((function(t,e){e.price=e.price.replace(",",".");var n=Number(e.price);return n*=e.quantidade,t+n}),0),this.price=this.price.toFixed(2),this.price>250?this.freight="Grátis":this.freight="R$10,00",this.price=String(this.price).replace(".",",")}},O=A,P=(n("8f6e"),Object(l["a"])(O,C,_,!1,null,null,null)),k=P.exports,B=n("8542"),M={name:"App",components:{Select:p,Card:b,CardCart:k},methods:{onClickAdd:function(t){var e=this.selectedsItems.findIndex((function(e){return e.codigoProduto==t.codigoProduto}));-1==e&&this.selectedsItems.push(t)},handleAddAmount:function(t){var e=this.selectedsItems.findIndex((function(e){return e.codigoProduto==t}));this.selectedsItems[e].quantidade++,this.update++},handleSubAmount:function(t){var e=this.selectedsItems.findIndex((function(e){return e.codigoProduto==t}));this.selectedsItems[e].quantidade>1&&(this.selectedsItems[e].quantidade-=1,this.update++)},handleRemoveItem:function(t){var e=this.selectedsItems.findIndex((function(e){return e.codigoProduto==t}));this.selectedsItems.splice(e,1)},sortByBiggestPrice:function(){this.games=this.games.sort((function(t,e){return t.price=t.price.replace(",","."),e.price=e.price.replace(",","."),Number(t.price)==Number(e.price)?0:+(Number(t.price)<Number(e.price))||-1}))},sortBySmallPrice:function(){this.games=this.games.sort((function(t,e){return t.price=t.price.replace(",","."),e.price=e.price.replace(",","."),Number(t.price)==Number(e.price)?0:+(Number(t.price)>Number(e.price))||-1}))},sortByRelevance:function(){this.games=this.defaultGames}},data:function(){return{options:[{title:"Mais populares",func:this.sortByRelevance},{title:"Menor preço",func:this.sortBySmallPrice},{title:"Maior preço",func:this.sortByBiggestPrice}],defaultGames:[],games:B,selectedsItems:[],update:0}},created:function(){console.log("render")},provide:function(){return{selectedsItems:this.selectedsItems,handleAddAmount:this.handleAddAmount,handleSubAmount:this.handleSubAmount,handleRemoveItem:this.handleRemoveItem}},watch:{selectedsItems:function(t,e){this.selectedsItems=e}}},$=M,N=(n("034f"),Object(l["a"])($,r,s,!1,null,null,null)),R=N.exports;n("15f5");i["a"].config.productionTip=!1;var E=new i["a"]({render:function(t){return t(R)}}).$mount("#app");window.vm=E},"64f3":function(t,e,n){"use strict";var i=n("7463"),r=n.n(i);r.a},"67da":function(t,e,n){"use strict";var i=n("8802"),r=n.n(i);r.a},7463:function(t,e,n){},8542:function(t){t.exports=JSON.parse('[{"name":"Super Mario Odissey - Switch","price":"197,88","path":"/images/sm.jpg","codigoProduto":"001"},{"name":"Call of Duty: Infinite Warfare","price":"49,99","path":"/images/cod.webp","codigoProduto":"002"},{"name":"The Witcher III - Wild Hunt","price":"100,00","path":"/images/tw3.jpg","codigoProduto":"003"},{"name":"Call of Duty: WWII","price":"249,99","path":"/images/codWW2.webp","codigoProduto":"004"},{"name":"Mortal Kombat XL","price":"69,99","path":"/images/mk.jpg","codigoProduto":"005"},{"name":"Shards of Darkness","price":"71,94","path":"/images/sod.jpg","codigoProduto":"006"},{"name":"Terra Média: Sombras de Mordor","price":"79,99","path":"/images/som.jpg","codigoProduto":"007"},{"name":"FIFA 18","price":"195,39","path":"/images/f18.jpg","codigoProduto":"008"},{"name":"Horizon Zero Dawn","price":"115,80","path":"/images/hzr.jpg","codigoProduto":"009"}]')},"85ec":function(t,e,n){},8802:function(t,e,n){},"8f6e":function(t,e,n){"use strict";var i=n("349e"),r=n.n(i);r.a}});
//# sourceMappingURL=app.0853edcc.js.map