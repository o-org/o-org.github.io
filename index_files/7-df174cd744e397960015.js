(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{239:function(e,t,a){"use strict";var n=a(25);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(267)),i=n(a(97)),c=n(a(7)),l=n(a(59)),o=n(a(60)),s=n(a(1)),m=n(a(0)),u=a(17),d=a(248);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var g={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,o.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,c.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,c=void 0===n?this.defaultGetProps:n,l=t.onClick,o=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),g=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),b=p(a);return m.default.createElement(u.Link,(0,i.default)({to:b,state:s,getProps:c,innerRef:this.handleRef,onMouseEnter:function(e){o&&o(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),I(a,{state:s,replace:g})),!0}},h))},t}(m.default.Component);h.propTypes=(0,i.default)({},g,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var b=h;t.default=b;var I=function(e,t){window.___navigate(p(e),t)};t.navigate=I;var E=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=E;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),E(e)}},245:function(e,t,a){e.exports=a.p+"static/icimdekihazine-4421af7aa7367e0a6db0912f48f874bc.png"},247:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(7),r=a.n(n),i=a(0),c=a.n(i),l=a(240),o=a(239),s=a.n(o),m=a(244),u=a.n(m),d=a(238),p=a(241),g=(a(250),a(242)),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onScrolled=function(){return t.scrolled()},t.state={menuStatus:!1,headerSticky:!1,theme:t.props.theme},t}r()(t,e);var n=t.prototype;return n.openMenu=function(){this.setState({menuStatus:!0})},n.closeMenu=function(){this.setState({menuStatus:!1})},n.componentDidMount=function(){"undefined"!=typeof window&&document.body.offsetWidth<500&&"non-sticky"!=this.props.sticky&&window.addEventListener("scroll",this.onScrolled)},n.componentWillUnmount=function(){"undefined"!=typeof window&&document.body.offsetWidth<500&&window.removeEventListener("scroll",this.onScrolled)},n.getMenuCarrierStyle=function(){return 1==this.state.menuStatus?"menuCarrier menuCarrierOpen":"menuCarrier"},n.getLogo=function(){var e=this;return c.a.createElement(g.a.Consumer,null,function(t){return"turkcell"===t?(e.state.theme,c.a.createElement(l.a,{layout:"fixed",width:"289",height:"39",alt:"logo",className:"ihLogoImage",src:a(245)})):"light"==e.state.theme?c.a.createElement(l.a,{layout:"fixed",width:"148",height:"39",alt:"logo",className:"logoImage",src:a(252)}):c.a.createElement(l.a,{layout:"fixed",width:"148",height:"39",alt:"logo",className:"logoImage",src:a(266)})})},n.getPremiumIcon=function(){return"light"==this.state.theme?c.a.createElement("img",{alt:"premium",src:a(253)}):c.a.createElement("img",{alt:"premium",src:a(254)})},n.getMenuIcon=function(){return"light"==this.state.theme?c.a.createElement(l.a,{layout:"fixed",width:"12",height:10,alt:"menu",src:a(255)}):c.a.createElement(l.a,{layout:"fixed",width:"12",height:10,alt:"menu",src:a(256)})},n.getHeaderStyle=function(e){var t=e?"header sticky":"header";return"light"==this.state.theme?t+" light":t},n.scrolled=function(){window.scrollY>window.innerHeight?this.setState({headerSticky:!0,theme:"normal"}):this.setState({headerSticky:!1,theme:this.props.theme})},n.getSchoolLinkText=function(){return"school"==this.props.activeTab?c.a.createElement("li",{id:"school"},c.a.createElement("strong",{"data-text1":Object(d.a)("header:school"),"data-text2":Object(d.a)("header:school:short")}),c.a.createElement("div",{className:"activeIndicator"})):c.a.createElement("li",{id:"school"},c.a.createElement("strong",{"data-text1":Object(d.a)("header:school"),"data-text2":Object(d.a)("header:school:short"),style:{fontWeight:400}}))},n.getPremiumLinkText=function(){return"premium"==this.props.activeTab?c.a.createElement("li",null,c.a.createElement("strong",null,Object(d.a)("header:premium")),c.a.createElement("div",{className:"activeIndicator"})):c.a.createElement("li",null,Object(d.a)("header:premium"))},n.getOurStoryLink=function(){return"ourstory"==this.props.activeTab?c.a.createElement("li",null,c.a.createElement("strong",null,Object(d.a)("header:ourstory")),c.a.createElement("div",{className:"activeIndicator"})):c.a.createElement("li",null,Object(d.a)("header:ourstory"))},n.getGamesLink=function(){return"games"==this.props.activeTab?c.a.createElement("li",null,c.a.createElement("strong",{style:{color:"#00ADFE"}},Object(d.a)("header:games")),c.a.createElement("div",{className:"activeIndicator",style:{backgroundColor:"#00ADFE"}})):c.a.createElement("li",null,Object(d.a)("header:games"))},n.getBlogLink=function(){return"blog"==this.props.activeTab?c.a.createElement("li",null,c.a.createElement("strong",{style:{color:"#00ADFE"}},Object(d.a)("header:blog")),c.a.createElement("div",{className:"activeIndicator",style:{backgroundColor:"#00ADFE"}})):c.a.createElement("li",null,Object(d.a)("header:blog"))},n.renderMenu=function(e){var t=this;return e?c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/"},c.a.createElement("div",{className:"menuButton"},this.getMenuIcon()," ",c.a.createElement("strong",null,"MENU"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menuButton",onClick:function(){return t.openMenu()}},this.getMenuIcon()," ",c.a.createElement("strong",null,"MENU")),c.a.createElement("div",{className:this.getMenuCarrierStyle()},c.a.createElement("div",{className:"menu"},c.a.createElement("img",{alt:"close",src:a(257),onClick:function(){return t.closeMenu()}}),c.a.createElement(g.a.Consumer,null,function(e){if("turkcell"!==e)return c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/"+Object(d.a)("header:link:ourstory")+"/"},t.getOurStoryLink())}),c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/"+Object(d.a)("header:link:games")+"/"},this.getGamesLink()),c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/"+Object(d.a)("header:link:blog")+"/"},this.getBlogLink()),c.a.createElement(g.a.Consumer,null,function(e){if("turkcell"!==e)return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/"+Object(d.a)("header:link:school")+"/"},t.getSchoolLinkText()),c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/"+Object(d.a)("header:link:premium")+"/"},t.getPremiumLinkText()))})),c.a.createElement("div",{className:"menuExtra",onClick:function(){return t.closeMenu()}})))},n.render=function(){var e=this;return c.a.createElement("div",{className:this.getHeaderStyle(this.state.headerSticky),id:"header"},c.a.createElement(u.a,null,c.a.createElement("meta",{name:"theme-color",content:"#E7F7FF"}),c.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),c.a.createElement("link",{rel:"manifest",href:"/manifest.json"}),c.a.createElement("meta",{property:"fb:app_id",content:"1052187471472479"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-chrome-192x192.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),c.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#00ADFE"}),c.a.createElement("meta",{name:"msapplication-TileImage",content:"/mstile-150x150.png"})),c.a.createElement(l.b.Consumer,null,function(e){return!e&&c.a.createElement(u.a,null,c.a.createElement("link",{key:"cookieconsentcss",rel:"stylesheet",type:"text/css",href:"//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"}),c.a.createElement("script",{key:"cookieconsentjs",src:"//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"}),c.a.createElement("script",{key:"cookieconsentinit",type:"text/javascript"},"en"===Object(p.d)()?'window.addEventListener("load",function(){window.cookieconsent.initialise({"palette":{"popup":{"background":"#e7f7ff","text":"#454545"},"button":{"background":"#1eaffb","text":"#ffffff"}},"theme":"classic","content":{"dismiss":"OK","href":"https://otsimo.com/en/legal/privacy/"},"law":{"regionalLaw":false}})});':'window.addEventListener("load",function(){window.cookieconsent.initialise({"palette":{"popup":{"background":"#e7f7ff","text":"#454545"},"button":{"background":"#1eaffb","text":"#ffffff"}},"theme":"classic","content":{"message":"Bu web sitesi, en iyi şekilde hizmet vermek için çerezleri kullanır.","dismiss":"Tamam","link":"Gizlilik Politikası","href":"/tr/legal/eula/"},"law":{"regionalLaw":false}})});'))}),c.a.createElement(s.a,{to:"/"+Object(p.d)()+"/",id:"logo"},this.getLogo()),c.a.createElement(l.b.Consumer,null,function(t){return e.renderMenu(t)}))},t}(c.a.Component)},250:function(e,t,a){},252:function(e,t,a){e.exports=a.p+"static/logo-white-d048b28760edf37acd51842c3e25ba56.svg"},253:function(e,t,a){e.exports=a.p+"static/premium-white-8e983311b3c5b9b4abd4a970840610da.svg"},254:function(e,t,a){e.exports=a.p+"static/premium-238f2890cb237f01121db7c14c0abfb0.svg"},255:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTIgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iTW9iaWxlLVBvcnRyYWl0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM1LjAwMDAwMCwgLTMyLjAwMDAwMCkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9IkNlcnRpZmllZC1zcGVhY2lhbC1lZHVjYXRpb24iIHN0cm9rZT0iI0ZGNjM4RSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNi4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNDU0NTQ1NDU1LDEgTDkuNTQ1NDU0NTUsMSIgaWQ9IkxpbmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjQ1NDU0NTQ1NSw1IEw5LjU0NTQ1NDU1LDUiIGlkPSJMaW5lLUNvcHkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjU4MzMzMzMzMyw5IEw1Ljg2NTY0MTMzLDkiIGlkPSJMaW5lLUNvcHktMiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},256:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTIgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iTW9iaWxlLVBvcnRyYWl0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM1LjAwMDAwMCwgLTMyLjAwMDAwMCkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9IkNlcnRpZmllZC1zcGVhY2lhbC1lZHVjYXRpb24iIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNi4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNDU0NTQ1NDU1LDEgTDkuNTQ1NDU0NTUsMSIgaWQ9IkxpbmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjQ1NDU0NTQ1NSw1IEw5LjU0NTQ1NDU1LDUiIGlkPSJMaW5lLUNvcHkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjU4MzMzMzMzMyw5IEw1Ljg2NTY0MTMzLDkiIGlkPSJMaW5lLUNvcHktMiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},257:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTYgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0iTW9iaWxlL01lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODIuMDAwMDAwLCAtMjcuMDAwMDAwKSIgc3Ryb2tlPSIjRkY2MzhFIiBzdHJva2Utd2lkdGg9IjMiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgzLjAwMDAwMCwgMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSwtNy4xMDU0MjczNmUtMTUgTDEzLDEzIiBpZD0iUGF0aC0zIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC41LDEyLjUgTDEzLjUsMC41IiBpZD0iUGF0aC0zIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},267:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},286:function(e,t){!function(e,t){"use strict";if("IntersectionObserver"in e&&"IntersectionObserverEntry"in e&&"intersectionRatio"in e.IntersectionObserverEntry.prototype)"isIntersecting"in e.IntersectionObserverEntry.prototype||Object.defineProperty(e.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var a=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},r.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(e,t,a){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==a[t-1]})},r.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map(function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(e,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in e&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(e,"resize",this._checkForIntersections,!0),c(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),a=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(r){var i=r.element,c=l(i),o=this._rootContainsTarget(i),s=r.entry,m=t&&o&&this._computeTargetAndRootIntersection(i,a),u=r.entry=new n({time:e.performance&&performance.now&&performance.now(),target:i,boundingClientRect:c,rootBounds:a,intersectionRect:m});s?t&&o?this._hasCrossedThreshold(s,u)&&this._queuedEntries.push(u):s&&s.isIntersecting&&this._queuedEntries.push(u):this._queuedEntries.push(u)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(a,n){if("none"!=e.getComputedStyle(a).display){for(var r,i,c,o,m,u,d,p,g=l(a),h=s(a),b=!1;!b;){var I=null,E=1==h.nodeType?e.getComputedStyle(h):{};if("none"==E.display)return;if(h==this.root||h==t?(b=!0,I=n):h!=t.body&&h!=t.documentElement&&"visible"!=E.overflow&&(I=l(h)),I&&(r=I,i=g,c=void 0,o=void 0,m=void 0,u=void 0,d=void 0,p=void 0,c=Math.max(r.top,i.top),o=Math.min(r.bottom,i.bottom),m=Math.max(r.left,i.left),u=Math.min(r.right,i.right),p=o-c,!(g=(d=u-m)>=0&&p>=0&&{top:c,bottom:o,left:m,right:u,width:d,height:p})))break;h=s(h)}return g}},r.prototype._getRootRect=function(){var e;if(this.root)e=l(this.root);else{var a=t.documentElement,n=t.body;e={top:0,left:0,right:a.clientWidth||n.clientWidth,width:a.clientWidth||n.clientWidth,bottom:a.clientHeight||n.clientHeight,height:a.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},r.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map(function(t,a){return"px"==t.unit?t.value:t.value*(a%2?e.width:e.height)/100}),a={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return a.width=a.right-a.left,a.height=a.bottom-a.top,a},r.prototype._hasCrossedThreshold=function(e,t){var a=e&&e.isIntersecting?e.intersectionRatio||0:-1,n=t.isIntersecting?t.intersectionRatio||0:-1;if(a!==n)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==a||i==n||i<a!=i<n)return!0}},r.prototype._rootIsInDom=function(){return!this.root||o(t,this.root)},r.prototype._rootContainsTarget=function(e){return o(this.root||t,e)},r.prototype._registerInstance=function(){a.indexOf(this)<0&&a.push(this)},r.prototype._unregisterInstance=function(){var e=a.indexOf(this);-1!=e&&a.splice(e,1)},e.IntersectionObserver=r,e.IntersectionObserverEntry=n}function n(e){this.time=e.time,this.target=e.target,this.rootBounds=e.rootBounds,this.boundingClientRect=e.boundingClientRect,this.intersectionRect=e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,a=t.width*t.height,n=this.intersectionRect,r=n.width*n.height;this.intersectionRatio=a?Number((r/a).toFixed(4)):this.isIntersecting?1:0}function r(e,t){var a,n,r,i=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(a=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout(function(){a(),r=null},n))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(" ")}function i(e,t,a,n){"function"==typeof e.addEventListener?e.addEventListener(t,a,n||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,a)}function c(e,t,a,n){"function"==typeof e.removeEventListener?e.removeEventListener(t,a,n||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on"+t,a)}function l(e){var t;try{t=e.getBoundingClientRect()}catch(a){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function o(e,t){for(var a=t;a;){if(a==e)return!0;a=s(a)}return!1}function s(e){var t=e.parentNode;return t&&11==t.nodeType&&t.host?t.host:t}}(window,document)},413:function(e,t,a){e.exports=a.p+"static/orange-tick-444f07707b283ec1643bbca913ac6c28.svg"},414:function(e,t,a){e.exports=a.p+"static/gray-tick-5002e921ee6eea6f3ca3ae0dd98581ff.svg"},517:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTggMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iRGVza3RvcCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3Mi4wMDAwMDAsIC02MjEuMDAwMDAwKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0iQ2VydGlmaWVkLXNwZWNpYWwtZWR1Y2F0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjgwLjAwMDAwMCwgMC4wMDAwMDApIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05NTMsNjIyLjAwMjQ3NSBMOTYwLjI3MjUwNCw2MjkuNjg3MzQ5IEM5NjAuNjUyMTE3LDYzMC4wODg0ODcgOTYxLjI4NTA0MSw2MzAuMTA1OTM3IDk2MS42ODYxOCw2MjkuNzI2MzIzIEM5NjEuNjk5NTI3LDYyOS43MTM2OTIgOTYxLjcxMjUyNCw2MjkuNzAwNjk2IDk2MS43MjUxNTUsNjI5LjY4NzM0OSBMOTY5LDYyMiIgaWQ9IkRvd24iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},531:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),l=a(244),o=a.n(l),s=a(238),m=a(241),u=a(263),d=a(247),p=(a(599),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"Trial"},c.a.createElement("div",{className:"TrialCarrier"},c.a.createElement("a",{id:"plans"}),c.a.createElement("div",{className:"TrialInner"},c.a.createElement("h2",null,Object(s.a)("premium:trial:title")),c.a.createElement("p",null,Object(s.a)("premium:trial:subtext")),c.a.createElement("a",{href:Object(s.a)("ios:link"),target:"_blank"},c.a.createElement("div",{className:"packages"},c.a.createElement("div",{className:"package"},c.a.createElement("p",null,Object(s.a)("premium:trial:plan1:title")),c.a.createElement("div",{className:"price"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan1:price"),c.a.createElement("sub",null,Object(s.a)("premium:trial:plan1:cent")))),c.a.createElement("div",{className:"button"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan1:button")))),c.a.createElement("div",{className:"packageActive"},c.a.createElement("div",{className:"packageActiveHeader"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan2:discount")),c.a.createElement("p",null,Object(s.a)("premium:trial:plan2:discount:subtext"))),c.a.createElement("div",null," "),c.a.createElement("p",null,Object(s.a)("premium:trial:plan2:title")),c.a.createElement("div",{className:"price oldPrice"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan2:old:price"),c.a.createElement("sub",null,Object(s.a)("premium:trial:plan2:old:cent")))),c.a.createElement("div",{className:"price"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan2:price"),c.a.createElement("sub",null,Object(s.a)("premium:trial:plan1:cent"))),c.a.createElement("small",null,"/ ",Object(s.a)("premium:trial:plan2:amonth"))),c.a.createElement("div",{className:"button"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan2:button")))),c.a.createElement("div",{className:"package"},c.a.createElement("p",null,Object(s.a)("premium:trial:plan3:title")),c.a.createElement("div",{className:"price"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan3:price"),c.a.createElement("sub",null,Object(s.a)("premium:trial:plan3:cent")))),c.a.createElement("div",{className:"button"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan3:button")))))),c.a.createElement("div",{style:{clear:"both"}}),c.a.createElement("div",{className:"tableHolder"},c.a.createElement("div",{className:"tables"},c.a.createElement("div",{className:"table table-premium"},c.a.createElement("h2",null,Object(s.a)("premium:trial:premium")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec1")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec2")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec3")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec4")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec5")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec6")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(413)}),Object(s.a)("premium:trial:spec7")))),c.a.createElement("div",{className:"table table-free"},c.a.createElement("h2",null,Object(s.a)("premium:trial:free")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec1")),c.a.createElement("li",null,c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec2:free")),c.a.createElement("li",{className:"lowOpacity"},c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec3")),c.a.createElement("li",{className:"lowOpacity"},c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec4")),c.a.createElement("li",{className:"lowOpacity"},c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec5")),c.a.createElement("li",{className:"lowOpacity"},c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec6")),c.a.createElement("li",{className:"lowOpacity"},c.a.createElement("img",{alt:"tick",src:a(414)}),Object(s.a)("premium:trial:spec7")))))))))},t}(c.a.Component)),g=(a(601),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"PremAdvantages"},c.a.createElement("div",{className:"PremAdvantagesCarrier"},c.a.createElement("div",{className:"PremAdvantagesInner"},c.a.createElement("h2",null,Object(s.a)("premium:adv:title")),c.a.createElement("div",{className:"advs"},c.a.createElement("div",{className:"adv"},c.a.createElement("div",{className:"advInner"},c.a.createElement("div",{className:"advLeft"},c.a.createElement("h3",null,Object(s.a)("premium:adv:grid1:title")),c.a.createElement("div",{className:"advList"},c.a.createElement("div",null,c.a.createElement("div",{className:"advIcon"},c.a.createElement("img",{alt:"icon1",src:a(603)})),c.a.createElement("div",null,c.a.createElement("strong",null,Object(s.a)("premium:adv:grid1:sub1:title")),c.a.createElement("p",null,Object(s.a)("premium:adv:grid2:sub1:desc")))),c.a.createElement("div",null,c.a.createElement("div",{className:"advIcon"},c.a.createElement("img",{alt:"icon2",src:a(604)})),c.a.createElement("div",null,c.a.createElement("strong",null,Object(s.a)("premium:adv:grid1:sub2:title")),c.a.createElement("p",null,Object(s.a)("premium:adv:grid1:sub2:desc")))))),c.a.createElement("div",{className:"advRight"},c.a.createElement("img",{alt:"phone",src:a(605)})))),c.a.createElement("div",{className:"adv"},c.a.createElement("div",{className:"advInner"},c.a.createElement("div",{className:"advLeft"},c.a.createElement("h3",null,Object(s.a)("premium:adv:grid2:title")),c.a.createElement("div",{className:"advList"},c.a.createElement("div",null,c.a.createElement("div",{className:"advIcon"},c.a.createElement("img",{alt:"icon3",src:a(606)})),c.a.createElement("div",null,c.a.createElement("strong",null,Object(s.a)("premium:adv:grid2:sub1:title")),c.a.createElement("p",null,Object(s.a)("premium:adv:grid2:sub1:desc")))),c.a.createElement("div",null,c.a.createElement("div",{className:"advIcon"},c.a.createElement("img",{alt:"icon4",src:a(607)})),c.a.createElement("div",null,c.a.createElement("strong",null,Object(s.a)("premium:adv:grid2:sub2:title")),c.a.createElement("p",null,Object(s.a)("premium:adv:grid2:sub2:desc")))))),c.a.createElement("div",{className:"advRight"},c.a.createElement("img",{src:a(608)})))),c.a.createElement("div",{className:"adv"},c.a.createElement("div",{className:"advInner"},c.a.createElement("div",{className:"advLeft"},c.a.createElement("h3",null,Object(s.a)("premium:adv:grid3:title")),c.a.createElement("div",{className:"advList"},c.a.createElement("div",null,c.a.createElement("div",{className:"advIcon"},c.a.createElement("img",{alt:"icon5",src:a(609)})),c.a.createElement("div",null,c.a.createElement("strong",null,Object(s.a)("premium:adv:grid3:sub1:title")),c.a.createElement("p",null,Object(s.a)("premium:adv:grid3:sub1:desc")))),c.a.createElement("div",null,c.a.createElement("div",{className:"advIcon"},c.a.createElement("img",{alt:"icon6",src:a(610)})),c.a.createElement("div",null,c.a.createElement("strong",null,Object(s.a)("premium:adv:grid3:sub2:title")),c.a.createElement("p",null,Object(s.a)("premium:adv:grid3:sub2:desc")))))),c.a.createElement("div",{className:"advRight"},c.a.createElement("img",{alt:"phone",src:a(611)}))))))))},t}(c.a.Component)),h=(a(612),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"Discount"},c.a.createElement("div",{className:"DiscountCarrier"},c.a.createElement("div",{className:"DiscountInner"},c.a.createElement("h2",null,c.a.createElement("img",{src:a(614)})," ",Object(s.a)("premium:discount:discamount")),c.a.createElement("div",{className:"DiscountBox"},c.a.createElement("div",null,c.a.createElement("div",{className:"DiscountSelected"},c.a.createElement("p",null,Object(s.a)("premium:trial:plan2:title")),c.a.createElement("div",{className:"price oldPrice"},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan2:old:price"),c.a.createElement("sub",null,Object(s.a)("premium:trial:plan2:old:cent")))),c.a.createElement("div",{className:"price",style:{width:200}},c.a.createElement("strong",null,Object(s.a)("premium:trial:plan2:price"),c.a.createElement("sub",null,Object(s.a)("premium:trial:plan1:cent"))),c.a.createElement("small",null,"/ ",Object(s.a)("premium:trial:plan2:amonth"))))),c.a.createElement("div",null,c.a.createElement("a",{href:Object(s.a)("ios:link"),target:"_blank"},c.a.createElement("div",{className:"DiscountButton"},c.a.createElement("strong",null,Object(s.a)("premium:button")))))),c.a.createElement("div",{className:"DiscountSeeOurPlans"},c.a.createElement("a",{href:"#plans"},c.a.createElement("strong",null,Object(s.a)("premium:discount:seeourplans")," ",c.a.createElement("img",{alt:"down",src:a(615)})))))))},t}(c.a.Component));a(616);function b(){return c.a.createElement("div",{className:"Transparent"},c.a.createElement("div",{className:"TransparentCarrier"},c.a.createElement("div",{className:"TransparentInner"},c.a.createElement("h2",null,Object(s.a)("transparency:title")),c.a.createElement("p",null,Object(s.a)("transparency:subtitle")),c.a.createElement("img",{alt:"transparency",src:"en"==Object(s.a)("language")?a(618):a(619)}))))}a(620);var I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Premium",id:"premiumLanding"},c.a.createElement("div",{className:"PremiumCarrier"},c.a.createElement("div",{className:"PremiumInner"},c.a.createElement(d.a,{theme:"light",activeTab:"premium"}),c.a.createElement("div",null,c.a.createElement("h2",null,Object(s.a)("premium:title:line1"),c.a.createElement("br",null),Object(s.a)("premium:title:line2")),c.a.createElement("p",{className:"premMidText"},Object(s.a)("premium:midtext")),c.a.createElement("a",{href:Object(s.a)("ios:link"),target:"_blank",id:"startTrialButton"},c.a.createElement("div",{className:"button"},c.a.createElement("strong",null,Object(s.a)("premium:button"))))),c.a.createElement("div",{className:"downCarrier"},c.a.createElement("img",{alt:"down",className:"down",src:a(517)})),c.a.createElement("div",{className:"smallp"},Object(s.a)("premium:terms:line1"),c.a.createElement("br",null),Object(s.a)("premium:terms:line2"))))),c.a.createElement(p,null),c.a.createElement(g,null),c.a.createElement(h,null),c.a.createElement(b,null))},t}(c.a.Component);a.d(t,"a",function(){return E});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{id:"premiumPage"},c.a.createElement(o.a,{script:[m.g]},c.a.createElement("title",null,Object(s.a)("meta:premium:title")),c.a.createElement("meta",{name:"description",content:Object(s.a)("meta:premium:desc")}),c.a.createElement("link",{rel:"canonical",href:"https://otsimo.com/"+Object(s.a)("language")+"/premium/"}),c.a.createElement("link",{rel:"alternate",href:"https://otsimo.com/en/premium/",hreflang:"en"}),c.a.createElement("link",{rel:"alternate",href:"https://otsimo.com/tr/premium/",hreflang:"tr"}),c.a.createElement("meta",{property:"og:locale",content:Object(s.a)("locale:code")}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:title",content:Object(s.a)("meta:premium:title")}),c.a.createElement("meta",{property:"og:description",content:Object(s.a)("meta:premium:desc")}),c.a.createElement("meta",{property:"og:url",content:"https://otsimo.com/"+Object(s.a)("language")+"/"+Object(s.a)("header:link:premium")}),c.a.createElement("meta",{property:"og:site_name",content:Object(s.a)("otsimo")}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:description",content:Object(s.a)("meta:premium:desc")}),c.a.createElement("meta",{name:"twitter:title",content:Object(s.a)("meta:premium:title")}),c.a.createElement("meta",{name:"twitter:site",content:Object(s.a)("meta:twitter:creator")}),c.a.createElement("meta",{name:"twitter:creator",content:Object(s.a)("meta:twitter:creator")})),c.a.createElement(I,null),c.a.createElement(u.a,null))},t}(c.a.Component)},599:function(e,t,a){},601:function(e,t,a){},603:function(e,t,a){e.exports=a.p+"static/icon1-0156928950b6e9b58a934818213aaef2.svg"},604:function(e,t,a){e.exports=a.p+"static/icon2-6a122be12f2f7f84a2154e87f385ef0b.svg"},605:function(e,t,a){e.exports=a.p+"static/phone1-ae7b15cd340c47310bbe70bf8b5bab11.png"},606:function(e,t,a){e.exports=a.p+"static/icon3-ccad4f4d55196d25151a8cf3f184ba03.svg"},607:function(e,t,a){e.exports=a.p+"static/icon4-fab549ddc3a5e3ab4786d2ac6c7453fc.svg"},608:function(e,t,a){e.exports=a.p+"static/phone2-0236d93732e40a7316e717019f390a12.png"},609:function(e,t,a){e.exports=a.p+"static/icon5-4dfcaa72ad6d7d0aca4cedaec1d7a161.svg"},610:function(e,t,a){e.exports=a.p+"static/icon6-9ffbd07055e0b735cb21542de4b25c93.svg"},611:function(e,t,a){e.exports=a.p+"static/phone3-c078db2aea0e7853bb3dbe8860220a41.png"},612:function(e,t,a){},614:function(e,t,a){e.exports=a.p+"static/premium-icon-ed1deffbca58a10c98c65b3f99c9c77d.svg"},615:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAAG+Fv5aAAAABGdBTUEAALGPC/xhBQAAASFJREFUGBltkL1KxFAQhfNDJKCIWNqJvbXggpVgIaYyRQhJta/gk1iJTX5MQrZRUSysBPcFrIUFLbQSBRcSA4nfXE1sHLjMzJkz5557NY1IkuRA8l9EUTTpus4oimJDoQBPffEiBUCnK+Snmeu6fszKkWmaI9/3p3ocx1NmZhAEWz0RbBHSZ9+LjAP4PAAUhjRpmm6TzmGfQZoLpkIsyeWEIlJPUHiVoVHX9SNGljitAGEYHkKciZfBrQwkePZe27aXlJYCNK3BvYP7m99epWExy7LNpmnuQFc4p6iPhYH6CbdI/W5Z1o7neQ+C63mer7Fwz3AdS7e2be+7rvslwz7KslyoquoKzi6cGQIj+btrCMssOCy89eT/MgKrCFww+/gG1maJWs6s7osAAAAASUVORK5CYII="},616:function(e,t,a){},618:function(e,t,a){e.exports=a.p+"static/transparency_en-4cc7dcaafc1b73f4bc2824d964438da9.svg"},619:function(e,t,a){e.exports=a.p+"static/transparency_tr-a83d3581189b1d4d8658d63886cdbece.svg"},620:function(e,t,a){}}]);
//# sourceMappingURL=7-df174cd744e397960015.js.map