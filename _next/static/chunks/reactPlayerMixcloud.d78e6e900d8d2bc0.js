(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4667],{2996:function(e,t,r){var l,i,o=Object.create,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,n=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__copyProps=(e,t,r,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))u.call(e,i)||i===r||s(e,i,{get:()=>t[i],enumerable:!(l=p(t,i))||l.enumerable});return e},__publicField=(e,t,r)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>Mixcloud}),e.exports=__copyProps(s({},"__esModule",{value:!0}),c);var d=(i=null!=(l=r(2265))?o(n(l)):{},__copyProps(l&&l.__esModule?i:s(i,"default",{value:l,enumerable:!0}),l)),h=r(4117),_=r(5087);let Mixcloud=class Mixcloud extends d.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",h.callPlayer),__publicField(this,"duration",null),__publicField(this,"currentTime",null),__publicField(this,"secondsLoaded",null),__publicField(this,"mute",()=>{}),__publicField(this,"unmute",()=>{}),__publicField(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,h.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((e,t)=>{this.currentTime=e,this.duration=t}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){let{url:e,config:t}=this.props,r=e.match(_.MATCH_URL_MIXCLOUD)[1],l=(0,h.queryString)({...t.options,feed:`/${r}/`});return d.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${l}`,frameBorder:"0",allow:"autoplay"})}};__publicField(Mixcloud,"displayName","Mixcloud"),__publicField(Mixcloud,"canPlay",_.canPlay.mixcloud),__publicField(Mixcloud,"loopOnEnded",!0)}}]);