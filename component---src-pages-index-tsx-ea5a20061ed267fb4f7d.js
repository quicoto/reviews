"use strict";(self.webpackChunkricard_torres_reviews=self.webpackChunkricard_torres_reviews||[]).push([[691],{1416:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),a=r(5444),l=function(){return n.createElement(a.StaticQuery,{query:"3379033956",render:function(e){var t=JSON.parse(JSON.stringify(e.movies,null,4)).edges,r=JSON.parse(JSON.stringify(e.series,null,4)).group,a=0;r.forEach((function(e){var t=e.nodes.find((function(e){return null!==e.frontmatter.time}));t&&(a+=t.frontmatter.time*e.totalCount)}));var l=Math.round(120*t.length/60+a/60),o=Math.round(l/24),m=Math.round(o/30),i=Math.round(m/12);return n.createElement("div",{className:"widgets-number widgets-number--time"},n.createElement("p",{hidden:0===l},(new Intl.NumberFormat).format(l)," hours"),n.createElement("p",{hidden:0===o},(new Intl.NumberFormat).format(o)," days"),n.createElement("p",{hidden:0===m},(new Intl.NumberFormat).format(m)," month",m>1?"s":""),n.createElement("p",{hidden:0===i},(new Intl.NumberFormat).format(i)," years"))}})},o=function(){return n.createElement(a.StaticQuery,{query:"1185952076",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return n.createElement("div",{className:"widgets-number"},t.length)}})},m=function(){return n.createElement(a.StaticQuery,{query:"384667646",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return n.createElement("div",{className:"widgets-number"},(new Intl.NumberFormat).format(t.length))}})},i=r(4113),s=r(1045);function u(e){var t=e.show;return n.createElement("li",null,n.createElement("h3",{style:{marginBottom:"2rem",marginTop:"0"}},n.createElement(a.Link,{title:"All reviews for: "+t,style:{boxShadow:"none",marginBottom:"10px",marginRight:"15px"},to:"/tv-shows#"+(0,s.Z)(t)},n.createElement("strong",null,t)," ",n.createElement("span",{className:"rating"},(0,i.A0)(e.average)))))}function c(e){var t=e.groups,r=[];return t.forEach((function(e){var t=e.nodes,n={name:t[0].frontmatter.name,totalCount:e.totalCount},a=0;t.forEach((function(e){a+=e.frontmatter.rating})),n.average=(0,i.nr)(parseFloat((a/t.length).toFixed(2))),r.push(n)})),(r=r.filter((function(e){return e.totalCount>6}))).sort((function(e,t){var r=t.average-e.average;return 0!==r?r:t.totalCount-e.totalCount})),r=r.slice(0,10),n.createElement("ul",{className:"list-no-style"},r.map((function(e,t){return n.createElement(u,{key:t.toString(),show:e.name,average:e.average})})))}var d=function(){return n.createElement(a.StaticQuery,{query:"2967193137",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return n.createElement("div",{className:"topShows"},n.createElement(c,{groups:t}))}})},E=function(e){return n.createElement(a.StaticQuery,{query:"1503808984",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return n.createElement("div",{className:"latestItems"},n.createElement(i.aV,{edges:t,cover:!0}))}})},g=function(e){return n.createElement(a.StaticQuery,{query:"2279617727",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return n.createElement("div",{className:"latestItems"},n.createElement(i.aV,{edges:t,cover:!0}))}})},f=function(){return n.createElement(a.StaticQuery,{query:"413195672",render:function(e){var t=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return n.createElement("div",{className:"widgets-number"},t.length)}})},v=r(9535),h=r(4824),w=r(9524),p=function(e){var t=e.data,r=e.location,i=t.site.siteMetadata.title;return n.createElement(h.Z,{location:r,title:i},n.createElement(w.Z,{title:"Home",description:"My TV Shows reviews"}),n.createElement(v.Z,null),n.createElement("div",{className:"widgets"},n.createElement("div",{className:"widgets-column"},n.createElement("h2",null,"Unique shows"),n.createElement(f,null)),n.createElement("div",{className:"widgets-column"},n.createElement("h2",null,"Total episodes"),n.createElement(m,null)),n.createElement("div",{className:"widgets-column"},n.createElement("h2",null,"Total movies"),n.createElement(o,null)),n.createElement("div",{className:"widgets-column"},n.createElement("h2",null,"Time spent"),n.createElement(l,null))),n.createElement("hr",null),n.createElement("h2",{style:{marginTop:"0"}},"Latest TV Show reviews"),n.createElement(g,null),n.createElement("p",null,n.createElement(a.Link,{style:{boxShadow:"none"},to:"tv-shows"},"All TV Show Reviews ⟶")),n.createElement("hr",null),n.createElement("h2",{style:{marginTop:"0"}},"Latest Movie reviews"),n.createElement(E,null),n.createElement("p",null,n.createElement(a.Link,{style:{boxShadow:"none"},to:"movies"},"All Movie Reviews ⟶")),n.createElement("hr",null),n.createElement("h2",{style:{marginTop:"0"}},"Top 10 shows"),n.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ea5a20061ed267fb4f7d.js.map