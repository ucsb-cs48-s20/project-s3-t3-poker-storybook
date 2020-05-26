(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(72);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63),react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(230),style=(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement,{width:"100%",height:"10vh",padding:"16px"}),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{disabled:!0},"Join Game!"),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.a.Toggle,{"aria-controls":"basic-navbar-nav"});function NavBar(props){var button;return button=props.joinable?props.active?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:props.removePlayer},"Leave Game!"):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:props.joinPlayer},"Join Game!"):_ref,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"dark",bg:"dark",expand:"md",style:style},_ref2,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.a.Collapse,{id:"basic-navbar-nav"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.a,{className:"mr-auto"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{style:{color:"pink",fontSize:"26px"}},"Welcome to Poker ",props.name.substring(0,8),"!")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",placeholder:"Enter name!",value:props.name.substring(0,8),onChange:props.updateName}),button))}NavBar.displayName="NavBar",NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar"},__webpack_exports__.a=NavBar,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\NavBar.jsx"]={name:"NavBar",docgenInfo:NavBar.__docgenInfo,path:"components\\NavBar.jsx"})},356:function(module,exports,__webpack_require__){__webpack_require__(357),__webpack_require__(502),__webpack_require__(503),module.exports=__webpack_require__(699)},421:function(module,exports){},503:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(125),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(352),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30);__webpack_require__(695);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs)},62:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(29),__webpack_require__(121),__webpack_require__(37),__webpack_require__(155),__webpack_require__(48),__webpack_require__(335),__webpack_require__(336),__webpack_require__(47),__webpack_require__(38);var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(161),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(355),react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(354);react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var pstyle={margin:"0px",padding:"0px 4px",justifyContent:"left",textAlign:"left",fontSize:"14px"},tooltip={width:"150px",height:"auto",textAlign:"left"};function Info(props){return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_11__.a,{placement:"right-end",delay:{show:250,hide:400},overlay:react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_12__.a,{style:tooltip}," ",react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p",{style:pstyle},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em",null,props.info)," "))},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p",{style:_objectSpread({},pstyle,{fontSize:"12px"})},"ⓘ")))}Info.displayName="Info",Info.__docgenInfo={description:"",methods:[],displayName:"Info"},__webpack_exports__.a=Info,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\Info.jsx"]={name:"Info",docgenInfo:Info.__docgenInfo,path:"components\\Info.jsx"})},699:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(125);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(701)],module)}.call(this,__webpack_require__(700)(module))},701:function(module,exports,__webpack_require__){var map={"./About.stories.js":735,"./CreateRoom.stories.js":736,"./Feed.stories.js":737,"./HomeNav.stories.js":738,"./JoinRoom.stories.js":739,"./NavBar.stories.js":734,"./PlayerList.stories.js":740,"./PublicRooms.stories.js":741};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=701},730:function(module,exports){},734:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RoomNavBar",(function(){return RoomNavBar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_components_NavBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(167),addSourceDecorator=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,__webpack_require__(22).withSource,__webpack_require__(22).addSource);__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { text } from "@storybook/addon-knobs";\r\nimport NavBar from "../components/NavBar";\r\n\r\nexport default {\r\n    title: "NavBar",\r\n    component: NavBar,\r\n};\r\n\r\nexport const RoomNavBar = () => {\r\n    const name = text("Name", "diction");\r\n    return <NavBar name={name} active={false}/>\r\n}',locationsMap:{"navbar--room-nav-bar":{startLoc:{col:26,line:10},endLoc:{col:1,line:13},startBody:{col:26,line:10},endBody:{col:1,line:13}}}}},title:"NavBar",component:_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.a};var RoomNavBar=addSourceDecorator((function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Name","diction");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.a,{name:name,active:!1})}),{__STORY__:'import React from "react";\r\nimport { text } from "@storybook/addon-knobs";\r\nimport NavBar from "../components/NavBar";\r\n\r\nexport default {\r\n    title: "NavBar",\r\n    component: NavBar,\r\n};\r\n\r\nexport const RoomNavBar = () => {\r\n    const name = text("Name", "diction");\r\n    return <NavBar name={name} active={false}/>\r\n}',__ADDS_MAP__:{"navbar--room-nav-bar":{startLoc:{col:26,line:10},endLoc:{col:1,line:13},startBody:{col:26,line:10},endBody:{col:1,line:13}}},__MAIN_FILE_LOCATION__:"/NavBar.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}})},735:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AboutPage",(function(){return AboutPage}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Container=__webpack_require__(49),_ref=(react_default.a.createElement,react_default.a.createElement("p",null,"About"));function About(){return react_default.a.createElement(Container.a,{className:"tab-container",style:{padding:"0px"}},_ref)}About.displayName="About",About.__docgenInfo={description:"",methods:[],displayName:"About"};var components_About=About;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\About.jsx"]={name:"About",docgenInfo:About.__docgenInfo,path:"components\\About.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,About_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport About from "../components/About";\r\n\r\nexport default {\r\n    title: "About",\r\n    component: About,\r\n};\r\n\r\nexport const AboutPage = () => {\r\n    return <About />;\r\n  };',locationsMap:{"about--about-page":{startLoc:{col:25,line:9},endLoc:{col:3,line:11},startBody:{col:25,line:9},endBody:{col:3,line:11}}}}},title:"About",component:components_About},react_default.a.createElement(components_About,null)),AboutPage=addSourceDecorator((function(){return About_stories_ref}),{__STORY__:'import React from "react";\r\nimport About from "../components/About";\r\n\r\nexport default {\r\n    title: "About",\r\n    component: About,\r\n};\r\n\r\nexport const AboutPage = () => {\r\n    return <About />;\r\n  };',__ADDS_MAP__:{"about--about-page":{startLoc:{col:25,line:9},endLoc:{col:3,line:11},startBody:{col:25,line:9},endBody:{col:3,line:11}}},__MAIN_FILE_LOCATION__:"/About.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}})},736:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CreateARoom",(function(){return CreateARoom}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Info=(__webpack_require__(30),__webpack_require__(62)),Container=__webpack_require__(49),Row=__webpack_require__(9),Col=__webpack_require__(12),Form=__webpack_require__(13),pstyle=(__webpack_require__(338),react_default.a.createElement,{width:"100%",textAlign:"right",margin:"0px",padding:"0px 6px 2px"}),inputstyle={color:"black",display:"table",width:"150px",margin:"auto",marginTop:"20px"},_ref=react_default.a.createElement("h1",{className:"formtitle"}," Create Room "),_ref2=react_default.a.createElement(Form.a.Label,{column:!0,sm:3}," Room Name "),_ref3=react_default.a.createElement(Info.a,{info:"Users nust have the link to access a private room"}),_ref4=react_default.a.createElement(Form.a.Label,{column:!0,sm:9}," Antes "),_ref5=react_default.a.createElement("option",null,"0$"),_ref6=react_default.a.createElement("option",null,"0.1$"),_ref7=react_default.a.createElement("option",null,"0.2$"),_ref8=react_default.a.createElement("option",null,"0.5$"),_ref9=react_default.a.createElement("option",null,"1$"),_ref10=react_default.a.createElement(Form.a.Label,{column:!0,sm:9}," Blinds "),_ref11=react_default.a.createElement("option",null,"0$"),_ref12=react_default.a.createElement("option",null,"0.1$/0.2$"),_ref13=react_default.a.createElement("option",null,"0.5$/1$"),_ref14=react_default.a.createElement("option",null,"1$/2$"),_ref15=react_default.a.createElement("option",null,"5$/10$"),_ref16=react_default.a.createElement("option",null,"10$/20$"),_ref17=react_default.a.createElement(Form.a.Label,{column:!0,sm:9}," Max Players "),_ref18=react_default.a.createElement("option",null,"2"),_ref19=react_default.a.createElement("option",null,"4"),_ref20=react_default.a.createElement("option",null,"6"),_ref21=react_default.a.createElement("option",null,"8"),_ref22=react_default.a.createElement("option",null,"10"),_ref23=react_default.a.createElement(Row.a,null,react_default.a.createElement(Form.a.Label,{column:!0,sm:9}," Game Options ")),_ref24=react_default.a.createElement(Info.a,{info:"If a player wins a hand with 7/2, they recieve blind paymets from all other players."}),_ref25=react_default.a.createElement(Info.a,{info:"Player under the gun can min raise the big blind before looking at their cards."}),_ref26=react_default.a.createElement(Info.a,{info:"When players are all in, they can run the board more than once."}),_ref27=react_default.a.createElement(Info.a,{info:"Players can double click a card to reveal it."}),_ref28=react_default.a.createElement(Info.a,{info:"????."}),_ref29=react_default.a.createElement(Info.a,{info:"????."});function CreateRoom(props){var _useState=Object(react.useState)(""),message=_useState[0],setMessage=_useState[1],_useState2=Object(react.useState)("0$"),antes=_useState2[0],setAntes=_useState2[1],_useState3=Object(react.useState)("0.1$/0.2$"),blinds=_useState3[0],setBlinds=_useState3[1],_useState4=Object(react.useState)("2"),players=_useState4[0],setPlayers=_useState4[1],_useState5=Object(react.useState)("name"),name=_useState5[0],setName=_useState5[1],_useState6=Object(react.useState)(!0),publicc=_useState6[0],setPublicc=_useState6[1],_useState7=Object(react.useState)({bounty:!1,straddle:!1,runs:!1,show:!1,name1:!1,name2:!1}),options=_useState7[0],setOptions=_useState7[1],changeOptions=function(key,value){setOptions((function(options){return options[key]=value,options})),console.log(options)};return react_default.a.createElement(Container.a,{className:"tab-container",style:{padding:"0px"}},react_default.a.createElement("div",{className:"form-wrapper",style:{margin:"2% 20% 2%"}},_ref,react_default.a.createElement("div",{className:"form"},react_default.a.createElement(Form.a.Group,{as:Row.a},_ref2,react_default.a.createElement(Col.a,{sm:9},react_default.a.createElement(Form.a.Control,{type:"text",placeholder:"name",onChange:function onChange(event){return setName(event.target.value)}})),react_default.a.createElement(Col.a,{sm:12},react_default.a.createElement(Row.a,{style:{margin:"0px",float:"right"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"private",onChange:function onChange(event){setPublicc(!event.target.checked)}}),_ref3))),react_default.a.createElement(Form.a.Group,{as:Row.a},_ref4,react_default.a.createElement(Col.a,{sm:3},react_default.a.createElement(Form.a.Control,{as:"select",value:antes,onChange:function onChange(event){return setAntes(event.target.value)}},_ref5,_ref6,_ref7,_ref8,_ref9))),react_default.a.createElement(Form.a.Group,{as:Row.a},_ref10,react_default.a.createElement(Col.a,{sm:3},react_default.a.createElement(Form.a.Control,{as:"select",value:blinds,onChange:function onChange(event){return setBlinds(event.target.value)}},_ref11,_ref12,_ref13,_ref14,_ref15,_ref16))),react_default.a.createElement(Form.a.Group,{as:Row.a},_ref17,react_default.a.createElement(Col.a,{sm:3},react_default.a.createElement(Form.a.Control,{as:"select",value:players,onChange:function onChange(event){return setPlayers(event.target.value)}},_ref18,_ref19,_ref20,_ref21,_ref22))),react_default.a.createElement(Form.a.Group,null,_ref23,react_default.a.createElement("hr",{style:{margin:"-3px 0px 9px"}}),react_default.a.createElement(Row.a,null,react_default.a.createElement(Col.a,{sm:6},react_default.a.createElement(Row.a,{style:{paddingLeft:"15px"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"Allow 7/2 bounty",onChange:function onChange(event){changeOptions("bounty",event.target.checked)}}),_ref24),react_default.a.createElement(Row.a,{style:{paddingLeft:"15px"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"Allow straddle",onChange:function onChange(event){changeOptions("straddle",event.target.checked)}}),_ref25),react_default.a.createElement(Row.a,{style:{paddingLeft:"15px"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"Allow multiple runs",onChange:function onChange(event){changeOptions("runs",event.target.checked)}}),_ref26)),react_default.a.createElement(Col.a,{sm:6},react_default.a.createElement(Row.a,{style:{paddingLeft:"15px"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"Allow card reveal",onChange:function onChange(event){changeOptions("show",event.target.checked)}}),_ref27),react_default.a.createElement(Row.a,{style:{paddingLeft:"15px"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"????",onChange:function onChange(event){changeOptions("name1",event.target.checked)}}),_ref28),react_default.a.createElement(Row.a,{style:{paddingLeft:"15px"}},react_default.a.createElement(Form.a.Check,{className:"form-check",type:"checkbox",label:"???",onChange:function onChange(event){changeOptions("name2",event.target.checked)}}),_ref29)))),react_default.a.createElement(Form.a.Group,{as:Row.a},react_default.a.createElement(Col.a,{sm:12},react_default.a.createElement("button",{style:inputstyle,onClick:function submit(){setMessage("Connecting ... "),props.socket.emit("room:create",{name:name,public:publicc},(function(r){r.id?(setMessage("Connected!! "),props.setRoomId(r.id)):props.setRoomId("error")}))}}," Create Room "))),react_default.a.createElement(Row.a,null,react_default.a.createElement("p",{style:pstyle},message)))))}CreateRoom.displayName="CreateRoom",CreateRoom.__docgenInfo={description:"",methods:[],displayName:"CreateRoom"};var components_CreateRoom=CreateRoom;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\CreateRoom.jsx"]={name:"CreateRoom",docgenInfo:CreateRoom.__docgenInfo,path:"components\\CreateRoom.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,CreateRoom_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { text } from "@storybook/addon-knobs";\r\nimport CreateRoom from "../components/CreateRoom";\r\n\r\nexport default {\r\n    title: "CreateRoom",\r\n    component: CreateRoom,\r\n};\r\n\r\nexport const CreateARoom = () => {\r\n    return <CreateRoom />\r\n}',locationsMap:{"createroom--create-a-room":{startLoc:{col:27,line:10},endLoc:{col:1,line:12},startBody:{col:27,line:10},endBody:{col:1,line:12}}}}},title:"CreateRoom",component:components_CreateRoom},react_default.a.createElement(components_CreateRoom,null)),CreateARoom=addSourceDecorator((function(){return CreateRoom_stories_ref}),{__STORY__:'import React from "react";\r\nimport { text } from "@storybook/addon-knobs";\r\nimport CreateRoom from "../components/CreateRoom";\r\n\r\nexport default {\r\n    title: "CreateRoom",\r\n    component: CreateRoom,\r\n};\r\n\r\nexport const CreateARoom = () => {\r\n    return <CreateRoom />\r\n}',__ADDS_MAP__:{"createroom--create-a-room":{startLoc:{col:27,line:10},endLoc:{col:1,line:12},startBody:{col:27,line:10},endBody:{col:1,line:12}}},__MAIN_FILE_LOCATION__:"/CreateRoom.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}})},737:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ShowFeed",(function(){return ShowFeed}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(30),_ref=(__webpack_require__(70),react_default.a.createElement,react_default.a.createElement("h4",null,"Feed"));function Feed(props){var boxRef=Object(react.useRef)(null);Object(react.useEffect)((function(){scrollToBottom()}),[props.list]);var scrollToBottom=function(){null!=boxRef&&(boxRef.current.scrollTop=boxRef.current.scrollHeight)};return react_default.a.createElement("div",{className:"feed-container",ref:boxRef},_ref,react_default.a.createElement("ul",null,props.list&&props.list.map((function(msg){return react_default.a.createElement("li",{key:Math.random()},msg)}))))}Feed.displayName="Feed",Feed.__docgenInfo={description:"",methods:[],displayName:"Feed"};var components_Feed=Feed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\Feed.jsx"]={name:"Feed",docgenInfo:Feed.__docgenInfo,path:"components\\Feed.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,ShowFeed=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { array } from "@storybook/addon-knobs";\r\nimport Feed from "../components/Feed";\r\n\r\nexport default {\r\n    title: "Feed",\r\n    component: Feed,\r\n};\r\n\r\nexport const ShowFeed = () => {\r\n    const feed = array("Input", "");\r\n    return <Feed list={feed}/> \r\n}',locationsMap:{"feed--show-feed":{startLoc:{col:24,line:10},endLoc:{col:1,line:13},startBody:{col:24,line:10},endBody:{col:1,line:13}}}}},title:"Feed",component:components_Feed},addSourceDecorator((function(){var feed=Object(dist.array)("Input","");return react_default.a.createElement(components_Feed,{list:feed})}),{__STORY__:'import React from "react";\r\nimport { array } from "@storybook/addon-knobs";\r\nimport Feed from "../components/Feed";\r\n\r\nexport default {\r\n    title: "Feed",\r\n    component: Feed,\r\n};\r\n\r\nexport const ShowFeed = () => {\r\n    const feed = array("Input", "");\r\n    return <Feed list={feed}/> \r\n}',__ADDS_MAP__:{"feed--show-feed":{startLoc:{col:24,line:10},endLoc:{col:1,line:13},startBody:{col:24,line:10},endBody:{col:1,line:13}}},__MAIN_FILE_LOCATION__:"/Feed.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}}))},738:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DisplayHomeNav",(function(){return DisplayHomeNav}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Navbar=__webpack_require__(63),_ref=(__webpack_require__(167),react_default.a.createElement,react_default.a.createElement(Navbar.a,{variant:"dark",bg:"dark",expand:"md",style:{width:"100%",height:"50px",padding:"16px"}},react_default.a.createElement(Navbar.a.Brand,null,"Poker"),react_default.a.createElement(Navbar.a.Toggle,{"aria-controls":"basic-navbar-nav"}),react_default.a.createElement(Navbar.a.Collapse,{id:"basic-navbar-nav"})));function HomeNav(){return _ref}HomeNav.displayName="HomeNav",HomeNav.__docgenInfo={description:"",methods:[],displayName:"HomeNav"};var components_HomeNav=HomeNav;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\HomeNav.jsx"]={name:"HomeNav",docgenInfo:HomeNav.__docgenInfo,path:"components\\HomeNav.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,HomeNav_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport HomeNav from "../components/HomeNav";\r\n\r\nexport default {\r\n    title: "HomeNav",\r\n    component: HomeNav,\r\n};\r\n\r\nexport const DisplayHomeNav = () => {\r\n    return <HomeNav />\r\n}',locationsMap:{"homenav--display-home-nav":{startLoc:{col:30,line:9},endLoc:{col:1,line:11},startBody:{col:30,line:9},endBody:{col:1,line:11}}}}},title:"HomeNav",component:components_HomeNav},react_default.a.createElement(components_HomeNav,null)),DisplayHomeNav=addSourceDecorator((function(){return HomeNav_stories_ref}),{__STORY__:'import React from "react";\r\nimport HomeNav from "../components/HomeNav";\r\n\r\nexport default {\r\n    title: "HomeNav",\r\n    component: HomeNav,\r\n};\r\n\r\nexport const DisplayHomeNav = () => {\r\n    return <HomeNav />\r\n}',__ADDS_MAP__:{"homenav--display-home-nav":{startLoc:{col:30,line:9},endLoc:{col:1,line:11},startBody:{col:30,line:9},endBody:{col:1,line:11}}},__MAIN_FILE_LOCATION__:"/HomeNav.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}})},739:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"JoinARoom",(function(){return JoinARoom}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Container=(__webpack_require__(30),__webpack_require__(62),__webpack_require__(49)),Row=__webpack_require__(9),Col=__webpack_require__(12),messagestyle=(__webpack_require__(338),react_default.a.createElement,{width:"100%",textAlign:"right",margin:"0px",padding:"0px 6px 2px"}),buttonStyle={color:"black",display:"table",width:"150px",margin:"auto",marginTop:"20px"},inputStyle={width:"90%",margin:"0px 5%"},_ref=react_default.a.createElement("h1",{className:"formtitle"}," Join Room "),_ref2=react_default.a.createElement("p",{style:{width:"100%",textAlign:"center",margin:"0px",padding:"2px "}}," Room Id ");function JoinRoom(props){var _useState=Object(react.useState)(""),message=_useState[0],setMessage=_useState[1],_useState2=Object(react.useState)(""),tmpID=_useState2[0],setTmpID=_useState2[1];return react_default.a.createElement(Container.a,{className:"tab-container",style:{padding:"0px"}},react_default.a.createElement("div",{className:"join-wrapper",style:{margin:"10% auto"}},_ref,react_default.a.createElement("div",{className:"form"},react_default.a.createElement(Row.a,{style:{margin:"0px"}},react_default.a.createElement(Col.a,{xs:3,style:{padding:"0px"}},_ref2),react_default.a.createElement(Col.a,{xs:9,style:{padding:"0px"}},react_default.a.createElement("input",{style:inputStyle,type:"text",value:tmpID,onChange:function onChange(event){return setTmpID(event.target.value)}}))),react_default.a.createElement(Row.a,null,react_default.a.createElement("button",{style:buttonStyle,onClick:function submit(){setMessage("Connecting ... "),tmpID?(setMessage("Connected!! "),props.setRoomId(tmpID)):props.setRoomId("error")}}," join game ")),react_default.a.createElement(Row.a,null,react_default.a.createElement("p",{style:messagestyle},message)))))}JoinRoom.displayName="JoinRoom",JoinRoom.__docgenInfo={description:"",methods:[],displayName:"JoinRoom"};var components_JoinRoom=JoinRoom;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\JoinRoom.jsx"]={name:"JoinRoom",docgenInfo:JoinRoom.__docgenInfo,path:"components\\JoinRoom.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,JoinRoom_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { text } from "@storybook/addon-knobs";\r\nimport JoinRoom from "../components/JoinRoom";\r\n\r\nexport default {\r\n    title: "JoinRoom",\r\n    component: JoinRoom,\r\n};\r\n\r\nexport const JoinARoom = () => {\r\n    return <JoinRoom />\r\n}',locationsMap:{"joinroom--join-a-room":{startLoc:{col:25,line:10},endLoc:{col:1,line:12},startBody:{col:25,line:10},endBody:{col:1,line:12}}}}},title:"JoinRoom",component:components_JoinRoom},react_default.a.createElement(components_JoinRoom,null)),JoinARoom=addSourceDecorator((function(){return JoinRoom_stories_ref}),{__STORY__:'import React from "react";\r\nimport { text } from "@storybook/addon-knobs";\r\nimport JoinRoom from "../components/JoinRoom";\r\n\r\nexport default {\r\n    title: "JoinRoom",\r\n    component: JoinRoom,\r\n};\r\n\r\nexport const JoinARoom = () => {\r\n    return <JoinRoom />\r\n}',__ADDS_MAP__:{"joinroom--join-a-room":{startLoc:{col:25,line:10},endLoc:{col:1,line:12},startBody:{col:25,line:10},endBody:{col:1,line:12}}},__MAIN_FILE_LOCATION__:"/JoinRoom.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}})},740:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DisplayPlayerList",(function(){return DisplayPlayerList}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(30),defineProperty=(__webpack_require__(29),__webpack_require__(121),__webpack_require__(37),__webpack_require__(70),__webpack_require__(72),__webpack_require__(155),__webpack_require__(48),__webpack_require__(335),__webpack_require__(336),__webpack_require__(47),__webpack_require__(38),__webpack_require__(161)),Dropdown=__webpack_require__(172),Row=__webpack_require__(9),Col=__webpack_require__(12),Container=__webpack_require__(49);react_default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var menustyle={width:"350px",fontSize:"14px"},row={margin:"0px"},inputs={position:"relative",width:"100%",padding:"0px",height:"28px"},listhead={fontStyle:"italic",fontSize:"18px",textDecoration:"underline"},_ref=react_default.a.createElement(Dropdown.a.Toggle,{style:{border:"none",borderRadius:"0px",background:"white",color:"black",width:"100%",fontSize:"12px",padding:"0px"},id:"dropdown-basic"},"player list"),_ref2=react_default.a.createElement("li",{style:listhead},"Players"),_ref3=react_default.a.createElement("li",{style:listhead},"Status");function PlayerList(props){return react_default.a.createElement(Container.a,{style:inputs},react_default.a.createElement(Row.a,{style:row},react_default.a.createElement(Col.a,{xs:6,style:{padding:"0px 2px"}}),react_default.a.createElement(Col.a,{xs:6,style:{padding:"0px 2px"}},react_default.a.createElement(Dropdown.a,{id:"ddb",drop:"down"},_ref,react_default.a.createElement(Dropdown.a.Menu,{style:menustyle},react_default.a.createElement(Row.a,{style:{margin:"0px"}},react_default.a.createElement(Col.a,{xs:5},react_default.a.createElement("ul",null,_ref2,props.list.map((function(p){return react_default.a.createElement("li",{key:p.id}," ",p.name.substring(0,8),"  ")})))),react_default.a.createElement(Col.a,{xs:4},react_default.a.createElement("ul",null,_ref3,props.list.map((function(p){return react_default.a.createElement("li",{key:p.id}," ",p.active?"ACTIVE":"INACTIVE","  ")})))),react_default.a.createElement(Col.a,{xs:3},react_default.a.createElement("ul",null,react_default.a.createElement("li",{style:_objectSpread({},listhead,{textAlign:"right"})},"Money")))))))),react_default.a.createElement("hr",{style:{background:"white",margin:"1px 0px 1px 0px"}}))}PlayerList.displayName="PlayerList",PlayerList.__docgenInfo={description:"",methods:[],displayName:"PlayerList"};var components_PlayerList=PlayerList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\PlayerList.jsx"]={name:"PlayerList",docgenInfo:PlayerList.__docgenInfo,path:"components\\PlayerList.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,DisplayPlayerList=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { array, object } from "@storybook/addon-knobs";\r\nimport PlayerList from "../components/PlayerList";\r\n\r\nexport default {\r\n    title: "PlayerList",\r\n    component: PlayerList,\r\n};\r\n\r\nexport const DisplayPlayerList = () => {\r\n    const player = object("player", {id: "", name: ""});\r\n    const players = [player];\r\n    return <PlayerList list={players}/> \r\n}',locationsMap:{"playerlist--display-player-list":{startLoc:{col:33,line:10},endLoc:{col:1,line:14},startBody:{col:33,line:10},endBody:{col:1,line:14}}}}},title:"PlayerList",component:components_PlayerList},addSourceDecorator((function(){var player=Object(dist.object)("player",{id:"",name:""});return react_default.a.createElement(components_PlayerList,{list:[player]})}),{__STORY__:'import React from "react";\r\nimport { array, object } from "@storybook/addon-knobs";\r\nimport PlayerList from "../components/PlayerList";\r\n\r\nexport default {\r\n    title: "PlayerList",\r\n    component: PlayerList,\r\n};\r\n\r\nexport const DisplayPlayerList = () => {\r\n    const player = object("player", {id: "", name: ""});\r\n    const players = [player];\r\n    return <PlayerList list={players}/> \r\n}',__ADDS_MAP__:{"playerlist--display-player-list":{startLoc:{col:33,line:10},endLoc:{col:1,line:14},startBody:{col:33,line:10},endBody:{col:1,line:14}}},__MAIN_FILE_LOCATION__:"/PlayerList.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}}))},741:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DisplayPublicRooms",(function(){return DisplayPublicRooms}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(30),Container=(__webpack_require__(70),__webpack_require__(72),__webpack_require__(49)),Row=__webpack_require__(9),Col=__webpack_require__(12),buttonStyle=(react_default.a.createElement,{backgroundColor:"blue",color:"white",border:"1px solid white",borderRadius:"12px",marginLeft:"20%",width:"60%",textAlign:"center"}),PublicRooms_element={fontSize:"18px",padding:"0px 10px"},_ref=react_default.a.createElement("h1",{className:"formtitle"}," Public Rooms ");function PublicRooms(props){return react_default.a.createElement(Container.a,{className:"tab-container",style:{padding:"0px"}},react_default.a.createElement("div",{className:"public-wrapper",style:{margin:"2% 20% 2%"}},_ref,react_default.a.createElement("ul",null,props.list&&props.list.map((function(r){return react_default.a.createElement("li",{key:r.id},react_default.a.createElement(Row.a,{style:{margin:"0px",padding:"10px 0px"}},react_default.a.createElement(Col.a,{xs:8,style:{padding:"0px"}},react_default.a.createElement("p",{style:PublicRooms_element},r.name," (",r.id,")")),react_default.a.createElement(Col.a,{xs:4,style:{padding:"0px"}},react_default.a.createElement("button",{style:buttonStyle,onClick:function onClick(){return props.setRoomId(r.id)}}," join room "))))})))))}PublicRooms.displayName="PublicRooms",PublicRooms.__docgenInfo={description:"",methods:[],displayName:"PublicRooms"};var components_PublicRooms=PublicRooms;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\PublicRooms.jsx"]={name:"PublicRooms",docgenInfo:PublicRooms.__docgenInfo,path:"components\\PublicRooms.jsx"});react_default.a.createElement,__webpack_require__(22).withSource;var addSourceDecorator=__webpack_require__(22).addSource,DisplayPublicRooms=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { array, object } from "@storybook/addon-knobs";\r\nimport PublicRooms from "../components/PublicRooms";\r\n\r\nexport default {\r\n    title: "PublicRooms",\r\n    component: PublicRooms,\r\n};\r\n\r\nexport const DisplayPublicRooms = () => {\r\n    const room = object("room", {name: "", id: ""});\r\n    const rooms = [room];\r\n    return <PublicRooms list={rooms}/>\r\n}',locationsMap:{"publicrooms--display-public-rooms":{startLoc:{col:34,line:10},endLoc:{col:1,line:14},startBody:{col:34,line:10},endBody:{col:1,line:14}}}}},title:"PublicRooms",component:components_PublicRooms},addSourceDecorator((function(){var room=Object(dist.object)("room",{name:"",id:""});return react_default.a.createElement(components_PublicRooms,{list:[room]})}),{__STORY__:'import React from "react";\r\nimport { array, object } from "@storybook/addon-knobs";\r\nimport PublicRooms from "../components/PublicRooms";\r\n\r\nexport default {\r\n    title: "PublicRooms",\r\n    component: PublicRooms,\r\n};\r\n\r\nexport const DisplayPublicRooms = () => {\r\n    const room = object("room", {name: "", id: ""});\r\n    const rooms = [room];\r\n    return <PublicRooms list={rooms}/>\r\n}',__ADDS_MAP__:{"publicrooms--display-public-rooms":{startLoc:{col:34,line:10},endLoc:{col:1,line:14},startBody:{col:34,line:10},endBody:{col:1,line:14}}},__MAIN_FILE_LOCATION__:"/PublicRooms.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\Rick Han\\cs\\cs130A\\project-s3-t3-poker\\stories",__IDS_TO_FRAMEWORKS__:{}}))}},[[356,1,2]]]);
//# sourceMappingURL=main.e61a47ae7ea1f205bc00.bundle.js.map