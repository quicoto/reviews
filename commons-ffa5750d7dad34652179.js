(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,M){"use strict";function L(t){return t&&"object"==typeof t&&"default"in t?t.default:t}M("V+eJ"),M("bWfx"),M("f3/d"),M("hHhE"),M("HAE/");var u=M("q1tI"),n=L(u),r=L(M("Gytx"));function i(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,M){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==M&&"function"!=typeof M)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(L){if("function"!=typeof L)throw new Error("Expected WrappedComponent to be a React component.");var s,T=[];function j(){s=t(T.map((function(t){return t.props}))),o.canUseDOM?e(s):M&&(s=M(s))}var o=function(t){var e,M;function u(){return t.apply(this,arguments)||this}M=t,(e=u).prototype=Object.create(M.prototype),e.prototype.constructor=e,e.__proto__=M,u.peek=function(){return s},u.rewind=function(){if(u.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,T=[],t};var i=u.prototype;return i.shouldComponentUpdate=function(t){return!r(t,this.props)},i.componentWillMount=function(){T.push(this),j()},i.componentDidUpdate=function(){j()},i.componentWillUnmount=function(){var t=T.indexOf(this);T.splice(t,1),j()},i.render=function(){return n.createElement(L,this.props)},u}(u.Component);return i(o,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(L)+")"),i(o,"canUseDOM",w),o}}},Bl7J:function(t,e,M){"use strict";var L=M("q1tI"),u=M.n(L),n=M("Wbzz"),r=M("lADJ"),i=M.n(r);e.a=function(t){var e,M=t.location,L=t.title,r=t.children,w=u.a.createElement("div",{className:"title-wrapper"},L),s=u.a.createElement("img",{src:i.a,title:"Ricard Torres Reviews",alt:"Logo",className:"header-logo"});return e="/reviews/"===M.pathname?u.a.createElement("h1",{className:"site-title"},u.a.createElement(n.Link,{activeClassName:"site-title-link",to:"/"},s,w)):u.a.createElement("h3",{className:"site-title"},u.a.createElement(n.Link,{className:"site-title-link",to:"/"},s,w)),u.a.createElement("div",null,u.a.createElement("div",{className:"full-width"},u.a.createElement("header",{className:"header"},e)),u.a.createElement("main",{className:"main-content"},r),u.a.createElement("div",{className:"full-width"},u.a.createElement("footer",{className:"footer"},u.a.createElement("a",{href:"https://github.com/quicoto/reviews",title:"Fork this Github repo"},"Fork me"),u.a.createElement("a",{href:"https://ricard.dev",title:"Ricard Torres Code"},"Code"),u.a.createElement("a",{href:"https://ricard.blog",title:"Ricard Torres Blog"},"Blog"),u.a.createElement("a",{href:"https://ricard.blog/podcast",title:"Ricard Torres Radio"},"Podcast"))),u.a.createElement("script",{dangerouslySetInnerHTML:{__html:" var _paq = window._paq || [];\n            /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n            _paq.push(['trackPageView']);\n            _paq.push(['enableLinkTracking']);\n            (function() {\n              var u=\"https://analytics.quicoto.com/\";\n              _paq.push(['setTrackerUrl', u+'matomo.php']);\n              _paq.push(['setSiteId', '11']);\n              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n            })();"}}))}},Gytx:function(t,e,M){M("2Spj"),M("rGqo"),M("yt8O"),M("Btvt"),M("RW0V"),t.exports=function(t,e,M,L){var u=M?M.call(L,t,e):void 0;if(void 0!==u)return!!u;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(e),w=0;w<n.length;w++){var s=n[w];if(!i(s))return!1;var T=t[s],j=e[s];if(!1===(u=M?M.call(L,T,j,s):void 0)||void 0===u&&T!==j)return!1}return!0}},"HAE/":function(t,e,M){var L=M("XKFU");L(L.S+L.F*!M("nh4g"),"Object",{defineProperty:M("hswa").f})},Oyvg:function(t,e,M){var L=M("dyZX"),u=M("Xbzi"),n=M("hswa").f,r=M("kJMx").f,i=M("quPj"),w=M("C/va"),s=L.RegExp,T=s,j=s.prototype,o=/a/g,a=/a/g,c=new s(o)!==o;if(M("nh4g")&&(!c||M("eeVq")((function(){return a[M("K0xU")("match")]=!1,s(o)!=o||s(a)==a||"/a/i"!=s(o,"i")})))){s=function(t,e){var M=this instanceof s,L=i(t),n=void 0===e;return!M&&L&&t.constructor===s&&n?t:u(c?new T(L&&!n?t.source:t,e):T((L=t instanceof s)?t.source:t,L&&n?w.call(t):e),M?this:j,s)};for(var C=function(t){t in s||n(s,t,{configurable:!0,get:function(){return T[t]},set:function(e){T[t]=e}})},y=r(T),A=0;y.length>A;)C(y[A++]);j.constructor=s,s.prototype=j,M("KroJ")(L,"RegExp",s)}M("elZq")("RegExp")},TJpk:function(t,e,M){M("LK8F"),M("dZ+Y"),M("rGqo"),M("yt8O"),M("Btvt"),M("RW0V"),M("8+KV"),M("/SS/"),M("hHhE"),M("V+eJ"),M("HAE/"),M("91GP"),e.__esModule=!0,e.Helmet=void 0;var L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var L in M)Object.prototype.hasOwnProperty.call(M,L)&&(t[L]=M[L])}return t},u=function(){function t(t,e){for(var M=0;M<e.length;M++){var L=e[M];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(t,L.key,L)}}return function(e,M,L){return M&&t(e.prototype,M),L&&t(e,L),e}}(),n=j(M("q1tI")),r=j(M("17x9")),i=j(M("8+s/")),w=j(M("bmMU")),s=M("v1p5"),T=M("hFT/");function j(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var M={};for(var L in t)e.indexOf(L)>=0||Object.prototype.hasOwnProperty.call(t,L)&&(M[L]=t[L]);return M}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var C,y,A,E=(0,i.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),N=(C=E,A=y=function(t){function e(){return a(this,e),c(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,w.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case T.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,M=t.child,u=t.arrayTypeChildren,n=t.newChildProps,r=t.nestedChildren;return L({},u,((e={})[M.type]=[].concat(u[M.type]||[],[L({},n,this.mapNestedChildrenToProps(M,r))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,M,u=t.child,n=t.newProps,r=t.newChildProps,i=t.nestedChildren;switch(u.type){case T.TAG_NAMES.TITLE:return L({},n,((e={})[u.type]=i,e.titleAttributes=L({},r),e));case T.TAG_NAMES.BODY:return L({},n,{bodyAttributes:L({},r)});case T.TAG_NAMES.HTML:return L({},n,{htmlAttributes:L({},r)})}return L({},n,((M={})[u.type]=L({},r),M))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var M=L({},e);return Object.keys(t).forEach((function(e){var u;M=L({},M,((u={})[e]=t[e],u))})),M},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var M=this,L={};return n.default.Children.forEach(t,(function(t){if(t&&t.props){var u=t.props,n=u.children,r=o(u,["children"]),i=(0,s.convertReactPropstoHtmlAttributes)(r);switch(M.warnOnInvalidChildren(t,n),t.type){case T.TAG_NAMES.LINK:case T.TAG_NAMES.META:case T.TAG_NAMES.NOSCRIPT:case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.STYLE:L=M.flattenArrayTypeChildren({child:t,arrayTypeChildren:L,newChildProps:i,nestedChildren:n});break;default:e=M.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:n})}}})),e=this.mapArrayTypeChildrenToProps(L,e)},e.prototype.render=function(){var t=this.props,e=t.children,M=o(t,["children"]),u=L({},M);return e&&(u=this.mapChildrenToProps(e,u)),n.default.createElement(C,u)},u(e,null,[{key:"canUseDOM",set:function(t){C.canUseDOM=t}}]),e}(n.default.Component),y.propTypes={base:r.default.object,bodyAttributes:r.default.object,children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),defaultTitle:r.default.string,defer:r.default.bool,encodeSpecialCharacters:r.default.bool,htmlAttributes:r.default.object,link:r.default.arrayOf(r.default.object),meta:r.default.arrayOf(r.default.object),noscript:r.default.arrayOf(r.default.object),onChangeClientState:r.default.func,script:r.default.arrayOf(r.default.object),style:r.default.arrayOf(r.default.object),title:r.default.string,titleAttributes:r.default.object,titleTemplate:r.default.string},y.defaultProps={defer:!0,encodeSpecialCharacters:!0},y.peek=C.peek,y.rewind=function(){var t=C.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},A);N.renderStatic=N.rewind,e.Helmet=N,e.default=N},bmMU:function(t,e,M){"use strict";M("f3/d"),M("SRfc"),M("a1Th"),M("h7Nl"),M("Oyvg"),M("rGqo"),M("yt8O"),M("Btvt"),M("RW0V"),M("LK8F");var L=Array.isArray,u=Object.keys,n=Object.prototype.hasOwnProperty,r="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,M){if(e===M)return!0;if(e&&M&&"object"==typeof e&&"object"==typeof M){var i,w,s,T=L(e),j=L(M);if(T&&j){if((w=e.length)!=M.length)return!1;for(i=w;0!=i--;)if(!t(e[i],M[i]))return!1;return!0}if(T!=j)return!1;var o=e instanceof Date,a=M instanceof Date;if(o!=a)return!1;if(o&&a)return e.getTime()==M.getTime();var c=e instanceof RegExp,C=M instanceof RegExp;if(c!=C)return!1;if(c&&C)return e.toString()==M.toString();var y=u(e);if((w=y.length)!==u(M).length)return!1;for(i=w;0!=i--;)if(!n.call(M,y[i]))return!1;if(r&&e instanceof Element&&M instanceof Element)return e===M;for(i=w;0!=i--;)if(!("_owner"===(s=y[i])&&e.$$typeof||t(e[s],M[s])))return!1;return!0}return e!=e&&M!=M}(t,e)}catch(M){if(M.message&&M.message.match(/stack|recursion/i)||-2146828260===M.number)return console.warn("Warning: react-fast-compare does not handle circular references.",M.name,M.message),!1;throw M}}},h7Nl:function(t,e,M){var L=Date.prototype,u=L.toString,n=L.getTime;new Date(NaN)+""!="Invalid Date"&&M("KroJ")(L,"toString",(function(){var t=n.call(this);return t==t?u.call(this):"Invalid Date"}))},"hFT/":function(t,e,M){M("DNiP"),M("rGqo"),M("yt8O"),M("Btvt"),M("RW0V"),M("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var L=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},u=(e.VALID_TAG_NAMES=Object.keys(L).map((function(t){return L[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(u).reduce((function(t,e){return t[u[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[L.NOSCRIPT,L.SCRIPT,L.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},lADJ:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU2IDI1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZDRDI5O30KCS5zdDF7ZmlsbDojRkZBRTJDO30KCS5zdDJ7ZmlsbDojRkM5MzIyO30KCS5zdDN7ZmlsbDojNTVBQ0Q1O30KCS5zdDR7ZmlsbDojRUE0NjQ3O30KCS5zdDV7ZmlsbDojNkRDQzZEO30KCS5zdDZ7ZmlsbDojMjMxRjIwO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyXzE0Ij4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODIuOCwxNDIuOGMwLjYtMC42LDAuNi0xLjUsMC0yLjFjLTAuMi0wLjItMC41LTAuNC0wLjgtMC40bC0zNS42LTUuMmMtMC41LTAuMS0wLjktMC40LTEuMS0wLjhMMTI5LjMsMTAyICAgYy0wLjQtMC43LTEuMi0xLTItMC43Yy0wLjMsMC4xLTAuNSwwLjQtMC43LDAuN2wtMTUuOSwzMi4zYy0wLjIsMC40LTAuNiwwLjctMS4xLDAuOEw3NCwxNDAuM2MtMC44LDAuMS0xLjMsMC45LTEuMiwxLjcgICBjMCwwLjMsMC4yLDAuNiwwLjQsMC44TDk5LDE2Ny45YzAuMywwLjMsMC41LDAuOCwwLjQsMS4zbC02LjEsMzUuNWMtMC4xLDAuOCwwLjQsMS41LDEuMiwxLjdjMC4zLDAuMSwwLjYsMCwwLjktMC4xbDMxLjktMTYuOCAgIGMwLjQtMC4yLDAuOS0wLjIsMS40LDBsMzEuOSwxNi44YzAuNywwLjQsMS42LDAuMSwyLTAuNmMwLjEtMC4zLDAuMi0wLjYsMC4xLTAuOWwtNi4xLTM1LjVjLTAuMS0wLjUsMC4xLTEsMC40LTEuM0wxODIuOCwxNDIuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMzYsMTM3LjJjMC41LTAuNSwwLjUtMS4yLDAtMS43Yy0wLjItMC4yLTAuNC0wLjMtMC43LTAuM2wtMjguNi00LjJjLTAuNC0wLjEtMC43LTAuMy0wLjktMC42TDE5MywxMDQuNSAgIGMtMC4zLTAuNi0xLTAuOC0xLjYtMC41Yy0wLjIsMC4xLTAuNCwwLjMtMC41LDAuNWwtMTIuOCwyNS45Yy0wLjIsMC4zLTAuNSwwLjYtMC45LDAuNmwtMjguNiw0LjJjLTAuMSwwLTAuMywwLjEtMC40LDAuMWwzMy43LDQuOSAgIGMwLjgsMC4xLDEuMywwLjksMS4yLDEuN2MwLDAuMy0wLjIsMC42LTAuNCwwLjhsLTE0LjUsMTQuMmwwLjUsMC41YzAuMywwLjMsMC40LDAuNywwLjMsMWwtNC45LDI4LjVjLTAuMSwwLjYsMC4zLDEuMiwxLDEuNCAgIGMwLjMsMCwwLjUsMCwwLjctMC4xbDI1LjYtMTMuNWMwLjMtMC4yLDAuNy0wLjIsMS4xLDBsMjUuNiwxMy41YzAuNiwwLjMsMS4zLDAuMSwxLjYtMC41YzAuMS0wLjIsMC4yLTAuNSwwLjEtMC43bC00LjktMjguNSAgIGMtMC4xLTAuNCwwLjEtMC44LDAuMy0xTDIzNiwxMzcuMnoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04Ni45LDE1OC40Yy0wLjEtMC40LDAuMS0wLjgsMC4zLTFsMC41LTAuNWwtMTQuNS0xNC4yYy0wLjYtMC42LTAuNi0xLjUsMC0yLjFjMC4yLTAuMiwwLjUtMC40LDAuOC0wLjQgICBsMzMuNy00LjljLTAuMS0wLjEtMC4yLTAuMS0wLjQtMC4xbC0yOC42LTQuMmMtMC40LTAuMS0wLjctMC4zLTAuOS0wLjZMNjUsMTA0LjVjLTAuMy0wLjYtMS0wLjgtMS42LTAuNWMtMC4yLDAuMS0wLjQsMC4zLTAuNSwwLjUgICBsLTEyLjgsMjUuOWMtMC4yLDAuMy0wLjUsMC42LTAuOSwwLjZsLTI4LjYsNC4yYy0wLjYsMC4xLTEuMSwwLjctMSwxLjNjMCwwLjMsMC4yLDAuNSwwLjMsMC43bDIwLjcsMjAuMmMwLjMsMC4zLDAuNCwwLjcsMC4zLDEgICBsLTQuOSwyOC41Yy0wLjEsMC42LDAuMywxLjIsMSwxLjRjMC4zLDAsMC41LDAsMC43LTAuMWwyNS42LTEzLjVjMC4zLTAuMiwwLjctMC4yLDEuMSwwbDI1LjYsMTMuNWMwLjYsMC4zLDEuMywwLjEsMS42LTAuNSAgIGMwLjEtMC4yLDAuMi0wLjUsMC4xLTAuN0w4Ni45LDE1OC40eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI1My4zLDEyMi42YzAuMy0wLjMsMC4zLTAuOCwwLTEuMWMtMC4xLTAuMS0wLjMtMC4yLTAuNC0wLjJsLTE4LjQtMi43Yy0wLjIsMC0wLjUtMC4yLTAuNi0wLjRsLTguMi0xNi42ICAgYy0wLjItMC40LTAuNi0wLjUtMS0wLjNjLTAuMSwwLjEtMC4zLDAuMi0wLjMsMC4zbC04LjIsMTYuNmMtMC4xLDAuMi0wLjMsMC40LTAuNiwwLjRsLTE0LjUsMi4xbDQuOCw5LjdjMC4yLDAuMywwLjUsMC42LDAuOSwwLjYgICBsMjguNiw0LjJjMC42LDAuMSwxLjEsMC43LDEsMS4zYzAsMC4zLTAuMiwwLjUtMC4zLDAuN2wtMTAsOS44bDE1LjgsOC4zYzAuNCwwLjIsMC44LDAuMSwxLTAuM2MwLjEtMC4xLDAuMS0wLjMsMC4xLTAuNWwtMy4xLTE4LjMgICBjMC0wLjIsMC0wLjUsMC4yLTAuN0wyNTMuMywxMjIuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00MC40LDExOC43Yy0wLjIsMC0wLjUtMC4yLTAuNi0wLjRsLTguMi0xNi42Yy0wLjItMC40LTAuNi0wLjUtMS0wLjNjLTAuMSwwLjEtMC4zLDAuMi0wLjMsMC4zbC04LjIsMTYuNiAgIGMtMC4xLDAuMi0wLjMsMC40LTAuNiwwLjRsLTE4LjQsMi43Yy0wLjQsMC4xLTAuNywwLjQtMC42LDAuOWMwLDAuMiwwLjEsMC4zLDAuMiwwLjRsMTMuMywxM2MwLjIsMC4yLDAuMywwLjQsMC4yLDAuN2wtMy4xLDE4LjMgICBjLTAuMSwwLjQsMC4yLDAuOCwwLjYsMC45YzAuMiwwLDAuMywwLDAuNS0wLjFMMzAsMTQ3bC0xMC05LjhjLTAuNS0wLjUtMC41LTEuMiwwLTEuN2MwLjItMC4yLDAuNC0wLjMsMC43LTAuM2wyOC42LTQuMiAgIGMwLjQtMC4xLDAuNy0wLjMsMC45LTAuNmw0LjgtOS43TDQwLjQsMTE4Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNjAuMywyMDMuM2gtMS44di0xLjhjMC0xLjQtMS4xLTIuNS0yLjUtMi41cy0yLjUsMS4xLTIuNSwyLjV2MS44aC0xLjhjLTEuNCwwLTIuNSwxLjEtMi41LDIuNSAgIHMxLjEsMi41LDIuNSwyLjVoMS44djEuOGMwLDEuNCwxLjEsMi41LDIuNSwyLjVzMi41LTEuMSwyLjUtMi41di0xLjhoMS44YzEuNCwwLDIuNS0xLjEsMi41LTIuNVM2MS43LDIwMy4zLDYwLjMsMjAzLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTE3LjYsMjE3Yy0wLjEtMC4zLTAuMi0wLjYtMC40LTAuOWMtMC4xLTAuMS0wLjItMC4zLTAuMy0wLjRjLTEtMC45LTIuNS0wLjktMy41LDBjLTAuMSwwLjEtMC4yLDAuMi0wLjMsMC40ICAgYy0wLjEsMC4xLTAuMiwwLjMtMC4yLDAuNGMtMC4xLDAuMi0wLjEsMC4zLTAuMSwwLjVjLTAuMSwwLjMtMC4xLDAuNywwLDFjMCwwLjIsMC4xLDAuMywwLjEsMC41YzAuMSwwLjEsMC4xLDAuMywwLjIsMC40ICAgYzAuMSwwLjEsMC4yLDAuMywwLjMsMC40YzEsMSwyLjUsMSwzLjUsMGMwLDAsMCwwLDAsMGMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuNGMwLjEtMC4xLDAuMi0wLjMsMC4yLTAuNGMwLjEtMC4xLDAuMS0wLjMsMC4xLTAuNSAgIEMxMTcuNywyMTcuNywxMTcuNywyMTcuMywxMTcuNiwyMTd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTU5LjYsMTcuNGMtMC4xLTAuMy0wLjItMC42LTAuNC0wLjljLTAuMS0wLjEtMC4yLTAuMy0wLjMtMC40Yy0xLTAuOS0yLjUtMC45LTMuNSwwICAgYy0wLjEsMC4xLTAuMiwwLjItMC4zLDAuNGMtMC4xLDAuMS0wLjIsMC4zLTAuMiwwLjRjLTAuMSwwLjItMC4xLDAuMy0wLjEsMC41Yy0wLjEsMC4zLTAuMSwwLjcsMCwxYzAsMC4yLDAuMSwwLjMsMC4xLDAuNSAgIGMwLjEsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjMsMC4zLDAuNGMxLDEsMi41LDEsMy41LDBjMCwwLDAsMCwwLDBjMC4xLTAuMSwwLjItMC4yLDAuMy0wLjRjMC4xLTAuMSwwLjItMC4zLDAuMi0wLjQgICBjMC4xLTAuMSwwLjEtMC4zLDAuMS0wLjVDMTU5LjcsMTgsMTU5LjcsMTcuNywxNTkuNiwxNy40eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTE5Mi4zLDM0LjljLTQuMS0wLjgtNy4yLTQtOC04YzAtMC4xLTAuMS0wLjItMC4yLTAuMmMtMC4xLDAtMC4xLDAuMS0wLjIsMC4yYy0wLjgsNC4xLTQsNy4yLTgsOCAgIGMtMC4xLDAtMC4yLDAuMS0wLjIsMC4yYzAsMC4xLDAuMSwwLjEsMC4yLDAuMmM0LjEsMC44LDcuMiw0LDgsOGMwLDAuMSwwLjEsMC4yLDAuMiwwLjJjMC4xLDAsMC4xLTAuMSwwLjItMC4yYzAuOC00LjEsNC03LjIsOC04ICAgYzAuMSwwLDAuMi0wLjEsMC4yLTAuMkMxOTIuNSwzNSwxOTIuNCwzNC45LDE5Mi4zLDM0Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTcuMywyMzIuMWMtNC4xLTAuOC03LjItNC04LThjMC0wLjEtMC4xLTAuMi0wLjItMC4yYy0wLjEsMC0wLjEsMC4xLTAuMiwwLjJjLTAuOCw0LjEtNCw3LjItOCw4ICAgYy0wLjEsMC0wLjIsMC4xLTAuMiwwLjJjMCwwLjEsMC4xLDAuMSwwLjIsMC4yYzQuMSwwLjgsNy4yLDQsOCw4YzAsMC4xLDAuMSwwLjIsMC4yLDAuMmMwLjEsMCwwLjEtMC4xLDAuMi0wLjJjMC44LTQuMSw0LTcuMiw4LTggICBjMC4xLDAsMC4yLTAuMSwwLjItMC4yQzk3LjQsMjMyLjIsOTcuNCwyMzIuMSw5Ny4zLDIzMi4xeiIvPgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTE4NS41LDE0MC41Yy0wLjUtMS40LTEuNy0yLjUtMy4yLTIuN2wtMzUuMS01LjFsLTE1LjctMzEuOGwwLDBjLTAuNy0xLjQtMi0yLjItMy41LTIuMmwwLDAgICBjLTEuNSwwLTIuOSwwLjktMy41LDIuMmwtMTUuNywzMS44bC0zNS4xLDUuMWMtMi4yLDAuMy0zLjcsMi4zLTMuMyw0LjVjMC4xLDAuOSwwLjUsMS43LDEuMiwyLjNsMjUuNCwyNC43bC02LDM0LjkgICBjLTAuNCwyLjIsMS4xLDQuMiwzLjIsNC42YzAuOSwwLjEsMS43LDAsMi41LTAuNGwzMS40LTE2LjVsMzEuNCwxNi41YzEuOSwxLDQuMywwLjMsNS4zLTEuN2MwLjQtMC44LDAuNS0xLjcsMC40LTIuNWwtNi0zNC45ICAgbDI1LjQtMjQuN0MxODUuNiwxNDMuNSwxODYsMTQxLjksMTg1LjUsMTQwLjV6IE0xNTUuMiwxNjYuMWMtMC45LDAuOS0xLjQsMi4yLTEuMSwzLjVsNS43LDMzLjRsLTMwLTE1LjhjLTEuMi0wLjYtMi41LTAuNi0zLjcsMCAgIGwtMzAsMTUuOGw1LjctMzMuNGMwLjItMS4zLTAuMi0yLjYtMS4xLTMuNWwtMjQuMy0yMy43bDMzLjUtNC45YzEuMy0wLjIsMi40LTEsMy0yLjJsMTUtMzAuNGwxNSwzMC40YzAuNiwxLjIsMS43LDIsMywyLjIgICBsMzMuNSw0LjlMMTU1LjIsMTY2LjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjM4LjcsMTM1LjNjLTAuNC0xLjMtMS42LTIuMy0zLTIuNWwtMjcuOS00LjFsLTEyLjUtMjUuM2MtMC42LTEuMy0xLjktMi0zLjMtMmwwLDBjLTEuNCwwLTIuNywwLjgtMy4zLDIgICBsLTEyLjUsMjUuM2wtMjcuOSw0LjFjLTAuNCwwLjEtMC44LDAuMi0xLjIsMC40Yy0xLjIsMC43LTEuNywyLjItMSwzLjRjMC40LDAuNywxLjEsMS4yLDEuOCwxLjNsMzEuNiw0LjZsLTEzLDEyLjcgICBjLTEsMS0xLDIuNSwwLDMuNWMwLDAsMCwwLDAsMGwtNC44LDI3LjhjLTAuMywyLDEsMy45LDMsNC4yYzAuOCwwLjEsMS42LDAsMi4zLTAuNGwyNS0xMy4xbDI1LDEzLjFjMS44LDAuOSw0LDAuMyw1LTEuNSAgIGMwLjQtMC43LDAuNS0xLjUsMC40LTIuM2wtNC44LTI3LjhsMjAuMi0xOS43QzIzOC43LDEzOCwyMzkuMSwxMzYuNiwyMzguNywxMzUuM3ogTTIxMy41LDE1NS42Yy0wLjksMC44LTEuMywyLjEtMS4xLDMuMmw0LjQsMjUuOCAgIGwtMjMuMi0xMi4yYy0xLjEtMC42LTIuMy0wLjYtMy40LDBsLTIzLjIsMTIuMmw0LjQtMjUuOGMwLjEtMC41LDAuMS0xLjEtMC4xLTEuNmwxMy4xLTEyLjdjMS42LTEuNSwxLjYtNCwwLjEtNS42ICAgYy0wLjYtMC42LTEuNC0xLTIuMy0xLjJsLTE2LjktMi41bDEyLjItMS44YzEuMi0wLjIsMi4yLTAuOSwyLjgtMkwxOTIsMTA4bDExLjYsMjMuNWMwLjUsMS4xLDEuNiwxLjgsMi44LDJsMjUuOSwzLjhMMjEzLjUsMTU1LjZ6ICAgIi8+Cgk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMTA4LjksMTMzLjJjLTAuNC0wLjItMC44LTAuMy0xLjItMC40bC0yNy45LTQuMWwtMTIuNS0yNS4zYy0wLjktMS44LTMuMS0yLjYtNC45LTEuNyAgIGMtMC43LDAuNC0xLjMsMC45LTEuNywxLjdsLTEyLjUsMjUuM2wtMjcuOSw0LjFjLTIsMC4zLTMuNCwyLjItMy4xLDQuMmMwLjEsMC44LDAuNSwxLjUsMS4xLDIuMWwyMC4yLDE5LjdsLTQuOCwyNy44ICAgYy0wLjMsMiwxLDMuOSwzLDQuMmMwLjgsMC4xLDEuNiwwLDIuMy0wLjRsMjUtMTMuMWwyNSwxMy4xYzEuOCwwLjksNCwwLjMsNS0xLjVjMC40LTAuNywwLjUtMS41LDAuNC0yLjNsLTQuOC0yNy44ICAgYzEtMSwxLTIuNiwwLTMuNWMwLDAsMCwwLDAsMGwtMTMtMTIuN2wzMS42LTQuNmMxLjQtMC4yLDIuMy0xLjUsMi4xLTIuOEMxMTAuMSwxMzQuMiwxMDkuNiwxMzMuNSwxMDguOSwxMzMuMkwxMDguOSwxMzMuMnogICAgTTg5LjQsMTU4TDg5LjQsMTU4eiBNNzMuNywxMzcuOGMtMi4yLDAuMy0zLjcsMi4zLTMuMyw0LjVjMC4xLDAuOSwwLjUsMS43LDEuMiwyLjNsMTMuMSwxMi43Yy0wLjEsMC41LTAuMiwxLjEtMC4xLDEuNmw0LjQsMjUuOCAgIGwtMjMuMi0xMi4yYy0xLjEtMC42LTIuMy0wLjYtMy40LDBsLTIzLjIsMTIuMmw0LjQtMjUuOGMwLjItMS4yLTAuMi0yLjQtMS4xLTMuMmwtMTguOC0xOC4zbDI1LjktMy44YzEuMi0wLjIsMi4yLTAuOSwyLjgtMiAgIEw2NCwxMDhsMTEuNiwyMy41YzAuNSwxLjEsMS42LDEuOCwyLjgsMmwxMi4yLDEuOEw3My43LDEzNy44eiIvPgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTI1NS44LDEyMS4xYy0wLjQtMS4yLTEuNC0yLTIuNi0yLjJsLTE3LjUtMi41bC03LjgtMTUuOGMtMC41LTEuMS0xLjctMS44LTIuOS0xLjhsMCwwICAgYy0xLjIsMC0yLjQsMC43LTIuOSwxLjhsLTcuOCwxNS44bC0xMy42LDJjLTEuNCwwLjItMi4zLDEuNS0yLjEsMi44YzAsMC4zLDAuMSwwLjUsMC4yLDAuN2w0LjgsOS43YzAuNSwxLjEsMS42LDEuOCwyLjgsMiAgIGwyNS45LDMuOGwtOC4xLDcuOWMtMSwxLTEsMi41LDAsMy41YzAuMiwwLjIsMC40LDAuMywwLjYsMC41bDE1LjgsOC4zYzEuNiwwLjgsMy42LDAuMiw0LjQtMS40YzAuMy0wLjYsMC40LTEuNCwwLjMtMi4xbC0zLTE3LjQgICBsMTIuNi0xMi4zbDAsMEMyNTUuOSwxMjMuNSwyNTYuMiwxMjIuMywyNTUuOCwxMjEuMXogTTIzMC4yLDE0Ni40bDcuNS03LjNsMi4xLDEyLjRMMjMwLjIsMTQ2LjR6IE0yMzguMiwxMzMuOCAgIGMtMC4xLDAuMS0wLjIsMC4yLTAuMiwwLjNjLTAuNi0wLjctMS40LTEuMS0yLjMtMS4zbC0yNy45LTQuMWwtMi45LTZsMTEuMS0xLjZjMS4xLTAuMiwyLTAuOCwyLjQtMS44bDYuNi0xMy41bDYuNywxMy41ICAgYzAuNSwxLDEuNCwxLjYsMi40LDEuOGwxNC45LDIuMkwyMzguMiwxMzMuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik01Ny4xLDExOS42Yy0wLjQtMC43LTEuMS0xLjItMS45LTEuM2wtMTMuNi0ybC03LjgtMTUuOGMtMC44LTEuNi0yLjctMi4zLTQuNC0xLjVjLTAuNiwwLjMtMS4yLDAuOC0xLjUsMS41ICAgbC03LjgsMTUuOGwtMTcuNSwyLjVjLTEuOCwwLjMtMywxLjktMi43LDMuN2MwLjEsMC43LDAuNCwxLjQsMC45LDEuOWwxMi42LDEyLjNsLTMsMTcuNGMtMC4zLDEuOCwwLjksMy40LDIuNiwzLjggICBjMC43LDAuMSwxLjQsMCwyLjEtMC4zbDE1LjgtOC4zYzEuMi0wLjYsMS43LTIuMiwxLTMuNGMtMC4xLTAuMi0wLjMtMC40LTAuNS0wLjZsLTguMS03LjlsMjUuOS0zLjhjMS4yLTAuMiwyLjItMC45LDIuOC0ybDQuOC05LjcgICBDNTcuNSwxMjEuMiw1Ny41LDEyMC4zLDU3LjEsMTE5LjZ6IE0yNS44LDE0Ni40bC05LjcsNS4xbDIuMS0xMi40TDI1LjgsMTQ2LjR6IE00OC4yLDEyOC43bC0yNy45LDQuMWMtMC45LDAuMS0xLjcsMC42LTIuMywxLjMgICBjLTAuMS0wLjEtMC4xLTAuMi0wLjItMC4zTDcsMTIzLjNsMTQuOS0yLjJjMS4xLTAuMiwyLTAuOCwyLjQtMS44bDYuNi0xMy41bDYuNiwxMy41YzAuNSwxLDEuNCwxLjYsMi40LDEuOGwxMS4xLDEuNkw0OC4yLDEyOC43eiIvPgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTEyOCw0OS40Yy0xLjQsMC0yLjUsMS4xLTIuNSwyLjV2MTQuOWMwLDEuNCwxLjEsMi41LDIuNSwyLjVjMS40LDAsMi41LTEuMSwyLjUtMi41VjUxLjkgICBDMTMwLjUsNTAuNSwxMjkuNCw0OS40LDEyOCw0OS40eiIvPgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTE1Ny43LDUyLjZjLTEuMy0wLjMtMi43LDAuNS0zLDEuOWMwLDAsMCwwLDAsMGwtMy40LDE0LjVjLTAuMywxLjMsMC41LDIuNywxLjgsM2MxLjMsMC4zLDIuNy0wLjUsMy0xLjggICBjMCwwLDAsMCwwLDBsMy40LTE0LjVDMTU5LjksNTQuMiwxNTkuMSw1Mi45LDE1Ny43LDUyLjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMTg1LjIsNjEuOGMtMS4yLTAuNy0yLjctMC4yLTMuNCwxYzAsMCwwLDAsMCwwbC03LjEsMTMuMWMtMC43LDEuMi0wLjIsMi43LDEsMy40czIuNywwLjIsMy40LTFsNy4xLTEzLjEgICBDMTg2LjgsNjMuOSwxODYuNCw2Mi40LDE4NS4yLDYxLjh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjA4LjQsODEuNWMtMC44LTEuMi0yLjMtMS41LTMuNS0wLjdMMTkyLjUsODljLTEuMiwwLjctMS41LDIuMy0wLjgsMy41czIuMywxLjUsMy41LDAuOGMwLDAsMCwwLDAuMSwwICAgbDEyLjQtOC4yQzIwOC44LDg0LjIsMjA5LjEsODIuNywyMDguNCw4MS41eiIvPgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTEwNC43LDY4LjlsLTMuNC0xNC41Yy0wLjMtMS4zLTEuNy0yLjItMy0xLjhjLTEuMywwLjMtMi4xLDEuNy0xLjgsM0w5OS44LDcwYzAuMywxLjMsMS42LDIuMiwzLDEuOSAgIFMxMDUsNzAuMywxMDQuNyw2OC45QzEwNC43LDY4LjksMTA0LjcsNjguOSwxMDQuNyw2OC45eiIvPgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTgxLjMsNzUuOGwtNy4xLTEzLjFjLTAuNy0xLjItMi4yLTEuNy0zLjQtMWMtMS4yLDAuNy0xLjcsMi4yLTEsMy40bDcuMSwxMy4xYzAuNywxLjIsMi4yLDEuNywzLjQsMSAgIEM4MS41LDc4LjYsODEuOSw3Ny4xLDgxLjMsNzUuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02My41LDg5bC0xMi40LTguMmMtMS4yLTAuOC0yLjctMC40LTMuNSwwLjdjLTAuOCwxLjItMC40LDIuNywwLjcsMy41bDEyLjQsOC4yYzEuMSwwLjgsMi43LDAuNSwzLjUtMC43ICAgQzY1LDkxLjQsNjQuNyw4OS44LDYzLjUsODlDNjMuNSw4OSw2My41LDg5LDYzLjUsODlMNjMuNSw4OXoiLz4KPC9nPgo8L3N2Zz4K"},nnrW:function(t,e,M){t.exports=M.p+"static/logo-cd0e53512fa98cf67904626935519343.jpg"},"o6/h":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ricard Torres Reviews","siteUrl":"https://quicoto.github.io/reviews","social":{"twitter":"ricard_dev"}}}}}')},v1p5:function(t,e,M){(function(t){M("dZ+Y"),M("KKXr"),M("eM6i"),M("8+KV"),M("LK8F"),M("V+eJ"),M("rGqo"),M("yt8O"),M("Btvt"),M("RW0V"),M("0l/t"),M("bWfx"),M("DNiP"),M("pIFo"),M("91GP"),M("rE2o"),M("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var L in M)Object.prototype.hasOwnProperty.call(M,L)&&(t[L]=M[L])}return t},n=w(M("q1tI")),r=w(M("MgzW")),i=M("hFT/");function w(t){return t&&t.__esModule?t:{default:t}}var s,T=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},j=function(t){var e=y(t,i.TAG_NAMES.TITLE),M=y(t,i.HELMET_PROPS.TITLE_TEMPLATE);if(M&&e)return M.replace(/%s/g,(function(){return e}));var L=y(t,i.HELMET_PROPS.DEFAULT_TITLE);return e||L||void 0},o=function(t){return y(t,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},a=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return u({},t,e)}),{})},c=function(t,e){return e.filter((function(t){return void 0!==t[i.TAG_NAMES.BASE]})).map((function(t){return t[i.TAG_NAMES.BASE]})).reverse().reduce((function(e,M){if(!e.length)for(var L=Object.keys(M),u=0;u<L.length;u++){var n=L[u].toLowerCase();if(-1!==t.indexOf(n)&&M[n])return e.concat(M)}return e}),[])},C=function(t,e,M){var u={};return M.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&l("Helmet: "+t+' should be of type "Array". Instead found type "'+L(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,M){var L={};M.filter((function(t){for(var M=void 0,n=Object.keys(t),r=0;r<n.length;r++){var w=n[r],s=w.toLowerCase();-1===e.indexOf(s)||M===i.TAG_PROPERTIES.REL&&"canonical"===t[M].toLowerCase()||s===i.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(M=s),-1===e.indexOf(w)||w!==i.TAG_PROPERTIES.INNER_HTML&&w!==i.TAG_PROPERTIES.CSS_TEXT&&w!==i.TAG_PROPERTIES.ITEM_PROP||(M=w)}if(!M||!t[M])return!1;var T=t[M].toLowerCase();return u[M]||(u[M]={}),L[M]||(L[M]={}),!u[M][T]&&(L[M][T]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var n=Object.keys(L),w=0;w<n.length;w++){var s=n[w],T=(0,r.default)({},u[s],L[s]);u[s]=T}return t}),[]).reverse()},y=function(t,e){for(var M=t.length-1;M>=0;M--){var L=t[M];if(L.hasOwnProperty(e))return L[e]}return null},A=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){A(t)}),0)}),E=function(t){return clearTimeout(t)},N="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:t.cancelAnimationFrame||E,l=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},I=null,D=function(t,e){var M=t.baseTag,L=t.bodyAttributes,u=t.htmlAttributes,n=t.linkTags,r=t.metaTags,w=t.noscriptTags,s=t.onChangeClientState,T=t.scriptTags,j=t.styleTags,o=t.title,a=t.titleAttributes;x(i.TAG_NAMES.BODY,L),x(i.TAG_NAMES.HTML,u),d(o,a);var c={baseTag:g(i.TAG_NAMES.BASE,M),linkTags:g(i.TAG_NAMES.LINK,n),metaTags:g(i.TAG_NAMES.META,r),noscriptTags:g(i.TAG_NAMES.NOSCRIPT,w),scriptTags:g(i.TAG_NAMES.SCRIPT,T),styleTags:g(i.TAG_NAMES.STYLE,j)},C={},y={};Object.keys(c).forEach((function(t){var e=c[t],M=e.newTags,L=e.oldTags;M.length&&(C[t]=M),L.length&&(y[t]=c[t].oldTags)})),e&&e(),s(t,C,y)},f=function(t){return Array.isArray(t)?t.join(""):t},d=function(t,e){void 0!==t&&document.title!==t&&(document.title=f(t)),x(i.TAG_NAMES.TITLE,e)},x=function(t,e){var M=document.getElementsByTagName(t)[0];if(M){for(var L=M.getAttribute(i.HELMET_ATTRIBUTE),u=L?L.split(","):[],n=[].concat(u),r=Object.keys(e),w=0;w<r.length;w++){var s=r[w],T=e[s]||"";M.getAttribute(s)!==T&&M.setAttribute(s,T),-1===u.indexOf(s)&&u.push(s);var j=n.indexOf(s);-1!==j&&n.splice(j,1)}for(var o=n.length-1;o>=0;o--)M.removeAttribute(n[o]);u.length===n.length?M.removeAttribute(i.HELMET_ATTRIBUTE):M.getAttribute(i.HELMET_ATTRIBUTE)!==r.join(",")&&M.setAttribute(i.HELMET_ATTRIBUTE,r.join(","))}},g=function(t,e){var M=document.head||document.querySelector(i.TAG_NAMES.HEAD),L=M.querySelectorAll(t+"["+i.HELMET_ATTRIBUTE+"]"),u=Array.prototype.slice.call(L),n=[],r=void 0;return e&&e.length&&e.forEach((function(e){var M=document.createElement(t);for(var L in e)if(e.hasOwnProperty(L))if(L===i.TAG_PROPERTIES.INNER_HTML)M.innerHTML=e.innerHTML;else if(L===i.TAG_PROPERTIES.CSS_TEXT)M.styleSheet?M.styleSheet.cssText=e.cssText:M.appendChild(document.createTextNode(e.cssText));else{var w=void 0===e[L]?"":e[L];M.setAttribute(L,w)}M.setAttribute(i.HELMET_ATTRIBUTE,"true"),u.some((function(t,e){return r=e,M.isEqualNode(t)}))?u.splice(r,1):n.push(M)})),u.forEach((function(t){return t.parentNode.removeChild(t)})),n.forEach((function(t){return M.appendChild(t)})),{oldTags:u,newTags:n}},p=function(t){return Object.keys(t).reduce((function(e,M){var L=void 0!==t[M]?M+'="'+t[M]+'"':""+M;return e?e+" "+L:L}),"")},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,M){return e[i.REACT_TAG_MAP[M]||M]=t[M],e}),e)},h=function(t,e,M){switch(t){case i.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,M=e.titleAttributes,(L={key:t})[i.HELMET_ATTRIBUTE]=!0,u=O(M,L),[n.default.createElement(i.TAG_NAMES.TITLE,u,t)];var t,M,L,u},toString:function(){return function(t,e,M,L){var u=p(M),n=f(e);return u?"<"+t+" "+i.HELMET_ATTRIBUTE+'="true" '+u+">"+T(n,L)+"</"+t+">":"<"+t+" "+i.HELMET_ATTRIBUTE+'="true">'+T(n,L)+"</"+t+">"}(t,e.title,e.titleAttributes,M)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(e)},toString:function(){return p(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,M){var L,u=((L={key:M})[i.HELMET_ATTRIBUTE]=!0,L);return Object.keys(e).forEach((function(t){var M=i.REACT_TAG_MAP[t]||t;if(M===i.TAG_PROPERTIES.INNER_HTML||M===i.TAG_PROPERTIES.CSS_TEXT){var L=e.innerHTML||e.cssText;u.dangerouslySetInnerHTML={__html:L}}else u[M]=e[t]})),n.default.createElement(t,u)}))}(t,e)},toString:function(){return function(t,e,M){return e.reduce((function(e,L){var u=Object.keys(L).filter((function(t){return!(t===i.TAG_PROPERTIES.INNER_HTML||t===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var u=void 0===L[e]?e:e+'="'+T(L[e],M)+'"';return t?t+" "+u:u}),""),n=L.innerHTML||L.cssText||"",r=-1===i.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+i.HELMET_ATTRIBUTE+'="true" '+u+(r?"/>":">"+n+"</"+t+">")}),"")}(t,e,M)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,M){return e[i.HTML_TAG_MAP[M]||M]=t[M],e}),e)},e.handleClientStateChange=function(t){I&&S(I),t.defer?I=N((function(){D(t,(function(){I=null}))})):(D(t),I=null)},e.mapStateOnServer=function(t){var e=t.baseTag,M=t.bodyAttributes,L=t.encode,u=t.htmlAttributes,n=t.linkTags,r=t.metaTags,w=t.noscriptTags,s=t.scriptTags,T=t.styleTags,j=t.title,o=void 0===j?"":j,a=t.titleAttributes;return{base:h(i.TAG_NAMES.BASE,e,L),bodyAttributes:h(i.ATTRIBUTE_NAMES.BODY,M,L),htmlAttributes:h(i.ATTRIBUTE_NAMES.HTML,u,L),link:h(i.TAG_NAMES.LINK,n,L),meta:h(i.TAG_NAMES.META,r,L),noscript:h(i.TAG_NAMES.NOSCRIPT,w,L),script:h(i.TAG_NAMES.SCRIPT,s,L),style:h(i.TAG_NAMES.STYLE,T,L),title:h(i.TAG_NAMES.TITLE,{title:o,titleAttributes:a},L)}},e.reducePropsToState=function(t){return{baseTag:c([i.TAG_PROPERTIES.HREF],t),bodyAttributes:a(i.ATTRIBUTE_NAMES.BODY,t),defer:y(t,i.HELMET_PROPS.DEFER),encode:y(t,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:a(i.ATTRIBUTE_NAMES.HTML,t),linkTags:C(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],t),metaTags:C(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:C(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:o(t),scriptTags:C(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],t),styleTags:C(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],t),title:j(t),titleAttributes:a(i.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=N,e.warn=l}).call(this,M("yLpj"))},vrFN:function(t,e,M){"use strict";var L=M("o6/h"),u=M("q1tI"),n=M.n(u),r=M("TJpk"),i=M.n(r),w=M("nnrW"),s=M.n(w),T=function(t){var e=t.description,M=t.lang,u=t.meta,r=t.title,w=L.data.site,T=e;return n.a.createElement(i.a,{htmlAttributes:{lang:M},title:r,titleTemplate:"%s | "+w.siteMetadata.title,meta:[{name:"description",content:T},{property:"og:title",content:r},{property:"og:locale",content:"en_US"},{property:"og:description",content:T},{property:"og:image",content:"https://quicoto.github.io"+s.a},{property:"og:image:width",content:"529"},{property:"og:image:height",content:"529"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:w.siteMetadata.social.twitter},{name:"twitter:site",content:w.siteMetadata.social.twitter},{name:"twitter:title",content:r},{name:"twitter:description",content:T}].concat(u)})};T.defaultProps={lang:"en",meta:[]},e.a=T},yLpj:function(t,e){var M;M=function(){return this}();try{M=M||new Function("return this")()}catch(L){"object"==typeof window&&(M=window)}t.exports=M}}]);
//# sourceMappingURL=commons-ffa5750d7dad34652179.js.map