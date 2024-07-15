"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[2430],{97939:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return u}});var i=a(87462),r=a(45987),t=(a(35776),a(3905)),o=a(91515);const s=["components"],p={},l=(m="CodeBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",e)});var m;const d={_frontmatter:p},c=o.Z;function u(e){let{components:n}=e,a=(0,r.Z)(e,s);return(0,t.mdx)(c,(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"extend-the-schema-with-custom-resolvers"},"Extend the schema with custom resolvers"),(0,t.mdx)("p",null,"The ",(0,t.mdx)("a",{parentName:"p",href:"../best-practices/multiple-apis.md"},"multiple APIs")," topic explains how ",(0,t.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," can shape and augment the unified schema with custom resolvers."),(0,t.mdx)("p",null,"Alternatively, using the ",(0,t.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," config allows you to upload a custom resolver as a ",(0,t.mdx)("a",{parentName:"p",href:"../basic/handlers/index.md#reference-local-files-in-handlers"},(0,t.mdx)("inlineCode",{parentName:"a"},"JavaScript")," file")," to the Mesh."),(0,t.mdx)("h2",{id:"programmatic-additionalresolvers"},"Programmatic ",(0,t.mdx)("inlineCode",{parentName:"h2"},"additionalResolvers")),(0,t.mdx)("p",null,"In this example, we will use ",(0,t.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," to apply a set of discounts to products in Adobe Commerce. The following example uses two handlers:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"Venia")," handler is a publicly available Adobe Commerce GraphQL endpoint for the Venia sample storefront.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"DiscountsAPI")," handler points to ",(0,t.mdx)("a",{parentName:"p",href:"https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json"},"a ",(0,t.mdx)("inlineCode",{parentName:"a"},".json")," file")," that contains key-value pairs of sample item names and their corresponding discount percentages."))),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Venia",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql",\n            "useGETForQueries": true\n          }\n        }\n      },\n      {\n        "name": "DiscountsAPI",\n        "handler": {\n          "JsonSchema": {\n            "baseUrl": "https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples",\n            "operations": [\n              {\n                "type": "Query",\n                "field": "discounts",\n                "path": "/discounts-api.json",\n                "method": "GET",\n                "responseSample": "https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json"\n              }\n            ]\n          }\n        }\n      }\n    ],\n    "additionalResolvers": [\n      "./additional-resolvers.js"\n    ]\n  }\n}\n')),(0,t.mdx)("p",null,"Create a JavaScript file named ",(0,t.mdx)("inlineCode",{parentName:"p"},"additional-resolvers.js")," in the same directory as your mesh. Add the following contents to the file:"),(0,t.mdx)(l,{slots:"heading, code",repeat:"1",languages:"js",mdxType:"CodeBlock"}),(0,t.mdx)("h4",{id:"additional-resolversjs"},(0,t.mdx)("inlineCode",{parentName:"h4"},"additional-resolvers.js")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    resolvers: {\n        ConfigurableProduct: {\n            special_price: {\n                selectionSet: '{ name price_range { maximum_price { final_price { value } } } }',\n                resolve: (root, args, context, info) => {\n                    let max = 0;\n\n                    try {\n                        max = root.price_range.maximum_price.final_price.value;\n                    } catch (e) {\n                        // set a default value\n                        max = 0;\n                    }\n\n                    return context.DiscountsAPI.Query.discounts({\n                            root,\n                            args,\n                            context,\n                            info,\n                            selectionSet: '{ name discount }',\n                        })\n                        .then(response => {\n                            let discount = 0;\n                            const discountConfig = response.find(discount => discount.name === root.name);\n\n                            if (discountConfig) {\n                                discount = discountConfig.discount;\n                            }\n\n                            return max * ((100 - discount) / 100);\n                        })\n                        .catch(() => {\n                            return null;\n                        });\n                },\n            },\n        },\n    },\n};\n")),(0,t.mdx)("p",null,"This ",(0,t.mdx)("inlineCode",{parentName:"p"},"javascript")," file targets the ",(0,t.mdx)("inlineCode",{parentName:"p"},"special_price")," field on ",(0,t.mdx)("inlineCode",{parentName:"p"},"ConfigurableProduct")," that uses the ",(0,t.mdx)("inlineCode",{parentName:"p"},"maximum_price")," for a product and then applies the discount listed for that product in the ",(0,t.mdx)("a",{parentName:"p",href:"https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json"},(0,t.mdx)("inlineCode",{parentName:"a"},"discountsapi.json")," file"),". The following arguments define how the ",(0,t.mdx)("inlineCode",{parentName:"p"},"custom resolver")," interacts with your mesh:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"special_price")," - the name of the field we are adding a custom resolver to")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"selectionSet")," - the information from the parent field, ",(0,t.mdx)("inlineCode",{parentName:"p"},"ConfigurableProduct"),", that the ",(0,t.mdx)("inlineCode",{parentName:"p"},"special_price")," field needs to resolve")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"root"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"context"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"args"),", and ",(0,t.mdx)("inlineCode",{parentName:"p"},"info")," - are the parameters provided to the new resolver function"))),(0,t.mdx)("p",null,"Running the following query results in a response that lists the original ",(0,t.mdx)("inlineCode",{parentName:"p"},"maximum_price")," value and the ",(0,t.mdx)("inlineCode",{parentName:"p"},"special_price")," that was calculated using the ",(0,t.mdx)("inlineCode",{parentName:"p"},"DiscountsAPI"),' file. In this example, we are searching for "sweater", but you could modify it to search for any products.'),(0,t.mdx)("p",null,'In the following response, you can see that the "Roxana Cropped Sweater" and the "Hanna Sweater" we specified in our ',(0,t.mdx)("inlineCode",{parentName:"p"},"discounts-api.json")," file have a ",(0,t.mdx)("inlineCode",{parentName:"p"},"special_price")," that is 10% less than their ",(0,t.mdx)("inlineCode",{parentName:"p"},"value"),"."),(0,t.mdx)(l,{slots:"heading, code",repeat:"2",languages:"graphql, json",mdxType:"CodeBlock"}),(0,t.mdx)("h4",{id:"graphql-query"},"GraphQL Query"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  products(search: "sweater") {\n    items {\n      name\n      special_price\n      price_range {\n        maximum_price {\n          final_price {\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,t.mdx)("h4",{id:"response"},"Response"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "products": {\n            "items": [\n                {\n                    "name": "Juno Sweater",\n                    "special_price": 54.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 54.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Hanna Sweater",\n                    "special_price": 70.56,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 78.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Echo Sweater",\n                    "special_price": 62.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 62.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Corina Lace-Back Sweater",\n                    "special_price": 86.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 86.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Roxana Cropped Sweater",\n                    "special_price": 56.16,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 62.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Helena Cardigan",\n                    "special_price": 78.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 78.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Rosalina Cardigan",\n                    "special_price": 78.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 78.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Brigid Boucle Cardigan",\n                    "special_price": 94.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 94.4\n                            }\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    "extensions": {}\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mesh-advanced-extending-unified-schema-md-19cd008c858173f79f05.js.map