(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i}),a.d(t,"pageQuery",function(){return l});var n=a(0),r=a.n(n),c=a(520),s=a(258);function i(e){var t=e.data;return r.a.createElement(s.a,{language:"en"},r.a.createElement(c.a,{games:t}))}var l="2857240350"},272:function(e,t,a){"use strict";a(94),a(95);var n=a(7),r=a.n(n),c=a(0),s=a.n(c),i=a(238);a(273);"undefined"!=typeof window&&a(329).init("key_live_moDVAxTe8ofcE3rTF8bYndojwzaUB7SW");var l=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={status:"loaded"},t}r()(t,e);var a=t.prototype;return a.sendSMS=function(){var e=this;if("loaded"==this.state.status&&"undefined"!=typeof window){this.setState({status:"sending"});var t=this._input.value;"tr"==Object(i.a)("language")&&(t.includes("+")||("9"==t[0]?t="+"+t:"0"==t[0]?t="+9"+t:"5"==t[0]&&(t="+90"+t)));branch.sendSMS(t,{tags:[],channel:"Website",feature:"TextMeTheApp",data:{foo:"bar"}},{},function(t,a){t?e.setState({status:"problem"}):e.setState({status:"sent"}),setTimeout(function(){e.setState({status:"loaded"})},2500)})}},a.render=function(){var e=this;return"loaded"==this.state.status||"sending"==this.state.status?s.a.createElement("div",{className:"InputCarrier"},s.a.createElement("div",{style:{width:30}}),s.a.createElement("input",{type:"text",ref:function(t){return e._input=t},placeholder:Object(i.a)("input:enter")}),s.a.createElement("a",{id:"textMeButton"},s.a.createElement("div",{className:"Button",onClick:function(){return e.sendSMS()}},s.a.createElement("strong",null,"sending"==this.state.status?Object(i.a)("input:button:sending"):Object(i.a)("input:button"))))):s.a.createElement("div",{className:"InputCarrier "+this.state.status},s.a.createElement("div",{className:"InputCarrierNotice"},s.a.createElement("strong",null,"sent"==this.state.status?Object(i.a)("input:button:sent"):Object(i.a)("input:button:problem"))))},t}(s.a.Component);a.d(t,"a",function(){return l})},273:function(e,t,a){},275:function(e,t,a){},277:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(238),s=a(272),i=a(240),l=(a(275),a(242));function m(){return r.a.createElement(i.b.Consumer,null,function(e){return e?r.a.createElement("div",null):r.a.createElement(l.a.Consumer,null,function(e){return"turkcell"===e?r.a.createElement("div",null):r.a.createElement("div",{className:"textMe"},r.a.createElement("div",{className:"textMeCarrier"},r.a.createElement("div",{className:"textMeInner"},r.a.createElement("h2",null,Object(c.a)("textme:title")),r.a.createElement("p",null,Object(c.a)("textme:desc")),r.a.createElement("div",null,r.a.createElement(s.a,null)))))})})}a.d(t,"a",function(){return m})},460:function(e,t,a){},520:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),s=a.n(c),i=a(244),l=a.n(i),m=a(241),o=a(263),u=a(277),d=a(238),p=a(247),g=a(429),E=(a(460),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"GamesLanding"},s.a.createElement("div",{className:"GamesLandingCarrier"},s.a.createElement("div",{className:"GamesLandingInner"},s.a.createElement(p.a,{theme:"normal",activeTab:"games",sticky:"non-sticky"}),s.a.createElement("h1",null,Object(d.a)("gameslanding:herotext"))))),s.a.createElement(g.a,{games:this.props.games.allOtsimoGames,categories:this.props.games.categories.edges}))},t}(s.a.Component));a.d(t,"a",function(){return f});var f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{id:"gamesPage"},s.a.createElement(l.a,{script:[m.g]},s.a.createElement("title",null,Object(d.a)("meta:games:title")),s.a.createElement("meta",{name:"description",content:Object(d.a)("meta:games:desc")}),s.a.createElement("link",{rel:"canonical",href:"https://otsimo.com/"+Object(d.a)("language")+"/"+Object(d.a)("header:link:games")+"/"}),s.a.createElement("link",{rel:"alternate",href:"https://otsimo.com/en/"+Object(d.a)("header:link:games")+"/",hreflang:"en"}),s.a.createElement("link",{rel:"alternate",href:"https://otsimo.com/tr/"+Object(d.a)("header:link:games")+"/",hreflang:"tr"}),s.a.createElement("meta",{property:"og:locale",content:Object(d.a)("locale:code")}),s.a.createElement("meta",{property:"og:type",content:"website"}),s.a.createElement("meta",{property:"og:title",content:Object(d.a)("meta:games:title")}),s.a.createElement("meta",{property:"og:description",content:Object(d.a)("meta:games:desc")}),s.a.createElement("meta",{property:"og:url",content:"https://otsimo.com/"+Object(d.a)("language")+"/"+Object(d.a)("header:link:games")+"/"}),s.a.createElement("meta",{property:"og:site_name",content:Object(d.a)("otsimo")}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:description",content:Object(d.a)("meta:games:desc")}),s.a.createElement("meta",{name:"twitter:title",content:Object(d.a)("meta:games:title")}),s.a.createElement("meta",{name:"twitter:site",content:Object(d.a)("meta:twitter:creator")}),s.a.createElement("meta",{name:"twitter:creator",content:Object(d.a)("meta:twitter:creator")})),s.a.createElement(E,{games:this.props.games}),s.a.createElement(u.a,null),s.a.createElement(o.a,null))},t}(s.a.Component)}}]);
//# sourceMappingURL=component---src-pages-en-games-index-js-1ccdbc58fd71269f6cc1.js.map