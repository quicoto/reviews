(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PUu9:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"nodes":[{"frontmatter":{"rating":4,"name":"Araburu Kisetsu no Otome-domo yo"}}],"totalCount":1},{"nodes":[{"frontmatter":{"rating":4,"name":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}},{"frontmatter":{"rating":3,"name":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}},{"frontmatter":{"rating":4,"name":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}],"totalCount":3},{"nodes":[{"frontmatter":{"rating":4,"name":"Kaguya-sama wa Kokurasetai"}},{"frontmatter":{"rating":5,"name":"Kaguya-sama wa Kokurasetai"}}],"totalCount":2},{"nodes":[{"frontmatter":{"rating":3,"name":"Kakushigoto"}}],"totalCount":1},{"nodes":[{"frontmatter":{"rating":5,"name":"Rick and Morty"}},{"frontmatter":{"rating":3,"name":"Rick and Morty"}}],"totalCount":2},{"nodes":[{"frontmatter":{"rating":2,"name":"Space Force"}},{"frontmatter":{"rating":2,"name":"Space Force"}}],"totalCount":2},{"nodes":[{"frontmatter":{"rating":5,"name":"The Last Dance"}},{"frontmatter":{"rating":5,"name":"The Last Dance"}},{"frontmatter":{"rating":4,"name":"The Last Dance"}},{"frontmatter":{"rating":5,"name":"The Last Dance"}},{"frontmatter":{"rating":5,"name":"The Last Dance"}},{"frontmatter":{"rating":4,"name":"The Last Dance"}},{"frontmatter":{"rating":5,"name":"The Last Dance"}},{"frontmatter":{"rating":4,"name":"The Last Dance"}}],"totalCount":8},{"nodes":[{"frontmatter":{"rating":4,"name":"The Office"}},{"frontmatter":{"rating":4,"name":"The Office"}}],"totalCount":2},{"nodes":[{"frontmatter":{"rating":4,"name":"Tsurezure Children"}},{"frontmatter":{"rating":4,"name":"Tsurezure Children"}},{"frontmatter":{"rating":5,"name":"Tsurezure Children"}},{"frontmatter":{"rating":5,"name":"Tsurezure Children"}},{"frontmatter":{"rating":5,"name":"Tsurezure Children"}}],"totalCount":5},{"nodes":[{"frontmatter":{"rating":5,"name":"UPLOAD"}}],"totalCount":1},{"nodes":[{"frontmatter":{"rating":4,"name":"Uchi Tama - Uchi no Tama Shirimasen ka"}},{"frontmatter":{"rating":4,"name":"Uchi Tama - Uchi no Tama Shirimasen ka"}},{"frontmatter":{"rating":3,"name":"Uchi Tama - Uchi no Tama Shirimasen ka"}}],"totalCount":3}]}}}')},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return L}));var n=t("q1tI"),r=t.n(n),d=t("Wbzz"),o=t("qRXR"),i=function(){return r.a.createElement(d.StaticQuery,{query:"1924683453",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",{className:"widgets-number"},a.length)},data:o})},f=t("hFlU"),c=function(){return r.a.createElement(d.StaticQuery,{query:"3757920029",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",{className:"widgets-number"},a.length)},data:f})},m=(t("a1Th"),t("Btvt"),t("Vd3H"),t("f3/d"),t("PUu9")),l=t("FDkO");function s(e){var a=e.show;return r.a.createElement("li",null,r.a.createElement(d.Link,{title:"All reviews for: "+a,style:{boxShadow:"none",marginBottom:"10px",marginRight:"15px"},to:"tv-shows#"+l(a)},r.a.createElement("strong",null,a)," (",e.average,")"))}function u(e){var a=e.groups,t=[];return a.forEach((function(e){var a=e.nodes,n={name:a[0].frontmatter.name,totalCount:e.totalCount},r=0;a.forEach((function(e){r+=e.frontmatter.rating})),n.average=parseFloat((r/a.length).toFixed(2)),t.push(n)})),t.sort((function(e,a){var t=a.average-e.average;return 0!==t?t:a.totalCount-e.totalCount})),t=t.slice(0,5),r.a.createElement("ul",null,t.map((function(e,a){return r.a.createElement(s,{key:a.toString(),show:e.name,average:e.average})})))}var g=function(){return r.a.createElement(d.StaticQuery,{query:"3123895361",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return r.a.createElement("div",null,r.a.createElement(u,{groups:a}))},data:m})},b=t("Yk8l"),M=t("YRal"),T=function(e){return r.a.createElement(d.StaticQuery,{query:"3951844425",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",null,r.a.createElement(M.a,{edges:a}))},data:b})},N=t("mRGY"),h=function(e){return r.a.createElement(d.StaticQuery,{query:"2304804226",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.edges;return r.a.createElement("div",null,r.a.createElement(M.a,{edges:a}))},data:N})},k=t("quP4"),z=function(){return r.a.createElement(d.StaticQuery,{query:"2941555480",render:function(e){var a=JSON.parse(JSON.stringify(e,null,4)).allMarkdownRemark.group;return r.a.createElement("div",{className:"widgets-number"},a.length)},data:k})},E=t("6Gk8"),y=t("Bl7J"),w=t("vrFN"),L=(a.default=function(e){var a=e.data,t=e.location,n=a.site.siteMetadata.title;return r.a.createElement(y.a,{location:t,title:n},r.a.createElement(w.a,{title:"Home",description:"My TV Shows reviews"}),r.a.createElement(E.a,null),r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Unique shows"),r.a.createElement(z,null)),r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Total episodes"),r.a.createElement(c,null)),r.a.createElement("div",{className:"widgets-column"},r.a.createElement("h2",null,"Total movies"),r.a.createElement(i,null))),r.a.createElement("hr",null),r.a.createElement("h2",{style:{marginTop:"0"}},"Top 5 shows"),r.a.createElement(g,null),r.a.createElement("hr",null),r.a.createElement("h2",{style:{marginTop:"0"}},"Latest TV Show reviews"),r.a.createElement(h,null),r.a.createElement("p",null,r.a.createElement(d.Link,{style:{boxShadow:"none"},to:"tv-shows"},"All TV Show Reviews ⟶")),r.a.createElement("hr",null),r.a.createElement("h2",{style:{marginTop:"0"}},"Latest Movie reviews"),r.a.createElement(T,null),r.a.createElement("p",null,r.a.createElement(d.Link,{style:{boxShadow:"none"},to:"movies"},"All Movie Reviews ⟶")))},"1097489062")},YRal:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return m}));var n=t("q1tI"),r=t.n(n),d=t("Wbzz"),o=t("f1WF"),i=t.n(o);function f(e){var a=e.item.node.frontmatter.title,t=e.item.node.fields.slug,n=e.item.node.frontmatter.rating,o=e.item.node.frontmatter.date;return r.a.createElement("article",null,r.a.createElement("h3",{style:{marginTop:0,marginBottom:"2rem"}},r.a.createElement(d.Link,{title:"Review: "+a,style:{display:"block",boxShadow:"none",marginBottom:"10px",marginRight:"15px"},to:t},a),r.a.createElement("span",{style:{alignItems:"center",display:"flex"}},r.a.createElement("small",{style:{display:"block",fontSize:"60%",marginRight:"15px"}},o),r.a.createElement("span",{className:"rating",style:{marginBottom:"0"}},m(n)))))}function c(e){return r.a.createElement("div",null,e.edges.map((function(e){return r.a.createElement(f,{key:e.node.id,item:e})})))}function m(e){for(var a=[],t=0;t<e;t++)a.push(r.a.createElement("img",{src:i.a,alt:"Star "+(t+1),key:t}));return a}},Yk8l:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/movies/apollo-11/"},"frontmatter":{"date":"May 29, 2020","title":"Apollo 11","rating":5},"id":"4172ed7d-9fa1-5184-ae2b-0fd7ff30be6e"}},{"node":{"fields":{"slug":"/movies/indiana-jones-and-the-last-crusade/"},"frontmatter":{"date":"May 29, 2020","title":"Indiana Jones and the Last Crusade","rating":5},"id":"7dd8c2f4-83f2-5981-8fd7-2ed826f37ff9"}},{"node":{"fields":{"slug":"/movies/saw-i/"},"frontmatter":{"date":"May 29, 2020","title":"Saw I","rating":5},"id":"594281b4-7fa9-52c1-9867-254ab86d4d6d"}},{"node":{"fields":{"slug":"/movies/saw-vi/"},"frontmatter":{"date":"May 24, 2020","title":"Saw VI","rating":2},"id":"71ac4a27-b411-529b-a454-9ba30aa273c7"}}]}}}')},f1WF:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMC42NTIzNDQgMTg1LjkwMjM0NGMtMy4zNTE1NjMtMTAuMzY3MTg4LTEyLjU0Njg3NS0xNy43MzA0NjktMjMuNDI1NzgyLTE4LjcxMDkzOGwtMTQ3Ljc3MzQzNy0xMy40MTc5NjgtNTguNDMzNTk0LTEzNi43Njk1MzJjLTQuMzA4NTkzLTEwLjAyMzQzNy0xNC4xMjEwOTMtMTYuNTExNzE4LTI1LjAyMzQzNy0xNi41MTE3MThzLTIwLjcxNDg0NCA2LjQ4ODI4MS0yNS4wMjM0MzggMTYuNTM1MTU2bC01OC40MzM1OTQgMTM2Ljc0NjA5NC0xNDcuNzk2ODc0IDEzLjQxNzk2OGMtMTAuODU5Mzc2IDEuMDAzOTA2LTIwLjAzMTI1IDguMzQzNzUtMjMuNDAyMzQ0IDE4LjcxMDkzOC0zLjM3MTA5NCAxMC4zNjcxODctLjI1NzgxMyAyMS43MzgyODEgNy45NTcwMzEgMjguOTA2MjVsMTExLjY5OTIxOSA5Ny45NjA5MzctMzIuOTM3NSAxNDUuMDg5ODQ0Yy0yLjQxMDE1NiAxMC42Njc5NjkgMS43MzA0NjggMjEuNjk1MzEzIDEwLjU4MjAzMSAyOC4wOTM3NSA0Ljc1NzgxMyAzLjQzNzUgMTAuMzI0MjE5IDUuMTg3NSAxNS45Mzc1IDUuMTg3NSA0LjgzOTg0NCAwIDkuNjQwNjI1LTEuMzA0Njg3IDEzLjk0OTIxOS0zLjg4MjgxM2wxMjcuNDY4NzUtNzYuMTgzNTkzIDEyNy40MjE4NzUgNzYuMTgzNTkzYzkuMzI0MjE5IDUuNjA5Mzc2IDIxLjA3ODEyNSA1LjA5NzY1NyAyOS45MTAxNTYtMS4zMDQ2ODcgOC44NTU0NjktNi40MTc5NjkgMTIuOTkyMTg3LTE3LjQ0OTIxOSAxMC41ODIwMzEtMjguMDkzNzVsLTMyLjkzNzUtMTQ1LjA4OTg0NCAxMTEuNjk5MjE5LTk3Ljk0MTQwNmM4LjIxNDg0NC03LjE4NzUgMTEuMzUxNTYzLTE4LjUzOTA2MyA3Ljk4MDQ2OS0yOC45MjU3ODF6bTAgMCIgZmlsbD0iI2ZmYzEwNyIvPjwvc3ZnPg=="},hFlU:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"e1e538d4-0037-58cf-8326-52b5072dde69"}},{"node":{"id":"2d5e9a0c-9155-5e22-9487-cdf99b0eb2b0"}},{"node":{"id":"24615ce6-b6df-5a72-9f7c-154d83cf9a9e"}},{"node":{"id":"bf5eb44d-f822-511c-ad4d-ff98b5075ab2"}},{"node":{"id":"1895630f-a0bf-5405-a485-4c25a834b654"}},{"node":{"id":"350b29e9-a7bc-536b-92c3-3628d3cfed52"}},{"node":{"id":"2921e74f-83a2-51cf-b589-f7d3c37aaffe"}},{"node":{"id":"f5033328-1a98-5ecf-9d61-97c34d80f043"}},{"node":{"id":"2d71c86c-b761-5bca-a74c-1928355d65cb"}},{"node":{"id":"ea146269-c07a-5a2f-bcda-622d07e447e0"}},{"node":{"id":"59663503-e6d7-5530-b414-bfad2cce1b33"}},{"node":{"id":"bb7c2f00-245a-56f3-9659-4ce20122689c"}},{"node":{"id":"c2aa0d57-0869-597f-aefa-26ae2b496cb1"}},{"node":{"id":"95e49f42-9c7e-5dc5-9513-8ba777f0b7d2"}},{"node":{"id":"d9901029-c731-5622-a6de-fb7757fcd78c"}},{"node":{"id":"a34ee1ba-63f9-5fc0-b13c-61d1565b0725"}},{"node":{"id":"28b1fa45-714d-5243-875b-8bb9a83a56a5"}},{"node":{"id":"550f687f-85e4-5b20-997e-7ce0db7bdb09"}},{"node":{"id":"f2713496-bb0d-55ea-b120-50f97c331f35"}},{"node":{"id":"f2980605-bfba-5128-b2b5-a6f26d273379"}},{"node":{"id":"901ffd15-264a-5f8e-abd5-a315482f2feb"}},{"node":{"id":"bad6368d-3f03-533e-aa47-3e52f6ee543c"}},{"node":{"id":"f5138964-1503-5c65-9500-d32f7cd5454b"}},{"node":{"id":"d72ea229-2353-5df1-8fff-9a3722e70163"}},{"node":{"id":"e10b1ffe-7103-5997-93d3-107acad1e811"}},{"node":{"id":"432d2d01-9f9d-5643-8044-676a0a2f4f79"}},{"node":{"id":"fe9e9ddb-665a-50df-8f5d-05ef61ac5168"}},{"node":{"id":"e027df27-dc96-5422-8026-8b175f1a5eae"}},{"node":{"id":"e34e6648-8165-5ac1-93fd-db5bb8e31eac"}},{"node":{"id":"1ca7473c-b954-54ba-91c4-9896d44c921e"}}]}}}')},mRGY:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/tv-shows/tsurezure-children/1x6/"},"frontmatter":{"date":"May 30, 2020","title":"Tsurezure Children 1x6","rating":5},"id":"432d2d01-9f9d-5643-8044-676a0a2f4f79"}},{"node":{"fields":{"slug":"/tv-shows/tsurezure-children/1x5/"},"frontmatter":{"date":"May 30, 2020","title":"Tsurezure Children 1x5","rating":5},"id":"e10b1ffe-7103-5997-93d3-107acad1e811"}},{"node":{"fields":{"slug":"/tv-shows/tsurezure-children/1x3/"},"frontmatter":{"date":"May 30, 2020","title":"Tsurezure Children 1x3","rating":5},"id":"d72ea229-2353-5df1-8fff-9a3722e70163"}},{"node":{"fields":{"slug":"/tv-shows/tsurezure-children/1x2/"},"frontmatter":{"date":"May 30, 2020","title":"Tsurezure Children 1x2","rating":4},"id":"f5138964-1503-5c65-9500-d32f7cd5454b"}},{"node":{"fields":{"slug":"/tv-shows/tsurezure-children/1x1/"},"frontmatter":{"date":"May 30, 2020","title":"Tsurezure Children 1x1","rating":4},"id":"bad6368d-3f03-533e-aa47-3e52f6ee543c"}}]}}}')},qRXR:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"4172ed7d-9fa1-5184-ae2b-0fd7ff30be6e"}},{"node":{"id":"7dd8c2f4-83f2-5981-8fd7-2ed826f37ff9"}},{"node":{"id":"594281b4-7fa9-52c1-9867-254ab86d4d6d"}},{"node":{"id":"71ac4a27-b411-529b-a454-9ba30aa273c7"}}]}}}')},quP4:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"edges":[{"node":{"id":"e1e538d4-0037-58cf-8326-52b5072dde69","frontmatter":{"name":"Araburu Kisetsu no Otome-domo yo"}}}]},{"edges":[{"node":{"id":"2d5e9a0c-9155-5e22-9487-cdf99b0eb2b0","frontmatter":{"name":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}},{"node":{"id":"24615ce6-b6df-5a72-9f7c-154d83cf9a9e","frontmatter":{"name":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}},{"node":{"id":"bf5eb44d-f822-511c-ad4d-ff98b5075ab2","frontmatter":{"name":"Boku no Tonari ni Ankoku Hakaishin ga Imasu"}}}]},{"edges":[{"node":{"id":"1895630f-a0bf-5405-a485-4c25a834b654","frontmatter":{"name":"Kaguya-sama wa Kokurasetai"}}},{"node":{"id":"350b29e9-a7bc-536b-92c3-3628d3cfed52","frontmatter":{"name":"Kaguya-sama wa Kokurasetai"}}}]},{"edges":[{"node":{"id":"2921e74f-83a2-51cf-b589-f7d3c37aaffe","frontmatter":{"name":"Kakushigoto"}}}]},{"edges":[{"node":{"id":"f5033328-1a98-5ecf-9d61-97c34d80f043","frontmatter":{"name":"Rick and Morty"}}},{"node":{"id":"2d71c86c-b761-5bca-a74c-1928355d65cb","frontmatter":{"name":"Rick and Morty"}}}]},{"edges":[{"node":{"id":"ea146269-c07a-5a2f-bcda-622d07e447e0","frontmatter":{"name":"Space Force"}}},{"node":{"id":"59663503-e6d7-5530-b414-bfad2cce1b33","frontmatter":{"name":"Space Force"}}}]},{"edges":[{"node":{"id":"bb7c2f00-245a-56f3-9659-4ce20122689c","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"c2aa0d57-0869-597f-aefa-26ae2b496cb1","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"95e49f42-9c7e-5dc5-9513-8ba777f0b7d2","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"d9901029-c731-5622-a6de-fb7757fcd78c","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"a34ee1ba-63f9-5fc0-b13c-61d1565b0725","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"28b1fa45-714d-5243-875b-8bb9a83a56a5","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"550f687f-85e4-5b20-997e-7ce0db7bdb09","frontmatter":{"name":"The Last Dance"}}},{"node":{"id":"f2713496-bb0d-55ea-b120-50f97c331f35","frontmatter":{"name":"The Last Dance"}}}]},{"edges":[{"node":{"id":"f2980605-bfba-5128-b2b5-a6f26d273379","frontmatter":{"name":"The Office"}}},{"node":{"id":"901ffd15-264a-5f8e-abd5-a315482f2feb","frontmatter":{"name":"The Office"}}}]},{"edges":[{"node":{"id":"bad6368d-3f03-533e-aa47-3e52f6ee543c","frontmatter":{"name":"Tsurezure Children"}}},{"node":{"id":"f5138964-1503-5c65-9500-d32f7cd5454b","frontmatter":{"name":"Tsurezure Children"}}},{"node":{"id":"d72ea229-2353-5df1-8fff-9a3722e70163","frontmatter":{"name":"Tsurezure Children"}}},{"node":{"id":"e10b1ffe-7103-5997-93d3-107acad1e811","frontmatter":{"name":"Tsurezure Children"}}},{"node":{"id":"432d2d01-9f9d-5643-8044-676a0a2f4f79","frontmatter":{"name":"Tsurezure Children"}}}]},{"edges":[{"node":{"id":"1ca7473c-b954-54ba-91c4-9896d44c921e","frontmatter":{"name":"UPLOAD"}}}]},{"edges":[{"node":{"id":"fe9e9ddb-665a-50df-8f5d-05ef61ac5168","frontmatter":{"name":"Uchi Tama - Uchi no Tama Shirimasen ka"}}},{"node":{"id":"e027df27-dc96-5422-8026-8b175f1a5eae","frontmatter":{"name":"Uchi Tama - Uchi no Tama Shirimasen ka"}}},{"node":{"id":"e34e6648-8165-5ac1-93fd-db5bb8e31eac","frontmatter":{"name":"Uchi Tama - Uchi no Tama Shirimasen ka"}}}]}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d5cd31828a9e2bd81b2c.js.map