"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[1893],{83407:function(e,n,t){var l=t(54506),r=t(64467),i=t(88763),o=t(71532),a=t(15680),s=t(40595),d=t(91101),u=t(89745),p=t(78237),c=t(2760),m=t(8145),v=t(4904),h=t(53644),f=t(12607),g=t(5160),b=t(33e3),y=t(53190),w=t(98174),x=t(41253),Y=t(41980),P=t(75827);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const j=e=>{let{childrenArray:n,query:t,hasSideNav:l}=e;const r=[];let o=null,a=null;for(;n.length;){const e=n[0];let s=0;Object.keys(P.G).forEach((d=>{var p;if((null==e||null===(p=e.props)||void 0===p?void 0:p.mdxType)===d){s++;let d=[];if(e.props.slots||e.props.repeat){const t=Math.max(parseInt(e.props.repeat)||1,1);for(let l=0;l<t;l++)d=d.concat((e.props.slots||"element").split(",").map(((e,r)=>[`${e.trim()}${1===t?"":l}`,n[d.length+r+1]])))}if(d.length){s+=d.length;const n=Object.fromEntries(d);"Variant"===e.props.mdxType&&(n.query=t),"Hero"===e.props.mdxType&&l&&(n.width=`calc(${u.fy} - ${u.CS});`);const p=(0,i.cloneElement)(e,C({},n));"Hero"===e.props.mdxType?o=o||p:"Resources"===e.props.mdxType?a=a||p:r.push(p)}else r.push(e)}})),0===s&&(s++,r.push(e)),n=n.splice(s)}return{filteredChildren:r,heroChild:o,resourcesChild:a}};var A={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},S={name:"4zleql",styles:"display:block"},z={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"zjik7",styles:"display:flex"},N={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};n.A=e=>{var n;let{children:t,pageContext:r,query:O}=e;const{hasSideNav:D,siteMetadata:I,location:q,allSitePage:B,allMdx:F,allGithub:H,allGithubContributors:_}=(0,i.useContext)(d.Ay),M=void 0===r;let $=i.Children.toArray(t);if(M||"none"===(null==r||null===(n=r.frontmatter)||void 0===n?void 0:n.layout)){const{filteredChildren:e}=j({childrenArray:(0,x.I)($),query:O,hasSideNav:D});return M?(0,s.Y)(a.MDXProvider,null,e):(0,s.Y)(a.MDXProvider,{components:C(C({},Y.U),P.G)},e,(0,s.Y)(p.w,{hasSideNav:D}))}{var E,G,T,V,X,L,Q,R,U,J,K,W,Z,ee,ne,te,le,re,ie,oe;const e=(0,u.Mt)(null==q?void 0:q.pathname,null==I?void 0:I.subPages),n=(0,u.rq)(null==q?void 0:q.pathname,null==I?void 0:I.subPages),{nextPage:t,previousPage:i}=(0,u.o1)(null==q?void 0:q.pathname,null==I?void 0:I.subPages),d=null==r||null===(E=r.frontmatter)||void 0===E?void 0:E.contributor_name,O=null==r||null===(G=r.frontmatter)||void 0===G?void 0:G.contributor_link,M=null==r||null===(T=r.frontmatter)||void 0===T?void 0:T.edition,ae=null==B?void 0:B.nodes.find((e=>{let{path:n}=e;return(0,o.Fe)(n)===(null==q?void 0:q.pathname)})),se=null!==(V=null==ae?void 0:ae.component)&&void 0!==V?V:"",de=null==F?void 0:F.nodes.find((e=>{let{fileAbsolutePath:n}=e;return n===se})),ue=null!==(X=null==de?void 0:de.tableOfContents)&&void 0!==X?X:{},{repository:pe,default_branch:ce,root:me}=null==H?void 0:H.nodes[0],ve=null==_?void 0:_.nodes.find((e=>{let{path:n}=e;return n===se})),he=null!==(L=null==ve?void 0:ve.contributors)&&void 0!==L?L:[],fe=se.replace(/.*\/src\/pages\//g,""),ge=void 0!==(null==r||null===(Q=r.frontmatter)||void 0===Q?void 0:Q.hideBreadcrumbNav)&&r.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof ge)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");const{home:be}=I,ye=(0,u.mc)(q.pathname),we=(0,u._Y)(null==I?void 0:I.pages),xe=(0,u.bB)(ye,we),Ye=(0,u.SH)(ye,xe),Pe=(0,u.Nk)(null==q?void 0:q.pathname,null==I?void 0:I.subPages);let Oe=[];if(Pe.length){const e=Pe[Pe.length-1].level+1;for(let n=0;n<e;n++){const e=Pe.filter((e=>e.level===n));e.length&&Oe.push(e.pop())}}let Ce=!1;null!=r&&null!==(R=r.frontmatter)&&void 0!==R&&R.jsDoc&&(Ce=!0,$=(0,x.I)($));const{filteredChildren:je,heroChild:Ae,resourcesChild:Se}=j({childrenArray:$,hasSideNav:D}),ze=null===Ae,ke=null!==Ae&&(!Ae.props.variant||"default"===Ae.props.variant),Ne=null!==Ae&&Ae.props.variant&&"default"!==Ae.props.variant,De=null==ue||null===(U=ue.items)||void 0===U||null===(J=U[0])||void 0===J?void 0:J.items,Ie=!Ae&&(D||Ce)&&De&&(De.length>1||1===De.length&&(null===(K=De[0])||void 0===K||null===(W=K.items)||void 0===W?void 0:W.length)>1||(null===(Z=De[0])||void 0===Z?void 0:Z.title)),qe=Boolean(Se),Be=(null==e?void 0:e.pathname)===(null==n||null===(ee=n[0])||void 0===ee?void 0:ee.pathname),Fe=12,He=[];return Ie&&He.push(`${(0,u.I6)(2)} - var(--spectrum-global-dimension-size-400)`),qe&&He.push(`${(0,u.I6)(3)} - var(--spectrum-global-dimension-size-400)`),D&&He.push(u.CS),(0,s.Y)(a.MDXProvider,{components:C(C({},Y.U),P.G)},(0,s.Y)("main",{css:N},Ae&&Ae,(0,s.Y)("div",{css:(0,s.AH)(Ne?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":`\n                max-width: ${u.fy};\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                `," ",ke&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.fy,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.Y)("div",{css:k},(0,s.Y)("div",{css:(0,s.AH)("width:",Ne?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.I6)(Fe,He),";@media screen and (max-width: ",u.fy,"){width:100%;}")},ze&&(0,s.Y)("div",{css:(0,s.AH)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.fy,"){flex-direction:column;}")},!ge&&xe&&(0,s.Y)("div",{css:z},!0!==(null==be?void 0:be.hidden)&&null!=be&&be.title&&null!=be&&be.href?(0,s.Y)(h.B,{pages:[u.uQ,be,C(C({},xe),{},{href:(0,o.Fe)(xe.href)}),Ye&&C(C({},Ye),{},{href:(0,o.Fe)(Ye.href)})].concat((0,l.A)(Oe.map((e=>C(C({},e),{},{href:(0,o.Fe)((0,u.V8)(e.href))})))))}):(0,s.Y)(h.B,{pages:[u.uQ,(null==I||null===(ne=I.pages)||void 0===ne?void 0:ne.length)>1?C(C({},null==I||null===(te=I.pages)||void 0===te?void 0:te[0]),{},{href:(0,o.Fe)(null==I||null===(le=I.pages)||void 0===le||null===(re=le[0])||void 0===re?void 0:re.href)}):null,C(C({},xe),{},{href:(0,o.Fe)(xe.href)}),Ye&&C(C({},Ye),{},{href:(0,o.Fe)(Ye.href)})].concat((0,l.A)(Oe.map((e=>e.title===(null==xe?void 0:xe.title)&&e.href===(null==xe?void 0:xe.href)?null:C(C({},e),{},{href:(0,o.Fe)((0,u.V8)(e.href))})))))})),(0,s.Y)("div",{css:(0,s.AH)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.fy,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},I&&I.githubIssue&&I.githubIssue.removeLogIssue?null:(0,s.Y)(v.p,{repository:pe,branch:ce,root:me,pagePath:fe}))),(0,s.Y)("div",{css:S},M&&(0,s.Y)(g.r,{name:M}),O&&(0,s.Y)(f.m,{name:d,link:O})),je,ze&&Be&&(0,s.Y)(y.T,{pages:n}),ze&&(0,s.Y)(w.P,{nextPage:t,previousPage:i}),!Ne&&(0,s.Y)("div",{css:A},(0,s.Y)("div",null,(0,s.Y)(c.R,{repository:pe,branch:ce,root:me,pagePath:fe,contributors:he,externalContributors:null==r||null===(ie=r.frontmatter)||void 0===ie?void 0:ie.contributors,date:null!==(oe=he[0])&&void 0!==oe&&oe.date?new Date(he[0].date).toLocaleDateString():""})),(0,s.Y)("div",{css:(0,s.AH)("@media screen and (max-width: ",u.fy,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.Y)(m.G,null)))),Ie&&(0,s.Y)(b.b,{tableOfContents:ue}),qe&&Se)),(0,s.Y)(p.w,{hasSideNav:D})))}}}}]);
//# sourceMappingURL=2dee68d8-6f1bdacb0272a6f6a627.js.map