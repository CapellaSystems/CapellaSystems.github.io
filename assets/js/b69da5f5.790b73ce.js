"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[7469],{3279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Cambria FTC/API/API_Methods","title":"API Methods","description":"This chapter describes the different methods of the API, including their parameters and expected responses.","source":"@site/docs/Cambria FTC/03-API/API_Methods.md","sourceDirName":"Cambria FTC/03-API","slug":"/Cambria FTC/API/API_Methods","permalink":"/CapellaSystems/docs/Cambria FTC/API/API_Methods","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/03-API/API_Methods.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"(UC) Cambria 5.4","permalink":"/CapellaSystems/docs/Cambria FTC/Release Notes/release_notes/"},"next":{"title":"Event Attributes","permalink":"/CapellaSystems/docs/Cambria FTC/API/Event_Attributes"}}');var r=t(4848),i=t(8453);const a={},o="API Methods",d={},c=[{value:"General Example of API Usage",id:"general-example-of-api-usage",level:2},{value:"Example Endpoint",id:"example-endpoint",level:3},{value:"Notes on Identifiers",id:"notes-on-identifiers",level:3}];function h(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"api-methods",children:"API Methods"})}),"\n",(0,r.jsxs)(n.p,{children:["This chapter describes the different methods of the API, including their parameters and expected responses.",(0,r.jsx)(n.br,{}),"\n","Each method includes the following details:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Method Name"}),": The name used to refer to the API method in the documentation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": A brief overview of the method's purpose."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": Any additional notes or special considerations regarding the method."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),": A list of arguments that can be passed to the method."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP Method"}),": The HTTP verb used for the method (e.g., GET, POST, PUT, DELETE)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP POST XML Content"}),": Specifies the XML data sent to the server when using the POST HTTP method. The XML must be UTF-8 encoded."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP XML Response"}),": Describes the structure of the XML response returned by the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP Status Codes"}),": Lists the HTTP status codes that indicate success or failure for the method."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general-example-of-api-usage",children:"General Example of API Usage"}),"\n",(0,r.jsx)(n.p,{children:"The examples in this documentation assume:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cambria Live Broadcast/Stream Manager"})," is installed on a machine with the name ",(0,r.jsx)(n.code,{children:"MachineName"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The REST API server is configured to use port numbers:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"8753 (HTTP) and 8754 (HTTPS) for the Broadcast Manager"}),"\n",(0,r.jsx)(n.li,{children:"8757 (HTTP) and 8758 (HTTPS) for the Stream Manager"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-endpoint",children:"Example Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["For methods requiring an Event ID, replace ",(0,r.jsx)(n.code,{children:"[EventID]"})," with the actual event ID in the URL.",(0,r.jsx)(n.br,{}),"\n","Example:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"http://machineName:8753/CambriaBM/v1/Events/dce7d7f1-d10d-4c3d-95ed-58db5b8a7a05"})]}),"\n",(0,r.jsx)(n.h3,{id:"notes-on-identifiers",children:"Notes on Identifiers"}),"\n",(0,r.jsxs)(n.p,{children:["Similar mechanisms are used for other identifiers (e.g., MachineID, InstanceID). When referenced in this documentation, replace placeholder values like ",(0,r.jsx)(n.code,{children:"[EventID]"})," or ",(0,r.jsx)(n.code,{children:"[MachineID]"})," with actual identifiers."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);