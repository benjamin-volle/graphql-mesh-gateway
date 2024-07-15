"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[4140],{97496:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return u}});var r=a(87462),t=a(45987),l=(a(35776),a(3905)),m=a(91515);const d=["components"],o={},p=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var i;const s={_frontmatter:o},h=m.Z;function u(e){let{components:n}=e,a=(0,t.Z)(e,d);return(0,l.mdx)(h,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"source-handlers"},"Source handlers"),(0,l.mdx)("p",null,"Source handlers allow you to define sources, such as APIs, that provide data to your mesh. Each handler in your mesh corresponds to an API or other source that you can specify. API Mesh for Adobe Developer App Builder currently supports the following handlers:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"./openapi.md"},"OpenAPI")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"./graphql.md"},"GraphQL")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"./json-schema.md"},"JSON schemas")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"./soap.md"},"SOAP")," (Experimental)")),(0,l.mdx)("p",null,"Whenever a schema is modified, you must ",(0,l.mdx)("a",{parentName:"p",href:"../create-mesh.md#update-an-existing-mesh"},"update your mesh")," to allow API Mesh to cache any changes."),(0,l.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Only alphanumerical characters are allowed in source handler names."),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Whenever a source schema is modified, you must ",(0,l.mdx)("a",{parentName:"p",href:"../create-mesh.md#update-an-existing-mesh"},"update your mesh")," to allow API Mesh to cache any changes."),(0,l.mdx)("p",null,"The following example contains a basic mesh file with an OpenAPI source handler."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "CommerceREST",\n        "handler": {\n          "openapi": {\n            "source": "your_Commerce_API"\n          }\n        },\n      }\n    ]\n  },\n}\n')),(0,l.mdx)("p",null,"Handlers are located in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"sources")," section of the mesh file. Each ",(0,l.mdx)("inlineCode",{parentName:"p"},"source")," will need a ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),", a ",(0,l.mdx)("inlineCode",{parentName:"p"},"handler"),", and other key-value pairs that correspond to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"handler")," type. In the previous example, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"openapi")," handler only requires a ",(0,l.mdx)("inlineCode",{parentName:"p"},"source"),"."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"name")," - an alphanumeric name to distinguish between other handlers"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"handler"),"- the type of handler you want to use, for example ",(0,l.mdx)("inlineCode",{parentName:"li"},"openapi")),(0,l.mdx)("li",{parentName:"ul"},"Handler specific data - the key-value pairs that correspond to your specified handler")),(0,l.mdx)("h2",{id:"reference-local-files-in-handlers"},"Reference local files in handlers"),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"To reference files directly, refer to ",(0,l.mdx)("a",{parentName:"p",href:"../../advanced/developer-tools.md#reference-files-directly"},"local development"),"."),(0,l.mdx)("p",null,"You can reference local files as sources in handlers using the following format:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "meshConfig": {\n        "sources": [\n            {\n                "name": "CommerceREST",\n                "handler": {\n                    "openapi": {\n                        "source": "your_Commerce_API"\n                    }\n                }\n            },\n            {\n                "name": "CommerceRESTV2",\n                "handler": {\n                    "openapi": {\n                        "source": "./CommerceRestV2.json"\n                    }\n                }\n            }\n        ],\n        "files": [\n            {\n                "path": "./CommerceRestV2.json",\n                "content": <LOCAL_FILE_CONTENT>\n            }\n        ]\n    }\n}\n')),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Only ",(0,l.mdx)("inlineCode",{parentName:"p"},"JS")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"JSON")," files are supported using this method."),(0,l.mdx)("h2",{id:"package-versions"},"Package versions"),(0,l.mdx)("p",null,"The following table specifies the GraphQL Mesh versions of each handler supported by API Mesh for Adobe Developer App Builder:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Handler Package Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"./openapi.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"openapi"))),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"0.33.39"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"./graphql.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"graphql"))),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"0.34.13"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"./json-schema.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"JsonSchema"))),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"0.35.38"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"./soap.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"soap"))),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"0.14.25"))))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mesh-basic-handlers-index-md-4a012558cd2afe89779c.js.map