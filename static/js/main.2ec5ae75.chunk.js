(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),r=Object(s.createContext)(),l=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),l=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="./",j="GVH.",h="Giorgio von Horoch",b="Software Engineer",u="Strong background in building user-centric web applications. Skilled in writing clean, efficient code to prioritize automation and improve user experience. Graduated Summa Cum Laude in Economics and self-motivated in learning new technologies. Bilingual in Spanish and English.",d="https://docs.google.com/document/d/1H1zYl-ooiG01zMJjk6F19_1KkTOdRn22tofAKKFsNd0/edit#heading=h.fy8vh08uaw4e",m={linkedin:"https://www.linkedin.com/in/jorge-von-horoch/",github:"https://github.com/giorgiovh"},O=[{name:"Song Tag",description:"Multiplayer game where players take turns covering songs that start with specific letters. Don't forget to submit your song on time, or the other players will choose one for you!",stack:["React","JavaScript","Material UI","Firebase"],sourceCode:"https://github.com/giorgiovh/js-song-tag",livePreview:"https://js-song-tag.web.app/"},{name:"UFC Wiki",description:"Wiki that to keeps users updated on upcoming UFC events and fighter statistics.",stack:["React","JavaScript","Material UI","Firebase","SportsDataIO API"],sourceCode:"https://github.com/giorgiovh/ufc-wiki",livePreview:"https://ufc-wiki-b409b.web.app/"},{name:"Activism Events",description:"Site that fetches events from Facebook and allows users to create and favorite events. Visbility of events is based on user account type and event privacy settings.",stack:["React","Javascript","Python","SQLAlchemy","FastAPI"],sourceCode:"https://github.com/ActiveVegans/react-active-vegans-website",livePreview:"https://activevegans.org/"}],g=["React","JavaScript","HTML","CSS","Material UI","Express","Node.js","MongoDB","Bootstrap","Axios","Git","PostgreSQL","MySQL","TypeScript","Python","Django"],p="jorgevonhoroch@gmail.com",f=n(16),x=n.n(f),v=n(14),k=n.n(v),_=n(18),N=n.n(_),w=n(17),S=n.n(w),y=(n(28),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),o=Object(i.a)(l,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,g.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,p?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(k.a,{}):Object(a.jsx)(x.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(N.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(y,{})]})}),P=n(11),E=n.n(P),F=n(19),I=n.n(F),M=n.p+"static/media/profile_picture.27c1cef0.jpg",A=(n(33),function(){var e=h,t=b,n=u,c=d,i=m;return Object(a.jsxs)("div",{className:"about center",children:[Object(a.jsx)("img",{className:"about__image",src:M,alt:"Your Name"}),e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(I.a,{})})]})]})]})}),L=n(7),J=n.n(L),R=n(20),T=n.n(R),G=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(T.a,{})})]})}),H=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(G,{project:e},J()())}))})]}):null}),U=(n(37),function(){return g.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),z=n(21),B=n.n(z),D=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(B.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return p?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(p),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link"})})}),V=(n(41),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(C,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(A,{}),Object(a.jsx)(H,{}),Object(a.jsx)(U,{}),Object(a.jsx)(K,{})]}),Object(a.jsx)(D,{}),Object(a.jsx)(Q,{})]})});n(42);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2ec5ae75.chunk.js.map