function K(e){window.enmity.plugins.registerPlugin(e)}const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const v=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,S=window.enmity.modules.common.Toasts,F=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const L=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const M=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const X=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const Q=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const w=o.Text;o.TextInput,o.TouchableHighlight;const y=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const b=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const R=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const c=o.FormRow,B=o.FormSection;o.FormSelect,o.FormSubLabel;const Z=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const D={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function k(...e){return window.enmity.modules.bulk(...e)}function V(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const T=e=>{let t=0;for(let s in e)t++;return t};function a(e){return window.enmity.assets.getIDByName(e)}const d={Debug:a("debug"),Retry:a("ic_message_retry"),Failed:a("Small"),Cancel:a("ic_megaphone_nsfw_16px"),Add:a("add_white"),Delete:a("ic_message_delete"),Clear:a("ic_clear_all_24px"),Pencil:a("ic_pencil_24px"),Success:a("ic_selection_checked_24px"),Copy:a("toast_copy_link"),Open:a("ic_leave_stage"),Clipboard:a("pending-alert"),Initial:a("coffee"),Debug_Command:{Sent:a("ic_application_command_24px"),Clock:a("clock")},Settings:{Toasts:{Context:a("toast_image_saved"),Settings:a("ic_selection_checked_24px")},Self:a("friends_toast_icon"),Share:a("share"),Robot:a("ic_robot_24px"),Commands:a("ic_profile_badge_bot_commands"),Debug:a("ic_rulebook_16px")}},N=e=>{S.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},O=e=>{let t=e.split(`
`).map(s=>{if(s!="")return`"${s.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[T(t)]=`${t[T(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function ee(){try{let e=await _.getItem("device_list");if(e)return JSON.parse(e);let t=(await L.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,s=O(t);await _.setItem("device_list",s);let r=await _.getItem("device_list");return JSON.parse(r)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function te(e,t,s){let r=await ee();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${s.split("-")[1]}
> **Discord Build:** ${v.InfoDictionaryManager.Version} (${v.InfoDictionaryManager.Build})
> **Software Version:** ${v.DCDDeviceManager.systemVersion}
> **Device:** ${r[v.DCDDeviceManager.device]}`}const{native:p}=window.enmity;function ne(){p.reload()}p.version,p.build,p.device,p.version;const oe=V("transitionToGuild");async function se({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,s=await(await L.get(t)).text;let r=s.match(/\d\.\d\.\d+/g),i=s.match(/patch\-\d\.\d\.\d+/g);return!r||!i?z(e.name,e.version):(r=r[0],i=i[0],r!=e.version?G(t,r,i.split("-")[1],e,!1):i!=e.build?G(t,r,i.split("-")[1],e,!0):z(e.name,e.version))}const G=(e,t,s,r,i)=>{const u=i?s:t;F.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${r.name}. ${i?`
The version will remain at ${t}, but the build will update to ${s}.`:""}
Would you like to install ${i?`build \`${s}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ie(e,u,r,i)})},z=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),S.open({content:`${e} is on latest version (${t})`,source:d.Success})};async function ie(e,t,s,r){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?F.show({title:`Updated ${s.name}`,body:`Successfully updated to ${r?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{ne()}}):F.show({title:"Error",body:`Something went wrong while updating ${s.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{oe.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${s.name}%20Update%20Error%3A%20${r?`b${t}`:`v${t}`}`)}})})}const $=window.enmity.modules.common.Components.General.Animated,[E,re]=k(D.byProps("transitionToGuild"),D.byProps("setString")),m=M.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:g.Fonts.DISPLAY_NORMAL},header:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:g.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var ae=({manifest:e})=>{const t=n.useRef(new $.Value(1)).current,s=()=>{$.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{$.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},i=()=>{E.openURL("https://spin.rip/")},u={transform:[{scale:t}]};return n.createElement(n.Fragment,null,n.createElement(b,{style:m.container},n.createElement(y,{onPress:i,onPressIn:s,onPressOut:r},n.createElement($.View,{style:[u]},n.createElement(X,{style:[m.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(b,{style:m.text_container},n.createElement(y,{onPress:()=>{E.openURL(e.sourceUrl)}},n.createElement(w,{style:[m.main_text,m.header]},e.name," ")),n.createElement(b,{style:{flexDirection:"row"}},n.createElement(w,{style:[m.main_text,m.sub_header]},"A plugin by"),n.createElement(y,{onPress:()=>{E.openURL("https://spin.rip/")}},n.createElement(w,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(b,{style:{flexDirection:"row"}},n.createElement(w,{style:[m.main_text,m.sub_header]},"Settings page by"),n.createElement(y,{onPress:()=>{E.openURL("https://github.com/acquitelol/")}},n.createElement(w,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(b,null,n.createElement(y,{style:{flexDirection:"row"},onPress:()=>{re.setString(`**${e.name}** v${e.version}`),N("plugin name and version")}},n.createElement(w,{style:[m.main_text,m.sub_header]},"Version:"),n.createElement(w,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[le,q]=k(D.byProps("transitionToGuild"),D.byProps("setString")),h=M.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:g.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:g.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var ce=({manifest:e,settings:t,hasToasts:s,children:r,commands:i})=>n.createElement(Q,null,n.createElement(ae,{manifest:e}),r,i&&n.createElement(B,{title:"Plugin Commands"},i.map(u=>n.createElement(c,{label:`/${u.name}`,subLabel:u.description,leading:n.createElement(c.Icon,{style:h.icon,source:d.Settings.Commands}),trailing:c.Arrow,onPress:function(){q.setString(`/${u.name}`),N(`the command ${u.name}`)}}))),n.createElement(B,{title:"Utility"},s&&n.createElement(n.Fragment,null,n.createElement(c,{label:"Initialization Toasts",leading:n.createElement(c.Icon,{style:h.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(Z,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),S.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Success})}})}),n.createElement(R,null)),n.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(c.Icon,{style:h.icon,source:d.Settings.Debug}),trailing:c.Arrow,onPress:async function(){q.setString(await te(e.name,e.version,e.build)),N("plugin debug information")}}),n.createElement(R,null),n.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(c.Icon,{style:h.icon,source:d.Delete}),trailing:c.Arrow,onPress:async function(){await _.removeItem("device_list"),S.open({content:"Cleared device list storage.",source:d.Success})}})),n.createElement(B,{title:"Source"},n.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(c.Icon,{style:h.icon,source:d.Copy}),trailing:c.Arrow,onPress:()=>{se({manifest:e})}}),n.createElement(R,null),n.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(c.Icon,{style:h.icon,source:d.Open}),trailing:c.Arrow,onPress:()=>{le.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(c,{style:h.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),me="PetPet",ue="1.0.6",de="patch-1.0.13",ge="Generate a petpet gif from a given image",we=[{name:"spin",id:"308440976723148800"}],he="#ff0069",fe="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/PetPet.js",Y={name:me,version:ue,build:de,description:ge,authors:we,color:he,sourceUrl:fe};function x(e,t,s,r){window.enmity.clyde.sendReply(e,t,s,r)}var j;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(j||(j={}));var U;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(U||(U={}));var C;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(C||(C={}));var H;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(H||(H={}));var f;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(f||(f={}));var W;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(W||(W={}));const ye={id:"petpet-command",name:"petpet",displayName:"petpet",description:"Generate a petpet gif from a given image",displayDescription:"Generate a petpet gif from a given image",type:U.Chat,inputType:C.BuiltInText,options:[{name:"url",displayName:"url",description:"The URL of the image to petpet",displayDescription:"The URL of the image to petpet",type:f.String,required:!1},{name:"user",displayName:"user",description:"Grab a user's avatar to petpet",displayDescription:"Grab a user's avatar to petpet",type:f.User,required:!1},{name:"size",displayName:"size",description:"Change the size of the petpet gif. Max is 512. Defaults to 100, higher values equal larger files and potentially no Discord embeds",displayDescription:"Change the size of the petpet gif. Max is 512. Defaults to 100, higher values equal larger files and potentially no Discord embeds",type:f.Integer,required:!1},{name:"delay",displayName:"delay",description:"The delay between each frame, defaults to 20",displayDescription:"The delay between each frame, defaults to 20",type:f.Integer,required:!1},{name:"whisper",displayName:"whisper",description:"Only you can see the result",displayDescription:"Only you can see the result",type:f.Boolean,required:!1}],execute:async function(e,t){const s=e[e.findIndex(l=>l.name==="url")],r=e[e.findIndex(l=>l.name==="user")],i=e[e.findIndex(l=>l.name==="size")],u=e[e.findIndex(l=>l.name==="delay")],P=e[e.findIndex(l=>l.name==="whisper")],J="v2";if(!s&&!r)return x(t?.channel.id??"0","No argument provided, nothing will happen. Here's a banana instead \u{1F34C}");try{const l=await L.get(`https://petpet-api.clit.repl.co/petpet?url=${s?.value?s.value:V("getUser").getUser(r?.value).getAvatarURL().split("?")[0].replace(/gif|webp/,"png")}&size=${i?i.value:100}&delay=${u?u.value:20}&version=${J}`).then(I=>I.body);if(l.status==!0){const I={type:"rich",image:{proxy_url:l?.result,url:l?.result,width:i?i.value:100,height:i?i.value:100},footer:{text:`Files are purged every 24 hours \u2022 Powered by ${l?.github}`},color:"0xff0069"};if(P?.value??!0){x(t?.channel.id??"0",{embeds:[I]});return}else return{content:l?.result}}else console.log("[ PetPet Fetch Response ]",l,l?.status),console.log("[ PetPet Arguments ]",s,r,i,u,P),x(t?.channel.id??"0","Something went wrong, please try again later. Fetch response and PetPet arguments sent to console.")}catch(l){console.log("[ PetPet Error ]",l),console.log("[ PetPet Arguments ]",s,r,i,u,P),x(t?.channel.id??"0","An error occured while fetching and preparing the petpet image. Check debug logs for more info.")}}},A=[ye],be={...Y,onStart(){this.commands=A},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){return n.createElement(ce,{manifest:Y,settings:e,hasToasts:!1,commands:A})}};K(be);
