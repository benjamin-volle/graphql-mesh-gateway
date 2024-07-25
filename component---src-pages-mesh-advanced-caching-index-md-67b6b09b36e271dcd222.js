"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[4416],{23126:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return h}});var r=n(58168),t=n(80045),l=(n(88763),n(15680)),o=n(83407);const i=["components"],m={},d=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var s;const p={_frontmatter:m},c=o.A;function h(e){let{components:a}=e,n=(0,t.A)(e,i);return(0,l.mdx)(c,(0,r.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"cache-control-headers"},"Cache-control headers"),(0,l.mdx)("p",null,"API Mesh for Adobe Developer App Builder supports dynamic content caching if you provide a content delivery network (CDN), such as ",(0,l.mdx)("a",{parentName:"p",href:"./fastly.md"},"Fastly"),". Dynamic content caching helps improve site load times and reduces consumption costs associated with bandwidth."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"When using a CDN, you must invalidate the cache after modifying a mesh configuration, or you will receive stale information."),(0,l.mdx)("h2",{id:"understanding-cache-control-headers"},"Understanding cache-control headers"),(0,l.mdx)("p",null,"A CDN's cache-control headers determine how queried information is cached."),(0,l.mdx)("p",null,"When a browser or a GET request accesses a URL, the site's response headers typically include a ",(0,l.mdx)("inlineCode",{parentName:"p"},"cache-control")," header, which determines how long the site will allow its data to be cached. For example, a site could have the following response header:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"cache-control: max-age=0\n")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"max-age=0")," cache-control directive means that this site wants to serve ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age"},"fresh")," data until ",(0,l.mdx)("inlineCode",{parentName:"p"},"0")," seconds after the response is generated, which basically means it never wants to cache data. This could also be achieved with a ",(0,l.mdx)("inlineCode",{parentName:"p"},"no-store")," directive."),(0,l.mdx)("p",null,"For more information on specific cache-control directives and how they can be used, see the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"Mozilla Developer Network's cache control guide"),"."),(0,l.mdx)("h2",{id:"using-cache-control-headers-with-api-mesh"},"Using cache-control headers with API Mesh"),(0,l.mdx)("p",null,"API mesh users can add cache-control headers to ",(0,l.mdx)("a",{parentName:"p",href:"#as-request-headers"},"request headers")," or to a ",(0,l.mdx)("a",{parentName:"p",href:"#in-the-mesh-configuration-file"},"mesh configuration file"),"."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Currently, query-level caching is not supported."),(0,l.mdx)("h3",{id:"as-request-headers"},"As request headers"),(0,l.mdx)("p",null,"Use a mesh configuration similar to the example below to ",(0,l.mdx)("a",{parentName:"p",href:"../headers.md#return-forwarded-headers"},"return forwarded headers"),"."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"You can also use a header value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"x-include-metadata=true")," to return all headers."),(0,l.mdx)("p",null,"When the response includes cache-control values, only the ",(0,l.mdx)("a",{parentName:"p",href:"#how-conflicting-header-values-are-resolved"},"most restrictive values")," are returned."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "responseConfig": {\n        "headers": {\n      "Cache-Control": "max-age=50,min-fresh=6,stale-if-error=20,public,must-revalidate"\n        }\n    },\n    "sources": [\n      {\n        "name": "venia",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"POST requests are not supported, and GET requests are limited to 2,048 characters."),(0,l.mdx)("h4",{id:"how-conflicting-header-values-are-resolved"},"How conflicting header values are resolved"),(0,l.mdx)("p",null,"When cache-control header values from multiple sources conflict, API Mesh selects the lowest or most restrictive value. The following section explains which values are returned when ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"cache-control directives")," conflict."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"no-store")," directive supersedes all other directives. If your source's cache-control headers contain this directive, then the mesh does not return other headers."),(0,l.mdx)("p",null,"If your source's cache-control headers contain conflicting values for the following directives, the mesh selects the lowest value:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"min-fresh"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"max-age"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"max-stale"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"s-maxage"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"stale-if-error"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"stale-while-revalidate")))),(0,l.mdx)("p",null,"If your source's cache-control headers contain any of the following directives, the mesh adds the directive to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"cache-control")," response."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"public"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"private"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"immutable"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"no-cache"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"no-transform"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"must-revalidate"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"proxy-revalidate"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"must-understand")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Examples")),(0,l.mdx)("p",null,"The following example scenarios indicate the resulting ",(0,l.mdx)("inlineCode",{parentName:"p"},"Response header")," from two conflicting sources:"),(0,l.mdx)("p",null,"Example 1"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Source 1 response headers"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"max-age=3600, stale-while-revalidate=60, stale-if-error=3600"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Source 2 response headers"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"max-age:600, stale-if-error=60"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Combined HTTP response headers"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"max-age=600, stale-while-revalidate=60, stale-if-error=60")))),(0,l.mdx)("p",null,"Example 2"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Source 1 response headers"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"max-age=3600, stale-while-revalidate=60, stale-if-error=3600"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Source 2 response headers"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"no-store"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Combined HTTP response headers"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"no-store")))),(0,l.mdx)("h3",{id:"in-the-mesh-configuration-file"},"In the mesh configuration file"),(0,l.mdx)("p",null,"To set your own values for cache-control headers, add a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Cache-Control")," key-value pair to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"responseConfig")," object in your mesh configuration file."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Cache-control header values in your mesh configuration file take precedence over other conflicting values for your sources and are always included in the response."),(0,l.mdx)("h4",{id:"mesh-example"},"Mesh Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "responseConfig": {\n        "headers": {\n      "Cache-Control": "max-age=50,min-fresh=6,stale-if-error=20,public,must-revalidate"\n        }\n    },\n    "sources": [\n      {\n        "name": "venia",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        }\n      }\n    ]\n  }\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mesh-advanced-caching-index-md-67b6b09b36e271dcd222.js.map