"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[6196],{481:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/02_add_triggered_action-eca72b97798d2b264db8f06b46a6c450.png"},578:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/04_delete-5917a6939190d72ae0e1442117640024.png"},4297:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/05_simple_action-dee25b1cf9b1d92dfe4c978152b9e21d.png"},4470:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/03_watchfolder_post_task-d72272976e3e57199c493062df24c77b.png"},5874:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/01_watchfolder_config-f3d035f0cb9665fa17f888aaf5263c09.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}},8920:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/06_parallel_actions-b726c729d82d32e7e724ff30ed51041a.png"},9090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Cambria FTC/Tutorials/delete_source/index","title":"Delete Source after Transcoding","description":"Table of Contents","source":"@site/docs/Cambria FTC/04-Tutorials/delete_source/index.md","sourceDirName":"Cambria FTC/04-Tutorials/delete_source","slug":"/Cambria FTC/Tutorials/delete_source/","permalink":"/docs/Cambria FTC/Tutorials/delete_source/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/04-Tutorials/delete_source/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"Speech-To-Text Filter","permalink":"/docs/cambria-ftc-stt"},"next":{"title":"Pay As You Go Licensing Guide","permalink":"/docs/payg-licensing"}}');var i=n(4848),o=n(8453);const r={},l="Delete Source after Transcoding",d={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Method 1: Cleanup Tab <em>(Preferred Method)</em>",id:"method-1-cleanup-tab-preferred-method",level:2},{value:"Steps to use the Cleanup function in Watch Folder:",id:"steps-to-use-the-cleanup-function-in-watch-folder",level:3},{value:"Limitations:",id:"limitations",level:4},{value:"Method 2: Post Task Command Line",id:"method-2-post-task-command-line",level:2},{value:"Steps to use the Post Task command line in Watch Folder:",id:"steps-to-use-the-post-task-command-line-in-watch-folder",level:3},{value:"Method 3: Simple Action",id:"method-3-simple-action",level:2},{value:"Steps to Use Simple Action in Watch Folder:",id:"steps-to-use-simple-action-in-watch-folder",level:3},{value:"Limitations",id:"limitations-1",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"delete-source-after-transcoding",children:"Delete Source after Transcoding"})}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"#method-1-cleanup-tab-preferred-method",children:["Method 1: Cleanup Tab ",(0,i.jsx)(t.em,{children:"(Preferred Method)"})]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#method-2-post-task-command-line",children:"Method 2: Post Task Command Line"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#method-3-simple-action",children:"Method 3: Simple Action"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h2,{id:"method-1-cleanup-tab-preferred-method",children:["Method 1: Cleanup Tab ",(0,i.jsx)(t.em,{children:"(Preferred Method)"})]}),"\n",(0,i.jsx)(t.p,{children:"This is the preferred method for deletion because it is the most used and allows users to retrieve their source file within a certain time frame before deletion. This function ensures that all files used within the watch folder will be deleted after a specified time. Users can set it to delete either all files used or only those successfully processed."}),"\n",(0,i.jsx)(t.h3,{id:"steps-to-use-the-cleanup-function-in-watch-folder",children:"Steps to use the Cleanup function in Watch Folder:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["From the Watch Folder Configuration, go to the ",(0,i.jsx)(t.strong,{children:'"Cleanup" tab'}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Adjust how often the Watch Folder will cycle through cleaning by changing the ",(0,i.jsx)(t.strong,{children:'"Clean up watch folder every:"'})," to the desired time."]}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:'"Add\u2026"'})," button twice to open the Trigger section. (From here you can configure what triggers the deletion of files within the Watch Folder.)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Cleanup Tab Screenshot",src:n(5874).A+"",width:"936",height:"858"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:'"Add Triggered Action"'})," window, navigate to the ",(0,i.jsx)(t.strong,{children:"Action dropdown menu"})," and select ",(0,i.jsx)(t.strong,{children:"Delete Source"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Triggered Action Screenshot",src:n(481).A+"",width:"622",height:"540"})}),"\n",(0,i.jsx)(t.p,{children:"Now, files in the Watch Folder will be cleaned within the Cleanup cycle if all requirements are met."}),"\n",(0,i.jsx)(t.h4,{id:"limitations",children:"Limitations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You need to adjust the cycle frequency and trigger timing."}),"\n",(0,i.jsx)(t.li,{children:"Unlike other methods, sources are not deleted immediately after a transcoding job. Think of it as a timer where marked items are discarded when the timer reaches 0, provided all conditions are met."}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"method-2-post-task-command-line",children:"Method 2: Post Task Command Line"}),"\n",(0,i.jsx)(t.p,{children:"Using the Post Task Command Line, users can enter a command to delete the source file immediately after successful transcoding."}),"\n",(0,i.jsx)(t.h3,{id:"steps-to-use-the-post-task-command-line-in-watch-folder",children:"Steps to use the Post Task command line in Watch Folder:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["From the Watch Folder Configuration, go to the ",(0,i.jsx)(t.strong,{children:"Encoding tab"})," and add/edit an encoding preset.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Watchfolder Post Task",src:n(4470).A+"",width:"624",height:"472"})]}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.strong,{children:'"Post Task" tab'})," and look for ",(0,i.jsx)(t.strong,{children:'"Command Line"'}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Enter the following command:","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cmd",children:'cmd /C del "%sourceFile0%"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Delete Source",src:n(578).A+"",width:"624",height:"472"})}),"\n",(0,i.jsx)(t.p,{children:"Now, the source file will be successfully deleted when the job finishes."}),"\n",(0,i.jsx)(t.p,{children:'Limitations:\nThe quotes around "%sourceFile0%" are required to handle filenames with spaces.\nThis method is less convenient since it requires entering a command into a text field.\nEntering the wrong command will result in the source not being deleted.'}),"\n",(0,i.jsx)(t.h2,{id:"method-3-simple-action",children:"Method 3: Simple Action"}),"\n",(0,i.jsx)(t.p,{children:"Using the Simple Action feature allows users to delete a source in a queue format. This method is useful if additional tasks, such as uploading the source to S3, need to be performed before deletion."}),"\n",(0,i.jsx)(t.h3,{id:"steps-to-use-simple-action-in-watch-folder",children:"Steps to Use Simple Action in Watch Folder:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["From the Watch Folder Configuration, go to the ",(0,i.jsx)(t.strong,{children:"Encoding tab"})," and click ",(0,i.jsx)(t.strong,{children:'"Add Simple Action\u2026"'}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Action dropdown menu"}),", select ",(0,i.jsx)(t.strong,{children:'"Delete source"'}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Simple Action",src:n(4297).A+"",width:"936",height:"858"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Encoding tab"}),", uncheck the ",(0,i.jsx)(t.strong,{children:'"Perform actions in parallel"'})," checkbox at the bottom left."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Parallel Actions",src:n(8920).A+"",width:"624",height:"576"})}),"\n",(0,i.jsx)(t.p,{children:"Now, the source file will be successfully deleted when the job finishes."}),"\n",(0,i.jsx)(t.h4,{id:"limitations-1",children:"Limitations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure that ",(0,i.jsx)(t.strong,{children:'"Perform actions in parallel"'})," is unchecked; otherwise, the source being transcoded will be deleted during the job."]}),"\n",(0,i.jsxs)(t.li,{children:["Make sure the Encoding job is queued before the ",(0,i.jsx)(t.strong,{children:"Delete source"})," action to ensure the transcoding job happens first."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);