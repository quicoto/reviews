(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=function(){return r.a.createElement(l.StaticQuery,{query:"1185952076",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",{className:"widgets-number"},t.length)}})},c=function(){return r.a.createElement(l.StaticQuery,{query:"384667646",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",{className:"widgets-number"},t.length)}})},u=a("YRal"),i=a("FDkO");function s(e){var t=e.show;return r.a.createElement("h3",{style:{marginBottom:"2rem",marginTop:"0"}},r.a.createElement(l.Link,{title:"All reviews for: "+t,style:{boxShadow:"none",marginBottom:"10px",marginRight:"15px"},to:"/tv-shows#"+i(t)},r.a.createElement("strong",null,t)," ",r.a.createElement("span",{className:"rating"},Object(u.c)(e.average))))}function m(e){var t=e.groups,a=[];return t.forEach((function(e){var t=e.nodes,n={name:t[0].frontmatter.name,totalCount:e.totalCount},r=0;t.forEach((function(e){r+=e.frontmatter.rating})),n.average=Object(u.b)(parseFloat((r/t.length).toFixed(2))),a.push(n)})),(a=a.filter((function(e){return e.totalCount>6}))).sort((function(e,t){var a=t.average-e.average;return 0!==a?a:t.totalCount-e.totalCount})),a=a.slice(0,10),console.log(a),r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement(s,{key:t.toString(),show:e.name,average:e.average})})))}var E=function(){return r.a.createElement(l.StaticQuery,{query:"2967193137",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return r.a.createElement("div",{className:"topShows"},r.a.createElement(m,{groups:t}))}})},d=function(e){return r.a.createElement(l.StaticQuery,{query:"856870051",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",null,r.a.createElement(u.a,{edges:t}))}})},g=function(e){return r.a.createElement(l.StaticQuery,{query:"3711969436",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",null,r.a.createElement(u.a,{edges:t}))}})},v=function(){return r.a.createElement(l.StaticQuery,{query:"413195672",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return r.a.createElement("div",{className:"widgets-number"},t.length)}})},w=a("6Gk8"),f=a("Bl7J"),h=a("vrFN"),p=(t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(f.a,{location:a,title:n},r.a.createElement(h.a,{title:"Home",description:"My TV Shows reviews"}),r.a.createElement(w.a,null),r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Unique shows"),r.a.createElement(v,null)),r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Total episodes"),r.a.createElement(c,null)),r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Total movies"),r.a.createElement(o,null))),r.a.createElement("hr",null),r.a.createElement("h2",{style:{marginTop:"0"}},"Latest TV Show reviews"),r.a.createElement(g,null),r.a.createElement("p",null,r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"tv-shows"},"All TV Show Reviews ⟶")),r.a.createElement("hr",null),r.a.createElement("h2",{style:{marginTop:"0"}},"Latest Movie reviews"),r.a.createElement(d,null),r.a.createElement("p",null,r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"movies"},"All Movie Reviews ⟶")),r.a.createElement("hr",null),r.a.createElement("h2",{style:{marginTop:"0"}},"Top 10 shows"),r.a.createElement(E,null))},"3159585216")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f64e9f44001428a7e42b.js.map