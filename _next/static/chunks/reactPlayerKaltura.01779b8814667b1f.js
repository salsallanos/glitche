(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{7321:function(e,t,r){var l,a,o=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__copyProps=(e,t,r,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of n(t))u.call(e,a)||a===r||s(e,a,{get:()=>t[a],enumerable:!(l=i(t,a))||l.enumerable});return e},__publicField=(e,t,r)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>Kaltura}),e.exports=__copyProps(s({},"__esModule",{value:!0}),c);var d=(a=null!=(l=r(2265))?o(p(l)):{},__copyProps(l&&l.__esModule?a:s(a,"default",{value:l,enumerable:!0}),l)),h=r(4117),y=r(5087);let Kaltura=class Kaltura extends d.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",h.callPlayer),__publicField(this,"duration",null),__publicField(this,"currentTime",null),__publicField(this,"secondsLoaded",null),__publicField(this,"mute",()=>{this.callPlayer("mute")}),__publicField(this,"unmute",()=>{this.callPlayer("unmute")}),__publicField(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,h.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return d.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}};__publicField(Kaltura,"displayName","Kaltura"),__publicField(Kaltura,"canPlay",y.canPlay.kaltura)}}]);