(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);A&&A(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var A=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0e89":function(t,e,i){"use strict";var s=i("2c0d"),a=i.n(s);a.a},"1ae4":function(t,e,i){t.exports=i.p+"img/logo.2af32fa8.svg"},"2c0d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"header"},[s("div",{staticClass:"wrapper"},[t._m(0),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.view,expression:"view === 0"}],staticClass:"main"},[s("div",{staticClass:"main-suptitle"},[s("div",{staticClass:"main-suptitle__inner"},[t._v("Az esemény időpontja: "),s("span",[t._v(t._s(t._f("moment")(t.curentdate,"add","-19 days","DD.MM.YYYY")))]),t._v(" és "),s("span",{staticClass:"currentTime"},[t._v(t._s(t._f("moment")(t.curentdate,"DD.MM.YYYY")))]),t._v(" között")])]),t._m(1),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"button"},[s("button",{staticClass:"button__inner no-img",attrs:{type:"button"},on:{click:t.upView}},[t._v("Részt veszek!")])]),t._m(5)]),s("questionsList",{directives:[{name:"show",rawName:"v-show",value:1===t.view,expression:"view === 1"}],on:{showPhoneForm:t.upView}}),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.view,expression:"view === 2"}],staticClass:"main"},[t._m(6),t._m(7),t._m(8),s("div",{staticClass:"main-text"},[s("div",{staticClass:"main-text__inner-text"},[s("input",{directives:[{name:"mask",rawName:"v-mask",value:{mask:t.phoneMask,greedy:!1},expression:"{mask: phoneMask, greedy: false }"},{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"phone-input",attrs:{type:"tel",placeholder:"+36-__-___-____"},domProps:{value:t.phone},on:{input:[function(e){e.target.composing||(t.phone=e.target.value)},t.maskCheck]}})])]),s("div",{staticClass:"button"},[s("img",{staticClass:"icon-call swing",attrs:{src:i("ad78"),alt:""}}),s("button",{staticClass:"button__inner",attrs:{type:"button",disabled:t.buttonNext},on:{click:t.next}},[t._v("Részvétel megerősítése")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.view,expression:"view === 3"}],staticClass:"main"},[t._m(9),t._m(10),s("div",{staticClass:"main-open"},[s("div",{staticClass:"main-open__inner"},[t._v("Az időd elindult: 00:"+t._s(t.minutes)+":"+t._s(t.seconds))])]),t._m(11),t._m(12),s("div",{staticClass:"button"},[s("img",{staticClass:"icon-call swing",attrs:{src:i("9a54"),alt:""}}),s("a",{staticClass:"button__inner",attrs:{href:"tel:0690982607",onclick:"fbq('track', 'Lead'); return true;"},on:{click:t.sendNumber}},[t._v("Hívj és hallgasd meg!")])])])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.view,expression:"view === 3"},{name:"footer",rawName:"v-footer"}],staticClass:"section-copyright",attrs:{id:"summary-footer1"}},[s("p",[t._v("További információ: ez egy szolgáltatás, melynek ára: 508 ft/perc.")]),s("p",[t._v("A szolgáltatás minden hálózatról elérhető. A szolgáltatási oldalon található gombra kattintva egy emelt díjas telefonszámra kerül átirányításra. A szolgáltatás használatával megerősíti, hogy elfogadja az általános szerződési feltételeinket, hogy elmúlt 18 éves, és hogy a kártyatulajdonos beleegyezésével történt a szolgáltatás igénybevétele. A szolgáltatás kizárólag a szórakozás célját szolgálja. A szolgáltatást biztosítja: abcmobile oü, helyi cím: Harju maakond, Tallinn, Peterburi tee 71-318, 114")]),s("p",[t._v("A magyarországi ügyfélszolgálatunk a +36 14554695 telefonszámon érhető el. e-mail üzeneteket az abcmobile.hu@silverlines.info címen várunk. Ügyfélszolgálat nyitvatartása: hétfő - péntek, 09:00 - 17:00.")]),t._m(13),t._m(14)]),s("loadingComponent",{attrs:{showModal:t.loadingModal},on:{timeOut:t.timeOutStop}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper-header"},[s("div",{staticClass:"header-top"},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logo__img",attrs:{src:i("1ae4"),alt:""}})]),s("div",{staticClass:"header-text"},[s("div",{staticClass:"header__text"},[t._v("A forradalmi pénzügyi program, amelyet az Üzleti Angyalok Nemzetközi Szervezete hozott létre. "),s("span",[t._v("Hungary")]),s("div",{staticClass:"header-icon"},[s("img",{staticClass:"header-icon__img",attrs:{src:i("5904"),width:"16px",alt:""}})])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-title"},[i("div",{staticClass:"main-title__inner animated infinite pulse"},[t._v("Figyelem!"),i("br"),t._v("Korlátozott ajánlat!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-text"},[i("div",{staticClass:"main-text__inner"},[t._v("Lehetőséged van részt venni a pénzügyi programban:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-text-subtittle"},[i("div",{staticClass:"main-text-subtitle__inner"},[t._v('"Hogyan keress 1000 eurót minden héten."')])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-text"},[i("div",{staticClass:"main-text__inner-text"},[t._v("Ahhoz, hogy a fontos információknak birtokában legyünk, kérünk, válaszolj meg 3 egyszerű kérdést")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"copy"},[i("p",[t._v("© 2020. ABCMobile OÜ")]),i("p",[t._v("Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.")]),i("p",[t._v("BŐVEBB TÁJÉKOZTATÁSÉRT LÁSD "),i("a",{attrs:{href:"./terms.php"}},[t._v("A FELHASZNÁLÁSI FELTÉTELEKET")]),t._v(" ÉS AZ "),i("a",{attrs:{href:"./privacy.php"}},[t._v("ADATVÉDELMI IRÁNYELVEINKET")])]),i("p",[i("a",{attrs:{href:"https://www.upc.hu/pdf/aszf/edsz/upc_emeltdijas_szolgaltatasok_20190624.pdf"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-open"},[i("div",{staticClass:"main-open__inner"},[t._v("Köszönjük a válaszaidat!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-text-subtittle"},[i("div",{staticClass:"main-text-subtitle__inner"},[t._v("Folytasd az ingyenes regisztrációt, hogy személyre szóló változatot kapj a ,,Hogyan keress 1000 eurót hetente” programból.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-small"},[i("div",{staticClass:"main-small__inner"},[t._v("Add meg a telefon számodat:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-title"},[i("div",{staticClass:"main-title__inner-text animated infinite pulse"},[t._v("Gratulálunk!"),i("br"),t._v("Sikeresen befejezted a regisztrációt.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-text"},[i("div",{staticClass:"main-text__inner"},[t._v("A hozzáférést a személyre szóló hangüzenethez a telefonszámod részére megnyitottuk.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-text-subtittle"},[i("div",{staticClass:"main-text-subtitle__inner"},[t._v('"Hogyan keress 1000 eurót hetente"')])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-small"},[i("div",{staticClass:"main-small__inner"},[t._v("Kezdeményezz hívást a telefonodról most, ne hagyd elveszni az esélyt! A résztvevők száma korlátozott; ezért használd ki a lehetőségedet most.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("BŐVEBB TÁJÉKOZTATÁSÉRT LÁSD "),i("a",{attrs:{href:"./terms.php"}},[t._v("A FELHASZNÁLÁSI FELTÉTELEKET")]),t._v(" ÉS AZ "),i("a",{attrs:{href:"./privacy.php"}},[t._v("ADATVÉDELMI IRÁNYELVEINKET")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("a",{attrs:{href:"https://www.upc.hu/pdf/aszf/edsz/upc_emeltdijas_szolgaltatasok_20190624.pdf"}})])}],r=(i("28a5"),i("a481"),i("386d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading",class:{active:t.showModal}},[t._m(0)])}),o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-container"},[s("div",{staticClass:"loading-content"},[s("img",{attrs:{src:i("887d"),alt:""}})])])}],l={name:"loadingComponent",props:{showModal:Boolean},methods:{loading:function(){var t=this;setTimeout((function(){t.$emit("timeOut",1)}),5e3)}},updated:function(){this.showModal&&this.loading()}},c=l,A=(i("0e89"),i("2877")),u=Object(A["a"])(c,r,o,!1,null,"292cd635",null),m=u.exports,d=i("bc3a"),v=i.n(d),h=location.origin+location.pathname,M={clickID:"modules/getID.php",SHA:"modules/getSHA.php"},g={getID:function(t,e){return v()({method:"POST",url:h+M.clickID,data:[t,e]})},getSHA:function(t,e,i){return v()({method:"POST",url:h+M.SHA,data:{msisdn:t,click_id:e,key:i}})}},p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"questions-list"},[i("div",{staticClass:"questions-list-loader",class:{active:t.showCheck}},[i("svg",{class:{checkmark:t.showCheck},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[i("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),i("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})])]),i("div",{staticClass:"questions-list-container"},t._l(t.questions,(function(e,s){return t.qID===s?i("div",{staticClass:"questions-list-item"},[i("div",{staticClass:"list-item-subtitle"},[i("h3",{domProps:{innerHTML:t._s(s+1+" Kérdés")}})]),i("div",{staticClass:"list-item-title"},[i("h3",{domProps:{innerHTML:t._s(e.title)}})]),i("div",{staticClass:"list-item-questions"},t._l(e.answers,(function(e){return i("button",{attrs:{type:"button"},domProps:{innerHTML:t._s(e.text)},on:{click:t.nextQuestion}})})),0)]):t._e()})),0)])])},f=[],_=[{title:"Szükséged van extra jövedelemre?",answers:[{text:"Igen",active:!1},{text:"Nem",active:!1},{text:"Nem tudok válaszolni",active:!1}]},{title:"Mire költenél heti 1000 eurót?",answers:[{text:"Családi ügyekre",active:!1},{text:"Vállalkozásra",active:!1},{text:"Jótékonyságra",active:!1}]},{title:"Szeretnél további értesítéseket jövőbeli pénzügyi programokról telefonon vagy SMS-ben?",answers:[{text:"Igen",active:!1},{text:"Nem",active:!1}]}],z={name:"questions-list",data:function(){return{questions:_,qID:0,showCheck:!1}},methods:{nextQuestion:function(){var t=this;this.showCheck=!this.showCheck,setTimeout((function(){t.showCheck=!t.showCheck,t.qID++,t.qID===t.questions.length&&t.$emit("showPhoneForm",1)}),2e3)}}},w=z,Y=(i("7d82"),Object(A["a"])(w,p,f,!1,null,"afeebd7e",null)),G=Y.exports,x={name:"app",data:function(){return{currentTime:null,currentTimestart:null,curentdate:new Date,timer:null,countryCode:"07",phone:"",progress:20,totalTime:0,buttonNext:!0,phoneMask:"+36-99-999-9999",loadingModal:!1,showLastPage:!1,view:0,key:"",QUERY:this.getQuery(window.location.search),click_id:null}},components:{loadingComponent:m,questionsList:G},methods:{maskCheck:function(t){t.target.inputmask.isComplete()?this.buttonNext=!1:this.buttonNext=!0},startTimer:function(){var t=this;this.timer=setInterval((function(){return t.countdown()}),1e3)},padTime:function(t){return(t<10?"0":"")+t},countdown:function(){this.totalTime>=0?this.totalTime++:this.totalTime=0},next:function(){this.loadingModal=!this.loadingModal},clearNumber:function(t){return t.replace(/\D+/g,"")},timeOutStop:function(t){t&&(this.upView(),this.loadingModal=!1,this.startTimer())},upView:function(){this.view++},keyGenerate:function(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<t;s++)e+=i.charAt(Math.floor(Math.random()*i.length));return e},getQuery:function(t){return t.slice(1).split("&").map((function(t){var e=t.split("=");return{key:e[0],value:e[1]}})).reduce((function(t,e){return t[e.key]=e.value,t}),{})},sendNumber:function(){var t=this.clearNumber(this.phone);g.getSHA(t,this.click_id,this.key).then((function(t){return t})).catch((function(t){return console.log(t)}))}},computed:{minutes:function(){var t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds:function(){var t=this.totalTime-60*this.minutes;return this.padTime(t)}},created:function(){if(this.QUERY.click_id)this.click_id=this.QUERY.click_id;else{this.key=this.keyGenerate(12);var t=JSON.stringify(this.QUERY),e=this;g.getID(t,this.key).then((function(t){return e.click_id=t.data})).catch((function(t){return console.log(t)}))}}},E=x,k=(i("5c0b"),Object(A["a"])(E,a,n,!1,null,null,null)),b=k.exports,y=i("7699").default;s["a"].use(y);var C=i("2ead");s["a"].use(C),s["a"].directive("footer",(function(t,e,i){function s(){var t=40,e=550,s=window.innerHeight;s>e?(i.elm.style.top=s-t+"px",i.elm.style.marginTop=0,i.elm.style.position="absolute"):(t=0,i.elm.style.top="auto",i.elm.style.marginTop="15px",i.elm.style.position="relative")}i&&(s(),window.onresize=function(){s()})})),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},5904:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAPAAgMAAACp24wqAAAACVBMVEXNKj7///9Db00ycL4jAAAEY0lEQVR42u3RAQ0AAAjDMExiEpXYgKeVsFUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzVRDPYYAzGYAzGYAzGYIMxGIMxGIMxGIMNxmAMxmAMxmAMxmCDMRiDMRiDMRiDDcZgDMZgDMZgDDYYgzEYgzEYgzEYgw3GYAzGYAzGYAw2GIMxGIMxGIMx2GAJDMZgDMZgDMZgDDYYgzEYgzEYgzHYYAzGYAzGYAzGYAw2GIMxGIMxGIMx2GAMxmAMxmAMxmCDMRiDMRiDMRiDMdhgDMZgDMZgDMZggzEYgzEYgzEYgw3GYAzGYAzGYAzGYIMxGIMxGIMxGIMNxmAMxmAMxmAMxmCDMRiDMRiDMRiDDcZgDMZgDMZgDDYYgzEYgzEYgzEYgw3GYAzGYAzGYAw2GIMxGIMxGIMx2GAMxmAMxmAMxmAMNhiDMRiDMRiDMdhgDMZgDMZgDMZgDDYYgzEYgzEYgzHYYAzGYAzGYAzGYIMxGIMxGIMxGIMx2GAMxmAMxmAMxmCDMRiDMRiDMRiDDcZgDMZgDMZgDMZggzEYgzEYgzEYgw3GYAzGYAzGYAzGYIMxGIMxGIMxGIMNxmAMxmAMxmAMNhiDMRiDMRiDMRiDDcZgDMZgDMZgDDYYgzEYgzEYgzHYYAzGYAzGYAzGYAw2GIMxGIMxGIMx2GAMxmAMxmAMxmCDJTCYz4OHaAYbjMEYjMEYjMEYbDAGYzAGYzAGY7DBGIzBGIzBGIzBGGwwBmMwBmMwBmOwwRiMwRiMwRiMwQZjMAZjMAZjMAZjsMEYjMEYjMEYjMEGYzAGYzAGYzAGGyyBwRiMwRiMwRiMwQZjMAZjMAZjMAYbjMEYjMEYjMEYjMEGYzAGYzAGYzAGG4zBGIzBGIzBGGwwBmMwBmMwBmMwBhuMwRiMwRiMwRhsMAZjMAZjMAZjsMEYjMEYjMEYjMEYbDAGYzAGYzAGY7DBGIzBGIzBGIzBGGwwBmMwBmMwBmOwwRiMwRiMwRiMwQZjMAZjMAZjMAZjsMEYjMEYjMEYjMEGYzAGYzAGYzAGG4zBGIzBGIzBGIzBBmMwBmMwBmMwBhuMwRiMwRiMwRiMwQZjMAZjMAZjMAYbjMEYjMEYjMEYbDAGYzAGYzAGYzAGG4zBGIzBGIzBGGwwBmMwBmMwBmOwwRiMwRiMwRiMwRhsMAZjMAZjMAZjsMEYjMEYjMEYjMEYbDAGYzAGYzAGY7DBGIzBGIzBGIzBBmMwBmMwBmMwBmOwwRiMwRiMwRiMwQZjMAZjMAZjMAYbjMEYjMEYjMEYjMEGYzAGYzAGYzAGG4zBGIzBGIzBGGywBAbz2AIAvMr81Z2p2AAAAABJRU5ErkJggg=="},"5c0b":function(t,e,i){"use strict";var s=i("e332"),a=i.n(s);a.a},"7d82":function(t,e,i){"use strict";var s=i("95a8"),a=i.n(s);a.a},"887d":function(t,e,i){t.exports=i.p+"img/1.9ccf7b3b.gif"},"95a8":function(t,e,i){},"9a54":function(t,e,i){t.exports=i.p+"img/icon-call.865a8001.svg"},ad78:function(t,e,i){t.exports=i.p+"img/lock.c7088286.svg"},e332:function(t,e,i){}});
//# sourceMappingURL=app.c4301869.js.map
