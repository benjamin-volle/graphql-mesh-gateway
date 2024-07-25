"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[3752],{83722:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return h}});var r=a(58168),t=a(80045),m=(a(88763),a(15680)),o=a(83407);const i=["components"],s={},l=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var p;const d={_frontmatter:s},u=o.A;function h(e){let{components:n}=e,a=(0,t.A)(e,i);return(0,m.mdx)(u,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"jsonschema-handlers"},(0,m.mdx)("inlineCode",{parentName:"h1"},"JsonSchema")," handlers"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"JsonSchema")," handler allows you to load a single remote REST endpoint and define the request and response structures using predefined JSON schema files."),(0,m.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"JsonSchema")," source uses a different capitalization scheme than other handlers. Using the camel case ",(0,m.mdx)("inlineCode",{parentName:"p"},"jsonSchema")," will result in an error."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n      "sources": [\n          {\n              "name": "carts",\n              "handler": {\n                  "JsonSchema": {\n                      "baseUrl": "<your_Commerce_url>",\n                      "operations": [\n                          {\n                              "type": "Query",\n                              "field": "data",\n                              "path": "/cart",\n                              "method": "GET",\n                              "responseSchema": "./carts-response-schema.json"\n                          }\n                      ]\n                  }\n              }\n          }\n      ]\n  },\n}\n')),(0,m.mdx)("p",null,"If your REST service's request or response format is modified, you must update your mesh configuration file with the modified request or response. Then ",(0,m.mdx)("a",{parentName:"p",href:"../../basic/create-mesh.md#update-an-existing-mesh"},"update your mesh")," to allow API Mesh to cache any changes."),(0,m.mdx)("p",null,"If your source handler's schema is modified, you must ",(0,m.mdx)("a",{parentName:"p",href:"../../basic/create-mesh.md#update-an-existing-mesh"},"update your mesh")," to allow API Mesh to cache any changes."),(0,m.mdx)("p",null,"For more information on creating JSON schemas, refer to this ",(0,m.mdx)("a",{parentName:"p",href:"https://json-schema.org/learn/getting-started-step-by-step.html"},"JSON schema tutorial"),"."),(0,m.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"JSON Schema handlers do not support ",(0,m.mdx)("inlineCode",{parentName:"p"},"responseConfig")," functionality."),(0,m.mdx)("p",null,"The JSON Schema handler uses the following format:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "MyApi",\n      "handler": {\n        "JsonSchema": {\n          "baseUrl": "https://your-service-url/endpoint/",\n          "operations": [\n            {\n              "type": "Query",\n              "field": "users",\n              "path": "/users",\n              "method": "GET",\n              "responseSchema": "https://json-schema/schema.json"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')),(0,m.mdx)("p",null,"JSON Schema handlers can also use local sources, see ",(0,m.mdx)("a",{parentName:"p",href:"./index.md#reference-local-files-in-handlers"},"Reference local file handlers")," for more information."),(0,m.mdx)("p",null,"The following example returns your header values, so you can confirm your headers are functioning properly."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "headersData",\n        "handler": {\n          "JsonSchema": {\n            "baseUrl": "<your baseUrl>",\n            "operationHeaders": {\n              "sample-operation-header": "sample operation value"\n            },\n            "schemaHeaders": {\n              "sample-schema-header": "sample schema value"\n            },\n            "operations": [\n              {\n                "type": "Query",\n                "field": "data",\n                "path": "/getHeadersData",\n                "method": "GET",\n                "responseSchema": "./getHeadersSchema.json"\n              }\n            ],\n            "ignoreErrorResponses": false\n          }\n        }\n      }\n    ],\n    "files": [\n      {\n        "path": "./getHeadersSchema.json",\n        "content": "{\\"$schema\\":\\"http://json-schema.org/draft-07/schema#\\",\\"type\\":\\"object\\",\\"required\\":[\\"headerKeys\\",\\"headerValues\\",\\"headers\\"],\\"properties\\":{\\"headerKeys\\":{\\"type\\":\\"array\\",\\"items\\":{\\"type\\":\\"string\\"}},\\"headerValues\\":{\\"type\\":\\"array\\",\\"items\\":{\\"type\\":\\"string\\"}},\\"headers\\":{\\"type\\":\\"object\\"}}}"\n      }\n    ]\n  }\n}\n')),(0,m.mdx)("h2",{id:"headers-from-context"},"Headers from context"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "MyGraphQLApi",\n      "handler": {\n        "JsonSchema": {\n          "baseUrl": "https://some-service-url/endpoint-path/",\n          "operationHeaders": {\n            "Authorization": "Bearer {context.headers[\'x-my-api-token\']}"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,m.mdx)("h2",{id:"query-parameters"},"Query Parameters"),(0,m.mdx)("p",null,"There are multiple methods for defining query parameters. Select the method that fits your needs, or combine multiple methods:"),(0,m.mdx)("h3",{id:"automatically-declare-query-parameters"},"Automatically declare query parameters"),(0,m.mdx)("p",null,"API Mesh automatically generates arguments for operations (if needed). Arguments are generated as nullable strings by default."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "MyGraphQLApi",\n            "handler": {\n                "JsonSchema": {\n                    "baseUrl": "https://your-service/endpoint/",\n                    "operations": [\n                        {\n                            "type": "Query",\n                            "field": "user",\n                            "path": "/user?id={args.id}",\n                            "method": "GET",\n                            "responseSchema": "./json-schemas/user.json"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n')),(0,m.mdx)("h3",{id:"manually-declare-query-parameters"},"Manually declare query parameters"),(0,m.mdx)("p",null,"You can define the operation's arguments by modifying the ",(0,m.mdx)("inlineCode",{parentName:"p"},"argTypeMap")," config field according to the JSON Schema spec."),(0,m.mdx)("p",null,"In this example, we declare a ",(0,m.mdx)("inlineCode",{parentName:"p"},"page")," argument as an object with ",(0,m.mdx)("inlineCode",{parentName:"p"},"limit")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"offset")," properties:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "argTypeMap": {\n        "page": {\n            "type": "object",\n            "properties": {\n                "limit": {\n                    "type": "number"\n                },\n                "offset": {\n                    "type": "number"\n                }\n            }\n        }\n    }\n}\n')),(0,m.mdx)("p",null,"Arguments should be added to the path using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"queryParamArgMap")," config field, especially for non-primitive types."),(0,m.mdx)("p",null,"Here we add the ",(0,m.mdx)("inlineCode",{parentName:"p"},"page")," argument to the query parameters:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "MyGraphQLApi",\n            "handler": {\n                "JsonSchema": {\n                    "baseUrl": "https://your-service-/endpoint/",\n                    "operations": [\n                        {\n                            "type": "Query",\n                            "field": "users",\n                            "path": "/getUsers",\n                            "method": "GET",\n                            "responseSample": "./jsons/MyField.response.json",\n                            "responseTypeName": "MyResponseName",\n                            "argTypeMap": {\n                                "page": {\n                                    "type": "object",\n                                    "properties": {\n                                        "limit": {\n                                            "type": "number"\n                                        },\n                                        "offset": {\n                                            "type": "number"\n                                        }\n                                    }\n                                }\n                            },\n                            "queryParamArgMap": {\n                                "page": "page"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n')),(0,m.mdx)("h2",{id:"config-api-reference"},"Config API reference"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),") - URL or file path for your JSON schema."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"JSON"),") - JSON object for adding headers to API calls for runtime schema introspection"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"JSON"),") - JSON object for adding headers to API calls for runtime operation execution"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"operations")," - (required) Array of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"object"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"field")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),", required)",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Cannot contain hyphens."))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"description")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"type")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String (Query | Mutation | Subscription)"),", required)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"requestSchema")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"requestSample")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"requestTypeName")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"responseSchema")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Remote files and URLs are not supported. You must provide a local path."))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"responseSample")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Remote files and URLs are not supported. You must provide a local path."))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"responseTypeName")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"argTypeMap")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"JSON"),")"))))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"ignoreErrorResponses")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Boolean"),") - Flag for ignoring errors in the response")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mesh-basic-handlers-json-schema-md-5e1762351823fde366e3.js.map