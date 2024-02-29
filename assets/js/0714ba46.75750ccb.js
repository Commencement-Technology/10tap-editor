"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[990],{6688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7624),d=n(2172);const r={sidebar_position:1},s="useEditorBridge",o={id:"api/useEditorBridge",title:"useEditorBridge",description:"a react hook that will return EditorBridge",source:"@site/docs/api/useEditorBridge.md",sourceDirName:"api",slug:"/api/useEditorBridge",permalink:"/10tap-editor/docs/api/useEditorBridge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Setup",permalink:"/10tap-editor/docs/setup/advancedSetup"},next:{title:"EditorBridge",permalink:"/10tap-editor/docs/api/EditorBridge"}},l={},c=[{value:"bridgeExtensions",id:"bridgeextensions",level:4},{value:"initialContent",id:"initialcontent",level:4},{value:"autofocus",id:"autofocus",level:4},{value:"avoidIosKeyboard <code>IOS ONLY</code>",id:"avoidioskeyboard-ios-only",level:4},{value:"theme",id:"theme",level:4},{value:"customSource",id:"customsource",level:4},{value:"onChange",id:"onchange",level:4},{value:"DEV",id:"dev",level:4},{value:"DEV_SERVER_URL",id:"dev_server_url",level:4}];function a(e){const t={a:"a",br:"br",code:"code",h1:"h1",h4:"h4",p:"p",...(0,d.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"useeditorbridge",children:"useEditorBridge"}),"\n",(0,i.jsxs)(t.p,{children:["a react hook that will return ",(0,i.jsx)(t.a,{href:"./EditorBridge",children:"EditorBridge"})]}),"\n",(0,i.jsx)(t.h4,{id:"bridgeextensions",children:"bridgeExtensions"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"BridgeExtension[]"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"undefined"}),(0,i.jsx)("br",{}),"\nA list of BridgeExtensions that will be added to the editor on the native side"]}),"\n",(0,i.jsx)(t.h4,{id:"initialcontent",children:"initialContent"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"undefined"}),(0,i.jsx)("br",{}),"\ninitial content that will be loaded first on the editor"]}),"\n",(0,i.jsx)(t.h4,{id:"autofocus",children:"autofocus"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"false"}),(0,i.jsx)("br",{}),"\nwhen true the editor will auto focus"]}),"\n",(0,i.jsxs)(t.h4,{id:"avoidioskeyboard-ios-only",children:["avoidIosKeyboard ",(0,i.jsx)(t.code,{children:"IOS ONLY"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"false"}),(0,i.jsx)("br",{}),"\nThis helps us keep the cursor right above the keyboard when the editor is full-screen and the virtual keyboard hides the bottom portion of the editor."]}),"\n",(0,i.jsx)(t.h4,{id:"theme",children:"theme"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"EditorTheme"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"defaultEditorTheme"})," ",(0,i.jsx)("i",{children:"(light theme)"}),(0,i.jsx)("br",{}),"\nthis prop can be used to customize default styles, see ",(0,i.jsx)(t.a,{href:"/10tap-editor/docs/examples/customTheme",children:"theme example"})]}),"\n",(0,i.jsx)(t.h4,{id:"customsource",children:"customSource"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"SimpleEditorBundleString"}),(0,i.jsx)("br",{}),"\nused in advance setup, an HTML string that will replace the default simple editor"]}),"\n",(0,i.jsx)(t.h4,{id:"onchange",children:"onChange"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"() => void"}),"\nyou can assign a callback that will be called each time the editors content has changed. Inside this function you can call\n",(0,i.jsx)(t.code,{children:"editor.getHTML"}),", ",(0,i.jsx)(t.code,{children:"editor.getJSON"})," or ",(0,i.jsx)(t.code,{children:"editor.getText"})," to get the content. The content is not directly provided as to not\ncreate allot of traffic between the webview and native. It is recommended to request the content in some debounced function\nand not each change."]}),"\n",(0,i.jsx)(t.h4,{id:"dev",children:"DEV"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"boolean"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"false"}),(0,i.jsx)("br",{}),"\nprop used in advance setup, when true the webview will load DEV_SERVER_URL instead of the html string"]}),"\n",(0,i.jsx)(t.h4,{id:"dev_server_url",children:"DEV_SERVER_URL"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"string"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)("u",{children:"default"}),": ",(0,i.jsx)(t.code,{children:"http://localhost:3000"}),(0,i.jsx)("br",{}),"\nprop used in advanced setup, a url string that points to the editor dev server"]})]})}function h(e={}){const{wrapper:t}={...(0,d.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var i=n(1504);const d={},r=i.createContext(d);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);