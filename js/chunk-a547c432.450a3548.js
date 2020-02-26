(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a547c432"],{1835:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"500px"}},[a("div",{staticClass:"d-flex align-items-center mb-5"},[a("h3",{staticClass:"mr-2 "},[e._v(" "+e._s(e.$t("dappsMCDMaker.migrate-single-collateral-to-multi-collateral"))+" ")]),a("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon,height:"26",width:"26"}})]),a("div",[a("div",{staticClass:"mb-5"},[a("div",{staticClass:"mb-2"},[a("b",[e._v(e._s(e.$t("dappsMCDMaker.migration-contract-balance")))])]),a("b-form-input",{staticClass:"mb-1",attrs:{readonly:""},model:{value:e.migrateContractBalance,callback:function(t){e.migrateContractBalance=t},expression:"migrateContractBalance"}}),a("b-button",{attrs:{variant:"secondary"},on:{click:e.checkMigrateContractSaiBalance}},[e._v(e._s(e.$t("dappsMCDMaker.check-balance")))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.noSaiAvailable&&!e.needsAtLeast20,expression:"noSaiAvailable && !needsAtLeast20"}]},[e._v(" "+e._s(e.$t("dappsMCDMaker.not-enough-sai"))+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.needsAtLeast20,expression:"needsAtLeast20"}],staticStyle:{padding:"10px"}},[e._v(" "+e._s(e.$t("dappsMCDMaker.needs-at-least-20",{value:e.migrateContractBalance}))+" ")])]),a("div",{staticClass:"currency-picker-container"},[a("div",{staticClass:"mb-2"},[a("b",[e._v(e._s(e.$t("dappsMCDMaker.your-cdps")))])]),e.cdpDetailsLoaded?e._e():a("div",{staticClass:"d-flex align-items-center"},[a("b-spinner",{staticClass:"mr-3",attrs:{variant:"primary",label:"Spinning"}}),a("div",[e._v(" "+e._s(e.$t("dappsMCDMaker.loading-your-cdps"))+" ")])],1),e._l(e.cdps,(function(t){return a("div",{key:t},[a("div",{class:["dropdown-text-container","dropdown-container","no-point",t===e.selectedCdp?"selectedCDP":""],on:{click:function(a){return e.selectCDP(t)}}},[a("p",[a("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),e._v(" "+e._s(t)+" "),a("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMCDMaker.cdp"))+" ")])])])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:e.noCdpsToMigrateFound,expression:"noCdpsToMigrateFound"}]},[e._v(" "+e._s(e.$t("dappsMCDMaker.no-cdps-to-migrate-found"))+" ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.mkrNeeded,expression:"mkrNeeded"}]},[e._v(e._s(e.$t("dappsMCDMaker.get-maker-to-migrate")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.mkrNeeded,expression:"mkrNeeded"}],staticClass:"buttons-container"},[a("div",{class:["submit-button large-round-button-green-filled"],on:{click:e.getMkr}},[e._v(" "+e._s(e.$t("dappsMCDMaker.get-mkr"))+" ")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.approvalNeeded&&!e.mkrNeeded,expression:"approvalNeeded && !mkrNeeded"}]},[e._v(" "+e._s(e.$t("dappsMCDMaker.approve-maker-to-migrate"))+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.approvalNeeded&&!e.mkrNeeded,expression:"approvalNeeded && !mkrNeeded"}],staticClass:"buttons-container"},[a("div",{class:["submit-button large-round-button-green-filled"],on:{click:e.beginMigration}},[e._v(" "+e._s(e.$t("dappsMCDMaker.approve-maker"))+" ")])]),a("div",{staticClass:"buttons-container"},[a("div",{class:[e.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.beginMigration}},[e._v(" "+e._s(e.$t("dappsMCDMaker.migrate"))+" ")])])],2)])},r=[],s=(a("99af"),a("a9e3"),a("b680"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("96cf"),a("c964")),i=a("f3f3"),c=a("2f62"),o=a("901e"),d=a.n(o),u=a("d1fb"),l=a("70c1"),p=a.n(l),m=a("ce96"),v=a("9b76"),g=a.n(v),h=function(e){return new d.a(e)},b={props:{ethPrice:{type:d.a,default:function(){return new d.a(0)}},makerActive:{type:Boolean,default:!1},availableCdps:{type:Object,default:function(){return{}}},getCdp:{type:Function,default:function(){}},valuesUpdated:{type:Number,default:0},getValueOrFunction:{type:Function,default:function(){}}},data:function(){return{DaiIcon:g.a,cdps:[],daiGenerated:0,migrateContractBalance:0,selectedCdp:0,proxyAddress:"",cdpBalances:{},migrationNotPossible:!1,cdpDetailsLoaded:!1,noSaiAvailable:!1,needsAtLeast20:!1,approvalNeeded:!1,governanceFee:h(0),mkrBalance:h(0)}},computed:Object(i["a"])({},Object(c["c"])("main",["account","gasPrice","web3","network","ens"]),{migrationPossible:function(){return h(this.daiGenerated).lt(h(this.migrateContractBalance))&&this.cdpDetailsLoaded&&h(this.daiGenerated).gte(20)},validInputs:function(){return 0!==this.selectedCdp&&this.migrationPossible&&!this.mkrNeeded&&!this.approvalNeeded},noCdpsToMigrateFound:function(){return 0===this.cdps.length&&this.cdpDetailsLoaded},mkrNeeded:function(){return h(this.mkrBalance).lt(this.governanceFee)}}),watch:{$route:"setup",makerActive:"setup",valuesUpdated:function(){this.findCdps()}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setup();case 1:case"end":return t.stop()}}),t)})))()},methods:{setup:function(){var e=this;this.makerActive&&(this.migrateContractBalance=0,this.maker=this.getValueOrFunction("maker"),this._mcdManager=this.getValueOrFunction("_mcdManager"),this.getProxy=this.getValueOrFunction("getProxy"),this.proxyAllowances=this.getValueOrFunction("proxyAllowances"),this.proxyAddress=this.getValueOrFunction("proxyAddress"),this.findCdps(),this.getMigrationContractBalance().then((function(t){return e.migrateContractBalance=t})),this.checkMigrateContractSaiBalance(),this.getMkrBalance())},findCdps:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["y"])(e,e.getValueOrFunction("_cdpService"));case 2:a=t.sent,n=a.withProxy,r=a.withoutProxy,e.cdpDetailsLoaded=!0,e.cdps=n.concat(r);case 7:case"end":return t.stop()}}),t)})))()},beginMigration:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0===e.selectedCdp){t.next=37;break}return e.proxyAddress=e.getValueOrFunction("proxyAddress"),t.next=4,e.getValueOrFunction("_cdpService").getCdp(e.selectedCdp,e.proxyAddress);case 4:return a=t.sent,e.getMkrBalance(),t.next=8,a.getGovernanceFee();case 8:return e.governanceFee=t.sent.toBigNumber(),t.next=11,a.getDebtValue();case 11:return n=t.sent.toBigNumber(),e.cdpBalances[e.selectedCdp]={balance:n},t.next=15,e.checkMigrateContractSaiBalance(n);case 15:if(r=t.sent,n.lt(20)&&(e.needsAtLeast20=!0),!r){t.next=37;break}return t.next=20,e.needsApproval(e.governanceFee);case 20:if(e.approvalNeeded=t.sent,!e.approvalNeeded){t.next=29;break}return s=h(e.governanceFee).gt(1e6)?e.governanceFee:1e6,t.next=25,e.approveMkr(s);case 25:i=t.sent,e.web3.eth.sendTransaction(i).catch((function(e){m["e"].responseHandler(e,m["e"].ERROR)})),t.next=37;break;case 29:return t.prev=29,t.next=32,e.migrate(e.selectedCdp);case 32:t.next=37;break;case 34:t.prev=34,t.t0=t["catch"](29),m["e"].responseHandler(t.t0,m["e"].ERROR);case 37:case"end":return t.stop()}}),t,null,[[29,34]])})))()},getMkr:function(){var e=this.governanceFee;h(this.mkrBalance).lt(e)&&(this.suppliedToAmount=h(e).minus(h(this.mkrBalance)).plus(h(e).times(.01)).toNumber(),h(this.suppliedToAmount).lt(1e-6)&&(this.suppliedToAmount=1e-6),this.suppliedFrom={symbol:"ETH",name:"Ethereum"},this.suppliedTo={symbol:"MKR",name:"Maker"},this.$eventHub.$emit("showSwapWidgetTo",this.account.address,this.suppliedFrom,this.suppliedTo,this.suppliedToAmount))},migrate:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.maker.service("migration").getMigration("single-to-multi-cdp"),a.next=3,n.execute(e);case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}),a)})))()},getMkrBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new e.web3.eth.Contract(u["c"],u["h"].MCD_GOV),t.next=3,a.methods.balanceOf(e.account.address).call();case 3:n=t.sent,e.mkrBalance=h(n);case 5:case"end":return t.stop()}}),t)})))()},needsApproval:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new t.web3.eth.Contract(u["c"],u["h"].MCD_GOV),a.next=3,n.methods.allowance(t.account.address,t.proxyAddress).call();case 3:return r=a.sent,a.abrupt("return",h(r).lt(h(e)));case 5:case"end":return a.stop()}}),a)})))()},approveMkr:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new t.web3.eth.Contract(u["c"],u["h"].MCD_GOV),r=n.methods.approve(t.proxyAddress,p.a.toWei(e,"ether").toString()).encodeABI(),a.abrupt("return",{from:t.account.address,to:u["h"].MCD_GOV,value:0,data:r});case 3:case"end":return a.stop()}}),a)})))()},selectCDP:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.selectedCdp=e,!t.cdpBalances[t.selectedCdp]){a.next=14;break}return t.checkMigrateContractSaiBalance(t.cdpBalances[t.selectedCdp].balance),h(t.cdpBalances[t.selectedCdp].balance).lt(20)?t.needsAtLeast20=!0:t.needsAtLeast20=!1,t.daiGenerated=t.cdpBalances[t.selectedCdp],a.next=7,t.getValueOrFunction("_cdpService").getCdp(e,t.proxyAddress);case 7:return n=a.sent,t.getMkrBalance(),a.next=11,n.getGovernanceFee();case 11:t.governanceFee=a.sent.toBigNumber(),a.next=31;break;case 14:return a.next=16,t.getValueOrFunction("_cdpService").getCdp(e,t.proxyAddress);case 16:return r=a.sent,t.getMkrBalance(),a.next=20,r.getGovernanceFee();case 20:return t.governanceFee=a.sent.toBigNumber(),a.next=23,r.getDebtValue();case 23:return s=a.sent.toBigNumber(),t.checkMigrateContractSaiBalance(s),s.lt(20)?t.needsAtLeast20=!0:t.needsAtLeast20=!1,t.daiGenerated=s.toString(),t.cdpBalances[t.selectedCdp]={balance:s,fee:t.governanceFee},a.next=30,t.needsApproval(t.governanceFee||1e6);case 30:t.approvalNeeded=a.sent;case 31:case"end":return a.stop()}}),a)})))()},checkMigrateContractSaiBalance:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getMigrationContractBalance();case 2:if(e.migrateContractBalance=a.sent,!h(e.migrateContractBalance).lt(20)){a.next=6;break}return e.noSaiAvailable=!0,a.abrupt("return",!1);case 6:if(!h(t).lt(h(e.migrateContractBalance))){a.next=8;break}return a.abrupt("return",!0);case 8:return a.abrupt("return",!1);case 9:case"end":return a.stop()}}),a)})))()},getMigrationContractBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new e.web3.eth.Contract(u["c"],u["h"].SAI).methods.balanceOf(u["h"].MCD_JOIN_SAI).call();case 2:return a=t.sent,t.abrupt("return",p.a.fromWei(a,"ether").toString());case 4:case"end":return t.stop()}}),t)})))()},submitTransaction:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.prev=1,a=p.a.toWei(e.daiGenerated,"ether").toString(),t.next=5,Promise.all([e.approve(a),e.migrate(a)]);case 5:n=t.sent,e.web3.mew.sendBatchTransactions(n).catch((function(e){m["e"].responseHandler(e,m["e"].ERROR)})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),m["e"].responseHandler(t.t0,m["e"].ERROR);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},displayPercentValue:function(e){return d.a.isBigNumber(e)||(e=new d.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return d.a.isBigNumber(e)||(e=new d.a(e)),e.toFixed(t).toString()}}},f=b,w=(a("5337f"),a("2877")),k=Object(w["a"])(f,n,r,!1,null,"acf21b36",null),C=k.exports;t["default"]=C},"5337f":function(e,t,a){"use strict";var n=a("5f46"),r=a.n(n);r.a},"5f46":function(e,t,a){}}]);
//# sourceMappingURL=chunk-a547c432.450a3548.js.map