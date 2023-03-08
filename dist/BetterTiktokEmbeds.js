function $(e,t,i){window.enmity.settings.set(e,t,i)}function k(e,t,i){return window.enmity.settings.get(e,t,i)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const M=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const O=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const p=o.Text;o.TextInput,o.TouchableHighlight;const y=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const b=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const D=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const r=o.FormRow,f=o.FormSection;o.FormSelect,o.FormSubLabel;const P=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function z(e){window.enmity.plugins.registerPlugin(e)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const Y=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const _=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const v=window.enmity.modules.common.Storage,w=window.enmity.modules.common.Toasts,C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const L=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function j(e){return window.enmity.patcher.create(e)}const S={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function A(...e){return window.enmity.modules.bulk(...e)}function G(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const B=e=>{let t=0;for(let i in e)t++;return t};function a(e){return window.enmity.assets.getIDByName(e)}const c={Debug:a("debug"),Retry:a("ic_message_retry"),Failed:a("Small"),Cancel:a("ic_megaphone_nsfw_16px"),Add:a("add_white"),Delete:a("ic_message_delete"),Clear:a("ic_clear_all_24px"),Pencil:a("ic_pencil_24px"),Success:a("ic_selection_checked_24px"),Copy:a("toast_copy_link"),Open:a("ic_leave_stage"),Clipboard:a("pending-alert"),Initial:a("coffee"),Debug_Command:{Sent:a("ic_application_command_24px"),Clock:a("clock")},Settings:{Toasts:{Context:a("toast_image_saved"),Settings:a("ic_selection_checked_24px")},Self:a("friends_toast_icon"),Share:a("share"),Robot:a("ic_robot_24px"),Commands:a("ic_profile_badge_bot_commands"),Debug:a("ic_rulebook_16px")}},x=e=>{w.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},H=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[B(t)]=`${t[B(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function W(){try{let e=await v.getItem("device_list");if(e)return JSON.parse(e);let t=(await L.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=H(t);await v.setItem("device_list",i);let s=await v.getItem("device_list");return JSON.parse(s)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function J(e,t,i){let s=await W();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${_.InfoDictionaryManager.Version} (${_.InfoDictionaryManager.Build})
> **Software Version:** ${_.DCDDeviceManager.systemVersion}
> **Device:** ${s[_.DCDDeviceManager.device]}`}const{native:h}=window.enmity;function Z(){h.reload()}h.version,h.build,h.device,h.version;const q=G("transitionToGuild");async function K({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await L.get(t)).text;let s=i.match(/\d\.\d\.\d+/g),l=i.match(/patch\-\d\.\d\.\d+/g);return!s||!l?N(e.name,e.version):(s=s[0],l=l[0],s!=e.version?R(t,s,l.split("-")[1],e,!1):l!=e.build?R(t,s,l.split("-")[1],e,!0):N(e.name,e.version))}const R=(e,t,i,s,l)=>{const u=l?i:t;C.show({title:"Update found",body:`A newer ${l?"build":"version"} is available for ${s.name}. ${l?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${l?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>X(e,u,s,l)})},N=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),w.open({content:`${e} is on latest version (${t})`,source:c.Success})};async function X(e,t,i,s){window.enmity.plugins.installPlugin(e,({data:l})=>{l=="installed_plugin"||l=="overridden_plugin"?C.show({title:`Updated ${i.name}`,body:`Successfully updated to ${s?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{Z()}}):C.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{q.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${s?`b${t}`:`v${t}`}`)}})})}const E=window.enmity.modules.common.Components.General.Animated,[T,Q]=A(S.byProps("transitionToGuild"),S.byProps("setString")),m=I.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:d.Fonts.DISPLAY_NORMAL},header:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:d.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var ee=({manifest:e})=>{const t=n.useRef(new E.Value(1)).current,i=()=>{E.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{E.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},l=()=>{T.openURL("https://spin.rip/")},u={transform:[{scale:t}]};return n.createElement(n.Fragment,null,n.createElement(b,{style:m.container},n.createElement(y,{onPress:l,onPressIn:i,onPressOut:s},n.createElement(E.View,{style:[u]},n.createElement(M,{style:[m.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(b,{style:m.text_container},n.createElement(y,{onPress:()=>{T.openURL(e.sourceUrl)}},n.createElement(p,{style:[m.main_text,m.header]},e.name," ")),n.createElement(b,{style:{flexDirection:"row"}},n.createElement(p,{style:[m.main_text,m.sub_header]},"A plugin by"),n.createElement(y,{onPress:()=>{T.openURL("https://spin.rip/")}},n.createElement(p,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(b,{style:{flexDirection:"row"}},n.createElement(p,{style:[m.main_text,m.sub_header]},"Settings page by"),n.createElement(y,{onPress:()=>{T.openURL("https://github.com/acquitelol/")}},n.createElement(p,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(b,null,n.createElement(y,{style:{flexDirection:"row"},onPress:()=>{Q.setString(`**${e.name}** v${e.version}`),x("plugin name and version")}},n.createElement(p,{style:[m.main_text,m.sub_header]},"Version:"),n.createElement(p,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[te,V]=A(S.byProps("transitionToGuild"),S.byProps("setString")),g=I.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:d.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:d.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var ne=({manifest:e,settings:t,hasToasts:i,children:s,commands:l})=>n.createElement(O,null,n.createElement(ee,{manifest:e}),s,l&&n.createElement(f,{title:"Plugin Commands"},l.map(u=>n.createElement(r,{label:`/${u.name}`,subLabel:u.description,leading:n.createElement(r.Icon,{style:g.icon,source:c.Settings.Commands}),trailing:r.Arrow,onPress:function(){V.setString(`/${u.name}`),x(`the command ${u.name}`)}}))),n.createElement(f,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(r,{label:"Initialization Toasts",leading:n.createElement(r.Icon,{style:g.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(P,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),w.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Success})}})}),n.createElement(D,null)),n.createElement(r,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(r.Icon,{style:g.icon,source:c.Settings.Debug}),trailing:r.Arrow,onPress:async function(){V.setString(await J(e.name,e.version,e.build)),x("plugin debug information")}}),n.createElement(D,null),n.createElement(r,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(r.Icon,{style:g.icon,source:c.Delete}),trailing:r.Arrow,onPress:async function(){await v.removeItem("device_list"),w.open({content:"Cleared device list storage.",source:c.Success})}})),n.createElement(f,{title:"Source"},n.createElement(r,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(r.Icon,{style:g.icon,source:c.Copy}),trailing:r.Arrow,onPress:()=>{K({manifest:e})}}),n.createElement(D,null),n.createElement(r,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(r.Icon,{style:g.icon,source:c.Open}),trailing:r.Arrow,onPress:()=>{te.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(r,{style:g.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),oe="BetterTiktokEmbeds",ie="1.2.6",se="patch-1.0.14",ae="Convert TikTok links to vm.dstn.to links so the TikTok embed is better and can be played.",le=[{name:"spin",id:"308440976723148800"}],re="#ff0069",me="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/BetterTiktokEmbeds.js",F={name:oe,version:ie,build:se,description:ae,authors:le,color:re,sourceUrl:me};const U=j(F.name),ce={...F,onStart(){try{k("_tiktok","_type",!1)||$("_tiktok","_type","tiktxk.com"),U.before(Y,"sendMessage",(e,t,i)=>{const s=t[1].content;!s.match(/http(s)?:\/\/(\w+.)?tiktok.com\/(@[a-zA-Z0-9_.]{2,24}\/video\/\d+|(\w{1}\/)?[a-zA-Z0-9_.-]{8,12})(\/)?/gim)||(t[1].content=s.replace(/http(s)?:\/\/(\w+.)?tiktok.com/gim,`https://${k("_tiktok","_type",!1)}`))})}catch(e){console.log("[ BetterTiktokEmbeds Error ]",e)}},onStop(){U.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(ne,{manifest:F,settings:e,hasToasts:!1,commands:null},n.createElement(f,{title:"Plugin Settings"},n.createElement(r,{label:"Use vxtiktok.com instead of vm.dstn.to",leading:n.createElement(r.Icon,{source:c.Copy}),trailing:n.createElement(P,{value:e.getBoolean("_dstn",!1),onValueChange:()=>{try{e.toggle("_dstn",!1),e.getBoolean("_dstn",!1)?$("_tiktok","_type","vt.vxtiktok.com"):$("_tiktok","_type","vm.dstn.to"),w.open({content:`Switched to ${k("_tiktok","_type",!1)}.`,source:c.Success})}catch(t){console.log("[ BetterTiktokEmbeds Error ]",t),w.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})})))}};z(ce);
