(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CA0I:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"1e1437b3-14d6-57bf-b034-573db2b43e45"}},{"node":{"id":"2685200e-6a09-510d-9736-865b1e4a644d"}},{"node":{"id":"362ded47-937a-56d4-915a-9395c5cdffe9"}},{"node":{"id":"f6f240c6-80e4-5836-8159-8332382b68ef"}},{"node":{"id":"829fccf1-3107-5c24-863a-a2eb6f9886ba"}},{"node":{"id":"c90b9cef-e475-5137-a027-3c17f0a09588"}},{"node":{"id":"5c4e5b07-37b7-5a84-887e-9e9c4e870193"}},{"node":{"id":"94db90a7-6a51-53a4-9dae-f95eeff6811e"}},{"node":{"id":"a6c69743-b2fd-5630-8481-c026120f4868"}},{"node":{"id":"2a0bb6ce-1573-521f-829a-dae7bcde2fb2"}},{"node":{"id":"d42a080b-16bd-5f38-aea0-edf8d7a79328"}},{"node":{"id":"bfea13e2-291e-586f-a585-4701528468b7"}}]}}}')},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return b}));var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),d=t("CA0I"),s=function(){return r.a.createElement(o.StaticQuery,{query:"259124242",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",{className:"widgets-number"},a.length)},data:d})},i=(t("Vd3H"),t("bR/A"));function l(e){return r.a.createElement("li",null,r.a.createElement("strong",null,e.show)," (",e.average,")")}function c(e){var a=e.groups,t=[];return a.forEach((function(e){var a=e.nodes,n={show:a[0].frontmatter.show,totalCount:e.totalCount},r=0;a.forEach((function(e){r+=e.frontmatter.rating})),n.average=parseFloat((r/a.length).toFixed(2)),t.push(n)})),t.sort((function(e,a){var t=a.average-e.average;return 0!==t?t:a.totalCount-e.totalCount})),t=t.slice(0,5),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(l,{key:e.show,show:e.show,average:e.average})})))}var f=function(){return r.a.createElement(o.StaticQuery,{query:"3550691896",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return r.a.createElement("div",null,r.a.createElement(c,{groups:a}))},data:i})},u=t("qtrH"),m=function(){return r.a.createElement(o.StaticQuery,{query:"2801041605",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return r.a.createElement("div",{className:"widgets-number"},a.length)},data:u})},h=t("6Gk8"),g=t("Bl7J"),w=t("vrFN"),b=(a.default=function(e){var a=e.data,t=e.location,n=a.site.siteMetadata.title,d=a.allMarkdownRemark.edges;return r.a.createElement(g.a,{location:t,title:n},r.a.createElement(w.a,{title:"Home",description:"My TV Shows reviews"}),r.a.createElement(h.a,null),r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Unique shows"),r.a.createElement(m,null)),r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Total episodes"),r.a.createElement(s,null))),r.a.createElement("h2",null,"Top 5 shows"),r.a.createElement(f,null),r.a.createElement("h2",null,"Latest reviews"),d.map((function(e){var a=e.node,t=a.frontmatter.title||a.fields.slug;return r.a.createElement("article",{key:a.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginTop:0}},r.a.createElement(o.Link,{title:"Review: "+t,style:{boxShadow:"none",marginRight:"15px"},to:a.fields.slug},t),r.a.createElement("small",{style:{display:"inline-block",fontSize:"60%"}},a.frontmatter.date))))})),r.a.createElement("p",null,r.a.createElement(o.Link,{style:{boxShadow:"none"},to:"all"},"All reviews ⟶")))},"3005693650")},"bR/A":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"nodes":[{"frontmatter":{"rating":4,"show":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}},{"frontmatter":{"rating":3,"show":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}],"totalCount":2},{"nodes":[{"frontmatter":{"rating":4,"show":"Kaguya-sama wa Kokurasetai"}}],"totalCount":1},{"nodes":[{"frontmatter":{"rating":3,"show":"Kakushigoto"}}],"totalCount":1},{"nodes":[{"frontmatter":{"rating":5,"show":"Rick and Morty"}}],"totalCount":1},{"nodes":[{"frontmatter":{"rating":5,"show":"The Last Dance"}},{"frontmatter":{"rating":4,"show":"The Last Dance"}},{"frontmatter":{"rating":5,"show":"The Last Dance"}},{"frontmatter":{"rating":5,"show":"The Last Dance"}},{"frontmatter":{"rating":4,"show":"The Last Dance"}},{"frontmatter":{"rating":5,"show":"The Last Dance"}}],"totalCount":6},{"nodes":[{"frontmatter":{"rating":4,"show":"The Office"}}],"totalCount":1}]}}}')},qtrH:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"edges":[{"node":{"id":"1e1437b3-14d6-57bf-b034-573db2b43e45","frontmatter":{"show":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}},{"node":{"id":"2685200e-6a09-510d-9736-865b1e4a644d","frontmatter":{"show":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}}]},{"edges":[{"node":{"id":"362ded47-937a-56d4-915a-9395c5cdffe9","frontmatter":{"show":"Kaguya-sama wa Kokurasetai"}}}]},{"edges":[{"node":{"id":"f6f240c6-80e4-5836-8159-8332382b68ef","frontmatter":{"show":"Kakushigoto"}}}]},{"edges":[{"node":{"id":"829fccf1-3107-5c24-863a-a2eb6f9886ba","frontmatter":{"show":"Rick and Morty"}}}]},{"edges":[{"node":{"id":"c90b9cef-e475-5137-a027-3c17f0a09588","frontmatter":{"show":"The Last Dance"}}},{"node":{"id":"5c4e5b07-37b7-5a84-887e-9e9c4e870193","frontmatter":{"show":"The Last Dance"}}},{"node":{"id":"94db90a7-6a51-53a4-9dae-f95eeff6811e","frontmatter":{"show":"The Last Dance"}}},{"node":{"id":"a6c69743-b2fd-5630-8481-c026120f4868","frontmatter":{"show":"The Last Dance"}}},{"node":{"id":"2a0bb6ce-1573-521f-829a-dae7bcde2fb2","frontmatter":{"show":"The Last Dance"}}},{"node":{"id":"d42a080b-16bd-5f38-aea0-edf8d7a79328","frontmatter":{"show":"The Last Dance"}}}]},{"edges":[{"node":{"id":"bfea13e2-291e-586f-a585-4701528468b7","frontmatter":{"show":"The Office"}}}]}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6a32c8861480bc4091db.js.map