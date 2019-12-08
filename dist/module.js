define(["react","@grafana/data","@grafana/ui","@grafana/runtime"],(function(t,e,n,r){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=51)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(18),o=n(12),u=n(35),i=n(36),a=Object.prototype,c=a.hasOwnProperty,s=r((function(t,e){t=Object(t);var n=-1,r=e.length,s=r>2?e[2]:void 0;for(s&&u(e[0],e[1],s)&&(r=1);++n<r;)for(var l=e[n],f=i(l),p=-1,v=f.length;++p<v;){var y=f[p],d=t[y];(void 0===d||o(d,a[y])&&!c.call(t,y))&&(t[y]=l[y])}return t}));t.exports=s},function(t,e,n){var r=n(10),o=n(28),u=n(29),i="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:i:c&&c in Object(t)?o(t):u(t)}},function(t,e,n){var r=n(11),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(5),o=n(3),u="[object AsyncFunction]",i="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==i||e==a||e==u||e==c}},function(t,e,n){var r=n(6).Symbol;t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(27))},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(9),o=n(14);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?n:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=r},function(t,e,n){var r=n(8),o=n(19),u=n(21);t.exports=function(t,e){return u(o(t,e,r),t+"")}},function(t,e,n){var r=n(20),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var u=arguments,i=-1,a=o(u.length-e,0),c=Array(a);++i<a;)c[i]=u[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=u[i];return s[e]=n(c),r(t,this,s)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(22),o=n(34)(r);t.exports=o},function(t,e,n){var r=n(23),o=n(24),u=n(8),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:u;t.exports=i},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,n){var r=n(25),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(26),o=n(33);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(9),o=n(30),u=n(3),i=n(32),a=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!u(t)||o(t))&&(r(t)?p:a).test(i(t))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(10),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=u.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(31),u=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!u&&u in t}},function(t,e,n){var r=n(6)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){var n=800,r=16,o=Date.now;t.exports=function(t){var e=0,u=0;return function(){var i=o(),a=r-(i-u);if(u=i,a>0){if(++e>=n)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(12),o=n(13),u=n(15),i=n(3);t.exports=function(t,e,n){if(!i(n))return!1;var a=typeof e;return!!("number"==a?o(n)&&u(e,n.length):"string"==a&&e in n)&&r(n[e],t)}},function(t,e,n){var r=n(37),o=n(48),u=n(13);t.exports=function(t){return u(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(38),o=n(39),u=n(41),i=n(42),a=n(15),c=n(44),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=u(t),l=!n&&o(t),f=!n&&!l&&i(t),p=!n&&!l&&!f&&c(t),v=n||l||f||p,y=v?r(t.length,String):[],d=y.length;for(var h in t)!e&&!s.call(t,h)||v&&("length"==h||f&&("offset"==h||"parent"==h)||p&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||a(h,d))||y.push(h);return y}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(40),o=n(7),u=Object.prototype,i=u.hasOwnProperty,a=u.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},function(t,e,n){var r=n(5),o=n(7),u="[object Arguments]";t.exports=function(t){return o(t)&&r(t)==u}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var r=n(6),o=n(43),u=e&&!e.nodeType&&e,i=u&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===u?r.Buffer:void 0,c=(a?a.isBuffer:void 0)||o;t.exports=c}).call(this,n(16)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(45),o=n(46),u=n(47),i=u&&u.isTypedArray,a=i?o(i):r;t.exports=a},function(t,e,n){var r=n(5),o=n(14),u=n(7),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&o(t.length)&&!!i[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(11),o=e&&!e.nodeType&&e,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=u&&u.exports===o&&r.process,a=function(){try{var t=u&&u.require&&u.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}).call(this,n(16)(t))},function(t,e,n){var r=n(3),o=n(49),u=n(50),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return u(t);var e=o(t),n=[];for(var a in t)("constructor"!=a||!e&&i.call(t,a))&&n.push(a);return n}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function u(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e,n,r){return new(n||(n=Promise))((function(o,u){function i(t){try{c(r.next(t))}catch(t){u(t)}}function a(t){try{c(r.throw(t))}catch(t){u(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var s=n(4),l=n.n(s),f=n(17),p={application:"ios",metric:"build",filedValue:"status"},v=function(t){function e(e){var n=t.call(this,e)||this;if(!e.url)throw new Error("There is no server address! Please (re)configure datasource!");return n.BackendService=Object(f.getBackendSrv)(),n.Url=e.url,n.ApiKey="e1ce7af39d0422ad33a572f30cd2c6960e0dc016",n}return u(e,t),e.prototype.query=function(t){return a(this,void 0,void 0,(function(){var e,n,o;return c(this,(function(u){return e=t.range,n=e.from.valueOf(),o=e.to.valueOf(),[2,{data:t.targets.map((function(t){var e=l()(t,p);return console.log("quryDef",e,t),new r.MutableDataFrame({refId:e.refId,fields:[{name:"Time",values:[n,o],type:r.FieldType.time},{name:"Value",values:[e.application,e.filedValue],type:r.FieldType.string}]})}))}]}))}))},e.prototype.testDatasource=function(){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,{status:"success",message:"Success"}]}))}))},e.prototype.getAppList=function(){return a(this,void 0,void 0,(function(){var t;return c(this,(function(e){switch(e.label){case 0:return t=this.Url+"/v0.1/apps",[4,this.doRequest(t)];case 1:return[2,e.sent().map((function(t){return{id:t.id,name:t.name}}))]}}))}))},e.prototype.doRequest=function(t){return a(this,void 0,void 0,(function(){var e;return c(this,(function(n){switch(n.label){case 0:return e={url:t,method:"GET",headers:{"X-API-Token":this.ApiKey}},[4,this.BackendService.datasourceRequest(e)];case 1:return[2,n.sent().data]}}))}))},e}(r.DataSourceApi),y=n(0),d=n.n(y),h=n(2),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onPathChange=function(t){var n=e.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{url:t.target.value}))},e.onAPIKeyChange=function(t){var n=e.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:{apiKey:t.target.value}}))},e.onResetAPIKey=function(){var t=e.props,n=t.onOptionsChange,r=t.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{apiKey:!1}),secureJsonData:i(i({},r.secureJsonData),{apiKey:""})}))},e}return u(e,t),e.prototype.render=function(){var t=this.props.options,e=t.secureJsonFields,n=t.url,r=t.secureJsonData||{};return d.a.createElement("div",{className:"gf-form-group"},d.a.createElement("div",{className:"gf-form"},d.a.createElement(h.FormField,{label:"Url",labelWidth:6,inputWidth:20,onChange:this.onPathChange,value:n||"",placeholder:"addres of server"})),d.a.createElement("div",{className:"gf-form-inline"},d.a.createElement("div",{className:"gf-form"},d.a.createElement(h.SecretFormField,{isConfigured:e&&e.apiKey,value:r.apiKey||"",label:"API Key (token)",placeholder:"secure json field (backend only)",labelWidth:6,inputWidth:20,onReset:this.onResetAPIKey,onChange:this.onAPIKeyChange}))))},e}(y.PureComponent),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={apps:[]},e.onAppChange=function(t){var n=e.props,r=n.onChange,o=n.query;r(i(i({},o),{application:t.value||"ios"}))},e.onMetricChange=function(t){var n=e.props,r=n.onChange,o=n.query,u=n.onRunQuery;r(i(i({},o),{metric:"build"})),u()},e.onFieldChange=function(t){var n=e.props,r=n.onChange,o=n.query,u=n.onRunQuery;r(i(i({},o),{filedValue:t.value||"status"})),u()},e}return u(e,t),e.prototype.onComponentDidMount=function(){return a(this,void 0,void 0,(function(){var t,e;return c(this,(function(n){switch(n.label){case 0:return[4,this.props.datasource.getAppList()];case 1:return t=n.sent(),e=t.map((function(t){return{value:t.name,key:t.id}})),console.log(e,t),this.setState({apps:e}),[2]}}))}))},e.prototype.getOptions=function(){return a(this,void 0,void 0,(function(){var t,e;return c(this,(function(n){switch(n.label){case 0:return[4,this.props.datasource.getAppList()];case 1:return t=n.sent(),e=t.map((function(t){return t.name})),console.log(e,t),[2,e]}}))}))},e.prototype.render=function(){var t=l()(this.props.query,p);console.log("query in query:",this);var e=t.metric;return d.a.createElement("div",{className:"gf-form"},d.a.createElement(h.Select,{width:8,options:[{value:"ios",label:"iOS"},{value:"android",label:"Android"}],onChange:this.onAppChange}),d.a.createElement(h.FormField,{labelWidth:8,value:e||"build",onChange:this.onMetricChange,label:"Metric type",tooltip:"Build or test run"}),d.a.createElement(h.Select,{width:8,options:[{value:"id",label:"ID"},{value:"status",label:"Status"},{value:"version",label:"Version"}],onChange:this.onFieldChange}))},e}(y.PureComponent);n.d(e,"plugin",(function(){return j}));var j=new r.DataSourcePlugin(v).setConfigEditor(b).setQueryEditor(g)}])}));