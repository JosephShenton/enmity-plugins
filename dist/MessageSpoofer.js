function T(o){window.enmity.plugins.registerPlugin(o)}function M(o){return window.enmity.plugins.installPlugin(o)}function s(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const c=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function A(o){return window.enmity.patcher.create(o)}function P(o){return window.enmity.assets.getIDByName(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const _=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const g=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const{native:m}=window.enmity;function L(){m.reload()}m.version,m.build,m.device,m.version;var D=({pluginUrl:o})=>r.createElement(g,{label:"Update Plugin",trailing:g.Arrow,onPress:()=>{console.log(o),M(`${o}?${Math.floor(Math.random()*1001)}.js`),C.show({title:"Plugin Update",body:"Updating the plugin using this button will require you to reload Discord. Would you like to reload Discord now?",confirmText:"Yep!",cancelText:"Later",onConfirm:L})}}),U="MessageSpoofer",k="1.1.6",E="Change what people say.",R=[{name:"Marek (modified by spin)",id:"308440976723148800"}],x="#ff0069",B="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/MessageSpoofer.js",y={name:U,version:k,description:E,authors:R,color:x,sourceUrl:B};const N=s("getMessage","getMessages"),I=s("getChannel","getDMFromUserId"),d=A("message-spoofer"),p=s("openLazy"),V=s("_currentDispatchActionType","_subscriptions","_waitQueue"),z={...y,patches:[],onStart(){let o=!1;d.before(p,"openLazy",(u,[n,l])=>{l==="MessageLongPressActionSheet"&&n.then(t=>{let h=t.default;return t.default=function({message:a,user:S,channel:w,canAddNewReactions:f},F){let i=h({message:a,user:S,channel:w,canAddNewReactions:f},F);if(i.props.children.props.children.props.children[1][0].key=="69")return i;let b=i.props.children.props.children.props.children[1][0].type,v=r.createElement(b,{key:"69",onPressRow:W=>{p.hideActionSheet(),c.startEditMessage(`dirty-${w.id}`,a.id,a.content)},message:"Spoof edit",iconSource:P("ic_message_retry")});return i.props.children.props.children.props.children[1].unshift(v),i},t})}),d.before(c,"startEditMessage",(u,n,l)=>{n[0].startsWith("dirty-")?(n[0]=n[0].replace("dirty-",""),o=!0):o=!1}),d.before(c,"editMessage",(u,n,l)=>{if(o){const t=N.getMessage(n[0],n[1]);V.dispatch({type:"MESSAGE_UPDATE",message:{...t,...n[2],edited_timestamp:t.editedTimestamp,mention_roles:t.mentionRoles,mention_everyone:t.mentionEveryone,member:t.author,guild_id:I.getChannel(t.channel_id).guild_id},log_edit:!1}),n={}}})},onStop(){d.unpatchAll()},getSettingsPanel({settings:o}){return r.createElement(_,{settings:o},r.createElement(D,{pluginUrl:y.sourceUrl}))}};T(z);
