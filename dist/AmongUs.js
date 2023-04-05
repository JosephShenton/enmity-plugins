function H(e,t,i){return window.enmity.settings.getBoolean(e,t,i)}function Y(e){window.enmity.plugins.registerPlugin(e)}const v={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function R(...e){return window.enmity.modules.bulk(...e)}function B(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const p=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const $=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const D=window.enmity.modules.common.Storage,w=window.enmity.modules.common.Toasts,x=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const M=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const U=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function j(e){return window.enmity.patcher.create(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const z=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const W=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const y=o.Text;o.TextInput,o.TouchableHighlight;const h=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const S=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const F=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,L=o.FormSection;o.FormSelect,o.FormSubLabel;const J=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const N=e=>{let t=0;for(let i in e)t++;return t};function s(e){return window.enmity.assets.getIDByName(e)}const c={Debug:s("debug"),Retry:s("ic_message_retry"),Failed:s("Small"),Cancel:s("ic_megaphone_nsfw_16px"),Add:s("add_white"),Delete:s("ic_message_delete"),Clear:s("ic_clear_all_24px"),Pencil:s("ic_pencil_24px"),Success:s("ic_selection_checked_24px"),Warning:s("ic_warning_24px"),Copy:s("toast_copy_link"),Open:s("ic_leave_stage"),Clipboard:s("pending-alert"),Initial:s("coffee"),Shield:s("ic_person_shield"),Debug_Command:{Sent:s("ic_application_command_24px"),Clock:s("clock")},Settings:{Toasts:{Context:s("toast_image_saved"),Settings:s("ic_selection_checked_24px")},Self:s("friends_toast_icon"),Share:s("share"),Robot:s("ic_robot_24px"),Commands:s("ic_profile_badge_bot_commands"),Debug:s("ic_rulebook_16px")}},P=e=>{w.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},q=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[N(t)]=`${t[N(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function K(){try{let e=await D.getItem("device_list");if(e)return JSON.parse(e);let t=(await M.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=q(t);await D.setItem("device_list",i);let a=await D.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function Q(e,t,i){let a=await K();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${$.InfoDictionaryManager.Version} (${$.InfoDictionaryManager.Build})
> **Software Version:** ${$.DCDDeviceManager.systemVersion}
> **Device:** ${a[$.DCDDeviceManager.device]}`}const{native:_}=window.enmity;function X(){_.reload()}_.version,_.build,_.device,_.version;const Z=B("transitionToGuild");async function ee({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await M.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),r=i.match(/patch\-\d\.\d\.\d+/g);return!a||!r?k(e.name,e.version):(a=a[0],r=r[0],a!=e.version?V(t,a,r.split("-")[1],e,!1):r!=e.build?V(t,a,r.split("-")[1],e,!0):k(e.name,e.version))}const V=(e,t,i,a,r)=>{const u=r?i:t;x.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${a.name}. ${r?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${r?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>te(e,u,a,r)})},k=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),w.open({content:`${e} is on latest version (${t})`,source:c.Success})};async function te(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?x.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{X()}}):x.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Z.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}const T=window.enmity.modules.common.Components.General.Animated,[C,ne]=R(v.byProps("transitionToGuild"),v.byProps("setString")),m=U.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:p.Fonts.DISPLAY_NORMAL},header:{color:p.ThemeColorMap.HEADER_PRIMARY,fontFamily:p.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:p.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var oe=({manifest:e})=>{const t=n.useRef(new T.Value(1)).current,i=()=>{T.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{T.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},r=()=>{C.openURL("https://spin.rip/")},u={transform:[{scale:t}]};return n.createElement(n.Fragment,null,n.createElement(S,{style:m.container},n.createElement(h,{onPress:r,onPressIn:i,onPressOut:a},n.createElement(T.View,{style:[u]},n.createElement(z,{style:[m.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(S,{style:m.text_container},n.createElement(h,{onPress:()=>{C.openURL(e.sourceUrl)}},n.createElement(y,{style:[m.main_text,m.header]},e.name," ")),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(y,{style:[m.main_text,m.sub_header]},"A plugin by"),n.createElement(h,{onPress:()=>{C.openURL("https://spin.rip/")}},n.createElement(y,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:p.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(y,{style:[m.main_text,m.sub_header]},"Settings page by"),n.createElement(h,{onPress:()=>{C.openURL("https://github.com/acquitelol/")}},n.createElement(y,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:p.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(S,null,n.createElement(h,{style:{flexDirection:"row"},onPress:()=>{ne.setString(`**${e.name}** v${e.version}`),P("plugin name and version")}},n.createElement(y,{style:[m.main_text,m.sub_header]},"Version:"),n.createElement(y,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:p.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ie,O]=R(v.byProps("transitionToGuild","openURL"),v.byProps("setString","getString")),b=U.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:p.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:p.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var ae=({manifest:e,settings:t,hasToasts:i,children:a,commands:r})=>n.createElement(W,null,n.createElement(oe,{manifest:e}),a,r&&n.createElement(L,{title:"Plugin Commands"},r.map(u=>n.createElement(l,{label:`/${u.name}`,subLabel:u.description,leading:n.createElement(l.Icon,{style:b.icon,source:c.Settings.Commands}),trailing:l.Arrow,onPress:function(){O.setString(`/${u.name}`),P(`the command ${u.name}`)}}))),n.createElement(L,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:b.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(J,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),w.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Success})}})}),n.createElement(F,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:b.icon,source:c.Settings.Debug}),trailing:l.Arrow,onPress:async function(){O.setString(await Q(e.name,e.version,e.build)),P("plugin debug information")}}),n.createElement(F,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:b.icon,source:c.Delete}),trailing:l.Arrow,onPress:async function(){await D.removeItem("device_list"),w.open({content:"Cleared device list storage.",source:c.Success})}})),n.createElement(L,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:b.icon,source:c.Copy}),trailing:l.Arrow,onPress:()=>{ee({manifest:e})}}),n.createElement(F,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:b.icon,source:c.Open}),trailing:l.Arrow,onPress:()=>{ie.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{style:b.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),se="AmongUs",re="1.0.3",le="patch-1.0.16",me="sus",ce=[{name:"amogus",id:"308440976723148800"}],de="#ff0069",ue="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/AmongUs.js",d={name:se,version:re,build:le,description:me,authors:ce,color:de,sourceUrl:ue};const A=j(d.name),E=B("_currentDispatchActionType","_subscriptions","_waitQueue"),pe={...d,onStart(){E.dispatch({type:"LOAD_MESSAGES"}),E.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:25,jump:void 0,isStale:!1,truncate:void 0});let e=0,t=3;const i=()=>{let a=H(d.name,`${d.name}-toastEnable`,!1);try{e++,console.log(`[${d.name}] delayed start attempt ${e}/${t}.`),a&&w.open({content:`[${d.name}] start attempt ${e}/${t}.`,source:c.Debug});const r=E._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(g=>g.name==="MessageStore"),u=E._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(g=>g.name==="MessageStore"),G=E._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(g=>g.name==="MessageStore");A.before(r,"actionHandler",(g,f)=>{f[0].message.content="sus"}),A.before(u,"actionHandler",(g,f)=>{f[0].message.content="sus"}),A.before(G,"actionHandler",(g,f)=>{f[0].messages=f[0].messages.map(I=>(I.content="sus",I))}),console.log(`${d.name} delayed start successful.`),a&&w.open({content:`${d.name} start successful.`,source:c.Success})}catch{e<t?(console.warn(`${d.name} failed to start. Trying again in ${e}0s.`),a&&w.open({content:`${d.name} failed to start trying again in ${e}0s.`,source:c.Failed}),setTimeout(i,e*1e4)):(console.error(`${d.name} failed to start. Giving up.`),w.open({content:`${d.name} failed to start. Giving up.`,source:c.Failed}))}};setTimeout(()=>{i()},300)},onStop(){A.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(ae,{manifest:d,settings:e,hasToasts:!0,commands:null})}};Y(pe);
