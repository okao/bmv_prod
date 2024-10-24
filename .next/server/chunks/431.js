exports.id=431,exports.ids=[431],exports.modules={8917:(e,t,a)=>{Promise.resolve().then(a.bind(a,9759)),Promise.resolve().then(a.bind(a,7767))},9759:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var i=a(5344);a(3729);var r=a(9410),s=a(8428),n=a(9558),l=a(3421),o=a(8497),d=a(4471);let c=({logotheme:e=null})=>{let{theme:t}=(0,n.F)(),a=(0,s.useRouter)(),c=()=>{setTimeout(()=>{a.push("/")},2e3)};return"dark"===e?i.jsx("div",{className:"flex w-full items-center justify-center gap-2",onClick:()=>c(),children:i.jsx(r.default,{src:d.Z,alt:l.J.name,width:130,height:40})}):"light"===e?i.jsx("div",{className:"flex w-full items-center justify-center gap-2",onClick:()=>c(),children:i.jsx(r.default,{src:o.Z,alt:l.J.name,width:130,height:40})}):"dark"===t?i.jsx("div",{className:"flex w-full items-center justify-end gap-2",onClick:()=>c(),children:i.jsx(r.default,{src:d.Z,alt:l.J.name,width:130,height:40})}):i.jsx("div",{className:"flex w-full items-center justify-end gap-2",onClick:()=>c(),children:i.jsx(r.default,{src:o.Z,alt:l.J.name,width:130,height:40})})}},7767:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Header:()=>V});var i=a(5344),r=a(3729),s=a.n(r),n=a(6506),l=a(8985),o=a.n(l),d=a(7442),c=a(4664),m=a(3346),u=a(8720);let h=r.forwardRef(({className:e,children:t,...a},r)=>(0,i.jsxs)(m.fC,{ref:r,className:(0,d.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...a,children:[t,i.jsx(b,{})]}));h.displayName=m.fC.displayName;let f=r.forwardRef(({className:e,...t},a)=>i.jsx(m.aV,{ref:a,className:(0,d.cn)("group flex flex-1 list-none items-center justify-center space-x-1",e),...t}));f.displayName=m.aV.displayName;let g=m.ck,p=(0,u.j)("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");r.forwardRef(({className:e,children:t,...a},r)=>(0,i.jsxs)(m.xz,{ref:r,className:(0,d.cn)(p(),"group",e),...a,children:[t," ",i.jsx(c.v4q,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})).displayName=m.xz.displayName,r.forwardRef(({className:e,...t},a)=>i.jsx(m.VY,{ref:a,className:(0,d.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",e),...t})).displayName=m.VY.displayName;let x=m.rU,b=r.forwardRef(({className:e,...t},a)=>i.jsx("div",{className:(0,d.cn)("absolute left-0 top-full flex justify-center"),children:i.jsx(m.l_,{className:(0,d.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:a,...t})}));function v({navItems:e}){return i.jsx(h,{className:"hidden transition-all duration-500 ease-in-out md:flex",children:i.jsx(f,{children:e?.map((e,t)=>i.jsx(g,{asChild:!0,children:i.jsx(n.default,{href:`/section?name=${e?.node?.name}`,legacyBehavior:!0,passHref:!0,children:i.jsx(x,{className:d.cn(p(),"rtl bg-transparent text-xl",o().className),children:e?.node?.name})})},t))})})}b.displayName=m.l_.displayName,r.forwardRef(({className:e,...t},a)=>i.jsx(m.z$,{ref:a,className:(0,d.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...t,children:i.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})).displayName=m.z$.displayName;var j=a(8428),w=a(3125),y=a.n(w),N=a(2751);let k=(0,u.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",navbarIcon:"m-0 p-1 transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground",user:"flex items-center justify-center"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"size-9 rounded-full text-sm"}},defaultVariants:{variant:"default",size:"default"}}),C=r.forwardRef(({className:e,variant:t,size:a,asChild:r=!1,...s},n)=>{let l=r?N.g7:"button";return i.jsx(l,{className:(0,d.cn)(k({variant:t,size:a,className:e})),ref:n,...s})});C.displayName="Button";var z=a(4919);let A=z.fC,S=z.xz;z.x8;let T=z.h_,I=r.forwardRef(({className:e,...t},a)=>i.jsx(z.aV,{className:(0,d.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",e),...t,ref:a}));I.displayName=z.aV.displayName;let M=(0,u.j)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b",bottom:"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t",left:"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",right:"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 sm:max-w-sm"}},defaultVariants:{side:"right"}}),P=r.forwardRef(({side:e="right",className:t,children:a,...r},s)=>(0,i.jsxs)(T,{children:[i.jsx(I,{}),(0,i.jsxs)(z.VY,{ref:s,className:(0,d.cn)(M({side:e}),t),...r,children:[a,(0,i.jsxs)(z.x8,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:[i.jsx(c.Pxu,{className:"size-4"}),i.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));P.displayName=z.VY.displayName,r.forwardRef(({className:e,...t},a)=>i.jsx(z.Dx,{ref:a,className:(0,d.cn)("text-foreground text-lg font-semibold",e),...t})).displayName=z.Dx.displayName,r.forwardRef(({className:e,...t},a)=>i.jsx(z.dk,{ref:a,className:(0,d.cn)("text-muted-foreground text-sm",e),...t})).displayName=z.dk.displayName;let D=({children:e,delay:t=0,duration:a=500,className:i="",from:n,to:l,style:o,as:c="div"})=>{let[m,u]=(0,r.useState)(n),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=e=>{f(e.matches)};return f(e.matches),e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}},[]),(0,r.useEffect)(()=>{if(h){u(l);return}let e=setTimeout(()=>{u(l)},t);return()=>clearTimeout(e)},[t,l,h]),s().createElement(c,{className:(0,d.cn)("transition-all ease-in-out",i,m),style:{transitionDuration:h?"0ms":`${a}ms`,...o}},e)};function B({children:e,href:t,disabled:a,segment:r,setIsOpen:s}){return i.jsx(n.default,{href:t,className:(0,d.cn)("rtl rounded-lg transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900 dark:text-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-100",t.includes(r),a&&"pointer-events-none opacity-60",o().className),onClick:()=>s(!1),children:i.jsx("span",{children:i.jsx(D,{as:"h2",from:"opacity-0 translate-y-32",to:"opacity-100 translate-y-0",delay:500,duration:300,className:"text-3xl hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-100",style:{transitionTimingFunction:"cubic-bezier(0.25, 0.4, 0.55, 1.4)"},children:e})})})}function L({navItems:e}){let t=(0,j.useSelectedLayoutSegment)(),[a,s]=r.useState(!1);return(0,i.jsxs)(A,{open:a,onOpenChange:s,children:[i.jsx(S,{asChild:!0,className:"transition-all duration-300 ease-in-out",children:(0,i.jsxs)(C,{variant:"navbarIcon",size:"icon",className:"md:hidden",children:[i.jsx(e=>i.jsx("svg",{...e,fill:"currentColor",version:"1.1",id:"lni_lni-menu",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 64 64",children:(0,i.jsxs)("g",{children:[i.jsx("path",{d:"M60,29.8H4c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3C62.3,30.8,61.2,29.8,60,29.8z"}),i.jsx("path",{d:"M60,46.8H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3S61.2,46.8,60,46.8z"}),i.jsx("path",{d:"M4,17.2h56c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H4c-1.2,0-2.3,1-2.3,2.3S2.8,17.2,4,17.2z"})]})}),{className:"size-5","aria-hidden":"true"}),i.jsx("span",{className:"sr-only",children:"Toggle Menu"})]})}),i.jsx(P,{side:"right",className:"flex w-[98%] flex-col gap-6 bg-gray-300/30 font-bold backdrop-blur-md backdrop-brightness-150 transition-all duration-500 ease-in-out dark:bg-slate-800/60 dark:backdrop-blur-sm dark:backdrop-brightness-150",children:i.jsx("div",{className:(0,d.cn)("rtl mt-[10%] flex flex-col-reverse gap-6 pr-8 text-center text-3xl  font-medium leading-6 tracking-wider dark:text-slate-100 dark:hover:bg-slate-900",y().className),children:e.map((e,a)=>i.jsx(B,{href:`/section?name=${e?.node?.name}`,segment:String(t),setIsOpen:s,children:e?.node?.name},a))})})]})}var Z=a(9558);function q(){let{setTheme:e,theme:t}=(0,Z.F)();return(0,i.jsxs)(C,{variant:"navbarIcon",size:"icon",onClick:()=>e("light"===t?"dark":"light"),children:[i.jsx(c.NWY,{className:"size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0","aria-hidden":"true"}),i.jsx(c.kLh,{className:"absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100","aria-hidden":"true"}),i.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}var H=a(9410),R=a(3421),W=a(8497),E=a(4471);let _=({logotheme:e=null})=>{let{theme:t}=(0,Z.F)(),a=(0,j.useRouter)();return"dark"===e?i.jsx("div",{className:"flex w-full items-center justify-center gap-2 md:justify-end",onClick:()=>a.push("/"),children:i.jsx(H.default,{src:E.Z,alt:R.J.name,width:130,height:40})}):"light"===e?i.jsx("div",{className:"flex w-full items-center justify-center gap-2 md:justify-end",onClick:()=>a.push("/"),children:i.jsx(H.default,{className:"cursor-pointer",src:W.Z,alt:R.J.name,width:130,height:40})}):"dark"===t?i.jsx("div",{className:"flex w-full items-center justify-center gap-2 md:justify-end",onClick:()=>a.push("/"),children:i.jsx(H.default,{src:E.Z,alt:R.J.name,width:130,height:40})}):i.jsx("div",{className:"flex w-full items-center justify-center gap-2 md:justify-end",onClick:()=>a.push("/"),children:i.jsx(H.default,{src:W.Z,alt:R.J.name,width:130,height:40})})};var J=a(5037);function V(){let[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)(!0),n=async()=>{t(await (0,J.r7)())};return(0,r.useEffect)(()=>{n()},[]),i.jsx("header",{className:"sticky top-0 z-40 flex h-20 w-full bg-gray-300/30 backdrop-blur-md dark:bg-slate-800/30",children:(0,i.jsxs)("div",{className:"flex w-full items-center justify-center md:container",children:[(0,i.jsxs)("div",{className:"flex w-full justify-between gap-x-4",children:[i.jsx(v,{navItems:e}),i.jsx("div",{className:"my-[40%] ml-2 block content-center items-center justify-center md:hidden",children:i.jsx(q,{})}),i.jsx("div",{className:"flex w-full",children:i.jsx(_,{logotheme:null})})]}),(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[i.jsx("div",{className:"hidden md:block",children:i.jsx(q,{})}),i.jsx(L,{navItems:e})]})]})})}},3421:(e,t,a)=>{"use strict";a.d(t,{J:()=>r});let i={github:"https://github.com/pjborowiecki/SAASY-LAND-Next-14-Starters-With-Authentication-And-Database-Implemented",twitter:"https://twitter.com/pjborowiecki",linkedin:"https://www.linkedin.com/in/pjborowiecki",discord:"",authorsWebsite:"https://pjborowiecki.com",authorsGitHub:"https://github.com/pjborowiecki",openGraphImage:"https://saasyland.com/images/opengraph-image.png"},r={name:"Breaking MV",description:"An open-source starter for Next.js 14 full-stack projects with advanced authentication and several database configurations. The aim of this project is to provide a solid foundation for faster building and launching SaaS products, marketing sites, blogs, and more.",links:i,url:"https://saasyland.com",ogImage:i.openGraphImage,author:"pjborowiecki",hostingRegion:"fra1",keywords:["SaaS","Next.js","Template"],navItems:[{title:"އެޑިޓޯރިއަލް",href:"/about"},{title:"ރާއްޖެ",href:"/features"},{title:"ދުނިޔެ",href:"/pricing"},{title:"ކުޅިވަރު",href:"/faq"},{title:"ރިޕޯޓް",href:"/docs"},{title:"ކޮލަމް",href:"/blog"},{title:"ވާހަކަ",href:"/blog"},{title:"އަންހެނުން",href:"/blog"}],navItemsMobile:[],navItemsFooter:[{title:"Company",items:[{title:"About",href:"/about",external:!1},{title:"Privacy",href:"/privacy",external:!1},{title:"Terms",href:"/tos",external:!1},{title:"Careers",href:"/careers",external:!1}]},{title:"Support",items:[{title:"Docs",href:"/docs",external:!1},{title:"FAQ",href:"/faq",external:!1},{title:"Blog",href:"/blog",external:!1},{title:"Contact",href:"/contact",external:!1}]},{title:"Inspiration",items:[{title:"Shadcn",href:"https://ui.shadcn.com/",external:!0},{title:"Taxonomy",href:"https://tx.shadcn.com/",external:!0},{title:"Skateshop",href:"https://skateshop.sadmn.com/",external:!0},{title:"Acme Corp",href:"https://acme-corp.jumr.dev/",external:!0}]}]}},5037:(e,t,a)=>{"use strict";a.d(t,{AC:()=>h,Dz:()=>x,HC:()=>m,_H:()=>v,getArticleById:()=>g,r7:()=>d});var i=a(2272),r=a(5250),s=a(2081),n=a(9218);let l=new i.f({uri:"https://api-ap-south-1.hygraph.com/v2/clume5vsq0h7s07wgpf4wdcai/master",cache:new r.h,headers:{"gcms-stage":"PUBLISHED","gcms-locales":"en",apiKey:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTIzNTcwNTQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsdW1lNXZzcTBoN3MwN3dncGY0d2RjYWkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI3NTFkOWYxYy0wODg0LTQ5MzYtODFjYi0xMDBhNDFlMWUzODkiLCJqdGkiOiJjbHVuOTZlencwa2F2MDdwaWU5M2Q1NzQwIn0.HUcCizTMtw0qRkrc7qU17hL6mTCuTZp1goZeD506xgUNrPXEAbYzpYUcD7bYROiEIQHz-Wb-7gTIfNDFmSGWKGDymgMivBSgjCXfVMjNoJn5LRGuzhF37p6vfdizkaeQaDkcpnQ7bPphO0Kh6Q4fakPb4niFA-Aaf0ZtVcdaZn9EaPFPOey-ZHCPsxHXv3CBJ2OsrPEGRvjdulRKCU7M64BTLwm4kU2MnCyitBICJK-CtcDP-moYDA7IGVmQ3qCJQOcchGQ7jbTP_0MV_-C1D2pAqs7IWmGCqBMje8AX_rVP4QxrjQ96vspWUCqggjEFRDagH6oUfemFc3vjI6rmRNMVRTXsZj8iLErwJRFLX1oulScg--6vw_OWYfPHzpSq1lbTkndMv5lh7ZoSZGie8BhZ7FsRaqsjE6bE6ZRVAetJBuNd0XW3hD4zzt5PVHZhlqQfeQzVn865nC_3h7J3tc7Z_7ZDgOy6ATsD1nvmrrDZW625xba35LrxdygAIUJqKcGqDziJ0RZRfobY8gVk0XpytxpaZ8SBxBrEbeYz3CXah8Pg5Tt4xnNaEsH0EtdVlgR1O3xJ19nHGTvqWEc6E8pr9fStQyYkSPTsi8uIXLTaL5E7WvIW5wcYAhcdnBLS32Utd-7ZwizliSfRRy0EwTFva-bB1Wkd9F9yaFpZNlE"}}),o=(s.Ps`
  query GetProducts {
    products {
      name
      description
      image
      availability
      slug
    }
  }
`,s.Ps`
  query SiteMenus {
    menuConnection(orderBy: number_DESC, stage: PUBLISHED) {
      edges {
        node {
          id
          name
          number
        }
      }
    }
  }
`);async function d(){let{data:e}=await l.query({query:o});return e.menuConnection.edges}let c=s.Ps`
  query MainArticles {
    articleConnection(
      stage: PUBLISHED, orderBy: createdAt_DESC, first: 3
      where: {
        AND: {
          OR: [
            { typeOfArticle: breaking },
            { typeOfArticle: main }
          ]
        }
        articleMenus_every: {number_gte: 1}
      }
    ) {
      edges {
        cursor
        node {
          id
          title
          latinTitle
          subTitle
          latinSubTitle
          typeOfArticle
          articleAuthor {
            image {
              mimeType
              url(transformation: {image: {resize: {width: 300}}})
            }
            name
          }
          mainImage {
            id
            handle
            fileName
            url(
              transformation: {document: {output: {format: jpg}}, image: {resize: {width: 500}}}
            )
          }
          articleMenus {
            id
            name
            number
          }
          publishedBy {
            name
            picture
          }
          publishedAt
          createdAt
        }
      }
    }
  }
`;async function m(){let{data:e}=await l.query({query:c});return e.articleConnection.edges}let u=s.Ps`
query HomeArticles {
  articleConnection(
    orderBy: createdAt_DESC
    first: 6
    stage: PUBLISHED
    where: {
      articleMenus_every: {number_gte: 1},
      AND: {
        articleMenus_some: {
          NOT: {name: "ދުނިޔެ"},
          AND: {
            NOT: {name: "ރިޕޯޓް"}
          }
        }
      }
    }
  ) {
    pageInfo {
      pageSize
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        subTitle
        latinTitle
        latinSubTitle
        articleAuthor {
          image {
            mimeType
            url(transformation: {image: {resize: {width: 300, height: 300}}, document: {output: {format: jpg}}})
          }
          name
        }
        articleMenus {
          id
          name
          number
        }
        mainImage {
          fileName
          handle
          mimeType
          url(
            transformation: {document: {output: {format: jpg}}, image: {resize: {width: 300, height: 300}}}
          )
        }
        publishedAt
        createdAt
      }
    }
  }
}
`;async function h(){let{data:e}=await l.query({query:u});return e.articleConnection}let f=s.Ps`
query Article($id: ID!) {
  article(where: {id: $id}) {
    id
    title
    latinTitle
    subTitle
    latinSubTitle
    articleAuthor {
      image {
        mimeType
        url(
          transformation: {image: {resize: {width: 300}}, document: {output: {format: jpg}}}
        )
      }
      name
    }
    mainImage {
      id
      mimeType
      url(
        transformation: {image: {resize: {width: 600, height: 315}}, document: {output: {format: jpg}}}
      )
    }
    typeOfArticle
    stage
    articleMenus {
      id
      name
      number
    }
    publishedAt
    publishedBy {
      name
      picture
    }
    articleTags {
      value
      id
    }
    articleContent {
      ... on ArticleBody {
        id
        content
      }
      ... on ArticleRichText {
        id
        content {
          html
          markdown
          raw
          text
        }
      }
      ... on ArticleImage {
        id
        image {
          handle
          fileName
          id
          mimeType
          url(transformation: { image: {resize: {width: 600, height: 315}}, document: {output: {format: jpg}}})
          # url
        }
      }
      ... on ArticleQuotes {
        id
        quote
      }
      ... on ArticleTwitterLink {
        id
        twitterLink
      }
      ... on ExternalLinks {
        id
        title
        image {
          fileName
          handle
          url(
            transformation: {image: {resize: {width: 300, height: 300}}, document: {output: {format: jpg}}}
          )
        }
        link
      }
    }
  }
}
`;async function g(e){(0,n.revalidatePath)(`/article/${e}`);let{data:t}=await l.query({fetchPolicy:"no-cache",query:f,variables:{id:e}});return t.article}let p=s.Ps`
query ArticleWithTypeCount($name: String!, $first: Int!) {
  articleConnection(
    orderBy: createdAt_DESC
    first: $first
    stage: PUBLISHED
    where: {
      articleMenus_some: {
        name: $name
      }
    }
  ) {
    pageInfo {
      pageSize
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        subTitle
        latinTitle
        latinSubTitle
        articleMenus {
          id
          name
          number
        }
        mainImage {
          fileName
          handle
          mimeType
          url(
            transformation: {document: {output: {format: jpg}}, image: {resize: {width: 300, height: 300}}}
          )
        }
        publishedAt
        createdAt
      }
    }
  }
}
`;async function x(e="ރިޕޯޓް",t=3){let{data:a}=await l.query({query:p,variables:{name:e,first:t}});return a?.articleConnection}let b=s.Ps`
query ArticleByTag($tag: String!, $first: Int!) {
  articleConnection(
    orderBy: createdAt_DESC
    first: $first
    stage: PUBLISHED
    where: {articleTags: {_search: $tag}}
  ) {
    pageInfo {
      pageSize
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        subTitle
        latinTitle
        latinSubTitle
        articleMenus {
          id
          name
          number
        }
        mainImage {
          fileName
          handle
          mimeType
          url(
            transformation: {document: {output: {format: jpg}}, image: {resize: {width: 300, height: 300}}}
          )
        }
        publishedAt
        createdAt
        articleAuthor {
          image {
            url(transformation: {image: {resize: {width: 300}}})
          }
          name
        }
      }
    }
  }
}
`;async function v(e,t=8){let{data:a}=await l.query({query:b,variables:{tag:e,first:t}});return a.articleConnection}},9490:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var i=a(5036),r=a(1240),s=a.n(r),n=a(7867),l=a(6843);let o=(0,l.createProxy)(String.raw`/Users/okao/bmv_prod/src/components/common/logo-image-footer.tsx`),{__esModule:d,$$typeof:c}=o,m=o.default;function u(){return i.jsx("footer",{id:"footer","aria-label":"footer",className:"mt-16 grid gap-8 bg-gray-950 bg-opacity-90 pb-8 dark:bg-slate-900",children:i.jsx("div",{className:"container mx-auto",children:i.jsx("div",{className:"rtl py-10 md:flex",children:i.jsx("div",{className:"flex-1",children:(0,i.jsxs)("div",{className:"rtl text-center",children:[i.jsx("a",{className:"ltr",href:"/",children:i.jsx("div",{className:"flex justify-center",children:i.jsx(m,{logotheme:"dark"})})}),i.jsx("p",{className:(0,n.cn)("mt-8 text-gray-100",s().className),children:"ސިކުނޑިތައް ބާރުވެރި ކުރުވައި، ނަޒާޙަތްތެރިކަމާއިއެކު މަޢުލޫމާތު ގެނެސްދޭ ތިބޭފުޅުންގެ ޚަޒާނާ “ ބްރޭކިންގ އެމްވީ “"}),(0,i.jsxs)("div",{className:"rtl mt-5 flex items-center justify-center space-x-4 space-x-reverse",children:[i.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556479060350",target:"_blank",rel:"noreferrer",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#d4d4d4",viewBox:"0 0 256 256",children:[i.jsx("rect",{width:"256",height:"256",fill:"none"}),i.jsx("path",{d:"M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"})]})}),i.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556479060350",target:"_blank",rel:"noreferrer",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#d4d4d4",viewBox:"0 0 256 256",children:[i.jsx("rect",{width:"256",height:"256",fill:"none"}),i.jsx("path",{d:"M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z"})]})}),i.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556479060350",target:"_blank",rel:"noreferrer",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#d4d4d4",viewBox:"0 0 256 256",children:[i.jsx("rect",{width:"256",height:"256",fill:"none"}),i.jsx("circle",{cx:"128",cy:"128",r:"32"}),i.jsx("path",{d:"M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"})]})})]})]})})})})})}let h=(0,l.createProxy)(String.raw`/Users/okao/bmv_prod/src/components/nav/header.tsx`),{__esModule:f,$$typeof:g}=h;h.default;let p=(0,l.createProxy)(String.raw`/Users/okao/bmv_prod/src/components/nav/header.tsx#Header`);function x({children:e}){return(0,i.jsxs)("div",{className:"flex min-h-screen flex-col overflow-visible bg-white dark:bg-slate-950",children:[i.jsx("div",{children:i.jsx("div",{className:"border-2 border-none md:border-none",children:i.jsx("div",{className:"container mx-auto",children:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsxs)("div",{className:"hidden w-1/4 space-x-3 pb-2 pt-12",children:[i.jsx("button",{className:"bg-gray-200 text-miblue-600",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"size-5",fill:"none",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),i.jsx("button",{className:"text-miblue-600",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"size-5",fill:"none",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),i.jsx("div",{className:"hidden w-1/4 space-x-3 pb-2 pt-12 text-right",children:i.jsx("a",{href:"",className:"bg-miblue-600 px-2 py-1 text-xs font-semibold text-white",children:"Login"})})]})})})}),i.jsx(p,{}),i.jsx("main",{className:"flex-1",children:e}),i.jsx(u,{})]})}},8497:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i={src:"/_next/static/media/logo.b4bbb8bf.svg",height:568,width:1007,blurWidth:0,blurHeight:0}},4471:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i={src:"/_next/static/media/logodark.e300c788.svg",height:568,width:1007,blurWidth:0,blurHeight:0}},3601:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var i=a(337);let r=e=>[{type:"image/png",sizes:"180x180",url:(0,i.fillMetadataSegment)(".",e.params,"apple-icon.png")+"?682fbea5bf09e43c"}]},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var i=a(337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};