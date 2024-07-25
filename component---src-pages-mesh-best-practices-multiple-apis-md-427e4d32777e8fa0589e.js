"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[4557],{49349:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return h}});var t=a(58168),o=a(80045),r=(a(88763),a(15680)),i=a(83407);const d=["components"],s={},l=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var m;const u={_frontmatter:s},p=i.A;function h(e){let{components:n}=e,a=(0,o.A)(e,d);return(0,r.mdx)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"multiple-apis-recipe"},"Multiple APIs recipe"),(0,r.mdx)("p",null,"This topic describes how to use multiple APIs. Your mesh can merge different data sources into a single unified GraphQL Schema, but it is not an alternative to Schema Stitching, Apollo Federation, Bare Schema Merging, or another merging strategy."),(0,r.mdx)("p",null,"In addition to ",(0,r.mdx)("inlineCode",{parentName:"p"},"@apollo/gateway"),", API Mesh supports subscriptions out-of-box."),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://product.voxmedia.com/2020/11/2/21494865/to-federate-or-stitch-a-graphql-gateway-revisited"},"Learn more key differences between Schema Stitching and Apollo Federation")),(0,r.mdx)("h2",{id:"extending-graphql-schema-with-additionaltypedefs"},"Extending GraphQL Schema with ",(0,r.mdx)("inlineCode",{parentName:"h2"},"additionalTypeDefs")),(0,r.mdx)("p",null,"You can add new types or fields to the current unified GraphQL Schema by using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," configuration field."),(0,r.mdx)("p",null,"For example, if we have the StackExchange API in our Mesh configuration:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "StackExchange",\n      "handler": {\n        "openapi": {\n          "source": "https://raw.githubusercontent.com/grokify/api-specs/master/stackexchange/stackexchange-api-v2.2_openapi-v3.0.yaml"\n        }\n      }\n    }\n  ],\n  "additionalTypeDefs": "extend type Query {\\n  listQuestionsFromStackOverflow(first: Int!): [Question]\\n}\\n"\n}\n')),(0,r.mdx)("p",null,"We might want to add a new field under the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Query")," root type named ",(0,r.mdx)("inlineCode",{parentName:"p"},"viewsInPastMonth"),", but we will need a resolver for this field."),(0,r.mdx)("h2",{id:"declare-a-resolver-to-the-new-additionaltypedefs-by-using-additionalresolvers"},"Declare a resolver to the new ",(0,r.mdx)("inlineCode",{parentName:"h2"},"additionalTypeDefs")," by using ",(0,r.mdx)("inlineCode",{parentName:"h2"},"additionalResolvers")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," field will make our new field executable in the unified schema:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "StackExchange",\n      "handler": {\n        "openapi": {\n          "source": "https://raw.githubusercontent.com/grokify/api-specs/master/stackexchange/stackexchange-api-v2.2_openapi-v3.0.yaml"\n        }\n      }\n    }\n  ],\n  "additionalTypeDefs": "extend type Query {\\n  listQuestionsFromStackOverflow(first: Int!): [Question]\\n}\\n",\n  "additionalResolvers": [\n    {\n      "targetTypeName": "Query",\n      "targetFieldName": "listQuestionsFromStackOverflow",\n      "sourceName": "StackExchange",\n      "sourceTypeName": "Query",\n      "sourceFieldName": "listQuestions",\n      "sourceArgs": {\n        "pagesize": "{args.first}"\n      },\n      "result": "items"\n    }\n  ]\n}\n')),(0,r.mdx)("h2",{id:"combining-schemas-using-declarative-api"},"Combining Schemas using declarative API"),(0,r.mdx)("p",null,"We learned that we can combine multiple APIs in a mesh using ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalResolvers"),"."),(0,r.mdx)("p",null,"The following example has two different OpenAPI sources. We will add two new fields to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Cities")," type, and those fields have return types from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Weather")," API."),(0,r.mdx)("p",null,"To achieve this, we will use ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," inside the mesh configuration file."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "Cities",\n      "handler": {\n        "openapi": {\n          "source": "https://api.apis.guru/v2/specs/mashape.com/geodb/1.0.0/swagger.json",\n          "operationHeaders": {\n            "X-RapidAPI-Key": "a12b3c456defg78hij9kl0123m4no5pqr6stuv789wxyz01a23"\n          }\n        }\n      }\n    },\n    {\n      "name": "Weather",\n      "handler": {\n        "openapi": {\n          "source": "https://api.apis.guru/v2/specs/weatherbit.io/2.0.0/swagger.json"\n        }\n      }\n    }\n  ],\n  "additionalTypeDefs": "extend type PopulatedPlaceSummary {\\n  dailyForecast: [Forecast]\\n  todayForecast: Forecast\\n}\\n",\n  "additionalResolvers": [\n    {\n      "targetTypeName": "PopulatedPlaceSummary",\n      "targetFieldName": "dailyForecast",\n      "requiredSelectionSet": "{\\n  latitude\\n  longitude\\n}\\n",\n      "sourceName": "Weather",\n      "sourceTypeName": "Query",\n      "sourceFieldName": "getForecastDailyLatLatLonLon",\n      "sourceArgs": {\n        "lat": "{root.latitude}",\n        "lon": "{root.longitude}",\n        "key": "{context.headers[\'x-weather-api-key\']}"\n      },\n      "result": "data"\n    },\n    {\n      "type": "PopulatedPlaceSummary",\n      "field": "todayForecast",\n      "requiredSelectionSet": "{\\n  latitude\\n  longitude\\n}\\n",\n      "sourceName": "Weather",\n      "sourceTypeName": "Query",\n      "sourceFieldName": "getForecastDailyLatLatLonLon",\n      "sourceArgs": {\n        "lat": "{root.latitude}",\n        "lon": "{root.longitude}",\n        "key": "{context.headers[\'x-weather-api-key\']}"\n      },\n      "result": "data[0]"\n    }\n  ]\n}\n')),(0,r.mdx)("h2",{id:"merging-types-from-different-sources-type-merging"},"Merging types from different sources (Type Merging)"),(0,r.mdx)("p",null,"Imagine you have two different services, ",(0,r.mdx)("inlineCode",{parentName:"p"},"Books")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Authors"),", which are exposing the following schemas:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"# Authors\ntype Query {\n  authors(ids: [ID!]): [Author!]!\n  author(id: ID!): Author!\n}\n\ntype Author {\n  id: ID!\n  name: String!\n}\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"# Books\ntype Query {\n  books(ids: [ID!]): [Book!]!\n  book(id: ID!): Book!\n  authorWithBooks(id: ID!): Author!\n  authorsWithBooks(ids: [ID!]): [Author!]!\n}\n\ntype Book {\n  id: ID!\n  title: String!\n  authorId: ID!\n}\n\ntype AuthorWithBooks {\n  id: ID!\n  books: [Book!]!\n}\n")),(0,r.mdx)("p",null,"Then you could use the ",(0,r.mdx)("a",{parentName:"p",href:"../basic/transforms/rename.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"Rename"))," transform to rename ",(0,r.mdx)("inlineCode",{parentName:"p"},"AuthorWithBooks")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"Author"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "sources": [\n      {\n        "name": "BookService",\n        "handler": null,\n        "transforms": [\n          {\n            "rename": {\n              "renames": [\n                {\n                  "from": {\n                    "type": "AuthorWithBooks"\n                  },\n                  "to": {\n                    "type": "Author"\n                  }\n                },\n                {\n                  "from": {\n                    "type": "Query",\n                    "field": "authorWithBooks"\n                  },\n                  "to": {\n                    "type": "Query",\n                    "field": "author"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    ]\n  }\n]\n')),(0,r.mdx)("p",null,"After that ",(0,r.mdx)("inlineCode",{parentName:"p"},"rename"),", you would expect the following query to work, but it will fail because the mesh does not know which field belongs to which source and how to combine those."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  author(id: 0) {\n    id # This field is common\n    name # This field is from `AuthorService`\n    books { # This field is from `BookService`\n      id\n      title\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"You could add ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalResolvers"),", extract ",(0,r.mdx)("inlineCode",{parentName:"p"},"books")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"AuthorWithBooks"),", and return it as a ",(0,r.mdx)("inlineCode",{parentName:"p"},"books")," field of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Author")," type, but this is unnecessarily complicated. So instead, we'll use Type Merging."),(0,r.mdx)("p",null,"The following example indicates how to fetch entities from different sources:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "AuthorService",\n      "handler": null,\n      "transforms": [\n        {\n          "typeMerging": {\n            "queryFields": [\n              {\n                "queryFieldName": "author",\n                "keyField": "id"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "name": "BookService",\n      "handler": null,\n      "transforms": [\n        {\n          "rename": {\n            "renames": [\n              {\n                "from": {\n                  "type": "AuthorWithBooks"\n                },\n                "to": {\n                  "type": "Author"\n                }\n              },\n              {\n                "from": {\n                  "type": "Query",\n                  "field": "authorWithBooks"\n                },\n                "to": {\n                  "type": "Query",\n                  "field": "author"\n                }\n              },\n              {\n                "from": {\n                  "type": "Query",\n                  "field": "authorsWithBooks"\n                },\n                "to": {\n                  "type": "Query",\n                  "field": "authors"\n                }\n              }\n            ]\n          }\n        },\n        {\n          "typeMerging": {\n            "queryFields": [\n              {\n                "queryFieldName": "book",\n                "keyField": "id"\n              },\n              {\n                "queryFieldName": "author",\n                "keyField": "id"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,"Now the previous query will work as expected."),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"../basic/transforms/type-merging.md"},"Learn more about the Type Merging transform"),"."),(0,r.mdx)("h2",{id:"batching-requests-between-sources-to-prevent-an-n1-problem"},"Batching requests between sources to prevent an N+1 problem"),(0,r.mdx)("h3",{id:"in-type-merging"},"In type merging"),(0,r.mdx)("p",null,"The previous example works fine, but there is an N+1 problem. It sends ",(0,r.mdx)("inlineCode",{parentName:"p"},"n")," requests for ",(0,r.mdx)("inlineCode",{parentName:"p"},"n")," entities. But we have ",(0,r.mdx)("inlineCode",{parentName:"p"},"authors")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"books"),". Type Merging is smart enough to handle batching if you point it to a field that returns a list of entities. Let's update our mesh to the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "AuthorService",\n      "handler": null,\n      "transforms": [\n        {\n          "typeMerging": {\n            "queryFields": [\n              {\n                "queryFieldName": "authors",\n                "keyField": "id"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "name": "BookService",\n      "handler": null,\n      "transforms": [\n        {\n          "rename": {\n            "renames": [\n              {\n                "from": {\n                  "type": "AuthorWithBooks"\n                },\n                "to": {\n                  "type": "Author"\n                }\n              },\n              {\n                "from": {\n                  "type": "Query",\n                  "field": "authorWithBooks"\n                },\n                "to": {\n                  "type": "Query",\n                  "field": "author"\n                }\n              },\n              {\n                "from": {\n                  "type": "Query",\n                  "field": "authorsWithBooks"\n                },\n                "to": {\n                  "type": "Query",\n                  "field": "authors"\n                }\n              }\n            ]\n          }\n        },\n        {\n          "typeMerging": {\n            "queryFields": [\n              {\n                "queryFieldName": "books",\n                "keyField": "id"\n              },\n              {\n                "queryFieldName": "authors",\n                "keyField": "id"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,"And now it batches the requests to the inner sources."),(0,r.mdx)("h3",{id:"in-regular-additionalresolvers"},"In regular ",(0,r.mdx)("inlineCode",{parentName:"h3"},"additionalResolvers")),(0,r.mdx)("p",null,"In the following example, we want to have a field called ",(0,r.mdx)("inlineCode",{parentName:"p"},"author")," under ",(0,r.mdx)("inlineCode",{parentName:"p"},"Book")," property and point it to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"author")," property."),(0,r.mdx)("p",null,"Normally, we would use the following definitions:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "additionalTypeDefs": "extend type Book {\\n  author: Author\\n}\\n",\n  "additionalResolvers": [\n    {\n      "sourceName": "AuthorService",\n      "sourceTypeName": "Query",\n      "sourceFieldName": "author",\n      "sourceArgs": {\n        "id": "{root.authorId}"\n      },\n      "targetTypeName": "Book",\n      "targetFieldName": "author",\n      "requiredSelectionSet": "{authorId}"\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,"This creates an N+1 problem that we can solve by using the following format:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "additionalResolvers": [\n    {\n      "sourceName": "AuthorService",\n      "sourceTypeName": "Query",\n      "sourceFieldName": "authors",\n      "keyField": "authorId",\n      "keysArg": "ids",\n      "targetTypeName": "Book",\n      "targetFieldName": "author"\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,"Now your mesh will batch the queries of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Book.author")," by using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"authorId")," field in ",(0,r.mdx)("inlineCode",{parentName:"p"},"Query.authors"),"."),(0,r.mdx)("h2",{id:"consuming-apollo-federation-services"},"Consuming Apollo Federation Services"),(0,r.mdx)("p",null,"The mesh uses ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/gmac/schema-stitching-handbook/tree/master/federation-services"},"Schema Stitching")," to consume the existing Apollo Federation services, so you can combine Federation and Type Merging."),(0,r.mdx)("p",null,"Follow the Apollo Federation spec and integrate your existing Federated services. Your mesh can mix and match Federation and Stitching approaches including all other transforms (Type Merging, Rename, Filter, etc.)."),(0,r.mdx)("p",null,"You can also transform your existing non-federated schemas into a federated service."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "accounts",\n      "handler": {\n        "graphql": {\n          "endpoint": "<your_url>"\n        }\n      },\n      "transforms": [\n        {\n          "federation": {\n            "types": [\n              {\n                "name": "Query",\n                "config": {\n                  "extend": true\n                }\n              },\n              {\n                "name": "User",\n                "config": {\n                  "keyFields": [\n                    "id"\n                  ],\n                  "resolveReference": {\n                    "queryFieldName": "user"\n                  }\n                }\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "name": "reviews",\n      "handler": {\n        "graphql": {\n          "endpoint": "<your_url>"\n        }\n      }\n    },\n    {\n      "name": "products",\n      "handler": {\n        "graphql": {\n          "endpoint": "<your_url>"\n        }\n      }\n    },\n    {\n      "name": "inventory",\n      "handler": {\n        "graphql": {\n          "endpoint": "<your_url>"\n        }\n      }\n    }\n  ]\n}\n')),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null," You can view the ",(0,r.mdx)("a",{parentName:"p",href:"../basic/transforms/federation.md"},"federation transformer")," documentation to learn more about adding federation metadata to a non-federated GraphQL Schema."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mesh-best-practices-multiple-apis-md-427e4d32777e8fa0589e.js.map