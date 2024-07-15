"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[9900],{34993:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return d},default:function(){return g}});var a=o(87462),i=o(45987),t=(o(35776),o(3905)),r=o(91515);const l=["components"],d={},s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",n)},m=s("InlineAlert"),p=s("CodeBlock"),u={_frontmatter:d},h=r.Z;function g(e){let{components:n}=e,o=(0,i.Z)(e,l);return(0,t.mdx)(h,(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"cors-headers"},"CORS headers"),(0,t.mdx)("p",null,"Cross-origin resource sharing (CORS) allows you to pass resources that are usually restricted to an outside domain. Refer to ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"MDN's documentation")," for more information on CORS headers."),(0,t.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,t.mdx)("p",null,"To get CORS response headers when querying your mesh, you must provide an ",(0,t.mdx)("inlineCode",{parentName:"p"},"origin")," request header with the origin URL as the value. For example, ",(0,t.mdx)("inlineCode",{parentName:"p"},"origin: https://graph.adobe.io"),"."),(0,t.mdx)("p",null,"To add CORS headers to your mesh, create a ",(0,t.mdx)("inlineCode",{parentName:"p"},"CORS")," object in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"responseConfig")," object, using the following key-value pairs:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"origin")," (Required) - the scheme and domain of the resource you want to allow to make a CORS request"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"methods")," (Required) - the HTTP request methods allowed in the CORS request, such as GET, POST, and OPTIONS"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"allowedHeaders")," - a string of allowed headers in preflight requests"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"credentials")," - a boolean value that indicates if credentials can be included in CORS request (default: ",(0,t.mdx)("inlineCode",{parentName:"li"},"false"),")"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"exposedHeaders")," - a comma-delimited CORS request that contains headers to expose"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"maxAge")," - the maximum number of seconds the preflight response (the values of the ",(0,t.mdx)("inlineCode",{parentName:"li"},"origin")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"methods")," headers) can be cached")),(0,t.mdx)("p",null,"When specifying a CORS ",(0,t.mdx)("inlineCode",{parentName:"p"},"origin"),", list all applicable origins. Do not enter ",(0,t.mdx)("inlineCode",{parentName:"p"},"*")," for the value, as this will return the request's origin."),(0,t.mdx)("p",null,"The following examples show how to use CORS with a single origin or with multiple origins:"),(0,t.mdx)(p,{slots:"heading, code",repeat:"2",languages:"json, json",mdxType:"CodeBlock"}),(0,t.mdx)("h4",{id:"single-origin"},"Single origin"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n...\n  "responseConfig": {\n    "CORS": {\n      "origin": "https://www.domain.com",\n      "methods": [\n        "GET",\n        "POST"\n      ],\n      "maxAge": 60480,\n      "credentials": true,\n      "exposedHeaders": [\n        "Content-Range",\n        "X-Content-Range"\n      ]\n    }\n  }\n...\n}\n')),(0,t.mdx)("h4",{id:"multiple-origins"},"Multiple origins"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n...\n  "responseConfig": {\n    "CORS": {\n      "maxAge": 60480,\n      "methods": [\n        "GET",\n        "POST",\n        "PUT",\n        "HEAD",\n        "OPTIONS"\n      ],\n      "origin": ["<origin1>", "<origin2>"]\n    } \n  } \n...\n}\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mesh-advanced-cors-md-2bb46c65baa1cb919ce7.js.map