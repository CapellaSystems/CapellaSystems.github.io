"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[5859],{3721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"Cambria FTC/API/methods/GetEventInfo","title":"GetEventInfo","description":"Broadcast Manager Endpoint:","source":"@site/docs/Cambria FTC/03-API/methods/GetEventInfo.md","sourceDirName":"Cambria FTC/03-API/methods","slug":"/Cambria FTC/API/methods/GetEventInfo","permalink":"/CapellaSystems/docs/Cambria FTC/API/methods/GetEventInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/03-API/methods/GetEventInfo.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"GetUnifiedLog","permalink":"/CapellaSystems/docs/Cambria FTC/API/methods/GetEventHistory"},"next":{"title":"GetEventInstancesList","permalink":"/CapellaSystems/docs/Cambria FTC/API/methods/GetEventInstancesList"}}');var r=n(4848),d=n(8453);const i={},c="GetEventInfo",o={},a=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"HTTP Method",id:"http-method",level:2},{value:"HTTP XML Response",id:"http-xml-response",level:2},{value:"HTTP Status Codes",id:"http-status-codes",level:2}];function l(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"geteventinfo",children:"GetEventInfo"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Broadcast Manager Endpoint:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"http://machineName:8753/CambriaBM/v1/Events/[EventID]"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Stream Manager Endpoint:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"http://machineName:8757/CambriaLM/v1/Events/[EventID]"})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Retrieve detailed information about a specific event, including its name, status, start and stop time, and associated attributes."}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IncludeDetails"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Optional."})," Whether to include detailed event information."]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"http-method",children:"HTTP Method"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"GET"})}),"\n",(0,r.jsx)(t.h2,{id:"http-xml-response",children:"HTTP XML Response"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Parent"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Content"})}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"Container of the response"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Status"})}),(0,r.jsx)(t.td,{children:"Content"}),(0,r.jsx)(t.td,{children:"Logs of the API call"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Event"})}),(0,r.jsx)(t.td,{children:"Content"}),(0,r.jsx)(t.td,{children:"Detailed information about the event"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"http-status-codes",children:"HTTP Status Codes"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:"Successfully processed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"400"}),(0,r.jsx)(t.td,{children:"Invalid parameters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Event not found"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5xx"}),(0,r.jsx)(t.td,{children:"Server error while retrieving event information"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const r={},d=s.createContext(r);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);