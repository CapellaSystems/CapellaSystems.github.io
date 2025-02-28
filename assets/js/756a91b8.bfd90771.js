"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[7336],{5917:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Cambria FTC/API/Introduction","title":"Introduction","description":"This document describes the Cambria Live Broadcast/Stream Manager Application Programming Interface (API).","source":"@site/docs/Cambria FTC/03-API/Introduction.md","sourceDirName":"Cambria FTC/03-API","slug":"/Cambria FTC/API/Introduction","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/API/Introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/03-API/Introduction.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"Event Description","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/API/Event_Description"},"next":{"title":"Instance","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/API/event_attributes/Instance"}}');var r=s(4848),t=s(8453);const a={},l="Introduction",c={},d=[{value:"API Architecture",id:"api-architecture",level:2},{value:"Supported HTTP Methods",id:"supported-http-methods",level:2},{value:"Recommendations Before Using the API",id:"recommendations-before-using-the-api",level:2},{value:"Requirements/Prerequisites",id:"requirementsprerequisites",level:2},{value:"Notes on Method Usage",id:"notes-on-method-usage",level:2}];function o(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsxs)(n.p,{children:["This document describes the ",(0,r.jsx)(n.strong,{children:"Cambria Live Broadcast/Stream Manager Application Programming Interface (API)"}),".",(0,r.jsx)(n.br,{}),"\n","The API allows programmatic control over Cambria Live Broadcast/Stream Manager, which manages multiple Cambria Live/Stream instances."]}),"\n",(0,r.jsx)(n.p,{children:"The API enables functionality such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adding, managing, and deleting events"}),"\n",(0,r.jsx)(n.li,{children:"Controlling inputs and outputs"}),"\n",(0,r.jsx)(n.li,{children:"Retrieving status information and alerts"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"An event can be:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A one-time event with a defined start and stop time"}),"\n",(0,r.jsx)(n.li,{children:"A recurring weekly event"}),"\n",(0,r.jsx)(n.li,{children:"A non-stop 24/7 channel"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"api-architecture",children:"API Architecture"}),"\n",(0,r.jsxs)(n.p,{children:["The API is implemented using the ",(0,r.jsx)(n.strong,{children:"REST architecture"}),", with the following details:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Cambria Live Broadcast/Stream Manager software runs a web server exposing the REST API."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP"})," is used as the transport layer, and responses are returned in ",(0,r.jsx)(n.strong,{children:"XML format"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"The client application can run on the same machine or another machine on the same network."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-http-methods",children:"Supported HTTP Methods"}),"\n",(0,r.jsx)(n.p,{children:"The API uses standard HTTP methods:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"GET"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"POST"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"PUT"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"DELETE"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These methods can be used from any programming or scripting language capable of making HTTP calls."}),"\n",(0,r.jsx)(n.h2,{id:"recommendations-before-using-the-api",children:"Recommendations Before Using the API"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Familiarize with Cambria Live Broadcast/Stream Manager via its User Interface"}),(0,r.jsx)(n.br,{}),"\n","Understanding the concept of an event and Cambria Live capabilities makes API usage simpler."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Sample Application"}),(0,r.jsx)(n.br,{}),"\n","A sample application demonstrating API usage is available, with features like:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Displaying called URIs, server XML responses, and status codes"}),"\n",(0,r.jsx)(n.li,{children:"Requires Windows and .NET 4.7.2"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Using a Web Browser"}),(0,r.jsx)(n.br,{}),"\n","Web browsers can be used to call API functions utilizing the ",(0,r.jsx)(n.strong,{children:"HTTP GET"})," method."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirementsprerequisites",children:"Requirements/Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Software"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cambria Live Broadcast/Stream Manager and Cambria Live/Stream must be installed on the same network."}),"\n",(0,r.jsxs)(n.li,{children:["The API web server runs as a ",(0,r.jsx)(n.strong,{children:"Windows Service"})," and is available upon system startup."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Programming Skills"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Knowledge of a language capable of using standard HTTP methods, such as:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C/C++"}),"\n",(0,r.jsx)(n.li,{children:"C#"}),"\n",(0,r.jsx)(n.li,{children:"Java"}),"\n",(0,r.jsx)(n.li,{children:"Python"}),"\n",(0,r.jsx)(n.li,{children:"Perl"}),"\n",(0,r.jsx)(n.li,{children:"Ruby"}),"\n",(0,r.jsx)(n.li,{children:"PHP"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Supported Operating Systems"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Microsoft Windows/Windows Server"}),"\n",(0,r.jsx)(n.li,{children:"Apple MacOS/iOS/iPadOS"}),"\n",(0,r.jsx)(n.li,{children:"Linux"}),"\n",(0,r.jsx)(n.li,{children:"Google Android"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"notes-on-method-usage",children:"Notes on Method Usage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Success or failure of methods is communicated using standard ",(0,r.jsx)(n.strong,{children:"HTTP status codes"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Codes in the ",(0,r.jsx)(n.strong,{children:"200\u2013299"})," range indicate success."]}),"\n",(0,r.jsxs)(n.li,{children:["Codes in the ",(0,r.jsx)(n.strong,{children:"400\u2013599"})," range indicate errors."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Both ",(0,r.jsx)(n.strong,{children:"HTTP"})," and ",(0,r.jsx)(n.strong,{children:"HTTPS"})," protocols are supported:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Port numbers:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP: 8753 (Broadcast Manager), 8757 (Stream Manager)"}),"\n",(0,r.jsx)(n.li,{children:"HTTPS: 8754 (Broadcast Manager), 8758 (Stream Manager)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Recommendation:"})," Use HTTPS, as HTTP support will be deprecated in the future."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);