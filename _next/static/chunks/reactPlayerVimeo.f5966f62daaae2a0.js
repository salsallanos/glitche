(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3743],{300:function(e,t,r){var o,s,l=Object.create,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,n=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__copyProps=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))h.call(e,s)||s===r||i(e,s,{get:()=>t[s],enumerable:!(o=a(t,s))||o.enumerable});return e},__publicField=(e,t,r)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>Vimeo}),e.exports=__copyProps(i({},"__esModule",{value:!0}),u);var c=(s=null!=(o=r(2265))?l(n(o)):{},__copyProps(o&&o.__esModule?s:i(s,"default",{value:o,enumerable:!0}),o)),d=r(4117),y=r(5087);let cleanUrl=e=>e.replace("/manage/videos","");let Vimeo=class Vimeo extends c.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",d.callPlayer),__publicField(this,"duration",null),__publicField(this,"currentTime",null),__publicField(this,"secondsLoaded",null),__publicField(this,"mute",()=>{this.setMuted(!0)}),__publicField(this,"unmute",()=>{this.setMuted(!1)}),__publicField(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,d.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(t=>{if(!this.container)return;let{playerOptions:r,title:o}=this.props.config;this.player=new t.Player(this.container,{url:cleanUrl(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...r}),this.player.ready().then(()=>{let e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",o&&(e.title=o)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",e=>this.props.onSeek(e.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:e})=>{this.currentTime=e}),this.player.on("progress",({seconds:e})=>{this.secondsLoaded=e}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",e=>this.props.onPlaybackRateChange(e.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){let e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let{display:e}=this.props;return c.default.createElement("div",{key:this.props.url,ref:this.ref,style:{width:"100%",height:"100%",overflow:"hidden",display:e}})}};__publicField(Vimeo,"displayName","Vimeo"),__publicField(Vimeo,"canPlay",y.canPlay.vimeo),__publicField(Vimeo,"forceLoad",!0)}}]);