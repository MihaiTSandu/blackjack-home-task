(this["webpackJsonptake-home-blackjack"]=this["webpackJsonptake-home-blackjack"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,u,s,d,b,l,f,h,p,j=t(0),m=t.n(j),x=t(14),O=t.n(x),k=t(2),v=t(3),g=t(18),y=t(4),w=t.n(y),C=t(5),S=t(6),T=t(11),E=t.n(T),I=t(29),z="https://blackjack.fuzz.me.uk",B=function(){var n=Object(C.a)(w.a.mark((function n(e){var t,r,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(z,"/sit"),n.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"balance=".concat(e)});case 3:return r=n.sent,n.next=6,r.json();case 6:if(a=n.sent,!r.ok){n.next=11;break}return n.abrupt("return",a);case 11:throw Error(a.validation.body.messsage);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),P=function(){var n=Object(C.a)(w.a.mark((function n(e,t){var r,a,c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(z,"/deal"),n.next=3,fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"bet=".concat(e,"&sessionId=").concat(t)});case 3:return a=n.sent,n.next=6,a.json();case 6:if(c=n.sent,!a.ok){n.next=11;break}return n.abrupt("return",c);case 11:throw Error(c.validation.body.message);case 12:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),A=function(){var n=Object(C.a)(w.a.mark((function n(e,t){var r,a,c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(z,"/turn"),n.next=3,fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"action=".concat(e,"&sessionId=").concat(t)});case 3:return a=n.sent,n.next=6,a.json();case 6:if(c=n.sent,!a.ok){n.next=11;break}return n.abrupt("return",c);case 11:throw Error(c.validation.body.message);case 12:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),D=function(){var n=Object(C.a)(w.a.mark((function n(e){var t,r,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(z,"/stand"),n.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"sessionId=".concat(e)});case 3:return r=n.sent,n.next=6,r.json();case 6:if(a=n.sent,!r.ok){n.next=11;break}return n.abrupt("return",a);case 11:throw Error(a.validation.body.message);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=t(1),H=function(n){var e=n.onClick,t=n.label,r=n.variant,a=void 0===r?"primary":r;return Object(F.jsx)(M,{variant:a,type:"button",onClick:e,children:t})},J=Object(k.c)(r||(r=Object(v.a)(["\n  background-color: ",";\n  border-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.background})),L=Object(k.c)(a||(a=Object(v.a)(["\n  background-color: ",";\n  border-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.secondary}),(function(n){return n.theme.secondary}),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.secondary})),M=k.d.button(c||(c=Object(v.a)(["\n  ","\n  ","\n\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 1.375rem;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: 800;\n  padding: 0.25rem 1.5rem;\n  text-transform: uppercase;\n"])),(function(n){return"primary"===n.variant?J:""}),(function(n){return"secondary"===n.variant?L:""})),Y="sit",q=function(n){var e=n.value,t=n.onAmountChange,r=n.onClick;return Object(F.jsxs)(G,{children:[Object(F.jsx)(K,{placeholder:"Bet amount (10-1000)",type:"number",max:"1000",min:"10",value:e||"",onInput:function(n){try{t(parseInt(n.target.value,10))}catch(e){console.error("Could not parse bet amount input value")}}}),Object(F.jsx)(H,{variant:"primary",onClick:r,label:Y})]})},G=k.d.div(o||(o=Object(v.a)(["\n  text-align: center;\n"]))),K=k.d.input(i||(i=Object(v.a)(["\n  background-color: transparent;\n  border: 0;\n  border-bottom: 0.0625rem solid ",";\n  border-left: 0.1875 solid ",";\n  color: ",";\n  font-size: 1.25rem;\n  padding: 0.75rem 1rem;\n  min-width: 15rem;\n  margin-right: 0.5rem;\n\n  :focus {\n    background: ",";\n    outline: none;\n  }\n"])),(function(n){return n.theme.border}),(function(n){return n.theme.primary}),(function(n){return n.theme.text}),(function(n){return n.theme.backgroundFocus})),N="Blackjack",Q="You must first sit at a table!",R="Must place a bet between 10 and 1000";function U(){var n=Object(j.useState)(),e=Object(S.a)(n,2),t=e[0],r=e[1],a=Object(j.useState)([]),c=Object(S.a)(a,2),o=c[0],i=c[1],u=Object(j.useState)(""),s=Object(S.a)(u,2),d=s[0],b=s[1],l=Object(j.useState)(),f=Object(S.a)(l,2),h=f[0],p=f[1],m=Object(j.useState)([]),x=Object(S.a)(m,2),O=x[0],k=x[1],v=Object(j.useState)([]),y=Object(S.a)(v,2),T=y[0],z=y[1],J=Object(j.useState)(!1),L=Object(S.a)(J,2),M=(L[0],L[1]),Y=Object(j.useState)(),G=Object(S.a)(Y,2),K=G[0],U=G[1],V=Object(j.useState)(),Z=Object(S.a)(V,2),rn=Z[0],an=Z[1],cn=function(){var n=Object(C.a)(w.a.mark((function n(){var e,r,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0===t||t<10||t>1e3)){n.next=4;break}alert(R),n.next=18;break;case 4:return n.prev=4,n.next=7,B(t);case 7:e=n.sent,r=e.availableBetOptions,a=e.sessionId,b(a),i(r),p(h),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(4),alert(n.t0);case 18:case"end":return n.stop()}}),n,null,[[4,15]])})));return function(){return n.apply(this,arguments)}}(),on=function(){var n=Object(C.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!d){n.next=5;break}return n.next=3,D(d);case 3:n.next=6;break;case 5:alert(Q);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),un=function(){var n=Object(C.a)(w.a.mark((function n(){var e,t,r,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!d){n.next=18;break}return n.prev=1,n.next=4,P(h||0,d);case 4:e=n.sent,t=e.playerCards,r=e.dealerCards,a=e.roundEnded,z(r),k(t),M(a),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),alert(n.t0);case 16:n.next=19;break;case 18:alert(Q);case 19:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(){return n.apply(this,arguments)}}(),sn=function(){var n=Object(C.a)(w.a.mark((function n(e){var t,r,a,c,o,i,u,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!d){n.next=32;break}if(n.prev=1,"hit"!==e){n.next=14;break}return n.next=5,A(e,d);case 5:t=n.sent,r=t.playerCard,a=t.roundEnded,k([].concat(Object(g.a)(O),[r])),M(a),U(K),an(rn),n.next=25;break;case 14:return n.next=16,A(e,d);case 16:c=n.sent,o=c.dealerCards,i=c.roundEnded,u=c.winAmount,s=c.currentBalance,z(o),M(i),U(u),an(s);case 25:n.next=30;break;case 27:n.prev=27,n.t0=n.catch(1),alert(n.t0);case 30:n.next=33;break;case 32:alert(Q);case 33:case"end":return n.stop()}}),n,null,[[1,27]])})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(nn,{children:[Object(F.jsx)(tn,{children:N}),Object(F.jsx)(q,{value:t,onAmountChange:function(n){return r(n)},onClick:cn}),Object(F.jsxs)(en,{children:[Object(F.jsx)(H,{variant:"secondary",onClick:un,label:"Deal"}),Object(F.jsx)(H,{variant:"secondary",onClick:function(){sn("hit")},label:"Hit"}),Object(F.jsx)(H,{variant:"secondary",onClick:function(){sn("stay")},label:"Stay"}),Object(F.jsx)(H,{variant:"secondary",onClick:on,label:"Stand"})]}),Object(F.jsx)(_,{children:o.map((function(n){return Object(F.jsx)($,{selected:n===h,onClick:function(){return p(n)},children:n},n)}))}),Object(F.jsxs)(W,{children:[T.length>0&&Object(F.jsx)("h2",{children:"Dealer"}),Object(F.jsx)(X,{children:T.map((function(n){return Object(F.jsx)(E.a,{card:"".concat("10"===n.rank.toString()?"T":n.rank).concat(n.suite[0].toLowerCase()),height:"128px"},Object(I.a)())}))}),O.length>0&&Object(F.jsx)("h2",{children:"Player"}),Object(F.jsx)(X,{children:O.map((function(n){return Object(F.jsx)(E.a,{card:"".concat("10"===n.rank.toString()?"T":n.rank).concat(n.suite[0].toLowerCase()),height:"128px"},Object(I.a)())}))})]})]})}var V,W=k.d.div(u||(u=Object(v.a)(["\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),X=k.d.div(s||(s=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 1.25rem;\n"]))),Z=Object(k.c)(d||(d=Object(v.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.primary})),$=k.d.button(b||(b=Object(v.a)(["\n  background-color: ",";\n  border-color: ",";\n  color: ",";\n\n  ","\n\n  border-radius: 100%;\n  cursor: pointer;\n  border-width: 2px;\n  border-style: solid;\n  font-size: 1.5rem;\n  width: 3.75rem;\n  height: 3.75rem;\n  text-align: center;\n\n  &:hover {\n    ","\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.background}),(function(n){return n.selected?Z:""}),Z),_=k.d.div(l||(l=Object(v.a)(["\n  margin-top: 2.5rem;\n\n  "," {\n    margin-right: 0.5rem;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),$),nn=k.d.div(f||(f=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 2.5rem;\n"]))),en=k.d.div(h||(h=Object(v.a)(["\n  margin-top: 2.5rem;\n\n  * {\n    margin-right: 0.5rem;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]))),tn=k.d.h1(p||(p=Object(v.a)(["\n  color: ",";\n"])),(function(n){return n.theme.primary})),rn=Object(k.b)(V||(V=Object(v.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.text})),an={dark:{primary:"#7ff800",secondary:"#fce403",border:"#000",background:"#171717",backgroundFocus:"#2e2e2e",text:"#717171",textHover:"#fff"}},cn=function(){return Object(F.jsxs)(k.a,{theme:an.dark,children:[Object(F.jsx)(rn,{}),Object(F.jsx)(U,{})]})};O.a.render(Object(F.jsx)(m.a.StrictMode,{children:Object(F.jsx)(cn,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.df9e4068.chunk.js.map