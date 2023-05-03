"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[1134],{782:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return h}});var o,r=n(87462),m=n(63366),i=(n(15007),n(64983)),t=n(91515),s=["components"],d={},l=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:d},c=t.Z;function h(e){var a=e.components,n=(0,m.Z)(e,s);return(0,i.mdx)(c,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"command-reference"},"Command Reference"),(0,i.mdx)("p",null,"The API Mesh for Adobe Developer App Builder CLI allows you to manage and modify meshes. This page covers commands exclusive to the API Mesh. For authorization and other Adobe I/O Extensible CLI commands, refer to the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli#commands"},"Adobe IO CLI command list"),". For installation instructions, refer to ",(0,i.mdx)("a",{parentName:"p",href:"getting-started.md"},"Getting Started"),"."),(0,i.mdx)("h2",{id:"aio-api-meshinit"},"aio api-mesh:init"),(0,i.mdx)("p",null,"Creates a ",(0,i.mdx)("a",{parentName:"p",href:"./developer-tools.md#initiate-a-local-environment"},"local development environment"),". You only need to run this command if you want to set up a local environment."),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:init <project-name>\n")),(0,i.mdx)("h3",{id:"flags"},"Flags"),(0,i.mdx)("p",null,"The following arguments are all optional. If you do not supply them, the terminal response will prompt you for the information."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-p")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--path")," allows you to specify the location to set up the local environment."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-g")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--git")," is a binary argument that requires ",(0,i.mdx)("inlineCode",{parentName:"p"},"Y")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"N")," to determine if you want to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"git")," for your local environment."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-m")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--packageManager")," is a binary argument that requires ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn")," to determine which package manager to use for the local environment."),(0,i.mdx)("h4",{id:"example"},"Example"),(0,i.mdx)("p",null,"The following example creates the environment in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"mesh_examples")," subfolder of the current folder with ",(0,i.mdx)("inlineCode",{parentName:"p"},"git")," enabled and the package manager set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"aio api-mesh:init myMesh --path ./mesh_examples --git Y --package-manager yarn\n")),(0,i.mdx)("h3",{id:"response"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Workspace setup done successfully.\n")),(0,i.mdx)("h2",{id:"aio-api-meshcreate"},"aio api-mesh:create"),(0,i.mdx)("p",null,"Creates a new mesh based on the settings in the specified ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSON")," file in your working directory. After creating your mesh, you will receive a ",(0,i.mdx)("inlineCode",{parentName:"p"},"meshId"),", like ",(0,i.mdx)("inlineCode",{parentName:"p"},"12a3b4c5-6d78-4012-3456-7e890fa1bcde"),", to refer to it in the future. For more information, see ",(0,i.mdx)("a",{parentName:"p",href:"create-mesh.md"},"Creating a mesh"),"."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You only need to run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"create")," command once. For subsequent changes to your mesh, use the ",(0,i.mdx)("a",{parentName:"p",href:"#aio-api-meshupdate"},(0,i.mdx)("inlineCode",{parentName:"a"},"update")," command"),"."),(0,i.mdx)("h3",{id:"usage-1"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:create [FILE]\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"FILE")," The JSON file that contains your mesh's handlers and transforms."),(0,i.mdx)("h3",{id:"flags-1"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-i")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--ignoreCache")," ignores the cached organization, project, and workspace, which allows you to create a mesh in a different workspace. You can also manually ",(0,i.mdx)("a",{parentName:"p",href:"work-with-mesh.md#projects-and-workspaces"},"modify the cache"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-c")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--autoConfirmAction")," automatically confirms the mesh creation instead of prompting the user to confirm."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-j")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--json")," outputs the ",(0,i.mdx)("inlineCode",{parentName:"p"},"json")," of the created mesh."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--env")," allows you to provide an environment variables file. Refer to ",(0,i.mdx)("a",{parentName:"p",href:"./developer-tools.md#environment-variables"},"developer tools")," for more information."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"example-1"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:create mesh.json\n")),(0,i.mdx)("h4",{id:"response-1"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Your mesh is being provisioned. Wait a few minutes before checking the status of your mesh: 12a3b4c5-6d78-4012-3456-7e890fa1bcde\nTo check the status of your mesh, run:\n\naio api-mesh:status\n")),(0,i.mdx)("h2",{id:"aio-api-meshupdate"},"aio api-mesh:update"),(0,i.mdx)("p",null,"Updates the mesh for the workspace you select based on the settings specified in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSON")," file. For more information, see ",(0,i.mdx)("a",{parentName:"p",href:"create-mesh.md#update-an-existing-mesh"},"Updating a mesh"),"."),(0,i.mdx)("h3",{id:"usage-2"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:update [FILE]\n")),(0,i.mdx)("h3",{id:"arguments-1"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"FILE")," The JSON file that contains your mesh's handlers and transforms."),(0,i.mdx)("h3",{id:"flags-2"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-i")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--ignoreCache")," ignores the cached organization, project, and workspace, which allows you to update a mesh in a different workspace. You can also manually ",(0,i.mdx)("a",{parentName:"p",href:"work-with-mesh.md#projects-and-workspaces"},"modify the cache"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-c")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--autoConfirmAction")," automatically confirms the mesh update instead of prompting the user to confirm."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--env")," allows you to provide an environment variables file. Refer to ",(0,i.mdx)("a",{parentName:"p",href:"./developer-tools.md#environment-variables"},"developer tools")," for more information."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"example-2"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:update mesh.json\n")),(0,i.mdx)("h4",{id:"response-2"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully updated the mesh with the id: 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,i.mdx)("h2",{id:"aio-api-meshstatus"},"aio api-mesh:status"),(0,i.mdx)("p",null,"Retrieves the current status of your create or update command."),(0,i.mdx)("h3",{id:"example-3"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:status\n")),(0,i.mdx)("h4",{id:"response-3"},"Response"),(0,i.mdx)("p",null,"Four possible responses reflect the status of your mesh:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Success - Your mesh was successfully created or updated."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Success: Your mesh has been successfully built.\n"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Pending - Your mesh is queued and awaiting processing."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Pending: Your mesh is awaiting processing.\n"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Building - Our servers are currently processing your mesh."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Pending: Your mesh is currently being provisioned. Wait a few minutes before checking again.\n"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Error - Your mesh encountered an error."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Unable to get the mesh status. If the error persists please contact support. RequestId: 1234567890\n")))),(0,i.mdx)("h2",{id:"aio-api-meshget"},"aio api-mesh:get"),(0,i.mdx)("p",null,"Retrieves the current ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSON")," mesh file for the workspace you select."),(0,i.mdx)("h3",{id:"usage-3"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:get [DOWNLOAD]\n")),(0,i.mdx)("h3",{id:"arguments-2"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DOWNLOAD")," (Optional) specify the local filename to create from the mesh."),(0,i.mdx)("h3",{id:"flags-3"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-i")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--ignoreCache")," ignores the cached organization, project, and workspace, which allows you to retrieve a mesh from a different workspace. You can also manually ",(0,i.mdx)("a",{parentName:"p",href:"work-with-mesh.md#projects-and-workspaces"},"modify the cache"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"example-4"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:get\n")),(0,i.mdx)("h4",{id:"response-4"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},'Successfully retrieved mesh {\n  "lastUpdated": "2022-06-01T12:12:12.0000",\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Commerce",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<your_commerce_site>/graphql/"\n          }\n        }\n      },\n      {\n        "name": "AEM",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<your_AEM_site>/endpoint.json"\n          }\n        }\n      },\n      {\n        "name": "LiveSearch",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<your_commerce_site>/search/graphql",\n            "operationHeaders": {\n              "Magento-Store-View-Code": "default",\n              "Magento-Website-Code": "base",\n              "Magento-Store-Code": "main_website_store",\n              "Magento-Environment-Id": "<your_environment_id>",\n              "x-api-key": "search_gql",\n              "Content-Type": "application/json"\n            },\n            "schemaHeaders": {\n              "Magento-Store-View-Code": "default",\n              "Magento-Website-Code": "base",\n              "Magento-Store-Code": "main_website_store",\n              "Magento-Environment-Id": "<your_environment_id>",\n              "x-api-key": "search_gql",\n              "Content-Type": "application/json"\n            }\n          }\n        }\n      }\n    ]\n  },\n  "meshId": "12a3b4c5-6d78-4012-3456-7e890fa1bcde",\n  "lastUpdatedBy": {\n    "firstName": "User",\n    "lastName": "Name",\n    "userEmail": "uname@domain.com",\n    "userId": "A4BF2F3C61FC531A0A494210@AdobeID",\n    "displayName": "User%20Name"\n  }\n}\n')),(0,i.mdx)("h2",{id:"aio-api-meshdelete"},"aio api-mesh:delete"),(0,i.mdx)("p",null,"Deletes the mesh from the selected workspace and unsubscribes the API key from the API Mesh service."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio api-mesh:delete")," command does not delete the API key in case other services use it."),(0,i.mdx)("h3",{id:"usage-4"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:delete\n")),(0,i.mdx)("h3",{id:"flags-4"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-i")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--ignoreCache")," ignores the cached organization, project, and workspace, which allows you to delete a mesh from a different workspace. You can also manually ",(0,i.mdx)("a",{parentName:"p",href:"work-with-mesh.md#projects-and-workspaces"},"modify the cache"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-c")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--autoConfirmAction")," automatically confirms the mesh deletion instead of prompting the user to confirm."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"example-5"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:delete\n")),(0,i.mdx)("h3",{id:"response-5"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully deleted 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,i.mdx)("h2",{id:"aio-api-meshdescribe"},"aio api-mesh:describe"),(0,i.mdx)("p",null,"Describes the mesh for the selected workspace."),(0,i.mdx)("h3",{id:"usage-5"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:describe\n")),(0,i.mdx)("h3",{id:"flags-5"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-i")," or",(0,i.mdx)("inlineCode",{parentName:"p"},"--ignoreCache")," ignores the cached organization, project, and workspace, which allows you to get the description of a different workspace. You can also manually ",(0,i.mdx)("a",{parentName:"p",href:"work-with-mesh.md#projects-and-workspaces"},"modify the cache"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command"),(0,i.mdx)("h3",{id:"response-6"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Selected organization: my-org\nSelected project: test-project\nSelect workspace: Stage\nSuccessfully retrieved mesh details \n\nOrg ID: 123456789\nProject ID: 1234567890123456789\nWorkspace ID: 2345678901234567890\nMesh ID: 12a3b4c5-6d78-4012-3456-7e890fa1bcde\nAPI Key: f0a3b4c56d78401234567e890fa1bcde\nMesh Endpoint: https://graph.adobe.io/api/12a3b4c5-6d78-4012-3456-7e890fa1bcde/graphql?api_key=12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,i.mdx)("h2",{id:"aio-api-meshsourcediscover"},"aio api-mesh:source:discover"),(0,i.mdx)("p",null,"Lists all available sources. Select a source to view its configuration file and copy its content to your clipboard. You can also view available sources directly in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/api-mesh-sources/tree/main/connectors"},"api-mesh-sources")," repo."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Sources are prebuilt mesh configuration files that are formatted for a specific combination of handlers. Each source contains a mesh configuration file designed for a specific first or third-party source. Third parties can submit their sources as a pull request to the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/api-mesh-sources"},"api-mesh-sources")," repo. See ",(0,i.mdx)("a",{parentName:"p",href:"./create-mesh.md#create-a-mesh-from-a-source"},"Create a mesh from a source")," for more information."),(0,i.mdx)("h3",{id:"usage-6"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:source:discover\n")),(0,i.mdx)("h3",{id:"flags-6"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"response-7"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},'[\n  {\n      "name": "Adobe Commerce Compare List",\n      "version": "0.0.2",\n      "description": "Source to get information about Compare list",\n      "author": "Adobe team",\n      "provider": {\n          "name": "Commerce",\n          "handler": {\n            "graphql": {\n              "endpoint": "https://venia.magento.com/graphql/"\n            }\n          },\n          "transforms": [\n            {\n              "rename": {\n                "mode": "bare | wrap",\n                "renames": [\n                  {\n                    "from": {\n                      "type": "Query",\n                      "field": "compareList"\n                    },\n                    "to": {\n                      "type": "Query",\n                      "field": "productCompareList"\n                    }\n                  }\n                ]\n              }\n            },\n            {\n              "filterSchema": {\n                "mode": "bare | wrap",\n                "filters": [\n                  "Query.!category",\n                  "Query.!customerOrders",\n                  "Query.!urlResolver",\n                  "Query.!wishlist"\n                ]\n              }\n            },\n          ]\n        }\n  }\n]\n')),(0,i.mdx)("h2",{id:"aio-api-meshsourceget"},"aio api-mesh:source:get"),(0,i.mdx)("p",null,"Prints the specified source's mesh file and allows you to copy it to the clipboard."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Sources are prebuilt mesh configuration files that are formatted for a specific combination of handlers. Each source contains a mesh configuration file designed for a specific first or third-party source. Third parties can submit their sources as a pull request to the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/api-mesh-sources"},"api-mesh-sources")," repo. See ",(0,i.mdx)("a",{parentName:"p",href:"./create-mesh.md#create-a-mesh-from-a-source"},"Create a mesh from a source")," for more information."),(0,i.mdx)("h3",{id:"usage-7"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:get -s "<source_name>"\n')),(0,i.mdx)("h3",{id:"flags-7"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-s")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--source")," (required) allows you to specify the name of the source you want to copy.\n",(0,i.mdx)("inlineCode",{parentName:"p"},"-m")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--multiple")," allows you to add multiple sources, which are returned in an array.\n",(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"example-6"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:get -s "AEM Assets API"\n')),(0,i.mdx)("p",null,"With multiple sources:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:get -m -s "AEM Assets API" -s "Adobe Target API"\n')),(0,i.mdx)("h3",{id:"response-8"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},'[\n  {\n      "name": "AEM Assets API",\n      "version": "0.0.2",\n      "description": "A source for the AEM Assets API",\n      "author": "Adobe team",\n      "provider": {\n          "name": "Commerce",\n          "handler": {\n            "graphql": {\n              "endpoint": "https://venia.magento.com/graphql/"\n            }\n          },\n          "transforms": [\n            {\n              "rename": {\n                "mode": "bare | wrap",\n                "renames": [\n                  {\n                    "from": {\n                      "type": "Query",\n                      "field": "compareList"\n                    },\n                    "to": {\n                      "type": "Query",\n                      "field": "productCompareList"\n                    }\n                  }\n                ]\n              }\n            },\n            {\n              "filterSchema": {\n                "mode": "bare | wrap",\n                "filters": [\n                  "Query.!category",\n                  "Query.!customerOrders",\n                  "Query.!urlResolver",\n                  "Query.!wishlist"\n                ]\n              }\n            },\n            {\n              "cache": [\n                {\n                  "field": "Query.storeConfig",\n                  "invalidate": {\n                    "ttl": 3600\n                  }\n                }\n              ]\n            }\n          ]\n        }\n  }\n]\n')),(0,i.mdx)("h2",{id:"aio-api-meshsourceinstall"},"aio api-mesh:source:install"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"install")," command adds the specified source to the currently selected workspace's mesh configuration."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Sources are prebuilt mesh configuration files that are formatted for a specific combination of handlers. Each source contains a mesh configuration file designed for a specific first or third-party source. Third parties can submit their sources as a pull request to the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/api-mesh-sources"},"api-mesh-sources")," repo. See ",(0,i.mdx)("a",{parentName:"p",href:"./create-mesh.md#create-a-mesh-from-a-source"},"Create a mesh from a source")," for more information."),(0,i.mdx)("h3",{id:"usage-8"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:install "<source_name>"\n')),(0,i.mdx)("p",null,"To install a specific version of a source, use the following command:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:install "<source_name>"@source_version_number\n')),(0,i.mdx)("p",null,"The two variable flags, ",(0,i.mdx)("inlineCode",{parentName:"p"},"-v")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"-f"),", described in the following section, allow you to automatically replace any of the variables defined in the source that you are installing with your values."),(0,i.mdx)("p",null,"When using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"-f")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--variable-file")," flag, you must specify the variables in a separate file. The following example defines the variable file formatting:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"ENDPOINT_URL": "https://venia.magento.com/graphql"\n}\n')),(0,i.mdx)("h3",{id:"flags-8"},"Flags"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-v")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--variable")," specifies the values of any variables defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"variables")," array of the mesh configuration file for the source. Use commas to separate multiple variables."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"-f")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--variable-file")," specifies a file location that contains variables to use in the mesh configuration file for the source. The file must be in ",(0,i.mdx)("inlineCode",{parentName:"p"},".json")," format."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," provides information on the specified command."),(0,i.mdx)("h3",{id:"example-7"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:install "AEM Assets API"\n')),(0,i.mdx)("p",null,"With a variable:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:install "AEM Assets API" -v ENDPOINT_URL:https://venia.magento.com/graphql\n')),(0,i.mdx)("p",null,"With a variable file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:install "AEM Assets API" -f documents/my_variables.json\n')),(0,i.mdx)("p",null,"Install a specific version:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'aio api-mesh:source:install "AEM Assets API"@0.0.1\n')),(0,i.mdx)("h3",{id:"response-9"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"Successfully updated the mesh with the id: MESH_ID\n")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-command-reference-md-c9277a3e930a16bec746.js.map