(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(e,t,n){var content=n(246);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(64).default)("b9f8e998",content,!0,{sourceMap:!1})},245:function(e,t,n){"use strict";var o=n(222);n.n(o).a},246:function(e,t,n){(t=n(63)(!1)).push([e.i,".page__wrapp[data-v-b4a4f4f4]{margin:auto;max-width:600px}.header[data-v-b4a4f4f4]{text-align:center;margin:20px 10px}.content[data-v-b4a4f4f4]{padding-left:20px;padding-right:20px}.submit-form[data-v-b4a4f4f4]{display:flex;justify-content:center;margin-top:30px}.custom-loader[data-v-b4a4f4f4]{-webkit-animation:loader-data-v-b4a4f4f4 1s infinite;animation:loader-data-v-b4a4f4f4 1s infinite;display:flex}@-webkit-keyframes loader-data-v-b4a4f4f4{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes loader-data-v-b4a4f4f4{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]),e.exports=t},321:function(e,t,n){"use strict";n.r(t);n(19);var o={data:function(){var e=this;return{showCalendar:!1,picker:(new Date).toISOString().substr(0,10),tonsRules:[function(e){return!!e||"Введите тонаж"},function(t){return e.validTonas(t)}],adressRules:[function(e){return!!e||"Адрес не введён"},function(e){return e&&e.length>=3||"Разве это адрес? Укажите хотя бы 3 буквы, а там мы догадаемся"}],tons:0,adress:"",meRegion:"",selectedBase:"",loaderPage:!0,loading:!1,sendOk:!1}},computed:{regionsName:function(){var e=this.$store.getters.getRegions,t=[];return e.forEach((function(e){t.push(e.name)})),t},waterBases:function(){var e=this.$store.getters.getMeRegion,t=this.$store.getters.getWaterBasesForRegions(e.uuid),n=[];return t.forEach((function(e){n.push(e.name)})),n}},methods:{selectedRegion:function(e){this.$store.dispatch("addMeRegion",e)},createPointPosition:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,o=t.coords.longitude,r="";fetch("https://geocode-maps.yandex.ru/1.x/?apikey=45ccaf60-7908-468d-adde-66b6dca72de5&format=json&geocode=".concat(o,",").concat(n,"&kind=locality")).then((function(e){return e.json()})).then((function(e){return e.response.GeoObjectCollection})).then((function(t){r=t.featureMember[0].GeoObject.name,console.log(o+", "+n),console.log(r),e.meRegion=e.$store.getters.searchRegionFromGeoposition(r)})).catch((function(e){console.log(e)}))}),(function(e){console.log("ERROR(".concat(e.code,"): ").concat(e.message))}))},validTonas:function(e){var t=+e;return"number"==typeof t&&0!=t||"Необходимо ввести цифры"},validForm:function(){return!!(this.tons>0&&this.adress.length>2&&this.meRegion&&this.selectedBase)},getBasesWaterFromServer:function(){var e=this;fetch("https://testforbackend.000webhostapp.com/?name=dataRegionAndBases").then((function(e){return e.json()})).then((function(t){console.log("Ответ с сервера"),console.log(t),e.$store.dispatch("addDataRegAndBW",t),e.loaderPage=!1,e.createPointPosition()})).catch((function(e){console.log("Произошла ошибка соединения с сервером. Попробуйте позже")}))},sendFormToServer:function(){var e=this;this.loading=!0;var t={date:this.picker,select1:this.meRegion,select2:this.selectedBase,tons:this.tons,adress:this.adress};fetch("https://cors-anywhere.herokuapp.com/https://testforbackend.000webhostapp.com/",{method:"POST",body:JSON.stringify(t),withCredentials:!0,headers:{"Content-type":"application/json;charset=utf-8"}}).then((function(t){console.log("Данные успешно отправлены на сервер"),e.loading=!1,e.sendOk=!0,setTimeout((function(){e.sendOk=!1}),4e3)})).catch((function(t){console.log("Произошла ошибка соединения с сервером. Попробуйте позже"),e.loading=!1}))}},watch:{meRegion:function(e,t){this.selectedRegion(e)}},created:function(){this.getBasesWaterFromServer()}},r=(n(245),n(46)),c=n(78),l=n.n(c),d=n(242),f=n(320),h=n(318),v=n(319),m=n(312),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[e.loaderPage?n("div",{staticClass:"page__loader"},[e._v("Идёт загрузка данных с сервера...")]):n("div",{staticClass:"page__wrapp"},[e._m(0),e._v(" "),n("div",{staticClass:"content"},[n("v-form",{ref:"form"},[n("v-select",{attrs:{items:e.regionsName,rules:[function(e){return!!e||"Выберите регион"}],label:"Регион",required:""},model:{value:e.meRegion,callback:function(t){e.meRegion=t},expression:"meRegion"}}),e._v(" "),n("v-select",{attrs:{items:e.waterBases,rules:[function(e){return!!e||"Выберите водобазу"}],label:"Водобаза",required:""},model:{value:e.selectedBase,callback:function(t){e.selectedBase=t},expression:"selectedBase"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.tonsRules,label:"Количество воды (в тоннах)",required:"",type:"number"},model:{value:e.tons,callback:function(t){e.tons=t},expression:"tons"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.adressRules,label:"Куда доставить (адрес)",required:""},model:{value:e.adress,callback:function(t){e.adress=t},expression:"adress"}}),e._v(" "),n("div",{staticClass:"date-show"},[e._v("\n          Выберите дату доставки\n          "),n("v-btn",{attrs:{color:"normal"},on:{click:function(t){e.showCalendar=!e.showCalendar}}},[e._v(e._s(e.picker))])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showCalendar,expression:"showCalendar"}],staticClass:"form__calendar"},[n("v-date-picker",{attrs:{color:"primary","show-current":!0},on:{"dblclick:date":function(t){e.showCalendar=!e.showCalendar}},model:{value:e.picker,callback:function(t){e.picker=t},expression:"picker"}}),e._v(" "),n("div",{staticClass:"form__calendar__text"},[n("p",[e._v("Для выбора даты кликните 2 раза")])])],1)],1)],1),e._v(" "),n("div",{staticClass:"submit-form"},[n("v-btn",{attrs:{color:"green",loading:e.loading,disabled:e.loading||!e.validForm()},on:{click:function(t){return e.sendFormToServer()}}},[e._v("Отправить")])],1),e._v(" "),e.sendOk?n("div",{staticClass:"sendOk"},[e._v("Данные были успешно отправлены")]):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"header__title"},[t("h2",[this._v("Заказ воды")])])])}],!1,null,"b4a4f4f4",null);t.default=component.exports;l()(component,{VBtn:d.a,VDatePicker:f.a,VForm:h.a,VSelect:v.a,VTextField:m.a})}}]);