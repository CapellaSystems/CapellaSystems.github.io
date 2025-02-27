"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[2312],{3257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"Cambria FTC/API/Event_Attributes","title":"Event Attributes","description":"XML Element: Event","source":"@site/docs/Cambria FTC/03-API/Event_Attributes.md","sourceDirName":"Cambria FTC/03-API","slug":"/Cambria FTC/API/Event_Attributes","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/API/Event_Attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/03-API/Event_Attributes.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"API Methods","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/API/API_Methods"},"next":{"title":"Event Description","permalink":"/CapellaDocumentsTest/docs/Cambria FTC/API/Event_Description"}}');var i=r(4848),s=r(8453);const d={},c="Event Attributes",l={},o=[{value:"XML Element: Event",id:"xml-element-event",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"event-attributes",children:"Event Attributes"})}),"\n",(0,i.jsx)(t.h2,{id:"xml-element-event",children:"XML Element: Event"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AllowDelayedProjectLoading [M] [C]"}),(0,i.jsxs)(t.td,{children:["Allows creating or editing an event without a project. Default: ",(0,i.jsx)(t.code,{children:"0"}),". Set to ",(0,i.jsx)(t.code,{children:"1"})," for true."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AssignToSpecificMachineIdentifierBackup [M]"}),(0,i.jsx)(t.td,{children:"Assigns the backup stream to a specific machine. Empty for automatic assignment."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AssignToSpecificMachineIdentifierPrimary [M]"}),(0,i.jsx)(t.td,{children:"Assigns the primary stream to a specific machine. Empty for automatic assignment."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BackupIdentifier"}),(0,i.jsx)(t.td,{children:"Shows the identifier of the backup event if configured."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EventWeekdays [M] [C]"}),(0,i.jsxs)(t.td,{children:["Specifies weekdays for recurring events using bit values. Example: ",(0,i.jsx)(t.code,{children:"97"})," represents Sunday, Friday, and Saturday."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frequency [M]"}),(0,i.jsxs)(t.td,{children:["Specifies the event frequency. Values: ",(0,i.jsx)(t.code,{children:"OneTime"}),", ",(0,i.jsx)(t.code,{children:"Daily"}),", ",(0,i.jsx)(t.code,{children:"Weekly"}),". Default: ",(0,i.jsx)(t.code,{children:"OneTime"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HasPreroll"}),(0,i.jsxs)(t.td,{children:["Indicates if the project contains a preroll. ",(0,i.jsx)(t.code,{children:"1"})," for true, ",(0,i.jsx)(t.code,{children:"0"})," otherwise."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Identifier"}),(0,i.jsx)(t.td,{children:"The unique identifier of the event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsEnabled [M]"}),(0,i.jsxs)(t.td,{children:["Indicates if the event is enabled. ",(0,i.jsx)(t.code,{children:"1"})," for true, ",(0,i.jsx)(t.code,{children:"0"})," otherwise."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LaunchMode [M]"}),(0,i.jsxs)(t.td,{children:["Specifies the launch mode. Values: ",(0,i.jsx)(t.code,{children:"Normal"}),", ",(0,i.jsx)(t.code,{children:"NoUI"}),", ",(0,i.jsx)(t.code,{children:"Core"}),". Default: ",(0,i.jsx)(t.code,{children:"Normal"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Name [M] [C]"}),(0,i.jsx)(t.td,{children:"The name of the event. Required upon creation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PrerollDurationSecs [M]"}),(0,i.jsxs)(t.td,{children:["The preroll duration in seconds. Default: ",(0,i.jsx)(t.code,{children:"120"}),". Applicable for projects with preroll."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ProjectFileName [M]"}),(0,i.jsx)(t.td,{children:"The name of the project file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"StartStreamingDate [M] [C]"}),(0,i.jsxs)(t.td,{children:["The start date for streaming in ",(0,i.jsx)(t.code,{children:"YYYY/MM/DD"})," format."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"StartStreamingTime [M] [C]"}),(0,i.jsxs)(t.td,{children:["The start time for streaming in ",(0,i.jsx)(t.code,{children:"HH:MM:SS"})," format."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"StopStreamingDate [M] [C]"}),(0,i.jsxs)(t.td,{children:["The stop date for streaming in ",(0,i.jsx)(t.code,{children:"YYYY/MM/DD"})," format."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"StopStreamingTime [M] [C]"}),(0,i.jsxs)(t.td,{children:["The stop time for streaming in ",(0,i.jsx)(t.code,{children:"HH:MM:SS"})," format."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"StreamingDuration"}),(0,i.jsxs)(t.td,{children:["Streaming duration in ",(0,i.jsx)(t.code,{children:"HH:MM:SS"})," format."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TargetType"}),(0,i.jsxs)(t.td,{children:["Specifies the event type: ",(0,i.jsx)(t.code,{children:"General"}),", ",(0,i.jsx)(t.code,{children:"YouTubeLive"}),". Default: ",(0,i.jsx)(t.code,{children:"General"}),". Only set during event creation."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UnlimitedDuration [M]"}),(0,i.jsxs)(t.td,{children:["Indicates if the event has unlimited duration. Default: ",(0,i.jsx)(t.code,{children:"0"}),". Set to ",(0,i.jsx)(t.code,{children:"1"})," for true."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseBackupMachine [M]"}),(0,i.jsxs)(t.td,{children:["Specifies if the event uses a backup machine. Default: ",(0,i.jsx)(t.code,{children:"0"}),". Set to ",(0,i.jsx)(t.code,{children:"1"})," for true."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"YouTubeCategory [Y][YM1]"}),(0,i.jsxs)(t.td,{children:["Specifies the YouTube category. Acceptable values include ",(0,i.jsx)(t.code,{children:"Music"}),", ",(0,i.jsx)(t.code,{children:"Gaming"}),", ",(0,i.jsx)(t.code,{children:"Sports"}),", etc."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"YouTubeChannelID [Y]"}),(0,i.jsx)(t.td,{children:"The YouTube Channel ID associated with the event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"YouTubeEventID [Y]"}),(0,i.jsx)(t.td,{children:"The YouTube Event ID."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"YouTubeIsEnableEmbed [Y][YM1][YM2]"}),(0,i.jsxs)(t.td,{children:["Specifies if embedding is enabled. ",(0,i.jsx)(t.code,{children:"1"})," for true, ",(0,i.jsx)(t.code,{children:"0"})," otherwise."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"YouTubePrivacy [Y][YM1][YM2]"}),(0,i.jsxs)(t.td,{children:["Specifies YouTube privacy settings: ",(0,i.jsx)(t.code,{children:"public"}),", ",(0,i.jsx)(t.code,{children:"private"}),", ",(0,i.jsx)(t.code,{children:"unlisted"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"YouTubeStreamFormat [Y][YM1][YM2]"}),(0,i.jsxs)(t.td,{children:["Specifies the YouTube stream format. Acceptable values are ",(0,i.jsx)(t.code,{children:"720p"}),", ",(0,i.jsx)(t.code,{children:"1080p"}),", etc."]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," Refer to Chapter 4 of the documentation for detailed attribute descriptions and additional configurations."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var n=r(6540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);